"use client";

import Reveal from "./Reveal";
import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t, locale } = useI18n();

  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-24 md:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-crimson/10 blur-[140px]" />

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <Reveal className="mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
              {t.services.index}
            </span>
            <span className="h-px w-10 bg-crimson" />
            <span className="text-xs font-semibold uppercase tracking-widest2 text-white/50">
              {t.services.en}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
            {t.services.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/70 md:text-base md:leading-9">
            {t.services.description}
          </p>
        </Reveal>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {t.services.items.map((s, i) => (
            <Reveal
              key={s.no}
              delay={(i % 2) * 120}
              className="group relative bg-navy p-8 transition-colors duration-300 hover:bg-[#1c2133] md:p-12"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-sm font-bold text-white/25 transition-colors group-hover:text-crimson">
                  {s.no}
                </span>
                <span className="mt-1 h-1.5 w-1.5 rotate-45 bg-brand transition-colors group-hover:bg-crimson" />
              </div>

              <h3 className="mt-8 text-lg font-bold leading-7 text-white md:text-[22px] md:leading-8">
                {locale === "ja" ? s.jp : s.en}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {locale === "ja" ? s.en : s.jp}
              </p>

              <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-7">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-6 text-white/75"
                  >
                    <span className="mt-[9px] h-[3px] w-3 shrink-0 bg-brand transition-colors group-hover:bg-crimson" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
