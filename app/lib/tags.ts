export const tags = [
  {
    name: "Behind The Scenes",
    color: "#e11d48",
  },
  {
    name: "Game Cup",
    color: "#f59e0b",
  },
  {
    name: "Spotlights",
    color: "#7e22ce",
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
