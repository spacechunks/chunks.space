import Section from "~/components/layout/section";
import {TypographyH1, TypographyLead} from "~/components/ui/typography";

export default function TimerSection() {
    return (
        <Section>
            <div className="mx-auto w-full flex-col flex gap-5 sm:gap-10 xl:gap-20 items-center text-center justify-between md:flex-row rounded-lg bg-[#E8DDFF] p-[20px_10px_10px_10px] sm:p-[50px_40px_40px_40px]">
                <div className="flex flex-col sm:gap-3 items-center justify-center text-center xl:text-left xl:justify-start">
                    <TypographyH1 className="w-full"><span className="xl:text-[64px]">SEASON 1</span></TypographyH1>
                    <TypographyLead className="w-full">
                        <span className="text-sm sm:text-base xl:text-[24px] xl:font-[500]">
                            Starting on Monday, 6. Juli 2024
                        </span>
                    </TypographyLead>
                </div>
                <div className="flex shrink items-center justify-center gap-[10px] sm:gap-[20px] xl:gap-[30px]">
                    <TimerCard first={1} second={8} text={"DAYS"}/>
                    <TimerCard first={2} second={3} text={"HOURS"}/>
                    <TimerCard first={1} second={4} text={"MINUTES"}/>
                </div>
            </div>
        </Section>
    );
}

function TimerCard({first, second, text}: {first: number, second: number, text: string}) {
    return <div className={"space-y-2"}>
        <div className={"flex gap-[7px] xl:gap-[15px] items-center justify-center"}>
            <TimerDigit digit={first}/>
            <TimerDigit digit={second}/>
        </div>
        <span className={"text-[#3D365C] font-[700] xl:font-[800] text-[13px] sm:text-[24px]"}>
          {text}
        </span>
    </div>
}

function TimerDigit({digit}: {digit: number}) {
    return <div className="text-center w-[32px] sm:w-[60px] xl:w-[80px] h-[50px] sm:h-[80px] xl:h-[100px] font-[500] xl:font-[900] text-4xl sm:text-6xl xl:text-7xl xl:text-[80px] text-white bg-[#2D214E] rounded xl:rounded-xl border-[3px] xl:border-[6px] border-[#2D214E] overflow-hidden">
        <div className="w-full h-full overflow-hidden flex items-center justify-center" style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 0.4) 100%)`
        }}>
            {digit}
        </div>
    </div>
}