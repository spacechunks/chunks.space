import logoImage from "~/assets/images/logo.png";
import GithubIcon from "~/components/icons/github";
import DiscordButton from "~/components/ui/discord-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { MenuIcon } from "lucide-react";
import textLogoImage from "~/assets/images/text-logo.png";
import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import SmoothLink from "~/components/smooth-link";
import { Link } from "@remix-run/react";

const links = [
  { name: "Start", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Blog", to: "/blog" },
  { name: "Game Cup", to: "/game-cup" },
  { name: "Team", to: "/#team" },
  { name: "FAQ", to: "/#faq" },
  { name: "Contact", to: "/#contact" },
];

export default function HeaderLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container flex items-center justify-between px-12 text-white">
      <div className="flex items-center gap-10">
        <Link to="/">
          <img className="h-12 w-auto" src={logoImage} alt="logo" />
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <NavigationLinks />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-4 md:flex">
          <SocialLinks />
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="mystical">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="full">
              <SheetHeader>
                <SheetDescription>
                  <motion.img
                    src={textLogoImage}
                    alt="Space Chunks"
                    className="h-full w-full object-contain"
                  />
                  <div className="flex w-full flex-col items-start gap-4 px-12">
                    <NavigationLinks
                      background
                      close={() => setIsOpen(false)}
                    />
                    <div className="m2-6 flex w-full items-center justify-between">
                      <SocialLinks />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavigationLinks({
  close,
  background,
}: {
  close?: () => void;
  background?: boolean;
}) {
  return (
    <>
      {links.map((link) => (
        <SmoothLink
          key={link.to}
          to={link.to}
          className={cn(
            background &&
              "w-full rounded-lg bg-mystical-normal py-3 text-center text-white",
          )}
          onClick={close}
          delay={background ? 250 : 10}
        >
          {link.name}
        </SmoothLink>
      ))}
    </>
  );
}

function SocialLinks() {
  return (
    <>
      <a href="https://github.com/spacechunks" target="_blank">
        <GithubIcon className="h-6 w-auto text-ethereal-normal" />
      </a>
      <DiscordButton />
    </>
  );
}
