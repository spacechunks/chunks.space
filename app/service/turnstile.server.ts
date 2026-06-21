import * as process from "node:process";

const TURNSTILE_SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_ACTION = "contact";
const TEST_SITE_KEY = "1x00000000000000000000AA";
const TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

type TurnstileSiteverifyResponse = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export function getTurnstileSiteKey() {
  return process.env.CLOUDFLARE_TURNSTILE_SITE_KEY ?? TEST_SITE_KEY;
}

function getTurnstileSecretKey() {
  return process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY ?? TEST_SECRET_KEY;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  return (
    request.headers.get("cf-connecting-ip") ??
    forwardedFor?.split(",")[0]?.trim() ??
    null
  );
}

export async function verifyTurnstileToken(request: Request, token: string) {
  const secret = getTurnstileSecretKey();

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  const remoteIp = getClientIp(request);

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      console.error("Turnstile validation request failed:", response.status);
      return false;
    }

    const result = (await response.json()) as TurnstileSiteverifyResponse;

    if (!result.success) {
      console.warn("Turnstile validation failed:", result["error-codes"] ?? []);
      return false;
    }

    if (secret !== TEST_SECRET_KEY && result.action !== TURNSTILE_ACTION) {
      console.warn("Turnstile action mismatch:", result.action);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return false;
  }
}
