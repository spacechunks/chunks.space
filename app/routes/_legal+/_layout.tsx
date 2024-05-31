import Footer from "~/components/layout/footer";
import { Outlet } from "@remix-run/react";
import LegalHero from "~/routes/_legal+/components/legal-hero";
import { TypographyProse } from "~/components/ui/typography";

export default function ImprintPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <LegalHero />
      <TypographyProse>
        <Outlet />
      </TypographyProse>
      <Footer />
    </div>
  );
}
