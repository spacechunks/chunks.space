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
    role: "Lead Creative",
    text: "I’m cooking up the next creative plans & making sure everything in-game and in our branding looks fantastic!",
  },
  {
    name: "Fllip",
    role: "Lead Developer",
    text: "I’m the captain of the developer team, ensuring everyone enjoys their work. I also host events like the Game Cup!",
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
        <TypographyH1>Meet the Team</TypographyH1>
        <TypographyLead>
        Behind Space Chunks is a team of passionate designers, developers, 
        and creators. Learn about the people who are always eager to make 
        cool things happen!
        </TypographyLead>
      </div>
      <ul className="flex w-full flex-wrap items-center justify-center gap-8 gap-y-28">
        {teamMembers.map((member) => (
          <li
            key={member.name}
            className="relative mx-auto flex h-52 flex-col items-center gap-2 rounded-lg bg-wild-sand-50 p-8"
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
