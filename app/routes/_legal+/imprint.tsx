import Section from "~/components/layout/section";
import { TypographyH1 } from "~/components/ui/typography";

export default function ImprintPage() {
  return (
    <Section>
      <TypographyH1>Impressum</TypographyH1>
      <div className="prose container">
        <p>
          Ekhlas Ahmed
          <br />
          c/o COCENTER
          <br />
          Koppoldstr. 1<br />
          86551 Aichach
        </p>

        <h2>Vertreten durch</h2>
        <p>Ekhlas Ahmed</p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@chunks.space">info@chunks.space</a>
          <br />
          Telefon: +49 162 8530930
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <p>
          Dieses Impressum gilt auch für die Webseiten{" "}
          <a href="https://simplecloud.app">simplecloud.app</a> und{" "}
          <a href="https://strela.dev">strela.dev</a>.
        </p>
      </div>
    </Section>
  );
}
