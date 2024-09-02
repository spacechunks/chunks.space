import { PostOrPage } from "@tryghost/content-api";
import { TypographyH2 } from "~/components/ui/typography";
import Post from "~/routes/blog+/components/post";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export default function OtherPosts({
  title,
  posts,
}: {
  title: string;
  posts: PostOrPage[];
}) {
  return (
    <div className="space-y-6">
      <TypographyH2 className="text-4xl font-bold">{title}</TypographyH2>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((currentPost) => (
          <li key={currentPost.id}>
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
  );
}
