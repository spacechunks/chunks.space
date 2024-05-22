import { z } from "zod";

export const discordGuildSchema = z.object({
  id: z.string(),
  name: z.string(),
  instant_invite: z.string(),
  channels: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      position: z.number(),
    }),
  ),
  members: z.array(
    z.object({
      id: z.string(),
      username: z.string(),
      discriminator: z.string(),
      avatar: z.string().nullable(),
      status: z.string(),
      avatar_url: z.string(),
    }),
  ),
  presence_count: z.number(),
});
