import { Link } from "@remix-run/react";
import Section from "~/components/layout/section";
import { TypographySmall } from "~/components/ui/typography";
import DiscordButton from "~/components/ui/discord-button";
import { Button } from "~/components/ui/button";
import textLogo from "~/assets/images/text-logo.png";
import GithubIcon from "~/components/icons/github";

const navigationLinks = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Game Cup",
    href: "/game-cup",
  },
  {
    title: "Team",
    href: "/#team",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
  {
    title: "Project Board",
    href: "https://board.chunks.space/",
    target: "_blank",
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
      <div className="h-12 rounded-b-[2.5rem] bg-white" />
      <Section className="justify-between py-16 md:flex-row">
        <img
          src={textLogo}
          alt="Space Chunks Logo"
          className="h-full max-h-[12rem] w-auto object-cover"
        />
        <div className="flex gap-16">
          <div className="flex gap-8 uppercase text-ethereal-subtle">
            <ul className="flex flex-col gap-2">
              <TypographySmall className="font-bold text-ethereal-normal">
                Navigation
              </TypographySmall>
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} target={link.target}>
                    <TypographySmall className="font-bold">
                      {link.title}
                    </TypographySmall>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*<div className="flex gap-8 uppercase text-ethereal-subtle">*/}
          {/*  <ul className="flex flex-col gap-2">*/}
          {/*    <TypographySmall className="font-bold text-ethereal-normal">*/}
          {/*      Working on*/}
          {/*    </TypographySmall>*/}
          {/*    {workingOnLinks.map((link) => (*/}
          {/*      <li key={link.title}>*/}
          {/*        <a href={link.href} target="_blank">*/}
          {/*          <TypographySmall className="font-bold">*/}
          {/*            {link.title}*/}
          {/*          </TypographySmall>*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </Section>
      <div className="bg-[#171323] uppercase">
        <Section>
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="flex flex-col gap-2">
              <TypographySmall className="font-bold text-ethereal-subtle">
                &copy; {currentYear} Space Chunks. All rights reserved.
              </TypographySmall>

              <TypographySmall className="font-bold text-mystical-subtle">
                We are in no way affiliated with or endorsed by Mojang, AB.
              </TypographySmall>
            </div>
            <div className="order-first flex w-full items-center justify-between gap-4 md:order-none md:w-auto">
              <a href="https://github.com/spacechunks" target="_blank">
                <GithubIcon
                  className="h-full w-auto text-ethereal-subtle"
                  aria-label="Github"
                />
              </a>
              <DiscordButton />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:gap-12">
              <Link to="/privacy">
                <TypographySmall className="font-bold text-ethereal-subtle">
                  Privacy Policy
                </TypographySmall>
              </Link>
              <Link to="/imprint">
                <TypographySmall className="font-bold text-ethereal-subtle">
                  Imprint
                </TypographySmall>
              </Link>
            </div>
            <Button
              variant="link"
              className="uppercase text-ethereal-subtle"
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
