import Section from "~/components/layout/section";
import OtherPosts from "~/routes/blog+/components/other-posts";
import { PostMeta } from "~/service/posts.type";

export default function BlogSection({ posts }: { posts: PostMeta[] }) {
  return (
    <Section id="posts">
      <OtherPosts title="Expore Articles from the Universe" posts={posts} />
    </Section>
  );
}
