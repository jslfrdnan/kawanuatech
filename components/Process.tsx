import { steps } from "@/content/process";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="cara-kerja" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-3xl font-bold leading-tight tracking-tighter text-ink sm:text-4xl lg:text-5xl dark:text-white">
            Cara kerja kami, dari ngobrol sampai serah terima
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Garis penghubung antar tahap (hanya desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-4 hidden h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent lg:block"
          />
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative">
                  <span className="relative z-10 grid size-8 place-items-center rounded-full bg-accent text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft dark:text-white/65">
                    {step.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
