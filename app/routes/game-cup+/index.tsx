import FaqSection from "~/routes/game-cup+/components/sections/faq-section";
import Footer from "~/components/layout/footer";
import ParticipantsSection from "~/routes/game-cup+/components/sections/participants-section";
import TimerSection from "~/routes/game-cup+/components/sections/timer-section";
import type { MetaFunction } from "@remix-run/node";
import GameCupHero from "~/routes/game-cup+/components/game-cup-hero";
import ogFacebook from "~/assets/images/og-game-cup-facebook.png";
import ogTwitter from "~/assets/images/og-game-cup-twitter.png";
import ApplySection from "~/routes/game-cup+/components/sections/apply-section";
import FinaleSection from "~/routes/game-cup+/components/sections/finale-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks Game Cup" },
    {
      name: "description",
      content:
        "Calling all developers and game designers! Enter our Minecraft Minigame Competition and build something extraordinary in just 2 weeks. Impress us with your creativity and innovation, and you could take home a €150 prize. Start applying today!",
    },
    {
      name: "theme-color",
      content: "#3D365C",
    },
    // Facebook Open Graph Meta Tags
    { property: "og:title", content: "Space Chunks" },
    {
      property: "og:description",
      content:
        "Calling all developers and game designers! Enter our Minecraft Minigame Competition and build something extraordinary in just 2 weeks. Impress us with your creativity and innovation, and you could take home a €150 prize. Start applying today!",
    },
    { property: "og:image", content: ogFacebook },
    { property: "og:image:alt", content: "Space Chunks" },
    { property: "og:url", content: "https://chunks.space" },
    { property: "og:type", content: "website" },
    // Twitter Card Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@spacechunksteam" },
    { name: "twitter:title", content: "Space Chunks" },
    {
      name: "twitter:description",
      content:
        "Calling all developers and game designers! Enter our Minecraft Minigame Competition and build something extraordinary in just 2 weeks. Impress us with your creativity and innovation, and you could take home a €150 prize. Start applying today!",
    },
    { name: "twitter:image", content: ogTwitter },
    // Discord Meta Tags
    { property: "og:site_name", content: "Space Chunks" },
    // General Meta Tags (these get picked up by various platforms including Discord)
    { property: "og:locale", content: "en_US" },
  ];
};

export default function GameCupPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <GameCupHero />
      <TimerSection />
      {/*<InfoSection />*/}
      <FinaleSection />
      <ParticipantsSection />
      <FaqSection />
      <ApplySection />
      <Footer />
    </div>
  );
}
