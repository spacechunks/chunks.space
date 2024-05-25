import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqItems = [
  {
    question: "Can I stream during the development phase?",
    answer:
      "Yes, you can stream your development process. However, we recommend that you do not share all of your ideas and progress to keep the competition spicy.",
  },
  {
    question: "Can I put my games on my network after the competition?",
    answer:
      "Yes, you can put your games on your network after the competition. We encourage you to share your creations with the community.",
  },
  {
    question: "What is the deadline for my application",
    answer:
      "The deadline for your application is the 1st of July. Make sure to submit all before the deadline to participate in the competition.",
  },
  {
    question: "Can I participate when I am not a developer?",
    answer:
      "You can participate in the competition even if you are not a developer, but you need to have a team with at least one developer. You can also participate as a team of developers.",
  },
];

export default function FaqSection() {
  return (
    <Section id="faq">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center">
        <TypographyH1>Frequently asked questions</TypographyH1>
        <TypographyLead>
          You have questions, we have answers. If you can't find what you're
          looking for, feel free to contact us!
        </TypographyLead>
      </div>
      <Accordion
        type="single"
        defaultValue={faqItems[0].question}
        className="w-full"
      >
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
