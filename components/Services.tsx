import {
  Browsers,
  Storefront,
  Stack,
  DeviceMobile,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { services, type Service } from "@/content/services";
import { Reveal } from "./Reveal";

const icons = {
  profile: Browsers,
  store: Storefront,
  app: Stack,
  mobile: DeviceMobile,
} as const;

function Points({ points, light }: { points: string[]; light?: boolean }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {points.map((p) => (
        <li
          key={p}
          className={`inline-flex items-center gap-1.5 text-sm font-medium ${
            light ? "text-white/80" : "text-ink-soft dark:text-white/65"
          }`}
        >
          <Check weight="bold" className="size-4 text-accent" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Card({
  service,
  tone,
  className,
}: {
  service: Service;
  tone: "image" | "soft" | "plain" | "dark";
  className: string;
}) {
  const Icon = icons[service.icon];

  if (tone === "image") {
    return (
      <div
        className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl p-7 ${className}`}
      >
        {/* PLACEHOLDER: ganti dengan gambar contoh hasil kerja kategori ini */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url(https://picsum.photos/seed/kawanua-webprofile/1000/700)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/20" />
        <div className="relative">
          <Icon weight="duotone" className="size-9 text-white" />
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-2 max-w-[42ch] leading-relaxed text-white/80">
            {service.desc}
          </p>
          <Points points={service.points} light />
        </div>
      </div>
    );
  }

  const bg =
    tone === "soft"
      ? "bg-accent-soft dark:bg-accent/15"
      : tone === "dark"
      ? "bg-ink text-white dark:bg-night-soft"
      : "bg-surface dark:bg-white/5";

  const border = tone === "plain" ? "border border-ink/8 dark:border-white/10" : "";
  const titleColor = tone === "dark" ? "text-white" : "text-ink dark:text-white";
  const descColor =
    tone === "dark" ? "text-white/70" : "text-ink-soft dark:text-white/65";

  return (
    <div className={`flex flex-col rounded-3xl p-7 ${bg} ${border} ${className}`}>
      <Icon weight="duotone" className="size-9 text-accent" />
      <h3 className={`mt-4 font-display text-2xl font-bold tracking-tight ${titleColor}`}>
        {service.title}
      </h3>
      <p className={`mt-2 max-w-[42ch] leading-relaxed ${descColor}`}>
        {service.desc}
      </p>
      <Points points={service.points} light={tone === "dark"} />
    </div>
  );
}

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Layanan
          </p>
          <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-bold leading-tight tracking-tighter text-ink sm:text-4xl lg:text-5xl dark:text-white">
            Yang bisa kami bangun untuk Anda
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-1">
            <Card service={services[0]} tone="image" className="h-full min-h-[300px]" />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <Card service={services[1]} tone="soft" className="h-full" />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <Card service={services[2]} tone="plain" className="h-full" />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-4">
            <Card service={services[3]} tone="dark" className="h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
