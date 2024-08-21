import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ghostApi } from "~/service/ghost.server";
import { ensureHttps } from "~/lib/utils";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyProse,
} from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import { Button } from "~/components/ui/button";
import Post from "~/routes/blog+/components/post";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug || "";

  const post = await ghostApi.posts.read(
    { slug },
    { include: ["authors", "tags"] },
  );

  const posts = await ghostApi.posts.browse({
    limit: "3",
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
              <img
                className="rounded-kg w-lg h-6 object-cover"
                src={ensureHttps(author.profile_image || "")}
                alt="author"
              />
              <span>{author.name}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        className="h-full w-full rounded-lg object-cover"
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

      <div className="space-y-6">
        <TypographyH2 className="text-4xl font-bold">
          All Articles from the Universe
        </TypographyH2>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((currentPost) => (
            <li key={post.id}>
              <Post post={currentPost} />
            </li>
          ))}
        </ul>

        <div className="flex w-full items-center justify-center">
          <Button size="big" variant="tertiary" asChild>
            <Link to="/blog/">Show all articles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
