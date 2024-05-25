import { useState } from "react";
import Section from "~/components/layout/section";
import {
  MotionTypographyP,
  TypographyH1,
  TypographyLarge,
  TypographyP,
} from "~/components/ui/typography";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const tabs = [
  {
    title: "Creative",
    id: "creative",
    description:
      "All of our projects are created with the goal of providing a unique experience for players. We strive to create something that is both fun and engaging.",
  },
  {
    title: "Development",
    id: "development",
    description:
      "Our team is made up of developers who are passionate about creating unique experiences for Minecraft. We are constantly working on new projects and features to improve the player experience.",
  },
  {
    title: "Events",
    id: "events",
    description:
      "We host events and competitions for other developers, designers, and players to participate in. Our goal is to create a community of like-minded individuals who are passionate about creating unique experiences for Minecraft.",
  },
];

export default function AboutSection() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <Section id="about" className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <TypographyH1>What is Space Chunks?</TypographyH1>
        <TypographyP>
          We are a team of developers, designers, and event organizers who are
          passionate about creating unique experiences for Minecraft. Our goal
          is to have fun and create something that we can all be proud of.
        </TypographyP>

        <Accordion
          type="single"
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value);
          }}
          className="w-full"
        >
          {tabs.map((tab) => (
            <AccordionItem key={tab.id} value={tab.id}>
              <AccordionTrigger>{tab.title}</AccordionTrigger>
              <AccordionContent>{tab.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="bg-wild-sand-100 min-h-64 flex-1 rounded-lg"></div>
    </Section>
  );
}

function Tab({
  title,
  description,
  isActive,
  onClick,
}: {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.li
      className={cn("relative")}
      onClick={onClick}
      animate={{ height: isActive ? "14rem" : "auto" }}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="bg-wild-sand-50 absolute inset-0 h-full rounded-lg"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
        />
      )}
      <div className="relative h-full px-4 py-4">
        <TypographyLarge>{title}</TypographyLarge>
        {isActive && (
          <MotionTypographyP
            layoutId="description"
            className="absolute inset-x-0 w-full px-4"
          >
            {description}
          </MotionTypographyP>
        )}
      </div>
    </motion.li>
  );
}
