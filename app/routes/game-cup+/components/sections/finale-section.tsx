import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";

export default function FinaleSection() {
  return (
    <Section id="finale">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-center">
        <TypographyH1>Watch our Winner Announcement</TypographyH1>
        <TypographyLead>
          We announced the winners of Season 1. Watch the video to see who won!
        </TypographyLead>
      </div>
      <div className="flex items-center justify-center">
        <iframe
          src="https://www.youtube.com/embed/7685WSx9LMA?si=acxypNJUMZgfjWfZ"
          title="Winner Announcement"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full"
        ></iframe>
      </div>
    </Section>
  );
}
