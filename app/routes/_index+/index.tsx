import type { MetaFunction } from "@remix-run/node";
import IndexHero from "~/routes/_index+/components/index-hero";
import Footer from "~/components/layout/footer";
import AboutSection from "~/routes/_index+/components/sections/about-section";
import ExperienceSection from "~/routes/_index+/components/sections/experience-section";
import GameCupSection from "~/routes/_index+/components/sections/game-cup-section";
import TeamSection from "~/routes/_index+/components/sections/team-section";
import FaqSection from "~/routes/_index+/components/sections/faq-section";
import ContactSection from "~/routes/_index+/components/sections/contact-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks" },
    { name: "description", content: "Welcome to Space Chunks!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <IndexHero />
      <AboutSection />
      <ExperienceSection />
      <GameCupSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
