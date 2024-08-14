import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ghostApi } from "~/service/ghost.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug || "";

  const post = await ghostApi.posts.read({ slug }, { include: "authors" });

  console.log(post);

  return json({ post });
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-16">
      <img
        className="h-full max-h-80 w-full rounded-lg object-cover"
        src={post.feature_image || ""}
        alt="post"
      />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: post.html || "" }} />
        </div>
      </div>
    </div>
  );
}
