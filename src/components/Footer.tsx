import { to } from "../router";
import { contact, ui, type Lang } from "../data/content";
import { Logo } from "./Nav";
import { Container } from "./ui";

export default function Footer({ lang }: { lang: Lang }) {
  const t = ui.footer;
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[420px] w-[420px] rounded-full bg-ochre/10 blur-3xl" />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light lang={lang} />
            <p className="font-display mt-6 max-w-sm text-2xl leading-snug text-paper-3/90">{t.tagline[lang]}</p>
            <p className="mt-8 text-sm leading-relaxed text-paper-3/60">
              {contact.name[lang]}
              <br />
              {contact.village[lang]}, {contact.town[lang]}
              <br />
              <a href={contact.phoneHref} className="transition hover:text-paper">{contact.phone}</a>
              <br />
              <a href={`mailto:${contact.email}`} className="transition hover:text-paper">{contact.email}</a>
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">Menu</h4>
            <ul className="mt-5 space-y-3 text-sm text-paper-3/70">
              <li><a href={to("products", lang)} className="transition hover:text-paper">{ui.nav.products[lang]}</a></li>
              <li><a href={to("services", lang)} className="transition hover:text-paper">{ui.nav.services[lang]}</a></li>
              <li><a href={to("knowledge", lang)} className="transition hover:text-paper">{ui.nav.knowledge[lang]}</a></li>
              <li><a href={to("about", lang)} className="transition hover:text-paper">{ui.nav.about[lang]}</a></li>
              <li><a href={to("contact", lang)} className="transition hover:text-paper">{ui.nav.contact[lang]}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">{t.tags[lang]}</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {[...ui.marquee[lang], "Mediterranean food"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper-3/70 transition hover:border-paper/40 hover:text-paper"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
              {ui.contactSection.labels.social[lang]}
            </h4>
            <div className="mt-4 flex gap-5 text-sm text-paper-3/70">
              <a href={contact.facebook} target="_blank" rel="noreferrer" className="transition hover:text-paper">Facebook ↗</a>
              <a href={contact.youtube} target="_blank" rel="noreferrer" className="transition hover:text-paper">YouTube ↗</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-paper">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper-3/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kompfarming.gr — {t.rights[lang]}</span>
          <span>Agios Konstantinos, Farsala 40300, Thessaly, Greece</span>
        </div>
      </Container>
    </footer>
  );
}
