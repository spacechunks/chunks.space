import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";

export default function ContactSection() {
  return (
    <Section>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <TypographyH1>Contact us</TypographyH1>
        <TypographyLead>
          Have any questions, feedback, or just want to say hi? We'd love to
          hear from you! Feel free to reach out to us!
        </TypographyLead>
      </div>
    </Section>
  );
}
