import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ghostApi } from "~/service/ghost.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = await ghostApi.posts.browse({
    limit: "all",
    fields: ["id", "slug", "title"],
  });
  console.log(posts);

  return json({ posts });
}

export default function BlogPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-4">
      <h1 className="text-xl">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
