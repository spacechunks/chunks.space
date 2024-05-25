import gameCupImage from "~/assets/images/game-cup.png";
import Header from "~/components/layout/header";
import { motion } from "framer-motion";
import * as React from "react";
import { TypographyH1, TypographyP } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import SmoothLink from "~/components/smooth-link";

export default function GameCupHero() {
  return (
    <div className="relative h-full w-full rounded-b-3xl bg-[#171023] py-8">
      <div className="relative z-50">
        <Header />
      </div>
      <div className="absolute top-0 h-full w-full rounded-b-3xl bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-lg object-cover">
        <svg
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-full object-cover"
        >
          <path
            d="M0 0H1440V450C1440 477.614 1417.61 500 1390 500H50C22.3857 500 0 477.614 0 450V0Z"
            fill="url(#paint0_radial_2247_1212)"
            fillOpacity="0.3"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2247_1212"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1023 242.339) rotate(145.543) scale(455.4 999.783)"
            >
              <stop stopColor="#FF8A00" />
              <stop offset="1" stopColor="#BD00FF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="container relative flex w-full justify-between py-12">
        <div className="flex w-full max-w-2xl flex-col gap-4">
          <TypographyH1 className="text-ethereal-normal mt-12 flex flex-col gap-2 text-5xl">
            <span>Create and Compete:</span>
            <span>
              Win <span className="text-secondary">€50</span> with your Minigame
            </span>
          </TypographyH1>
          <TypographyP className="text-ethereal-subtle">
            Calling all developers and game designers! Enter our Minecraft
            Minigame Competition and build something extraordinary in just 2
            weeks. Impress us with your creativity and innovation, and you could
            take home a €50 prize. Start applying today!
          </TypographyP>
          <div>
            <Button
              variant="tertiary"
              className="px-12 uppercase"
              size="lg"
              asChild
            >
              <SmoothLink to="/game-cup#info">Read more</SmoothLink>
            </Button>
          </div>
        </div>
        <div className="min-w-1/3 relative w-full flex-1">
          <motion.img
            src={gameCupImage}
            alt="Game Cup"
            className="absolute inset-0 right-0 top-4 z-10 h-[28rem] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
