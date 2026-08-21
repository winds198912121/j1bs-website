"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export default function Strengths() {
  const { t } = useI18n();

  return (
    <section id="strengths" className="scroll-mt-20 bg-soft-gray py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          index={t.strengths.index}
          en={t.strengths.en}
          title={t.strengths.title}
          description={t.strengths.description}
        />

        <div className="grid gap-px overflow-hidden border border-line-gray bg-line-gray md:grid-cols-3">
          {t.strengths.items.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 120}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-navy md:p-10"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-crimson opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-crimson">
                  {s.no}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest2 text-text-muted transition-colors group-hover:text-white/50">
                  {s.en}
                </span>
              </div>
              <h3 className="mt-10 text-xl font-black leading-8 text-navy transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <div className="mt-4 h-px w-10 bg-brand transition-all duration-300 group-hover:w-16 group-hover:bg-crimson" />
              <p className="mt-5 text-[14px] leading-8 text-text-muted transition-colors group-hover:text-white/75">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
