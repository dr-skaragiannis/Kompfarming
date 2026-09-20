import { img } from "../assets/images";
import { contact, ui, type Lang } from "../data/content";
import { Container, Eyebrow } from "./ui";

export default function About({ lang }: { lang: Lang }) {
  const t = ui.about;
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
            <h2 className="font-display mt-4 text-5xl text-ink md:text-6xl">{t.title[lang]}</h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-2">{t.p1[lang]}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">{t.p2[lang]}</p>

            <blockquote className="mt-10 border-l-2 border-ochre pl-6">
              <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">{t.quote[lang]}</p>
              <footer className="mt-4 text-sm text-ink-3">
                — {lang === "el" ? "Παραγωγός οσπρίων, Φάρσαλα" : "Pulse grower, Farsala"}
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-line/80 bg-paper-2/50">
              <img
                src={img.farmer}
                alt="Κώστας Μπρέλλας – KOMP Farming, Άγιος Κωνσταντίνος Φαρσάλων"
                className="h-56 w-full object-cover"
              />
              <dl className="divide-y divide-line/70 px-6">
                {t.facts.map((f) => (
                  <div key={f.k.en} className="grid grid-cols-3 gap-4 py-4">
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-3">{f.k[lang]}</dt>
                    <dd className="col-span-2 text-sm text-ink">{f.v[lang]}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex gap-2 p-6 pt-2">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink-2 transition hover:border-ink hover:text-ink"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink-2 transition hover:border-ink hover:text-ink"
                >
                  Facebook ↗
                </a>
                <a
                  href={contact.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink-2 transition hover:border-ink hover:text-ink"
                >
                  YouTube ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
