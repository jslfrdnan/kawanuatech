import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/content/projects";
import { Reveal } from "./Reveal";

function Meta({ category, year }: { category: string; year: string }) {
  return (
    <p className="text-sm font-medium text-ink-soft dark:text-white/55">
      {category} · {year}
    </p>
  );
}

export function Portfolio() {
  const [lead, ...rest] = projects;

  return (
    <section
      id="karya"
      className="scroll-mt-24 border-t border-ink/5 bg-surface py-24 lg:py-32 dark:border-white/5 dark:bg-night-soft/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-3xl font-bold leading-tight tracking-tighter text-ink sm:text-4xl lg:text-5xl dark:text-white">
            Sebagian yang sudah kami kerjakan
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-ink-soft dark:text-white/65">
            Contoh di bawah menggambarkan jenis proyek yang kami tangani.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-5">
          {/* Proyek utama */}
          <Reveal className="md:col-span-3">
            <article className="group h-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink/5 dark:bg-white/5">
                {/* PLACEHOLDER: screenshot asli proyek */}
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-white">
                    {lead.name}
                  </h3>
                  <Meta category={lead.category} year={lead.year} />
                </div>
                <ArrowUpRight
                  weight="bold"
                  className="mt-1 size-6 shrink-0 text-ink-soft transition-colors group-hover:text-accent dark:text-white/50"
                />
              </div>
            </article>
          </Reveal>

          {/* Dua proyek kecil */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-2 md:grid-cols-1">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={0.06 * (i + 1)}>
                <article className="group h-full">
                  <div className="relative aspect-[5/3] overflow-hidden rounded-3xl bg-ink/5 dark:bg-white/5">
                    {/* PLACEHOLDER: screenshot asli proyek */}
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink dark:text-white">
                      {p.name}
                    </h3>
                    <Meta category={p.category} year={p.year} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
