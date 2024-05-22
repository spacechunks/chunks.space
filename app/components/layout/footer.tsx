import { Link } from "@remix-run/react";
import Section from "~/components/layout/section";
import { TypographySmall } from "~/components/ui/typography";
import DiscordButton from "~/components/ui/discord-button";
import { Button } from "~/components/ui/button";
import textLogo from "~/assets/images/text-logo.png";

const navigationLinks = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Game Cup",
    href: "/#game-cup",
  },
  {
    title: "Team",
    href: "/#team",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
];

const workingOnLinks = [
  {
    title: "Baltic Galaxy",
    href: "https://baltic-galaxy.de",
  },
  {
    title: "simplecloud.app",
    href: "https://simplecloud.app",
  },
  {
    title: "strela.dev",
    href: "https://strela.dev",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D182C]">
      <div className="h-12 rounded-b-full bg-white" />
      <Section className="flex flex-row justify-between py-16">
        <div className="flex justify-between gap-16">
          <img
            src={textLogo}
            alt="Space Chunks Logo"
            className="h-full max-h-[12rem] w-auto"
          />
          <div className="text-ethereal-subtle flex gap-8 uppercase">
            <ul className="flex flex-col gap-2">
              <TypographySmall className="text-ethereal-normal font-bold">
                Navigation
              </TypographySmall>
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href}>
                    <TypographySmall className="font-bold">
                      {link.title}
                    </TypographySmall>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-ethereal-subtle flex gap-8 uppercase">
            <ul className="flex flex-col gap-2">
              <TypographySmall className="text-ethereal-normal font-bold">
                Working on
              </TypographySmall>
              {workingOnLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href}>
                    <TypographySmall className="font-bold">
                      {link.title}
                    </TypographySmall>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <DiscordButton />
        </div>
      </Section>
      <div className="bg-[#171323] uppercase">
        <Section>
          <div className="flex flex-col gap-2">
            <TypographySmall className="text-ethereal-subtle font-bold">
              &copy; {currentYear} Space Chunks. All rights reserved.
            </TypographySmall>

            <TypographySmall className="text-mystical-subtle font-bold">
              We are in no way affiliated with or endorsed by Mojang, AB.
            </TypographySmall>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-12">
              <Link to="privacy">
                <TypographySmall className="text-ethereal-subtle font-bold">
                  Privacy Policy
                </TypographySmall>
              </Link>
              <Link to="imprint">
                <TypographySmall className="text-ethereal-subtle font-bold">
                  Imprint
                </TypographySmall>
              </Link>
            </div>
            <Button
              variant="link"
              className="text-ethereal-subtle uppercase"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Top
            </Button>
          </div>
        </Section>
      </div>
    </footer>
  );
}
