import { type LoaderFunctionArgs, MetaFunction } from "react-router";
import { Outlet, useLoaderData } from "react-router";
import { ensureHttps, getTwoLettersOfName } from "~/lib/utils";
import {
  TypographyH1,
  TypographyP,
  TypographyProse,
} from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import OtherPosts from "~/routes/blog+/components/other-posts";
import { getPostBySlug, getPostsWithLimit } from "~/service/posts.server";
import { PostMeta } from "~/service/posts.type";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  url.pathname = url.pathname.replace(/\/$/, "");
  const slug = url.pathname.replace(/\/blog\/posts\//, "");

  const post = await getPostBySlug(slug);
  const posts = await getPostsWithLimit(3);

  return { post, posts };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { post } = data as { post: PostMeta };
  const ogFacebook = ensureHttps(
    post.frontmatter.ogImage || post.frontmatter.featureImage!!,
  );
  const ogTwitter = ensureHttps(
    post.frontmatter.twitterImage || post.frontmatter.featureImage!!,
  );

  return [
    { title: post.frontmatter.title },
    {
      name: "description",
      content: post.frontmatter.description,
    },
    { name: "theme-color", content: "#3D365C" },
    { property: "og:title", content: post.frontmatter.title },
    {
      property: "og:description",
      content: post.frontmatter.description,
    },
    { property: "og:image", content: ogFacebook },
    { property: "og:image:alt", content: post.frontmatter.title },
    {
      property: "og:url",
      content: `https://chunks.space/blog/posts/${post.slug}`,
    },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@spacechunksteam" },
    { name: "twitter:title", content: post.frontmatter.title },
    {
      name: "twitter:description",
      content: post.frontmatter.description,
    },
    { name: "twitter:image", content: ogTwitter },
    { property: "og:site_name", content: "Space Chunks" },
    { property: "og:locale", content: "en_US" },
  ];
};

export default function PostPage() {
  const { post, posts } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full max-w-2xl flex-col">
        <TypographyH1>{post.frontmatter.title}</TypographyH1>
        <TypographyP>{post.frontmatter.description}</TypographyP>
        <PostInfo post={post} />
        <div className="mt-4">
          {post.frontmatter.authors?.map((author) => (
            <div key={author.name} className="flex items-center gap-2">
              <Avatar className="h-6 w-6 rounded">
                <AvatarImage src={ensureHttps(author.image || "")} />
                <AvatarFallback className="rounded text-xs">
                  {getTwoLettersOfName(author.name || "unknown")}
                </AvatarFallback>
              </Avatar>
              <span>{author.name}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        className="h-full w-full rounded-xl object-cover"
        src={ensureHttps(post.frontmatter.featureImage || "")}
        alt="post"
      />

      <div className="prose mt-8 flex h-full w-full flex-col items-center justify-center">
        <TypographyProse>
          <Outlet />
        </TypographyProse>
      </div>

      <OtherPosts title="All Articles from the Universe" posts={posts} />
    </div>
  );
}
