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
    role: "Lead Designer & Model Artist",
    text: "I'm here to make sure everything looks good and is fun to play!",
  },
  {
    name: "Fllip",
    role: "Lead Developer",
    text: "My job is to ensure that everything works as intended and every developer has a fun time working on the project.",
  },
  {
    name: "Freggyy",
    role: "Lead Dev-Ops Engineer",
    text: "Always making sure that the servers are running smoothly and that the events are always up and running.",
  },
  // {
  //   name: "D151l",
  //   role: "Developer",
  //   text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  // },
  // {
  //   name: "MrManHD",
  //   role: "Developer",
  //   text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  // },
  // {
  //   name: "daviidooo",
  //   role: "Developer",
  //   text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  // },
  // {
  //   name: "Wetterbericht",
  //   role: "Developer",
  //   text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
  // },
];

export default function TeamSection() {
  return (
    <Section id="team" className="gap-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 text-center">
        <TypographyH1>Our Team</TypographyH1>
        <TypographyLead>
          Meet the team behind the scenes of Space Chunks! We are a group of
          passionate designers, developers, and creators who are dedicated to
          making the best experience for you.
        </TypographyLead>
      </div>
      <ul className="flex w-full flex-wrap items-center justify-center gap-8 gap-y-28">
        {teamMembers.map((member) => (
          <li
            key={member.name}
            className="bg-wild-sand-50 relative mx-auto flex h-52 flex-col items-center gap-2 rounded-lg p-8"
          >
            <img
              className="absolute -top-10 h-16 w-16 rounded-lg"
              src={`https://cravatar.eu/helmavatar/${member.name}/128`}
              alt={member.name}
            />
            <TypographyH4>{member.name}</TypographyH4>
            <TypographySmall className="uppercase">
              {member.role}
            </TypographySmall>
            <TypographyP
              className="max-w-[18rem] text-center"
              topMargin={false}
            >
              {member.text}
            </TypographyP>
          </li>
        ))}
      </ul>
    </Section>
  );
}
