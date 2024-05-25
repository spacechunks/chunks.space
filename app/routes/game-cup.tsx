import Hero from "~/components/layout/hero";
import FaqSection from "~/sections/game-cup/faq-section";
import Footer from "~/components/layout/footer";

export default function GameCupPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <Hero />
      <FaqSection />
      <Footer />
    </div>
  );
}
