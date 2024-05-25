import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import gameCupImage from "~/assets/images/game-cup.png";
import rocketImage from "~/assets/images/logo.png";
import { Link } from "@remix-run/react";
export default function ApplySection() {
  return (
    <Section id="game-cup">
      <div className="relative flex flex-col items-stretch justify-center rounded-lg bg-[#20143C] px-12 py-12 md:flex-row">
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-[#5865F2]/70 via-[#5865F2]/50 to-[#5865F2]/0 opacity-60" />
        <div className="-top-40 hidden h-auto max-w-[20rem] -rotate-12 md:absolute md:-left-24 md:top-1/2 md:block md:w-1/2 md:-translate-y-1/2">
          <img src={gameCupImage} alt="Game Cup" className="h-full w-full" />
        </div>
        <div className="hidden h-auto max-w-[18rem] md:absolute md:-bottom-[60%] md:right-5 md:block md:w-1/2 md:-translate-y-1/2">
          <img src={rocketImage} alt="Rocket" className="h-full w-full" />
        </div>
        <div className="relative flex flex-col items-center justify-center gap-10 md:w-1/2">
          <TypographyH1 className="text-center text-ethereal-normal">
            Are you talented enough?
          </TypographyH1>
          <div>
            <TypographyLead className="text-center text-2xl text-ethereal-normal">
              If this interests you and you are confident you can pull off
              something great, we would be happy to have you onboard as a
              contestant.
            </TypographyLead>
          </div>
          <div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="px-12 uppercase"
            >
              <a href="https://discord.chunks.space" target="_blank">
                Apply on our Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
