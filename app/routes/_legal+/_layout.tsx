import Footer from "~/components/layout/footer";
import { Outlet } from "react-router";
import LegalHero from "~/routes/_legal+/components/legal-hero";
import { TypographyProse } from "~/components/ui/typography";
import type { MetaFunction } from "react-router";
import ogFacebook from "~/assets/images/og-game-cup-facebook.png";
import ogTwitter from "~/assets/images/og-game-cup-twitter.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks Legal" },
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

export default function PageLayout() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <LegalHero />
      <TypographyProse>
        <Outlet />
      </TypographyProse>
      <Footer />
    </div>
  );
}
