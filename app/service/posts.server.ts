import { Frontmatter, PostMeta } from "~/service/posts.type";
import { getTagMeta, TagMeta } from "~/lib/tags";

export const getPosts = async (): Promise<PostMeta[]> => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/blog+/posts+/*.mdx",
    { eager: true },
  );
  // @ts-ignore
  const build = await import("virtual:react-router/server-build");
  const posts = Object.entries(modules).map(([file, post]) => {
    let id = file.replace("../", "").replace(/\.mdx$/, "");
    let slug = build.routes[id].path;
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });
  return sortBy(posts, (post) => post.frontmatter.published, "desc");
};

export const getPostsByTags = async (tags: string[]): Promise<PostMeta[]> => {
  const posts = await getPosts();
  const lowerCaseTags = tags
    .map((tag) => tag.toLowerCase())
    .filter((tag) => tag !== "");
  const tagsEmpty = lowerCaseTags.length === 0;
  return posts.filter(
    (post) =>
      tagsEmpty ||
      lowerCaseTags.includes(post.frontmatter.primaryTag.toLowerCase()),
  );
};

export const getTags = async (): Promise<TagMeta[]> => {
  const posts = await getPosts();
  return (
    posts
      .map((post) => getTagMeta(post.frontmatter.primaryTag))
      .filter((tagMeta) => tagMeta !== undefined)
      // remove duplicates
      .filter((tagMeta, index, self) => {
        return self.findIndex((t) => t.name === tagMeta.name) === index;
      })
  );
};

export const getPostBySlug = async (slug: string): Promise<PostMeta> => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    throw new Error(`No post found for slug ${slug}`);
  }
  return post;
};

export const getPostsWithLimit = async (limit: number): Promise<PostMeta[]> => {
  const posts = await getPosts();
  return posts.slice(0, limit);
};

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc",
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
