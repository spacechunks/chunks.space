import { Await, useRouteLoaderData } from "@remix-run/react";
import type { loader as rootLoader } from "~/root";
import { Button } from "~/components/ui/button";
import DiscordIcon from "~/components/icons/discord";
import { Suspense } from "react";

export default function DiscordButton() {
  const data = useRouteLoaderData<typeof rootLoader>("root");
  return (
    <Button variant="mystical" asChild>
      <a
        href="https://discord.chunks.space"
        className="flex cursor-pointer items-center gap-3"
        target="_blank"
      >
        <DiscordIcon className="h-4 w-auto" />
        <span className="uppercase">Discord</span>
        <Suspense fallback="0">
          <Await resolve={data?.guildData}>
            {(guildData) => (
              <span className="text-[#EBE7FF]/50">
                {guildData?.presence_count ?? 0}
              </span>
            )}
          </Await>
        </Suspense>
      </a>
    </Button>
  );
}
