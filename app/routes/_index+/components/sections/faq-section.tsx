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
    question: "How can I join Space Chunks as a team member?",
    answer: `
    If you're a talented individual, there's always a way for you to get involved with us. Join our [Community Discord](https://discord.chunks.space) and make your presence known – we'll reach out and chat with you!
    `,
  },
  {
    question: "How is Space Chunks funded?",
    answer: `
    Right now, Space Chunks is driven by passionate people who love creating awesome Minecraft projects. We’re not in it for profit. All current projects are funded by a few dedicated members. If you’re a company interested in sponsoring our events with prizes, feel free to reach out via our contact form. We'll get back to you within a few days!
    `,
  },
  {
    question: "What projects will there be in the future?",
    answer: `
    We have a treasure trove of secret ideas we can't wait to bring to life! In the near future, we'll focus on releasing public open-source assets for server owners and developers, including various systems, APIs, and model, texture, and design assets. And who knows, there might soon be a special place where you can try out amazing things! 😲

    Join our [Community Discord](https://discord.chunks.space) to stay updated on all the exciting developments!
    `,
  },
  {
    question:
      "What does a partnership look like and how can I become a partner?",
    answer: `
      We love collaborating with people who share our vision and values.

      - **For Content Creators**: Want to create exciting and unique events or video/stream formats in Minecraft for your community but lack the expertise or time for planning, development, server maintenance, and fantastic game design? We'd love to help you out and ensure a breathtaking event!
      - **For Minecraft Servers:** Do you run a Minecraft network with a moderate to large player base? We can support your infrastructure with our system, maintained and developed by our community.
      - **For Server Hosting:** Do you offer reliable, high-performance products at great prices and want to support a nonprofit project? We’d love to recommend you as an exclusive partner to our community of server owners and developers.
      - **For Other Businesses:** Want to create a project in Minecraft? We’re happy to provide our expertise in Minecraft development and game design.

      Even if you don’t fit into these categories, feel free to reach out and we’ll see what we can do together.

      Contact us via our form with a brief introduction and your proposal, or pop into our [Community Discord](https://discord.chunks.space) and say hi. We’ll get back to you within a few days!
    `,
  },
  {
    question: "How can I support Space Chunks?",
    answer: `
    There are plenty of ways you can get involved: Join our exciting event, contribute to our open-source projects on GitHub or spread the word about Space Chunks!
Every bit of support helps us keep creating awesome things!
    `,
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
