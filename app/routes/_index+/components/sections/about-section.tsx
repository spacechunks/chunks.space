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
import ingameImage from "~/assets/images/ingame.png";

const tabs = [
  {
    title: "Creative",
    id: "creative",
    description:
      "All our projects are designed to provide a unique player experience. We aim to make everything look amazing and be incredibly user-friendly.",
  },
  {
    title: "Development",
    id: "development",
    description:
      "We’re a team of passionate developers always on the hunt for improvement and innovation. We’re constantly working on exciting projects and experimenting with new techniques.",
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
          We are a creative and development team with a community of server
          owners, developers, and game designers. Our mission is to create a
          vibrant space with competitive events and free resources.
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
      <div className="flex-1 rounded-lg bg-wild-sand-100 md:min-h-64">
        <img
          src={ingameImage}
          alt="Ingame"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
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
          className="absolute inset-0 h-full rounded-lg bg-wild-sand-50"
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
