import { z } from "zod";

const schema = z
  .object({
    NODE_ENV: z.enum(["production", "development", "test"] as const),
    CONTACT_DISCORD_WEBHOOK: z.string(),
    CLOUDFLARE_TURNSTILE_SITE_KEY: z.string().optional(),
    CLOUDFLARE_TURNSTILE_SECRET_KEY: z.string().optional(),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV !== "production") {
      return;
    }

    if (!env.CLOUDFLARE_TURNSTILE_SITE_KEY) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required in production",
        path: ["CLOUDFLARE_TURNSTILE_SITE_KEY"],
      });
    }

    if (!env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required in production",
        path: ["CLOUDFLARE_TURNSTILE_SECRET_KEY"],
      });
    }
  });

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

export function init() {
  const parsed = schema.safeParse(process.env);

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );

    throw new Error("Invalid environment variables");
  }
}

/**
 * This is used in both `entry.server.ts` and `root.tsx` to ensure that
 * the environment variables are set and globally available before the app is
 * started.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getEnv() {
  return {
    MODE: process.env.NODE_ENV,
    SENTRY_DSN: process.env.SENTRY_DSN,
    ALLOW_INDEXING: process.env.ALLOW_INDEXING,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
