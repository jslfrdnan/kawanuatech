import { WaButton } from "./WaButton";
import { Reveal } from "./Reveal";

export function CtaClose() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-8 py-20 text-center dark:bg-night-soft lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/25 blur-[130px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] font-display text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl lg:text-5xl">
              Punya ide? Mari kita bicarakan.
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-white/70">
              Ceritakan kebutuhan usaha Anda. Konsultasi awal gratis, tanpa
              kewajiban melanjutkan.
            </p>
            <div className="mt-9 flex justify-center">
              <WaButton className="!px-8 !py-4 !text-base">
                Konsultasi Gratis
              </WaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
