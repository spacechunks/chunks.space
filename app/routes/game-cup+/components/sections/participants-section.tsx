import Section from "~/components/layout/section";
import { TypographyH1, TypographyLarge } from "~/components/ui/typography";
import { cn } from "~/lib/utils";

type Member = { name: string; skinName?: string };

const unknownMember = { name: "Unknown", skinName: "s" };
const emptyMember = { name: "", skinName: "s" };

export const participants: {
  name: string;
  points: number;
  members: Member[];
  doNotExtendMembers?: boolean;
}[] = [
  {
    name: "Die Granaten",
    points: 0,
    members: [
      {
        name: "HttpMarco",
        skinName: "HttpMarco",
      },

      {
        name: "Nico_ND1",
        skinName: "Nico_ND1",
      },
      {
        name: "Snowflake",
        skinName: "Snowflake",
      },
      emptyMember,
    ],
  },
  {
    name: "Team Extreme",
    points: 0,
    members: [
      {
        name: "EgyBoy",
        skinName: "EgyBoy",
      },

      {
        name: "MrManHD",
        skinName: "MrManHD",
      },
      emptyMember,
      emptyMember,
    ],
  },
  {
    name: "Team Eagle",
    points: 0,
    members: [
      {
        name: "Wetterbericht",
        skinName: "Wetterbericht",
      },

      {
        name: "daviidooo",
        skinName: "daviidooo",
      },
      emptyMember,
      emptyMember,
    ],
  },
  {
    name: "Team Rocket",
    points: 0,
    members: [
      {
        name: "D151l",
        skinName: "D151l",
      },

      {
        name: "EinsLucaaa",
        skinName: "EinsLucaaa",
      },
      emptyMember,
      emptyMember,
    ],
  },
  {
    name: "Team 240kmh",
    points: 0,
    members: [
      {
        name: "freggyy",
        skinName: "freggyy",
      },
      {
        name: "Ulfgerstenkorn",
        skinName: "Ulfgerstenkorn",
      },
      emptyMember,
      emptyMember,
    ],
  },
  {
    name: "Team Dyhntastic",
    points: 0,
    members: [
      {
        name: "DyhnenTv",
        skinName: "DyhnenTv",
      },
      {
        name: "padbop",
        skinName: "padbop",
      },
      emptyMember,
      emptyMember,
    ],
  },
  {
    name: "Team SweriDNS",
    points: 0,
    members: [
      {
        name: "FlxwDNS",
        skinName: "FlxwDNS",
      },
      {
        name: "Swerion",
        skinName: "Swerion",
      },
      emptyMember,
      emptyMember,
    ],
  },
];

export default function ParticipantsSection() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center">
        <TypographyH1>Season 1 Participants</TypographyH1>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {participants.map((team, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between rounded-t-lg bg-primary px-4 py-3">
              <TypographyLarge className="font-medium uppercase text-ethereal-normal">
                {team.name}
              </TypographyLarge>
              <span className="text-[#F4BAEF]">{team.points} Points</span>
            </div>
            <div className="grid grid-flow-row auto-rows-fr grid-rows-4 rounded-b-lg bg-wild-sand-100">
              {[
                ...team.members,
                ...Array(4 - team.members.length).fill(
                  !team.doNotExtendMembers ? unknownMember : undefined,
                ),
              ].map((member, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex h-full items-center gap-1 px-4 py-2",
                    index < 3 && "border-b border-wild-sand-200",
                  )}
                >
                  {member ? (
                    <>
                      <img
                        className="h-8 w-8 rounded-lg"
                        src={`https://cravatar.eu/helmavatar/${member?.skinName ?? member.name}/128`}
                        alt={member?.name ?? "Unknown"}
                      />
                      <h4
                        key={index}
                        className="px-4 py-2 font-semibold text-mystical-normal"
                      >
                        {member?.name ?? "Unknown"}
                      </h4>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
