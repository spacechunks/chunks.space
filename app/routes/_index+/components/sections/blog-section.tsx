import { PostOrPage } from "@tryghost/content-api";
import Section from "~/components/layout/section";
import OtherPosts from "~/routes/blog+/components/other-posts";

export default function BlogSection({ posts }: { posts: PostOrPage[] }) {
  return (
    <Section id="posts">
      <OtherPosts title="Expore Articles from the Universe" posts={posts} />
    </Section>
  );
}
