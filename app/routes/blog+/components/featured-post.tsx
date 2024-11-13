import { ensureHttps } from "~/lib/utils";
import { TypographyH1, TypographyP } from "~/components/ui/typography";
import PostInfo from "~/routes/blog+/components/post-info";
import { Link } from "@remix-run/react";
import { PostMeta } from "~/service/posts.type";

export default function FeaturedPost({
  featuredPost,
}: {
  featuredPost: PostMeta;
}) {
  return (
    <Link
      to={`/blog/posts/${featuredPost.slug}`}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
    >
      <img
        className="aspect-video rounded-lg"
        alt="featured post"
        src={ensureHttps(featuredPost.frontmatter.featureImage || "")}
      />
      <div className="flex flex-col">
        <span className="mb-4 font-bold uppercase text-mystical-normal">
          Spotlight
        </span>
        <TypographyH1>{featuredPost.frontmatter.title}</TypographyH1>
        <TypographyP>{featuredPost.frontmatter.description}</TypographyP>
        <PostInfo post={featuredPost} />
      </div>
    </Link>
  );
}
