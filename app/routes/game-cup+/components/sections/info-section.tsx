import Section from "~/components/layout/section";
import gameCupImage from "~/assets/images/game-cup.png";
import gameCupInfoImage from "~/assets/images/ingame.png";
import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function InfoSection() {
  return (
    <Section id="info">
      <div className="dark relative flex w-full flex-col rounded-lg bg-[#1D182C] md:flex-row">
        <div className="flex w-full flex-col items-center gap-4 px-12 py-12 md:text-center">
          <img src={gameCupImage} alt="Game Cup" className="h-40 w-auto" />
          <TypographyH1>WIN WITH YOUR TEAM</TypographyH1>
          <TypographyLead>
            The tournament for talented developers and game designers!
          </TypographyLead>
          <TypographyP className="text-ethereal-subtle">
            You now have the opportunity to demonstrate your skills and
            creativity to a wide range of development teams. Can you create an
            interesting Minecraft minigame in just 2 weeks? Are you brave enough
            to take on this challenge?
          </TypographyP>
          <Button
            className="uppercase text-mystical-normal md:px-12"
            variant="tertiary"
            size="lg"
          >
            <a
              href="https://discord.chunks.space"
              className="flex cursor-pointer items-center gap-3"
              target="_blank"
            >
              Apply on our discord
            </a>
          </Button>
        </div>
        <div className="relative hidden max-h-[640px] w-full md:block">
          <img
            src={gameCupInfoImage}
            alt="Game Cup Info"
            className="h-full rounded-lg object-cover object-right"
          />
          <div className="h-full w-full">
            <div className="absolute -right-8 bottom-12 flex h-fit w-fit flex-col items-end gap-6">
              <TypographyH1 className="w-fit rounded-lg bg-secondary p-4 uppercase">
                150€ Price
              </TypographyH1>
              <TypographyH1 className="w-fit rounded-lg bg-secondary p-4 uppercase">
                2 Weeks
              </TypographyH1>

              <TypographyH1 className="w-fit rounded-lg bg-secondary p-4 uppercase">
                2-4 Members
              </TypographyH1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 md:flex-row">
        <a
          href="https://cdn.chunks.cloud/gamecup/roadmap.png"
          className="group relative min-h-64 rounded-lg bg-[#1D182C] p-2"
          target="_blank"
        >
          <img
            src="https://cdn.chunks.cloud/gamecup/roadmap.png"
            alt="Roadmap"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[#1D182C] from-20% to-[#1D182C]/0 p-8 text-xl text-ethereal-normal">
            <div className="flex items-center gap-2 group-hover:underline">
              <ExternalLink />
              <span>Roadmap - Event Schedule</span>
            </div>
          </div>
        </a>
        <a
          href="https://cdn.chunks.cloud/gamecup/rules_and_guidelines.png"
          className="group relative min-h-64 rounded-lg bg-[#1D182C] p-2"
          target="_blank"
        >
          <img
            src="https://cdn.chunks.cloud/gamecup/rules_and_guidelines.png"
            alt="Rules and Guidelines"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[#1D182C] from-20% to-[#1D182C]/0 p-8 text-xl text-ethereal-normal">
            <div className="flex items-center gap-2 group-hover:underline">
              <ExternalLink />
              <span>Rules and Guidelines</span>
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}
