import { json, type LoaderFunctionArgs } from "@remix-run/node";
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
