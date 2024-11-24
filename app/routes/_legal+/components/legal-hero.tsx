import textLogoImage from "~/assets/images/text-logo.png";
import starsImage from "~/assets/images/stars.png";
import HeaderLinks from "~/components/layout/header-links";
import Stone from "~/components/stone";
import { motion } from "framer-motion";
import * as React from "react";

export default function LegalHero() {
  return (
    <div className="dark relative h-full w-full rounded-b-[2.5rem] bg-[#171023] py-8">
      <div className="relative z-50">
        <HeaderLinks />
      </div>
      <div className="absolute top-0 h-full w-full rounded-b-[2.5rem] bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="absolute top-0 h-full w-full bg-gradient-radial from-[#FF00F5] via-[#BD00FF]/15 to-[#BD00FF]/0 opacity-20" />
      <div className="absolute bottom-12 flex select-none items-center justify-center px-12">
        <img src={starsImage} alt="Stars" className="h-full" />
      </div>
      <div className="relative z-10 flex h-full select-none flex-col items-center gap-8 py-8">
        <div className="relative">
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
              className="relative z-10 h-full w-full select-none object-contain"
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
