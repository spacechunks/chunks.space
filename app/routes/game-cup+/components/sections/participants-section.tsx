import Section from "~/components/layout/section";
import { TypographyH1, TypographyLarge } from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import flagImage from "~/assets/images/flag.png";

type Member = { name: string; skinName?: string };

const unknownMember = { name: "Unknown", skinName: "s" };
const emptyMember = { name: "", skinName: "s" };

export const participants: {
  name: string;
  gameMode?: string; // New optional property
  points: number;
  members: Member[];
  doNotExtendMembers?: boolean;
  disqualified?: boolean;
}[] = [
  {
    name: "Die Granaten",
    gameMode: "Airport Sim",
    points: 64,
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
        name: "Sno0wFl4ke",
        skinName: "Sno0wFl4ke",
      },
      emptyMember,
    ],
  },
  {
    name: "Team Extreme",
    points: 0,
    disqualified: true,
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
    gameMode: "Power Golf",
    points: 90,
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
    gameMode: "Rocket Build",
    points: 61,
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
    gameMode: "Flash",
    points: 51,
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
    disqualified: true,
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
    disqualified: true,
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
        {participants
          .sort((a, b) => b.points - a.points)
          .map((team, index) => (
            <div key={index} className={cn("relative flex flex-col")}>
              {team.disqualified && (
                <img
                  className="absolute left-1/2 top-1/2 z-10 h-32 w-auto -translate-x-1/2 -translate-y-1/2 transform"
                  src={flagImage}
                  alt="Disqualified"
                  style={{ imageRendering: "pixelated" }}
                />
              )}
              <div
                className={cn(
                  "flex items-center justify-between rounded-t-lg bg-primary px-4 py-3",
                  team.disqualified && "opacity-60",
                )}
              >
                <TypographyLarge className="flex items-center gap-2 font-medium uppercase text-ethereal-normal">
                  {!team.disqualified && `#${index + 1}`} {team.name}
                </TypographyLarge>
                <span className="text-[#F4BAEF]">{team.points} Points</span>
              </div>
              <div
                className={cn(
                  "grid grid-flow-row auto-rows-fr grid-rows-4 rounded-b-lg bg-wild-sand-100",
                  team.disqualified && "opacity-60",
                )}
              >
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
