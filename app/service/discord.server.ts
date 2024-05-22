import { LRUCache } from "lru-cache";
import { Cache, CacheEntry, cachified, totalTtl } from "@epic-web/cachified";
import { discordGuildSchema } from "~/service/discord.schema";

const GUILD_CACHE_TTL = 60 * 1000; // 1 minute

/* lru cache is not part of this package but a simple non-persistent cache */
const lruInstance = new LRUCache<string, CacheEntry>({ max: 1000 });

const lru: Cache = {
  set(key, value) {
    const ttl = totalTtl(value?.metadata);
    return lruInstance.set(key, value, {
      ttl: ttl === Infinity ? undefined : ttl,
      start: value?.metadata?.createdTime,
    });
  },
  get(key) {
    return lruInstance.get(key);
  },
  delete(key) {
    return lruInstance.delete(key);
  },
};

export function getDiscordGuildInfo() {
  return cachified({
    key: "discord-guild-info",
    cache: lru,
    getFreshValue: async () => {
      const response = await fetch(
        "https://discord.com/api/guilds/1124663681985290303/widget.json",
      );
      const data = await response.json();
      return discordGuildSchema.safeParse(data).data;
    },
    ttl: GUILD_CACHE_TTL,
  });
}
