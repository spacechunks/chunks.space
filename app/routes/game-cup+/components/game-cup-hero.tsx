import gameCupImage from "~/assets/images/game-cup.png";
import Header from "~/components/layout/header";
import { motion } from "framer-motion";
import * as React from "react";
import { TypographyH1, TypographyP } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";

export default function GameCupHero() {
  return (
    <div className="relative h-full w-full rounded-b-3xl bg-[#171023] py-8">
      <div className="relative z-50">
        <Header />
      </div>
      <div className="absolute top-0 h-full w-full rounded-b-3xl bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="absolute top-0 h-full w-full bg-gradient-radial from-[#FF00F5] via-[#BD00FF]/15 to-[#BD00FF]/0 opacity-20" />
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-tr from-[#BD00FF]/0 via-[#FF8A00] to-[#BD00FF]/0 opacity-30" />
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
            <Button variant="tertiary" className="px-12 uppercase" size="lg">
              Read more
            </Button>
          </div>
        </div>
        <div className="min-w-1/3 relative w-full flex-1">
          <motion.img
            src={gameCupImage}
            alt="Game Cup"
            className="absolute inset-0 right-0 top-0 z-10 h-[28rem] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
