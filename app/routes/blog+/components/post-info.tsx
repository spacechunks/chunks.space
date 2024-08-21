import { PostOrPage } from "@tryghost/content-api";
import { TypographySmall } from "~/components/ui/typography";
import { ClockIcon } from "lucide-react";

export default function PostInfo({ post }: { post: PostOrPage }) {
  const publishedAt = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.published_at || ""));

  return (
    <div className="mt-6 flex items-center gap-3">
      <TypographySmall
        style={{
          color: post.primary_tag?.accent_color || "black",
        }}
        className="font-semibold uppercase"
      >
        {post.primary_tag?.name || "unknown"}
      </TypographySmall>
      <span className="h-2 w-2 rounded-full bg-mystical-subtle" />
      <span className="text-mystical-subtle">{publishedAt}</span>
      <div className="flex items-center gap-1 text-mystical-subtle">
        <ClockIcon className="h-4 w-4" />
        <span>{post.reading_time}min</span>
      </div>
    </div>
  );
}
