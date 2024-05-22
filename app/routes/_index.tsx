import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/layout/hero";
import Footer from "~/components/layout/footer";
import InfoSection from "~/sections/index/info-section";
import ExperienceSection from "~/sections/index/experience-section";
import GameCupSection from "~/sections/index/game-cup-section";
import TeamSection from "~/sections/index/team-section";
import FaqSection from "~/sections/index/faq-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks" },
    { name: "description", content: "Welcome to Space Chunks!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <InfoSection />
      <ExperienceSection />
      <GameCupSection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
