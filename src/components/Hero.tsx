"use client";

import Image from "next/image";
import GlobalMap from "./GlobalMap";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-24 md:pt-32"
    >
      {/* 大きな背景フォト */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hp-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/55 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-navy-deep/40" />
        <div className="grid-bg absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-content px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* copy */}
          <div>
            <p
              className="hero-fade flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-white/60"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="inline-block h-[2px] w-8 bg-crimson" />
              {t.hero.eyebrow}
            </p>

            <h1
              className="hero-fade mt-7 text-[34px] font-black leading-[1.35] text-white md:text-[54px] md:leading-[1.28]"
              style={{ animationDelay: "0.15s" }}
            >
              {t.hero.headline1}
              <br />
              {t.hero.headline2}{" "}
              <span className="relative whitespace-nowrap text-crimson">
                {t.hero.highlight}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6 C 60 1, 140 1, 198 6"
                    fill="none"
                    stroke="#A72A2F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              </span>
              <br />
              {t.hero.headline3}
            </h1>

            <p
              className="hero-fade mt-5 font-mono text-[13px] tracking-wide text-white/60 md:text-sm"
              style={{ animationDelay: "0.25s" }}
            >
              {t.hero.mono}
            </p>

            <p
              className="hero-fade mt-8 max-w-xl text-[15px] leading-8 text-white/75 md:text-base md:leading-9"
              style={{ animationDelay: "0.35s" }}
            >
              {t.hero.paragraph}
            </p>

            <div
              className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-white px-8 py-4 text-sm font-bold text-navy transition-colors hover:bg-crimson hover:text-white"
              >
                <span className="absolute left-0 top-0 h-full w-1.5 bg-crimson" />
                {t.hero.cta1}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#message"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
              >
                {t.hero.cta2}
              </a>
            </div>

            <div
              className="hero-fade mt-12 flex max-w-lg items-stretch gap-0"
              style={{ animationDelay: "0.55s" }}
            >
              {t.hero.points.map((p, i) => (
                <div
                  key={p.en}
                  className={`flex-1 px-4 first:pl-0 ${
                    i > 0 ? "border-l border-white/15" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest2 text-crimson">
                    {p.en}
                  </p>
                  <p className="mt-1.5 text-[13px] font-bold leading-5 text-white">
                    {p.jp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* グローバルマップ */}
          <div
            className="hero-fade relative hidden lg:block"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative border border-white/25 bg-white p-3 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
              <div className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-crimson" />
              <div className="absolute -right-px -bottom-px h-10 w-10 border-r-2 border-b-2 border-brand" />
              <GlobalMap />
            </div>
            <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-widest2 text-white/50">
              {t.hero.mapCaption}
            </p>
          </div>
        </div>

        {/* mobile map */}
        <div
          className="hero-fade relative mt-12 lg:hidden"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="border border-white/25 bg-white p-2">
            <GlobalMap />
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="hero-fade mt-14 flex items-center justify-between border-t border-white/15 py-6 md:mt-16"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-white/50">
            {t.hero.bottom}
          </p>
          <a
            href="#message"
            className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest2 text-white/50 transition-colors hover:text-crimson"
            aria-label="下へスクロール"
          >
            <span>{t.hero.scroll}</span>
            <span className="block h-8 w-px animate-pulse bg-crimson/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
