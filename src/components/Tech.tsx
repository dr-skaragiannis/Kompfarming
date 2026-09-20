import { img } from "../assets/images";
import { ui, type Lang } from "../data/content";
import { Container, SectionHeader } from "./ui";

export default function Tech({ lang }: { lang: Lang }) {
  const t = ui.tech;
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-ochre/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-olive/25 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={t.eyebrow[lang]} title={t.title[lang]} sub={t.sub[lang]} dark />
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:col-span-7">
            {t.stats.map((s) => (
              <div key={s.value} className="bg-ink p-7 md:p-9">
                <div className="font-display text-4xl text-paper md:text-5xl">{s.value}</div>
                <div className="mt-3 text-sm text-paper-3/70">{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-paper/10">
          <img
            src={img.tractor}
            alt="Σπορά με σύγχρονο εξοπλισμό στα Φάρσαλα"
            className="h-[240px] w-full object-cover opacity-90 md:h-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}
