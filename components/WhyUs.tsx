import Image from "next/image";
import {
  Handshake,
  ChatCircleText,
  MapPinArea,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: MapPinArea,
    title: "Tim ada di Manado",
    desc: "Kami orang Sulut. Paham pasar lokal, dan untuk klien di sini kita bisa bertemu langsung.",
  },
  {
    icon: ChatCircleText,
    title: "Ngobrol tanpa jargon",
    desc: "Kami jelaskan pakai bahasa yang Anda mengerti, bukan istilah teknis yang bikin bingung.",
  },
  {
    icon: Handshake,
    title: "Harga jujur, proses jelas",
    desc: "Penawaran dan jadwal disampaikan di depan. Tidak ada biaya yang muncul diam-diam.",
  },
  {
    icon: Wrench,
    title: "Dibuat untuk dirawat",
    desc: "Website Anda rapi di belakang layar, jadi gampang dikembangkan lagi nanti.",
  },
];

export function WhyUs() {
  return (
    <section className="scroll-mt-24 border-t border-ink/5 bg-surface py-24 lg:py-32 dark:border-white/5 dark:bg-night-soft/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Teks */}
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Kenapa KawanuaTech
            </p>
            <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-bold leading-tight tracking-tighter text-ink sm:text-4xl lg:text-5xl dark:text-white">
              Developer yang dekat, bukan vendor jauh
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 0.06}>
                  <div>
                    <Icon weight="duotone" className="size-8 text-accent" />
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink dark:text-white">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft dark:text-white/65">
                      {r.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Foto (PLACEHOLDER) */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5 lg:aspect-[3/4] dark:bg-white/5">
            {/* PLACEHOLDER: ganti dengan foto asli tim atau kantor di Manado */}
            <Image
              src="https://picsum.photos/seed/kawanua-office-manado/900/1100"
              alt="Suasana kerja tim KawanuaTech di Manado"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
