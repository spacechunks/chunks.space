import textLogoImage from "~/assets/images/text-logo.png";
import starsImage from "~/assets/images/stars.png";
import HeaderLinks from "~/components/layout/header-links";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import Stone from "~/components/stone";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import SmoothLink from "~/components/smooth-link";

export default function IndexHero() {
  return (
    <div className="relative h-full w-full rounded-b-[2.5rem] bg-[#171023] py-8">
      <div className="relative z-50">
        <HeaderLinks />
      </div>
      <div className="absolute top-0 h-full w-full rounded-b-[2.5rem] bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="absolute top-0 h-full w-full bg-gradient-radial from-[#FF00F5] via-[#BD00FF]/15 to-[#BD00FF]/0 opacity-20" />
      <div className="absolute bottom-12 flex select-none items-center justify-center px-12">
        <img src={starsImage} alt="Stars" className="h-full" />
      </div>
      <HeroStones />
      <div className="relative z-10 flex h-full flex-col items-center gap-8 py-8">
        <Button
          variant="none"
          className="group relative bg-tertiary p-4 uppercase ring-2 ring-inset ring-yellow-200 md:p-6"
          asChild
        >
          <Link to="/game-cup">
            <div className="absolute h-full w-full rounded-md bg-gradient-to-b from-white via-transparent to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
            <div className="absolute h-full w-full rounded-md bg-[#F3C138] opacity-50 blur-xl transition-opacity group-hover:opacity-60" />
            <div className="relative my-12 text-xs text-mystical-normal md:text-sm">
              <b>Game cup season 1</b> stats available. <b>Read more</b>
            </div>
          </Link>
        </Button>
        <div className="relative select-none">
          <div
            className="relative h-96 w-full overflow-hidden"
            style={{
              WebkitMaskImage: `url(${textLogoImage})`,
              maskImage: `url(${textLogoImage})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              maskSize: "contain",
            }}
          >
            <motion.img
              src={textLogoImage}
              alt="Space Chunks"
              className="relative z-10 h-full w-full object-contain"
            />
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{
                WebkitMaskImage: `url(https://i.imgur.com/xyRRwOa.png)`,
                maskImage: `url(https://i.imgur.com/xyRRwOa.png)`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-40 mix-blend-color-burn"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2.5,
                }}
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 70%)",
                }}
              />
            </div>
          </div>
        </div>

        <SmoothLink
          to="/#about"
          className="group flex cursor-pointer flex-col items-center gap-2 text-ethereal-normal"
        >
          <div className="w-full text-center font-semibold uppercase">
            Explore our universe
          </div>

          <span>
            <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" />
          </span>
        </SmoothLink>
      </div>
    </div>
  );
}

function HeroStones() {
  return (
    <div className="absolute hidden h-full w-full select-none items-center justify-center md:flex">
      <div className="container relative h-full w-full">
        <Stone
          variant="1"
          flipped
          moving
          height="h-28"
          className="absolute left-40 top-24"
        />
        <Stone
          variant="3"
          moving
          height="h-14"
          className="absolute right-16 top-40"
        />
        <Stone
          variant="2"
          moving
          height="h-36"
          className="absolute bottom-32 left-12"
        />
        <Stone
          variant="2"
          moving
          flipped
          height="h-16"
          className="absolute bottom-28 left-96 hidden xl:block"
        />
        <Stone
          variant="1"
          moving
          height="h-24"
          className="absolute bottom-12 right-32"
        />
      </div>
    </div>
  );
}
