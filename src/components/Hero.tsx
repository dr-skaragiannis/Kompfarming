import { to } from "../router";
import { img } from "../assets/images";
import { ui, type Lang } from "../data/content";
import { Arrow, Button, Container, Eyebrow } from "./ui";

export default function Hero({ lang }: { lang: Lang }) {
  const t = ui.hero;
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow className="fade-up">{t.eyebrow[lang]}</Eyebrow>
            <h1 className="font-display fade-up delay-1 mt-5 text-[2.75rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              {t.title[lang]}
            </h1>
          </div>
          <div className="fade-up delay-2 lg:col-span-4 lg:pb-3">
            <p className="text-lg leading-relaxed text-ink-2">{t.sub[lang]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={to("products", lang)}>
                {t.primary[lang]} <Arrow />
              </Button>
              <Button href={to("services", lang)} variant="secondary">
                {t.secondary[lang]}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <figure className="fade-up delay-3 relative overflow-hidden rounded-3xl border border-line/60">
          <img
            src={img.heroField}
            alt={t.caption[lang]} width={1584} height={672} fetchPriority="high" decoding="async"
            className="h-[52vw] max-h-[620px] min-h-[280px] w-full object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper/85 px-3.5 py-1.5 text-xs text-ink-2 backdrop-blur">
            {t.caption[lang]} — Θεσσαλία
          </figcaption>
        </figure>
      </Container>

      <Marquee lang={lang} />
    </section>
  );
}

function Marquee({ lang }: { lang: Lang }) {
  const items = ui.marquee[lang];
  const row = [...items, ...items, ...items];
  return (
    <div className="mt-12 border-y border-line/70 py-4 md:mt-16">
      <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex shrink-0 items-center gap-10 pr-10">
          {row.map((it, i) => (
            <span key={i} className="font-display flex items-center gap-10 text-2xl text-ink-2">
              {it}
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            </span>
          ))}
        </div>
        <div className="marquee flex shrink-0 items-center gap-10 pr-10" aria-hidden>
          {row.map((it, i) => (
            <span key={i} className="font-display flex items-center gap-10 text-2xl text-ink-2">
              {it}
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-100%);} }
        .marquee { animation: marquee 60s linear infinite; }
      `}</style>
    </div>
  );
}
