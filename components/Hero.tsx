"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "@phosphor-icons/react";
import { WaButton } from "./WaButton";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden pt-28 lg:pt-32"
    >
      {/* Latar aksen halus, bukan AI-gradient: satu radial teal sangat redup */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-accent/10 blur-[120px] dark:bg-accent/15"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Kiri: pesan */}
        <div className="lg:col-span-6">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-ink-soft dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <MapPin weight="fill" className="size-4 text-accent" />
            Manado, Sulawesi Utara
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tighter text-ink sm:text-5xl lg:text-6xl dark:text-white"
          >
            Website dan aplikasi
            <br />
            untuk usaha Anda,
            <br />
            <span className="text-accent">dibikin orang sini.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft dark:text-white/70"
          >
             Gak usah pusing mikirin koding! Kawanua Tech siap bangun website dan aplikasi yang pas buat kebutuhan bisnismu.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <WaButton>Konsultasi Gratis</WaButton>
            <a
              href="#karya"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[15px] font-semibold tracking-tight text-ink transition-colors hover:border-accent hover:text-accent dark:border-white/20 dark:text-white dark:hover:border-accent"
            >
              Lihat Karya
            </a>
          </motion.div>
        </div>

        {/* Kanan: foto tim (PLACEHOLDER) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5 sm:aspect-[5/4] lg:aspect-[4/5] dark:bg-white/5">
            {/* PLACEHOLDER: ganti dengan foto asli tim KawanuaTech sedang bekerja */}
            <Image
              src="https://picsum.photos/seed/kawanua-team-work-manado/1000/1200"
              alt="Tim KawanuaTech sedang bekerja"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
