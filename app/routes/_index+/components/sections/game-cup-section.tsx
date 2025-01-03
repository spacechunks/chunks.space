import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import gameCupImage from "~/assets/images/game-cup.png";
import { motion } from "framer-motion";
import { Link } from "react-router";

const cupVariants = {
  visible: {
    opacity: 1,
    rotate: [-2, 2, -2],
    transition: {
      repeatType: "mirror" as const,
      ease: "easeInOut",
      duration: 5.0,
      delay: 0.2,
      repeat: Infinity,
    },
  },
};

export default function GameCupSection() {
  return (
    <Section id="game-cup">
      <div className="relative flex flex-col items-center justify-end rounded-lg bg-[#20143C] px-12 py-16 md:flex-row md:items-start">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#FF8A00] to-[#FFC700]/0 opacity-30" />
        <div className="-top-32 h-auto max-w-[30rem] md:absolute md:left-0 md:top-1/2 md:w-1/2 md:-translate-y-1/2">
          <motion.img
            src={gameCupImage}
            alt="Game Cup"
            className="h-full w-full"
            variants={cupVariants}
            whileInView="visible"
          />
        </div>
        <div className="relative flex flex-col gap-4 md:w-1/2 xl:w-auto xl:max-w-3xl">
          <TypographyH1 className="text-ethereal-normal">
            2 WEEKS CHALLENGE
          </TypographyH1>
          <div>
            <TypographyLead className="text-ethereal-normal uppercase">
              Space Chunks Game Cup <b>Season 1</b>
            </TypographyLead>
            <TypographyP className="text-ethereal-subtle [&:not(:first-child)]:mt-2">
            We challenge developers and designers to create a Minecraft minigame 
            in 2 weeks. The Grand Finale stream will showcase all games, and the 
            champion team will win €150. Join us and show your skills!
            </TypographyP>
          </div>
          <div>
            <Button
              variant="tertiary"
              size="lg"
              className="px-12 uppercase"
              asChild
            >
              <Link to="/game-cup">Read more</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
