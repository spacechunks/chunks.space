import { TypographySmall } from "~/components/ui/typography";
import { ClockIcon } from "lucide-react";
import { PostMeta } from "~/service/posts.type";
import { getTagColor } from "~/lib/tags";

export default function PostInfo({ post }: { post: PostMeta }) {
  const publishedAt = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.frontmatter.published || ""));
  const tagColor = getTagColor(post.frontmatter.primaryTag);

  return (
    <div className="mt-6 flex items-center gap-3">
      <TypographySmall
        style={{
          color: tagColor || "black",
        }}
        className="font-semibold uppercase"
      >
        {post.frontmatter.primaryTag || "unknown"}
      </TypographySmall>
      <span className="h-2 w-2 aspect-square rounded-full bg-mystical-subtle" />
      <span className="text-mystical-subtle">{publishedAt}</span>
      <div className="flex items-center gap-1 text-mystical-subtle">
        <ClockIcon className="h-4 w-4" />
        <span>{post.frontmatter.readingTime}min</span>
      </div>
    </div>
  );
}
