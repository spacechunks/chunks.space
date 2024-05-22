import { Await, Link, useRouteLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import logoImage from "~/assets/images/logo.png";
import { Suspense } from "react";
import { type loader as rootLoader } from "~/root";
import DiscordIcon from "~/components/icons/discord";
import GithubIcon from "~/components/icons/github";

const links = [
  { name: "About", to: "#about" },
  { name: "Game Cup", to: "#game-cup" },
  { name: "Team", to: "#team" },
  { name: "FAQ", to: "#faq" },
  { name: "Contact", to: "#contact" },
];

export default function Header() {
  const data = useRouteLoaderData<typeof rootLoader>("root");

  return (
    <header className="container hidden items-center justify-between px-12 text-white md:flex">
      <div className="flex items-center gap-10">
        <img className="h-12 w-auto" src={logoImage} alt="logo" />
        {links.map((link) => (
          <Link to={link.to} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/spacechunks" target="_blank">
          <GithubIcon className="text-ethereal-normal h-6 w-auto" />
        </a>
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
      </div>
    </header>
  );
}
