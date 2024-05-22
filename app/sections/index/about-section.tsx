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
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "Development",
    id: "development",
    description:
      "3Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "Events",
    id: "events",
    description:
      "2Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
];

export default function AboutSection() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <Section id="about" className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <TypographyH1>What is Space Chunks?</TypographyH1>
        <TypographyP>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </TypographyP>

        <Accordion
          type="single"
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value);
          }}
          className="w-full"
        >
          {/*<AccordionItem value="item-1">*/}
          {/*  <AccordionTrigger>Is it accessible?</AccordionTrigger>*/}
          {/*  <AccordionContent>*/}
          {/*    Yes. It adheres to the WAI-ARIA design pattern.*/}
          {/*  </AccordionContent>*/}
          {/*</AccordionItem>*/}
          {tabs.map((tab) => (
            <AccordionItem key={tab.id} value={tab.id}>
              <AccordionTrigger>{tab.title}</AccordionTrigger>
              <AccordionContent>{tab.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="bg-wild-sand-100 h-full w-full rounded-lg"></div>
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
