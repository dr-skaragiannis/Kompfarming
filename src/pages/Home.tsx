import { to } from "../router";
import { img } from "../assets/images";
import { contact, ui, type Lang } from "../data/content";
import Hero from "../components/Hero";
import { Arrow, Button, Container, Eyebrow, SectionHeader } from "../components/ui";

export default function Home({ lang }: { lang: Lang }) {
  const h = ui.home;
  return (
    <>
      <Hero lang={lang} />

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow={h.pillarsEyebrow[lang]} title={h.pillarsTitle[lang]} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {h.pillars.map((p) => (
              <a
                key={p.page}
                href={to(p.page, lang)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line/80 bg-paper-2/40 transition-all duration-300 hover:-translate-y-1 hover:border-ochre/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title[lang]}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl text-ink">{p.title[lang]}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-2">{p.desc[lang]}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    {h.explore[lang]} <Arrow className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Products summary */}
      <section className="border-t border-line/70 bg-paper-2/50 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>{ui.products.eyebrow[lang]}</Eyebrow>
              <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">{ui.products.title[lang]}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{ui.products.sub[lang]}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {ui.products.items.map((p) => (
                  <li key={p.latin} className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-ink">
                    {p.name[lang]}
                  </li>
                ))}
              </ul>
              <Button href={to("products", lang)} className="mt-8">
                {h.allProducts[lang]} <Arrow />
              </Button>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-line/70">
                <img src={img.lentils} alt={ui.products.title[lang]} className="h-[320px] w-full object-cover md:h-[420px]" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services summary (dark) */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-ochre/15 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={ui.services.eyebrow[lang]} title={ui.services.title[lang]} sub={ui.services.sub[lang]} dark />
              <Button href={to("services", lang)} variant="light" className="mt-8">
                {h.allServices[lang]} <Arrow />
              </Button>
            </div>
            <div className="lg:col-span-7">
              <ol className="divide-y divide-paper/10 border-y border-paper/10">
                {ui.services.items.map((s) => (
                  <li key={s.num} className="flex items-baseline gap-6 py-5">
                    <span className="font-display text-sm text-ochre">{s.num}</span>
                    <div>
                      <h3 className="font-display text-2xl text-paper md:text-3xl">{s.title[lang]}</h3>
                      <p className="mt-1.5 text-sm text-paper-3/60">{s.list[lang].join(" · ")}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-4">
                {ui.tech.stats.map((s) => (
                  <div key={s.value} className="bg-ink p-5">
                    <div className="font-display text-2xl text-paper md:text-3xl">{s.value}</div>
                    <div className="mt-1.5 text-xs text-paper-3/60">{s.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About summary */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-line/70">
                <img src={img.farmer} alt={ui.about.title[lang]} className="h-[380px] w-full object-cover md:h-[520px]" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
              <Eyebrow>{h.aboutEyebrow[lang]}</Eyebrow>
              <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">{h.aboutTitle[lang]}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">{h.aboutText[lang]}</p>
              <blockquote className="mt-8 border-l-2 border-ochre pl-5">
                <p className="font-display text-xl italic leading-snug text-ink md:text-2xl">{ui.about.quote[lang]}</p>
              </blockquote>
              <Button href={to("about", lang)} variant="secondary" className="mt-8">
                {h.aboutCta[lang]} <Arrow />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="border-t border-line/70 bg-paper-2/50 py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-line/80 bg-paper p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-ink md:text-4xl">{h.ctaTitle[lang]}</h2>
              <p className="mt-3 text-ink-2">{h.ctaText[lang]}</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a href={contact.phoneHref} className="font-display text-2xl text-ink underline-offset-4 hover:underline">
                {contact.phone}
              </a>
              <Button href={to("contact", lang)}>
                {h.ctaButton[lang]} <Arrow />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
