import { ActionFunctionArgs, MetaFunction } from "react-router";
import IndexHero from "~/routes/_index+/components/index-hero";
import Footer from "~/components/layout/footer";
import AboutSection from "~/routes/_index+/components/sections/about-section";
import GameCupSection from "~/routes/_index+/components/sections/game-cup-section";
import TeamSection from "~/routes/_index+/components/sections/team-section";
import FaqSection from "~/routes/_index+/components/sections/faq-section";
import ContactSection from "~/routes/_index+/components/sections/contact-section";
import ogFacebook from "~/assets/images/og-facebook.png";
import ogTwitter from "~/assets/images/og-twitter.png";
import { parseWithZod } from "@conform-to/zod";
import { contactSchema } from "~/service/contact.schema";
import { logContactForm } from "~/service/contact.server";
import { useLoaderData } from "react-router";
import BlogSection from "./components/sections/blog-section";
import { getPostsWithLimit } from "~/service/posts.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks" },
    {
      name: "description",
      content:
        "Space Chunks is a team of developers, designers, and event organizers who are passionate about creating unique experiences for Minecraft. Our goal is to have fun and create something that we can all be proud of.",
    },
    {
      name: "theme-color",
      content: "#3D365C",
    },
    // Facebook Open Graph Meta Tags
    { property: "og:title", content: "Space Chunks" },
    {
      property: "og:description",
      content:
        "Space Chunks is a team of developers, designers, and event organizers who are passionate about creating unique experiences for Minecraft. Our goal is to have fun and create something that we can all be proud of.",
    },
    { property: "og:image", content: ogFacebook },
    { property: "og:image:alt", content: "Space Chunks" },
    { property: "og:url", content: "https://chunks.space" },
    { property: "og:type", content: "website" },
    // Twitter Card Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@spacechunksteam" },
    { name: "twitter:title", content: "Space Chunks" },
    {
      name: "twitter:description",
      content:
        "Space Chunks is a team of developers, designers, and event organizers who are passionate about creating unique experiences for Minecraft. Our goal is to have fun and create something that we can all be proud of.",
    },
    { name: "twitter:image", content: ogTwitter },
    // Discord Meta Tags
    { property: "og:site_name", content: "Space Chunks" },
    // General Meta Tags (these get picked up by various platforms including Discord)
    { property: "og:locale", content: "en_US" },
  ];
};

export async function loader() {
  const posts = await getPostsWithLimit(3);
  return { posts };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const submission = parseWithZod(formData, { schema: contactSchema });

  if (submission.status !== "success") {
    return Response.json(
      { result: submission.reply() },
      { status: submission.status === "error" ? 400 : 200 },
    );
  }

  await logContactForm(submission.value);

  return { result: submission.reply() };
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-20 bg-white">
      <IndexHero />
      <AboutSection />
      <BlogSection posts={posts} />
      <GameCupSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
