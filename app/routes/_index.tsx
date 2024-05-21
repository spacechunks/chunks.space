import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/layout/hero";
import Footer from "~/components/layout/footer";
import InfoSection from "~/sections/index/InfoSection";
import ExperienceSection from "~/sections/index/ExperienceSection";
import GameCupSection from "~/sections/index/GameCupSection";

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
      <Footer />
    </div>
  );
}
