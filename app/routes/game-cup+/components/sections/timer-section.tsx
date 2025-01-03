import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";

const gameCupDate = Date.UTC(2024, 6, 6, 0);

export default function TimerSection() {
  const [currentDays, setCurrentDays] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date(Date.now());
      const time = new Date(
        Math.max(
          gameCupDate +
            currentDate.getTimezoneOffset() * 60000 -
            currentDate.getTime(),
          0,
        ),
      );
      setCurrentDays(Math.floor(time.getTime() / (24 * 60 * 60 * 1000)));
      setCurrentHours(time.getUTCHours());
      setCurrentMinutes(time.getUTCMinutes());
    }, 1000);
    return () => clearInterval(interval);
  }, [useState]);
  return (
    <Section>
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-5 rounded-lg bg-[#E8DDFF] p-[20px_10px_10px_10px] text-center sm:gap-10 sm:p-[50px_40px_40px_40px] md:flex-row xl:gap-20">
        <div className="flex flex-col items-center justify-center text-center sm:gap-3 xl:justify-start xl:text-left">
          <TypographyH1 className="w-full">
            <span className="xl:text-[64px]">SEASON 2</span>
          </TypographyH1>
          <TypographyLead className="w-full">
            <span className="text-sm sm:text-base xl:text-[24px] xl:font-[500]">
              Announcement later this year
              {/*Starting on{" "}*/}
              {/*{Intl.DateTimeFormat("en-US", {*/}
              {/*  weekday: "long",*/}
              {/*  day: "numeric",*/}
              {/*  month: "long",*/}
              {/*  year: "numeric",*/}
              {/*}).format(gameCupDate)}*/}
            </span>
          </TypographyLead>
        </div>
        <div className="flex shrink select-none items-center justify-center gap-[10px] sm:gap-[20px] xl:gap-[30px]">
          <TimerCard
            first={currentDays > 9 ? Math.floor(currentDays / 10) : 0}
            second={currentDays % 10}
            text={"DAYS"}
            hide={true}
          />
          <TimerCard
            first={currentHours > 9 ? Math.floor(currentHours / 10) : 0}
            second={currentHours % 10}
            text={"HOURS"}
            hide={true}
          />
          <TimerCard
            first={currentMinutes > 9 ? Math.floor(currentMinutes / 10) : 0}
            second={currentMinutes % 10}
            text={"MINUTES"}
            hide={true}
          />
        </div>
      </div>
    </Section>
  );
}

function TimerCard({
  first,
  second,
  text,
  hide,
}: {
  first: number;
  second: number;
  text: string;
  hide?: boolean;
}) {
  return (
    <div className={"space-y-2"}>
      <div
        className={"flex items-center justify-center gap-[7px] xl:gap-[15px]"}
      >
        <TimerDigit digit={first} hide={hide} />
        <TimerDigit digit={second} hide={hide} />
      </div>
      <span
        className={
          "text-[13px] font-[700] text-[#3D365C] sm:text-[24px] xl:font-[800]"
        }
      >
        {text}
      </span>
    </div>
  );
}

function TimerDigit({ digit, hide }: { digit: number; hide?: boolean }) {
  const [transform, setTransform] = useState("translate-y-0");
  useEffect(() => {
    switch (digit) {
      case 0:
        setTransform("translate-y-0");
        break;
      case 1:
        setTransform(
          "translate-y-[-2.5rem] sm:translate-y-[-60px] xl:translate-y-[-80px]",
        );
        break;
      case 2:
        setTransform(
          "translate-y-[-5rem] sm:translate-y-[-120px] xl:translate-y-[-160px]",
        );
        break;
      case 3:
        setTransform(
          "translate-y-[-7.5rem] sm:translate-y-[-180px] xl:translate-y-[-240px]",
        );
        break;
      case 4:
        setTransform(
          "translate-y-[-10rem] sm:translate-y-[-240px] xl:translate-y-[-320px]",
        );
        break;
      case 5:
        setTransform(
          "translate-y-[-12.5rem] sm:translate-y-[-300px] xl:translate-y-[-400px]",
        );
        break;
      case 6:
        setTransform(
          "translate-y-[-15rem] sm:translate-y-[-360px] xl:translate-y-[-480px]",
        );
        break;
      case 7:
        setTransform(
          "translate-y-[-17.5rem] sm:translate-y-[-420px] xl:translate-y-[-560px]",
        );
        break;
      case 8:
        setTransform(
          "translate-y-[-20rem] sm:translate-y-[-480px] xl:translate-y-[-640px]",
        );
        break;
      case 9:
        setTransform(
          "translate-y-[-22.5rem] sm:translate-y-[-33.75rem] xl:translate-y-[-720px]",
        );
        break;
    }
  }, [digit]);
  return (
    <div className="h-[50px] w-[32px] overflow-hidden rounded border-[3px] border-[#2D214E] bg-[#2D214E] text-center text-4xl font-[500] text-white sm:h-[75px] sm:w-[60px] sm:text-6xl xl:h-[100px] xl:w-[80px] xl:rounded-xl xl:border-[6px] xl:text-7xl xl:text-[80px] xl:font-[900]">
      <div
        className="h-full w-full overflow-hidden"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 0.4) 100%)`,
        }}
      >
        <div
          className={cn(
            "h-[25rem] w-full transition-[transform] duration-500 sm:h-[600px] xl:h-[800px]",
            transform,
          )}
        >
          {hide ? "?" : "0 1 2 3 4 5 6 7 8 9"}
        </div>
      </div>
    </div>
  );
}
