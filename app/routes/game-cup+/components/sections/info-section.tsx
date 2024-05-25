import Section from "~/components/layout/section";
import gameCupImage from "~/assets/images/game-cup.png";
import gameCupInfoImage from "~/assets/images/game-cup-info.png";
import roadmapImage from "~/assets/images/roadmap.png";
import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "@remix-run/react";

export default function InfoSection() {
  return (
    <Section className="">
      <div className="dark relative flex w-full rounded-lg bg-[#1D182C]">
        <div className="flex w-full flex-col items-center gap-4 px-12 py-12 text-center">
          <img src={gameCupImage} alt="Game Cup" className="h-40 w-auto" />
          <TypographyH1>Win with your team</TypographyH1>
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
            className="px-12 uppercase text-mystical-normal"
            variant="tertiary"
            size="lg"
          >
            Apply on our discord
          </Button>
        </div>
        <div className="relative w-full">
          <img
            src={gameCupInfoImage}
            alt="Game Cup Info"
            className="h-full rounded-lg object-cover object-right"
          />
          <div className="h-full w-full">
            <div className="absolute -right-8 bottom-12 flex h-fit w-fit flex-col items-end gap-6">
              <TypographyH1 className="w-fit rounded-lg bg-secondary p-4 uppercase">
                50€ Price
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
        <Link
          to="/roadmap.png"
          className="group relative min-h-64 rounded-lg bg-[#1D182C] p-2"
          target="_blank"
        >
          <img
            src={roadmapImage}
            alt="Roadmap"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[#1D182C] from-20% to-[#1D182C]/0 p-8 text-xl text-ethereal-normal">
            <div className="flex items-center gap-2 group-hover:underline">
              <ExternalLink />
              <span>Roadmap - Event Schedule</span>
            </div>
          </div>
        </Link>
        <Link
          to="/rules.png"
          className="group relative min-h-64 rounded-lg bg-[#1D182C] p-2"
          target="_blank"
        >
          <img
            src={roadmapImage}
            alt="Roadmap"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[#1D182C] from-20% to-[#1D182C]/0 p-8 text-xl text-ethereal-normal">
            <div className="flex items-center gap-2 group-hover:underline">
              <ExternalLink />
              <span>Rules and Guidelines</span>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
}
