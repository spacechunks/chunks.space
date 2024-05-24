import Section from "~/components/layout/section";
import { TypographyH3 } from "~/components/ui/typography";
import rewisserverImage from "~/assets/images/logos/rewisserver.svg";
import balticImage from "~/assets/images/logos/baltic-galaxy.png";
import simpleCloudImage from "~/assets/images/logos/simplecloud.png";
import strelaImage from "~/assets/images/logos/strela.png";

const experience = [
  {
    name: "RewisServer",
    imageSrc: rewisserverImage,
  },
  {
    name: "Baltic-Galaxy",
    imageSrc: balticImage,
  },
  {
    name: "SimpleCloud",
    imageSrc: simpleCloudImage,
  },
  {
    name: "Strela",
    imageSrc: strelaImage,
  },
];

export default function ExperienceSection() {
  return (
    <Section
      id="about"
      className="w-full flex-col items-center justify-between md:flex-row"
    >
      <TypographyH3 className="min-w-fit">Proven Experience</TypographyH3>
      <div className="flex w-full items-center justify-between">
        {experience.map((item) => (
          <img
            key={item.name}
            src={item.imageSrc}
            alt={item.name}
            className="mx-4 h-16 w-auto"
          />
        ))}
      </div>
    </Section>
  );
}
