"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { faqs } from "@/content/faq";
import { WaButton } from "./WaButton";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tighter text-ink sm:text-4xl dark:text-white">
            Pertanyaan yang sering muncul
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft dark:text-white/65">
            Masih ada yang mau ditanya? Chat saja, kami bantu jawab.
          </p>
          <div className="mt-6 hidden lg:block">
            <WaButton variant="ghost">Konsultasi Gratis</WaButton>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-ink/8 border-y border-ink/8 dark:divide-white/10 dark:border-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold tracking-tight text-ink dark:text-white">
                      {f.q}
                    </span>
                    <Plus
                      weight="bold"
                      className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-soft dark:text-white/70">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
