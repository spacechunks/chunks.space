import { ensureHttps } from "~/lib/utils";
import { TypographyLarge, TypographyP } from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import { Link } from "@remix-run/react";
import { FlameIcon } from "lucide-react";
import { PostMeta } from "~/service/posts.type";

export default function Post({
  post,
  recent,
}: {
  post: PostMeta;
  recent?: boolean;
}) {
  return (
    <Link to={`/blog/posts/${post.slug}`} className="relative space-y-4">
      <img
        className="aspect-video rounded-lg"
        alt="featured post"
        src={ensureHttps(post.frontmatter.featureImage || "")}
      />
      {recent && (
        <div className="absolute -top-1 left-3 flex items-center gap-2 rounded bg-[#FF2E00] px-2 py-0.5 text-sm font-bold uppercase text-white">
          <FlameIcon className="h-4 w-4" />
          <span>Recent</span>
        </div>
      )}
      <TypographyLarge className="text-xl font-bold">
        {post.frontmatter.title}
      </TypographyLarge>
      <TypographyP>{post.frontmatter.description}</TypographyP>
      <PostInfo post={post} />
    </Link>
  );
}
