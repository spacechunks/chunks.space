import Section from "~/components/layout/section";
import gameCupImage from "~/assets/images/game-cup.png";
import gameCupInfoImage from "~/assets/images/game-cup-info.png";
import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";

export default function InfoSection() {
  return (
    <Section className="">
      <div className="bg-mystical-normal dark relative flex w-full rounded-lg">
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
            className="text-mystical-normal px-12 uppercase"
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
                50 Price
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
      <div className="w-full"></div>
    </Section>
  );
}
