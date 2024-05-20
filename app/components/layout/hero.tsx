import stonesImage from "~/assets/images/stones.png";
import starsImage from "~/assets/images/stars.png";
import Header from "~/components/layout/header";
import { Button } from "~/components/ui/button";
import textLogoImage from "~/assets/images/text-logo.png";
import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <div className="relative h-full w-full rounded-b-3xl bg-[#171023] py-8">
      <div className="absolute top-0 z-0 h-full w-full rounded-b-3xl bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="bg-gradient-radial absolute top-0 z-0 h-full w-full from-[#FF00F5] to-[#BD00FF]/0 opacity-20" />
      <div className="container absolute -bottom-12 px-12">
        <img src={stonesImage} alt="Stones" className="h-full" />
      </div>
      <div className="container absolute bottom-12 px-12">
        <img src={starsImage} alt="Stars" className="h-full" />
      </div>
      <Header />
      <div className="relative flex h-full flex-col items-center gap-8 py-8">
        <Button
          variant="none"
          className="group relative bg-[#F3C138] p-6 uppercase ring-2 ring-inset ring-yellow-200"
          asChild
        >
          <Link to="/game-cup">
            <div className="absolute h-full w-full rounded-md bg-gradient-to-b from-white via-transparent to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
            <div className="absolute h-full w-full rounded-md bg-[#F3C138] opacity-50 blur-xl transition-opacity group-hover:opacity-60" />
            <div className="relative my-12">
              <b>Game cup season 1</b> Starting soon. <b>Read more</b>
            </div>
          </Link>
        </Button>
        <div className="relative">
          <img
            src={textLogoImage}
            alt="Space Chunks"
            className="h-96 w-full object-contain"
          />
        </div>
        <div className="w-full text-center uppercase text-white">
          Explore our universe
        </div>
      </div>
    </div>
  );
}
