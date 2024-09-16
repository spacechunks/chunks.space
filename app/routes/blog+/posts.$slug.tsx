import { json, type LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ghostApi } from "~/service/ghost.server";
import { ensureHttps, getTwoLettersOfName } from "~/lib/utils";
import {
  TypographyH1,
  TypographyP,
  TypographyProse,
} from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import OtherPosts from "~/routes/blog+/components/other-posts";
import { PostOrPage } from "@tryghost/content-api";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug || "";

  const post = await ghostApi.posts.read(
    { slug },
    {
      fields: [
        "id",
        "slug",
        "title",
        "feature_image",
        "published_at",
        "meta_description",
        "html",
        "primary_tag",
        "reading_time",
        "meta_title",
        "og_image",
        "og_title",
        "og_description",
        "twitter_image",
        "twitter_title",
        "twitter_description",
        "custom_excerpt",
      ],
      include: ["authors", "tags"],
    },
  );

  const posts = await ghostApi.posts.browse({
    limit: "3",
    fields: [
      "id",
      "slug",
      "title",
      "feature_image",
      "published_at",
      "meta_description",
      "primary_tag",
      "reading_time",
    ],
    include: ["tags"],
  });

  return json({ post, posts });
}

/*

twitter:image
Not Provided
A URL to an image file or to a dynamically generated image for Twitter link previews. Images must be less than 5 MB in size. JPG,PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used.SVG is not supported. og:image is used as a fallback.

<meta property="twitter:image" content="Twitter link preview image URL">
twitter:card
Not Provided
A card type for Twitter link previews. One of summary, summary_large_image, app, or player.

<meta property="twitter:card" content="summary_large_image">
twitter:title
Not Provided
A title for Twitter link previews with 70 characters max. og:title is used as a fallback.

<meta property="twitter:title" content="Twitter link preview title">
twitter:description
Not Provided
A description for Twitter link previews with 200 characters max. og:description is used as a fallback.
 */

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { post } = data as { post: PostOrPage };
  const ogFacebook = ensureHttps(post.og_image || post.feature_image!!);
  const ogTwitter = ensureHttps(post.twitter_image || post.feature_image!!);
  return [
    { title: post.meta_title || post.title },
    {
      name: "description",
      content: post.meta_description || post.custom_excerpt,
    },
    { name: "theme-color", content: "#3D365C" },
    { property: "og:title", content: post.og_title || post.title },
    {
      property: "og:description",
      content: post.og_description || post.meta_description,
    },
    { property: "og:image", content: ogFacebook },
    { property: "og:image:alt", content: post.title },
    {
      property: "og:url",
      content: `https://chunks.space/blog/posts/${post.slug}`,
    },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@spacechunksteam" },
    { name: "twitter:title", content: post.twitter_title || post.title },
    {
      name: "twitter:description",
      content: post.twitter_description || post.meta_description,
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
        <TypographyH1>{post.title}</TypographyH1>
        <TypographyP>{post.meta_description}</TypographyP>
        <PostInfo post={post} />
        <div className="mt-4">
          {post.authors?.map((author) => (
            <div key={author.id} className="flex items-center gap-2">
              <Avatar className="h-6 w-6 rounded">
                <AvatarImage src={ensureHttps(author.profile_image || "")} />
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
        src={ensureHttps(post.feature_image || "")}
        alt="post"
      />

      <div className="prose mt-8 flex h-full w-full flex-col items-center justify-center">
        <TypographyProse>
          <div
            dangerouslySetInnerHTML={{
              __html: post.html?.replaceAll("http://", "https://") || "",
            }}
          />
        </TypographyProse>
      </div>

      <OtherPosts title="All Articles from the Universe" posts={posts} />
    </div>
  );
}
