import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";

export default function FaqSection() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center">
        <TypographyH1>Frequently asked questions</TypographyH1>
        <TypographyLead>
          You have questions, we have answers. If you can't find what you're
          looking for, feel free to contact us!
        </TypographyLead>
      </div>
    </Section>
  );
}
