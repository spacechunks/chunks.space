import Section from "~/components/layout/section";
import { TypographyH1, TypographyLarge } from "~/components/ui/typography";
import { cn } from "~/lib/utils";

type Member = { name: string; skinName?: string };

const unknownMember = { name: "Unknown", skinName: "s" };

export const participants: {
  name: string;
  points: number;
  members: Member[];
  doNotExtendMembers?: boolean;
}[] = [
  {
    name: "Team 1",
    points: 0,
    members: [],
  },
  {
    name: "Team 2",
    points: 0,
    members: [],
  },
  {
    name: "Team 3",
    points: 0,
    members: [],
  },
  {
    name: "Team 4",
    points: 0,
    members: [],
  },
  {
    name: "Team 5",
    points: 0,
    members: [],
  },
  {
    name: "Team 6",
    points: 0,
    members: [],
  },
  {
    name: "Team 7",
    points: 0,
    members: [],
  },
  {
    name: "Team 8",
    points: 0,
    members: [],
  },
  {
    name: "Team 9",
    points: 0,
    members: [],
  },
  {
    name: "Team 10",
    points: 0,
    members: [],
  },
  {
    name: "Team 11",
    points: 0,
    members: [],
  },
  {
    name: "Team 12",
    points: 0,
    members: [],
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
              <TypographyLarge className="text-ethereal-normal font-medium uppercase">
                {team.name}
              </TypographyLarge>
              <span className="text-[#F4BAEF]">{team.points} Points</span>
            </div>
            <div className="bg-wild-sand-100 grid grid-flow-row auto-rows-fr grid-rows-4 rounded-b-lg">
              {[
                ...team.members,
                ...Array(4 - team.members.length).fill(
                  !team.doNotExtendMembers ? unknownMember : undefined,
                ),
              ].map((member, index) => (
                <div key={index}
                  className={cn(
                    "flex h-full items-center gap-1 px-4 py-2",
                    index < 3 && "border-wild-sand-200 border-b",
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
                        className="text-mystical-normal px-4 py-2 font-semibold"
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
