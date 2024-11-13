export const tags = [
  {
    name: "react",
    color: "#61dafb",
  },
  {
    name: "nextjs",
    color: "#06b6d4",
  },
];

export type TagMeta = (typeof tags)[number];

export function getTagColor(tag: string) {
  const tagMeta = getTagMeta(tag);
  return tagMeta?.color;
}

export function getTagMeta(tag: string) {
  const tagIndex = tags.findIndex((currentTag) => currentTag.name === tag);
  if (tagIndex === -1) {
    return undefined;
  }
  return tags[tagIndex];
}
