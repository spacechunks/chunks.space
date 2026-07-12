import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "~/components/ui/typography";

export default function ImprintPage() {
  return (
    <Section>
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-5 rounded-lg bg-slate-100 p-[20px_10px_10px_10px] text-left sm:gap-10 sm:p-[50px_40px_40px_40px] md:flex-row xl:gap-20">
        <div className="flex flex-col items-start justify-center text-left sm:gap-3 xl:justify-start">
          <TypographyH1 className="w-full">
            <span className="xl:text-[64px]">Impressum</span>
          </TypographyH1>
          <TypographyP className="max-w-2xl text-base leading-7">
            Diese Seite fasst zusammen, welche personenbezogenen Daten wir auf
            chunks.space, im Chunk Explorer und auf unserem Minecraft-Server
            verarbeiten, warum wir das tun und welche Rechte Sie dabei haben.
          </TypographyP>
          <TypographyP>
            Ekhlas Ahmed
            <br />
            c/o COCENTER
            <br />
            Koppoldstr. 1<br />
            86551 Aichach
          </TypographyP>

          <TypographyH2>Vertreten durch</TypographyH2>
          <TypographyP>Ekhlas Ahmed</TypographyP>

          <TypographyH2>Kontakt</TypographyH2>
          <TypographyP>
            E-Mail: <a href="mailto:info@chunks.space">info@chunks.space</a>
            <br />
            Telefon: +49 162 8530930
          </TypographyP>

          <TypographyH2>Urheberrecht</TypographyH2>
          <TypographyP>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </TypographyP>

          <TypographyP>
            Dieses Impressum gilt auch für die Webseiten{" "}
            <a href="https://simplecloud.app">simplecloud.app</a> und{" "}
            <a href="https://strela.dev">strela.dev</a>.
          </TypographyP>
        </div>
      </div>
    </Section>
  );
}
