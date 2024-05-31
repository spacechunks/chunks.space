import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Markdown } from "~/components/ui/markdown";

const faqItems = [
  {
    question: "How can I become part of Space Chunks?",
    answer:
      "Yes you can! Just contact us on Discord and we'll get back to you.",
  },
  {
    question: "How is the studio financed?",
    answer:
      "We are currently self-financed, that means we don't have any external investors.",
  },
  {
    question: "What projects will there be in the future?",
    answer:
      "We are planning to host more events and competitions in the future, besides that we are working some secret projects. Stay tuned!",
  },
  {
    question:
      "What does a partnership look like and how can I become a partner?",
    answer:
      "We are always looking for partners who share our vision. Just contact us and we'll get back to you.",
  },
  {
    question: "How can I support Space Chunks?",
    answer:
      "You can support us by participating in our events, competitions, or by becoming a partner.",
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
            <AccordionContent>
              <Markdown content={item.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
