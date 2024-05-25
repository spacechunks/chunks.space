import Hero from "~/routes/_index+/components/hero";
import FaqSection from "~/routes/game-cup+/components/sections/faq-section";
import Footer from "~/components/layout/footer";
import ParticipantsSection from "~/routes/game-cup+/components/sections/participants-section";

export default function GameCupPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <Hero />
      <ParticipantsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
