import { PostOrPage } from "@tryghost/content-api";
import { ensureHttps } from "~/lib/utils";
import { TypographyLarge, TypographyP } from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import { Link } from "@remix-run/react";
import { FlameIcon } from "lucide-react";

export default function Post({
  post,
  recent,
}: {
  post: PostOrPage;
  recent?: boolean;
}) {
  return (
    <Link to={`/blog/posts/${post.slug}`} className="relative space-y-4">
      <img
        className="aspect-video rounded-lg"
        alt="featured post"
        src={ensureHttps(post.feature_image || "")}
      />
      {recent && (
        <div className="absolute -top-1 left-3 flex items-center gap-2 rounded bg-[#FF2E00] px-2 py-0.5 text-sm font-bold uppercase text-white">
          <FlameIcon className="h-4 w-4" />
          <span>Recent</span>
        </div>
      )}
      <TypographyLarge className="text-xl font-bold">
        {post.title}
      </TypographyLarge>
      <TypographyP>{post.meta_description}</TypographyP>
      <PostInfo post={post} />
    </Link>
  );
}
