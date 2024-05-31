import Footer from "~/components/layout/footer";
import { Outlet } from "@remix-run/react";
import LegalHero from "~/routes/_legal+/components/legal-hero";

export default function ImprintPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <LegalHero />
      <div className="prose-headings:text-mystical-normal prose-a:text-primary">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
