import Hero from "~/routes/_index+/components/hero";
import FaqSection from "~/routes/game-cup+/components/sections/faq-section";
import Footer from "~/components/layout/footer";
import ParticipantsSection from "~/routes/game-cup+/components/sections/participants-section";
import TimerSection from "~/routes/game-cup+/components/sections/timer-section";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks Game Cup" },
    {
      name: "description",
      content:
        "Join the Space Chunks Game Cup and compete against other players to win prizes!",
    },
  ];
};

export default function GameCupPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <Hero />
      <TimerSection />
      <ParticipantsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
