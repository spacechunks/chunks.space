import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographyP,
  TypographySmall,
} from "~/components/ui/typography";

const teamMembers = [
  {
    name: "EgyBoy",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "Fllip",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "Freggyy",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "D151l",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "MrManHD",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "daviidoo",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
  {
    name: "Wetterbericht",
    role: "S TIER DEVELOPER",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  },
];

export default function TeamSection() {
  return (
    <Section className="gap-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center">
        <TypographyH1>Our Team</TypographyH1>
        <TypographyLead>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
        </TypographyLead>
      </div>
      <ul className="grid grid-cols-4 gap-8 gap-y-28">
        {teamMembers.map((member) => (
          <li key={member.name}>
            <div className="bg-wild-sand-50 relative flex flex-col items-center gap-2 rounded-lg p-8">
              <img
                className="absolute -top-10 h-16 w-16 rounded-lg"
                src={`https://cravatar.eu/helmavatar/${member.name}`}
                alt={member.name}
              />
              <TypographyH4>{member.name}</TypographyH4>
              <TypographySmall>{member.role}</TypographySmall>
              <TypographyP className="text-center" topMargin={false}>
                {member.text}
              </TypographyP>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
