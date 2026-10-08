import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-surface py-14 dark:border-white/10 dark:bg-night-soft/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink dark:text-white">
              <span className="grid size-7 place-items-center rounded-lg bg-accent font-bold text-white">
                K
              </span>
              Kawanua<span className="text-accent">Tech</span>
            </a>
            <p className="mt-4 leading-relaxed text-ink-soft dark:text-white/60">
              {site.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-ink dark:text-white">
                Kontak
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft dark:text-white/60">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <EnvelopeSimple weight="regular" className="size-4 text-accent" />
                    {site.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Phone weight="regular" className="size-4 text-accent" />
                  {site.phoneLabel}
                </li>
                <li className="inline-flex items-start gap-2">
                  <MapPin weight="regular" className="mt-0.5 size-4 shrink-0 text-accent" />
                  {site.address}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink dark:text-white">
                Ikuti Kami
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft dark:text-white/60">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/8 pt-6 text-sm text-ink-soft dark:border-white/10 dark:text-white/50">
          <p>
            &copy; {year} {site.brand}. Dibuat di Manado, Sulawesi Utara.
          </p>
        </div>
      </div>
    </footer>
  );
}
