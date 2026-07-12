import { Database, Eye, ShieldCheck } from "lucide-react";
import Section from "~/components/layout/section";
import { TypographyH1, TypographyLead, TypographyP } from "~/components/ui/typography";

const navigationItems = [
  { id: "overview", label: "Datenschutz auf einen Blick" },
  { id: "hosting", label: "Hosting" },
  { id: "general-information", label: "Allgemeine Hinweise" },
  { id: "website-collection", label: "Datenerfassung auf dieser Website" },
  { id: "chunk-explorer", label: "Chunk Explorer" },
  { id: "minecraft-server", label: "Minecraft-Server" },
  { id: "newsletter", label: "Newsletter" },
  { id: "plugins-tools", label: "Plugins und Tools" },
];

export default function PrivacyPage() {
  return (
    <Section className="relative w-full overflow-hidden px-6 py-10 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(253,224,71,0.14),_transparent_28%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 self-stretch">
        
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-5 rounded-lg bg-[#E8DDFF] p-[20px_10px_10px_10px] text-center sm:gap-10 sm:p-[50px_40px_40px_40px] md:flex-row xl:gap-20">
          <div className="flex flex-col items-center justify-center text-center sm:gap-3 xl:justify-start xl:text-left">
            <TypographyH1 className="w-full">
              <span className="xl:text-[64px]">Datenschutzerklärung</span>
            </TypographyH1>
            <TypographyP className="max-w-2xl text-base leading-7">
              Diese Seite fasst zusammen, welche personenbezogenen Daten wir
              auf chunks.space, im Chunk Explorer und auf unserem
              Minecraft-Server verarbeiten, warum wir das tun und welche
              Rechte Sie dabei haben.
            </TypographyP>
          </div>
        </div>
              
        <div className="grid w-full gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="h-fit lg:sticky lg:top-24">
            <TypographyP className="text-bold">
              Inhaltsverzeichnis
            </TypographyP>
            <nav className="mt-4 flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="w-full space-y-6">
            
            <div className="w-full">
              <div className="prose prose-slate max-w-none text-base prose-headings:font-fira-sans prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-sky-700 prose-a:no-underline hover:prose-a:text-sky-900 prose-strong:text-slate-900 prose-li:text-slate-700 dark:prose-headings:text-white dark:prose-p:text-slate-300 dark:prose-a:text-sky-300 dark:hover:prose-a:text-sky-200 dark:prose-strong:text-white dark:prose-li:text-slate-300 [&>h2:first-of-type]:mt-0 [&>h2:first-of-type]:border-t-0 [&>h2:first-of-type]:pt-0 [&>h2]:mt-14 [&>h2]:scroll-mt-28 [&>h2]:border-t [&>h2]:border-slate-200 [&>h2]:pt-10 [&>h2]:text-3xl dark:[&>h2]:border-white/10 [&>h3]:mt-8 [&>h3]:text-xl [&>h4]:mt-6 [&>h4]:text-base [&>ul]:rounded-[1.25rem] [&>ul]:border [&>ul]:border-slate-200/80 [&>ul]:bg-slate-50/80 [&>ul]:px-6 [&>ul]:py-4 dark:[&>ul]:border-white/10 dark:[&>ul]:bg-white/5">
                <h2 id="overview">1. Datenschutz auf einen Blick</h2>
                <h3>Allgemeine Hinweise</h3>{" "}
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                <h3>Datenerfassung auf dieser Website</h3>{" "}
                <h4>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </h4>{" "}
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  „Hinweis zur Verantwortlichen Stelle“ in dieser
                  Datenschutzerklärung entnehmen.
                </p>{" "}
                <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung
                  beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                  sind vor allem technische Daten (z. B. Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                  dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>
                <h4>Wofür nutzen wir Ihre Daten?</h4>{" "}
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>{" "}
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </p>
                <h3>Analyse-Tools und Tools von Dritt­anbietern</h3>{" "}
                <p>
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                  ausgewertet werden. Das geschieht vor allem mit sogenannten
                  Analyseprogrammen.
                </p>{" "}
                <p>
                  Detaillierte Informationen zu diesen Analyseprogrammen finden
                  Sie in der folgenden Datenschutzerklärung.
                </p>
                <h2 id="hosting">2. Hosting</h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3>Hetzner</h3>{" "}
                <p>
                  Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
                  Gunzenhausen (nachfolgend Hetzner).
                </p>{" "}
                <p>
                  Details entnehmen Sie der Datenschutzerklärung von Hetzner:{" "}
                  <a
                    href="https://www.hetzner.com/de/rechtliches/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.hetzner.com/de/rechtliches/datenschutz
                  </a>
                  .
                </p>{" "}
                <p>
                  Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
                  einer möglichst zuverlässigen Darstellung unserer Website.
                  Sofern eine entsprechende Einwilligung abgefragt wurde,
                  erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
                  6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die
                  Einwilligung die Speicherung von Cookies oder den Zugriff auf
                  Informationen im Endgerät des Nutzers (z. B.
                  Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                  Einwilligung ist jederzeit widerrufbar.
                </p>
                <h2 id="general-information">
                  3. Allgemeine Hinweise und Pflicht­informationen
                </h2>
                <h3>Datenschutz</h3>{" "}
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>{" "}
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene
                  personenbezogene Daten erhoben. Personenbezogene Daten sind
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten
                  wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                  und zu welchem Zweck das geschieht.
                </p>{" "}
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet
                  (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                  Zugriff durch Dritte ist nicht möglich.
                </p>
                <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                </p>{" "}
                <p>
                  Ekhlas Ahmed
                  <br />
                  c/o COCENTER
                  <br />
                  Koppoldstr. 1<br />
                  86551 Aichach
                </p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@chunks.space">info@chunks.space</a>
                  <br />
                  Telefon: +49 162 8530930
                </p>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische
                  Person, die allein oder gemeinsam mit anderen über die Zwecke
                  und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                  Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
                <h3>Speicherdauer</h3>{" "}
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                  Daten bei uns, bis der Zweck für die Datenverarbeitung
                  entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                  machen oder eine Einwilligung zur Datenverarbeitung
                  widerrufen, werden Ihre Daten gelöscht, sofern wir keine
                  anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                  personenbezogenen Daten haben (z. B. steuer- oder
                  handelsrechtliche Aufbewahrungsfristen); im letztgenannten
                  Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
                <h3>
                  Allgemeine Hinweise zu den Rechtsgrundlagen der
                  Datenverarbeitung auf dieser Website
                </h3>{" "}
                <p>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben,
                  verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                  Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                  sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                  verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                  in die Übertragung personenbezogener Daten in Drittstaaten
                  erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                  49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                  Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                  (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
                  die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                  TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
                  Daten zur Vertragserfüllung oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                  Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                  Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                  Erfüllung einer rechtlichen Verpflichtung erforderlich sind
                  auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                  Datenverarbeitung kann ferner auf Grundlage unseres
                  berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                  erfolgen. Über die jeweils im Einzelfall einschlägigen
                  Rechtsgrundlagen wird in den folgenden Absätzen dieser
                  Datenschutzerklärung informiert.
                </p>
                <h3>Empfänger von personenbezogenen Daten</h3>{" "}
                <p>
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                  verschiedenen externen Stellen zusammen. Dabei ist teilweise
                  auch eine Übermittlung von personenbezogenen Daten an diese
                  externen Stellen erforderlich. Wir geben personenbezogene
                  Daten nur dann an externe Stellen weiter, wenn dies im Rahmen
                  einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich
                  hierzu verpflichtet sind (z. B. Weitergabe von Daten an
                  Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art.
                  6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
                  sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                  Einsatz von Auftragsverarbeitern geben wir personenbezogene
                  Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags
                  über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                  Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
                  geschlossen.
                </p>
                <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                  ausdrücklichen Einwilligung möglich. Sie können eine bereits
                  erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>
                <h3>
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                  sowie gegen Direktwerbung (Art. 21 DSGVO)
                </h3>{" "}
                <p>
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1
                  lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht,
                  aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                  gegen die Verarbeitung Ihrer personenbezogenen Daten
                  Widerspruch einzulegen; dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling. Die jeweilige
                  Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen
                  Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
                  einlegen, werden wir Ihre betroffenen personenbezogenen Daten
                  nicht mehr verarbeiten, es sei denn, wir können zwingende
                  schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
                  Interessen, Rechte und Freiheiten überwiegen oder die
                  Verarbeitung dient der Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21
                  Abs. 1 DSGVO).
                </p>{" "}
                <p>
                  Werden Ihre personenbezogenen Daten verarbeitet, um
                  Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
                  Widerspruch gegen die Verarbeitung Sie betreffender
                  personenbezogener Daten zum Zwecke derartiger Werbung
                  einzulegen; dies gilt auch für das Profiling, soweit es mit
                  solcher Direktwerbung in Verbindung steht. Wenn Sie
                  widersprechen, werden Ihre personenbezogenen Daten
                  anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
                  (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                </p>
                <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>{" "}
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                  ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
                  in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                  Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  Das Beschwerderecht besteht unbeschadet anderweitiger
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
                <h3>Recht auf Daten­übertrag­barkeit</h3>{" "}
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                  Einwilligung oder in Erfüllung eines Vertrags automatisiert
                  verarbeiten, an sich oder an einen Dritten in einem gängigen,
                  maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                  direkte Übertragung der Daten an einen anderen
                  Verantwortlichen verlangen, erfolgt dies nur, soweit es
                  technisch machbar ist.
                </p>
                <h3>Auskunft, Berichtigung und Löschung</h3>{" "}
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                  jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, deren Herkunft und
                  Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                  Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                  sowie zu weiteren Fragen zum Thema personenbezogene Daten
                  können Sie sich jederzeit an uns wenden.
                </p>
                <h3>Recht auf Einschränkung der Verarbeitung</h3>{" "}
                <p>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                  jederzeit an uns wenden. Das Recht auf Einschränkung der
                  Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul>
                  <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                    personenbezogenen Daten bestreiten, benötigen wir in der
                    Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                    haben Sie das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten
                    unrechtmäßig geschah/geschieht, können Sie statt der
                    Löschung die Einschränkung der Datenverarbeitung verlangen.
                  </li>
                  <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                    Sie sie jedoch zur Ausübung, Verteidigung oder
                    Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
                    Recht, statt der Löschung die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                    eingelegt haben, muss eine Abwägung zwischen Ihren und
                    unseren Interessen vorgenommen werden. Solange noch nicht
                    feststeht, wessen Interessen überwiegen, haben Sie das
                    Recht, die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                  </li>
                </ul>
                <p>
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                  eingeschränkt haben, dürfen diese Daten – von ihrer
                  Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                  natürlichen oder juristischen Person oder aus Gründen eines
                  wichtigen öffentlichen Interesses der Europäischen Union oder
                  eines Mitgliedstaats verarbeitet werden.
                </p>
                <h3>SSL- bzw. TLS-Verschlüsselung</h3>{" "}
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte, wie zum Beispiel
                  Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                  senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die
                  Adresszeile des Browsers von „http://“ auf „https://“ wechselt
                  und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>{" "}
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
                  die Daten, die Sie an uns übermitteln, nicht von Dritten
                  mitgelesen werden.
                </p>
                <h2 id="website-collection">
                  4. Datenerfassung auf dieser Website
                </h2>
                <h3>Cookies</h3>{" "}
                <p>
                  Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
                  sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
                  Schaden an. Sie werden entweder vorübergehend für die Dauer
                  einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                  Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
                  werden nach Ende Ihres Besuchs automatisch gelöscht.
                  Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis
                  Sie diese selbst löschen oder eine automatische Löschung durch
                  Ihren Webbrowser erfolgt.
                </p>{" "}
                <p>
                  Cookies können von uns (First-Party-Cookies) oder von
                  Drittunternehmen stammen (sog. Third-Party-Cookies).
                  Third-Party-Cookies ermöglichen die Einbindung bestimmter
                  Dienstleistungen von Drittunternehmen innerhalb von Webseiten
                  (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>{" "}
                <p>
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
                  technisch notwendig, da bestimmte Webseitenfunktionen ohne
                  diese nicht funktionieren würden (z. B. die Warenkorbfunktion
                  oder die Anzeige von Videos). Andere Cookies können zur
                  Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet
                  werden.
                </p>{" "}
                <p>
                  Cookies, die zur Durchführung des elektronischen
                  Kommunikationsvorgangs, zur Bereitstellung bestimmter, von
                  Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion)
                  oder zur Optimierung der Website (z. B. Cookies zur Messung
                  des Webpublikums) erforderlich sind (notwendige Cookies),
                  werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                  gespeichert, sofern keine andere Rechtsgrundlage angegeben
                  wird. Der Websitebetreiber hat ein berechtigtes Interesse an
                  der Speicherung von notwendigen Cookies zur technisch
                  fehlerfreien und optimierten Bereitstellung seiner Dienste.
                  Sofern eine Einwilligung zur Speicherung von Cookies und
                  vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
                  erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                  TDDDG); die Einwilligung ist jederzeit widerrufbar.
                </p>{" "}
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das
                  Setzen von Cookies informiert werden und Cookies nur im
                  Einzelfall erlauben, die Annahme von Cookies für bestimmte
                  Fälle oder generell ausschließen sowie das automatische
                  Löschen der Cookies beim Schließen des Browsers aktivieren.
                  Bei der Deaktivierung von Cookies kann die Funktionalität
                  dieser Website eingeschränkt sein.
                </p>{" "}
                <p>
                  Welche Cookies und Dienste auf dieser Website eingesetzt
                  werden, können Sie dieser Datenschutzerklärung entnehmen.
                </p>
                <h3>Server-Log-Dateien</h3>{" "}
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul>
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen
                  wird nicht vorgenommen.
                </p>{" "}
                <p>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                  Interesse an der technisch fehlerfreien Darstellung und der
                  Optimierung seiner Website – hierzu müssen die
                  Server-Log-Files erfasst werden.
                </p>
                <h3>Kontaktformular</h3>{" "}
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von
                  Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                  Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                  abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>{" "}
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                  bei uns, bis Sie uns zur Löschung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck für die
                  Datenspeicherung entfällt (z. B. nach abgeschlossener
                  Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                  – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
                <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren,
                  wird Ihre Anfrage inklusive aller daraus hervorgehenden
                  personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                  Bearbeitung Ihres Anliegens bei uns gespeichert und
                  verarbeitet. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>{" "}
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                  Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                  abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>{" "}
                <p>
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                  verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck für die
                  Datenspeicherung entfällt (z. B. nach abgeschlossener
                  Bearbeitung Ihres Anliegens). Zwingende gesetzliche
                  Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
                  bleiben unberührt.
                </p>
                <h2 id="chunk-explorer">5. Datenerhebung im Chunk Explorer</h2>
                <h3>Wie erfassen wir Ihre Daten?</h3>{" "}
                <p>
                  Um den Chunk Explorer zu nutzen, melden Sie sich mit Ihrem
                  Microsoft-Konto an. Im Rahmen dieses Anmeldeprozesses erhalten
                  und speichern wir grundlegende Kontoinformationen, die uns von
                  Microsoft bereitgestellt werden, darunter Ihre E-Mail-Adresse
                  sowie die Ihrem Microsoft-Konto zugeordnete eindeutige
                  Kennung.
                </p>
                <p>
                  Wenn Sie den Chunk Explorer verwenden, erfassen wir außerdem
                  Daten, die Sie im Rahmen der Nutzung des Dienstes
                  bereitstellen. Dazu zählen beispielsweise
                  Minecraft-Serverdateien, die Sie hochladen,
                  Serverkonfigurationen, Projekteinstellungen sowie sonstige
                  Inhalte, die für das Hosting Ihrer Minecraft-Server
                  erforderlich sind.
                </p>
                <p>
                  Weitere Daten werden automatisch erhoben, während Sie den
                  Dienst nutzen. Hierbei handelt es sich insbesondere um
                  technische Informationen wie Ihre IP-Adresse,
                  Browserinformationen, Zugriffslogs und Nutzungsdaten, die für
                  den Betrieb, die Sicherheit und die Zuverlässigkeit der
                  Plattform erforderlich sind.
                </p>
                <p>
                  Wenn Sie sich künftig entscheiden, optionale
                  Drittanbieterdienste zu verbinden, können die damit
                  verknüpften Kontoverbindungen von Ihnen verwaltet und
                  jederzeit wieder entfernt werden.
                </p>
                <h3>Wofür nutzen wir Ihre Daten?</h3>{" "}
                <p>
                  Wir verarbeiten und speichern Ihre Daten, um die Plattform
                  Chunk Explorer bereitzustellen und zu betreiben. Dazu gehört
                  insbesondere das Hosting und die Verwaltung von durch Nutzer
                  hochgeladenen Minecraft-Servern.
                </p>
                <p>
                  Die Informationen Ihres Microsoft-Kontos verwenden wir, um Ihr
                  Konto zu authentifizieren, Sie innerhalb des Dienstes zu
                  identifizieren und Ihnen wichtige Informationen im
                  Zusammenhang mit Ihrem Konto zu übermitteln.
                </p>
                <p>
                  Hochgeladene Serverdateien und Konfigurationsdaten werden
                  ausschließlich dazu verwendet, Ihre Minecraft-Server
                  bereitzustellen und zu betreiben.
                </p>
                <p>
                  Technische Daten werden verarbeitet, um die Sicherheit,
                  Stabilität und Leistungsfähigkeit der Plattform zu
                  gewährleisten, Missbrauch zu erkennen, unbefugten Zugriff zu
                  verhindern und Verstöße gegen unsere Nutzungsbedingungen zu
                  untersuchen.
                </p>
                <p>
                  Bestimmte Informationen, wie Ihr öffentliches Profil,
                  veröffentlichte Minecraft-Erlebnisse, Serverbeschreibungen,
                  Statistiken und Creator-Informationen, können für andere
                  Nutzer der Plattform öffentlich sichtbar sein, um
                  Entdeckungsfunktionen und weitere Community-Funktionen
                  bereitzustellen.
                </p>
                <h2 id="minecraft-server">
                  6. Datenerhebung auf unserem Minecraft-Server
                </h2>
                <h3>Wie erfassen wir Ihre Daten?</h3>{" "}
                <p>
                  Alle auf unserem Minecraft-Server erhobenen Daten werden
                  ausschließlich in Verbindung mit Ihrem Minecraft-Profil, also
                  der UUID Ihres Accounts, gespeichert.
                </p>
                <p>
                  Einige Daten werden erhoben, wenn Sie diese durch Ihre Nutzung
                  des Servers aktiv bereitstellen. Dazu zählen beispielsweise
                  Ihr Spielfortschritt und Ihre Interaktionen innerhalb des
                  Spiels.
                </p>
                <p>
                  Andere Daten werden automatisch erhoben, wenn Sie unserem
                  Minecraft-Server beitreten. Hierbei handelt es sich
                  insbesondere um technische Informationen wie Ihre
                  Spielversion, Ihre IP-Adresse und Verbindungsdaten.
                </p>
                <p>
                  Darüber hinaus speichern wir Verknüpfungen zu optionalen
                  Drittanbieterdiensten, etwa Discord. Diese Kontoverbindungen
                  werden vom Nutzer verwaltet und können jederzeit entfernt
                  werden.
                </p>
                <h3>Wofür nutzen wir Ihre Daten?</h3>{" "}
                <p>
                  Wir verarbeiten und speichern Ihre Daten, um unseren
                  Minecraft-Server zu betreiben, zu warten und
                  Sicherheitsmaßnahmen gegen Hacking, Missbrauch und andere
                  Verstöße gegen unsere Serverregeln umzusetzen.
                </p>
                <p>
                  Bestimmte Informationen, wie Spielerstatistiken, Ränge und
                  Spielfortschritt, können öffentlich sichtbar sein und
                  verwendet werden, um Funktionen wie Bestenlisten
                  bereitzustellen.
                </p>
                <h2 id="newsletter">7. Newsletter</h2>
                <h3>Newsletter­daten</h3>{" "}
                <p>
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen
                  möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
                  Informationen, welche uns die Überprüfung gestatten, dass Sie
                  der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                  Empfang des Newsletters einverstanden sind. Weitere Daten
                  werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese
                  Daten verwenden wir ausschließlich für den Versand der
                  angeforderten Informationen und geben diese nicht an Dritte
                  weiter.
                </p>{" "}
                <p>
                  Die Verarbeitung der in das Newsletteranmeldeformular
                  eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
                  Einwilligung zur Speicherung der Daten, der E-Mail-Adresse
                  sowie deren Nutzung zum Versand des Newsletters können Sie
                  jederzeit widerrufen, etwa über den „Austragen“-Link im
                  Newsletter. Die Rechtmäßigkeit der bereits erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>{" "}
                <p>
                  Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                  hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
                  dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter
                  gespeichert und nach der Abbestellung des Newsletters oder
                  nach Zweckfortfall aus der Newsletterverteilerliste gelöscht.
                  Wir behalten uns vor, E-Mail-Adressen aus unserem
                  Newsletterverteiler nach eigenem Ermessen im Rahmen unseres
                  berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu
                  löschen oder zu sperren.
                </p>{" "}
                <p>
                  Daten, die zu anderen Zwecken bei uns gespeichert wurden,
                  bleiben hiervon unberührt.
                </p>{" "}
                <p>
                  Nach Ihrer Austragung aus der Newsletterverteilerliste wird
                  Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter
                  ggf. in einer Blacklist gespeichert, sofern dies zur
                  Verhinderung künftiger Mailings erforderlich ist. Die Daten
                  aus der Blacklist werden nur für diesen Zweck verwendet und
                  nicht mit anderen Daten zusammengeführt. Dies dient sowohl
                  Ihrem Interesse als auch unserem Interesse an der Einhaltung
                  der gesetzlichen Vorgaben beim Versand von Newslettern
                  (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f
                  DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht
                  befristet.{" "}
                  <strong>
                    Sie können der Speicherung widersprechen, sofern Ihre
                    Interessen unser berechtigtes Interesse überwiegen.
                  </strong>
                </p>
                <h2 id="plugins-tools">8. Plugins und Tools</h2>
                <h3>YouTube mit erweitertem Datenschutz</h3>{" "}
                <p>
                  Diese Website bindet Videos der Website YouTube ein. Betreiber
                  der Website ist die Google Ireland Limited („Google”), Gordon
                  House, Barrow Street, Dublin 4, Irland.
                </p>
                <p>
                  Wenn Sie eine dieser Website besuchen, auf denen YouTube
                  eingebunden ist, wird eine Verbindung zu den Servern von
                  YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt,
                  welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem
                  YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr
                  Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen.
                  Dies können Sie verhindern, indem Sie sich aus Ihrem
                  YouTube-Account ausloggen.
                </p>{" "}
                <p>
                  Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos,
                  die im erweiterten Datenschutzmodus abgespielt werden, werden
                  nach Aussage von YouTube nicht zur Personalisierung des
                  Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten
                  Datenschutzmodus ausgespielt werden, sind ebenfalls nicht
                  personalisiert. Im erweiterten Datenschutzmodus werden keine
                  Cookies gesetzt. Stattdessen werden jedoch sogenannte Local
                  Storage Elemente im Browser des Users gespeichert, die ähnlich
                  wie Cookies personenbezogene Daten beinhalten und zur
                  Wiedererkennung eingesetzt werden können. Details zum
                  erweiterten Datenschutzmodus finden Sie hier:{" "}
                  <a
                    href="https://support.google.com/youtube/answer/171780"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.google.com/youtube/answer/171780
                  </a>
                  .
                </p>
                <p>
                  Gegebenenfalls können nach der Aktivierung eines
                  YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst
                  werden, auf die wir keinen Einfluss haben.
                </p>{" "}
                <p>
                  Die Nutzung von YouTube erfolgt im Interesse einer
                  ansprechenden Darstellung unserer Online-Angebote. Dies stellt
                  ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                  DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt
                  wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
                  von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit
                  die Einwilligung die Speicherung von Cookies oder den Zugriff
                  auf Informationen im Endgerät des Nutzers (z. B.
                  Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                  Einwilligung ist jederzeit widerrufbar.
                </p>{" "}
                <p>
                  Weitere Informationen über Datenschutz bei YouTube finden Sie
                  in deren Datenschutzerklärung unter:{" "}
                  <a
                    href="https://policies.google.com/privacy?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://policies.google.com/privacy?hl=de
                  </a>
                  .
                </p>
                <p>
                  Das Unternehmen verfügt über eine Zertifizierung nach dem
                  „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein
                  Übereinkommen zwischen der Europäischen Union und den USA, der
                  die Einhaltung europäischer Datenschutzstandards bei
                  Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
                  dem DPF zertifizierte Unternehmen verpflichtet sich, diese
                  Datenschutzstandards einzuhalten. Weitere Informationen hierzu
                  erhalten Sie vom Anbieter unter folgendem Link:{" "}
                  <a
                    href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
                  </a>
                </p>
                <p>
                  Quelle:{" "}
                  <a href="[https://www.e-recht24.de](https://www.e-recht24.de/)">
                    [https://www.e-recht24.de](https://www.e-recht24.de/)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
