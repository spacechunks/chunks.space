declare module "*.mdx" {
  import type { ReactElement } from "react";
  import type { Frontmatter } from "~/service/posts.type";

  export const frontmatter: Frontmatter;

  const MDXComponent: (props: Record<string, unknown>) => ReactElement;
  export default MDXComponent;
}
