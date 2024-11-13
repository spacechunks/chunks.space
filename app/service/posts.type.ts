export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  featured: boolean;
  primaryTag: string;
  readingTime: number;
  featureImage: string;
  ogImage?: string;
  twitterImage?: string;
  authors: {
    name: string;
    image: string;
  }[];
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};
