import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/layout/hero";
import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "~/components/ui/typography";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks" },
    { name: "description", content: "Welcome to Space Chunks!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <Section className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <TypographyH1>What is Space Chunks?</TypographyH1>
          <TypographyP>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus..
          </TypographyP>
          <ul className="flex flex-col gap-4">
            <li className="px-4">
              <TypographyLead>Creative</TypographyLead>
            </li>
            <li className="px-4">
              <TypographyLead>Development</TypographyLead>
            </li>
            <li className="rounded-lg bg-gray-100 p-4">
              <TypographyLead>Events</TypographyLead>
              <TypographyP>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus..
              </TypographyP>
            </li>
          </ul>
        </div>
        <div className="h-full w-full rounded-lg bg-gray-300"></div>
      </Section>
    </div>
  );
}
