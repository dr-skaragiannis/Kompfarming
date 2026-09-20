import { img } from "../assets/images";
import { contact, ui, type Lang } from "../data/content";
import { Arrow, Button, Container, SectionHeader } from "./ui";

export default function Contact({ lang }: { lang: Lang }) {
  const t = ui.contactSection;

  const cards = [
    {
      label: t.labels.phone[lang],
      value: contact.phone,
      href: contact.phoneHref,
      hint: lang === "el" ? "Καθημερινά, όλο τον χρόνο" : "Every day, year round",
      icon: (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      ),
    },
    {
      label: t.labels.email[lang],
      value: contact.email,
      href: `mailto:${contact.email}`,
      hint: lang === "el" ? "Απάντηση εντός 24 ωρών" : "Reply within 24 hours",
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      ),
    },
    {
      label: t.labels.address[lang],
      value: `${contact.village[lang]}, ${contact.town[lang]}`,
      href: "https://www.google.com/maps/search/?api=1&query=Agios+Konstantinos+Farsala+40300",
      hint: contact.region[lang],
      external: true,
      icon: (
        <>
          <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={t.eyebrow[lang]} title={t.title[lang]} sub={t.sub[lang]} />
            <p className="font-display mt-10 text-3xl text-ink">{contact.name[lang]}</p>
            <p className="mt-1 text-sm text-ink-3">
              {lang === "el" ? "Ιδρυτής & Διευθυντής, KOMP Farming" : "Founder & Manager, KOMP Farming"}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={contact.phoneHref}>
                {lang === "el" ? "Καλέστε τώρα" : "Call now"} <Arrow />
              </Button>
              <Button href={`mailto:${contact.email}`} variant="secondary">
                {lang === "el" ? "Στείλτε email" : "Send an email"}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className={
                    "group flex flex-col rounded-2xl border border-line/80 bg-paper-2/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ochre/50 hover:bg-paper-2/80 md:p-7 " +
                    (i === 2 ? "sm:col-span-2" : "")
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ochre-soft text-ochre-2 transition group-hover:bg-ochre group-hover:text-paper">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        {c.icon}
                      </svg>
                    </div>
                    <Arrow className="text-ink-3 transition group-hover:translate-x-1 group-hover:text-ink" />
                  </div>
                  <span className="mt-6 text-xs font-medium uppercase tracking-wider text-ink-3">{c.label}</span>
                  <span className="font-display mt-1.5 break-words text-2xl text-ink">{c.value}</span>
                  <span className="mt-1 text-sm text-ink-3">{c.hint}</span>
                </a>
              ))}

              <div className="overflow-hidden rounded-2xl border border-line/80 sm:col-span-2">
                <img
                  src={img.village}
                  alt="Κάμπος Φαρσάλων, Θεσσαλία"
                  className="h-44 w-full object-cover md:h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
