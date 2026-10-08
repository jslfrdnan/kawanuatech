"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { site } from "@/site.config";
import { WaButton } from "./WaButton";

const links = [
  { label: "Layanan", href: "#layanan" },
  { label: "Karya", href: "#karya" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/5 bg-paper/80 backdrop-blur-md dark:border-white/5 dark:bg-night/80"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid size-7 place-items-center rounded-lg bg-accent font-bold text-white">
            K
          </span>
          <span>
            Kawanua<span className="text-accent">Tech</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WaButton className="!px-5 !py-2.5 !text-sm">Konsultasi Gratis</WaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-lg text-ink transition-colors hover:bg-ink/5 lg:hidden dark:text-white dark:hover:bg-white/10"
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-paper px-4 pb-6 pt-2 lg:hidden dark:border-white/5 dark:bg-night">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-3.5 text-base font-medium text-ink dark:border-white/5 dark:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <WaButton className="w-full">Konsultasi Gratis</WaButton>
          </div>
          <p className="pt-3 text-center text-xs text-ink-soft dark:text-white/50">
            {site.address}
          </p>
        </div>
      )}
    </header>
  );
}
