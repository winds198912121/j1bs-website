"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import GlobalMap from "./GlobalMap";
import { useI18n } from "@/lib/i18n";

export default function GlobalDelivery() {
  const { t } = useI18n();
  const g = t.global;

  return (
    <section id="global" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal className="mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
              {g.index}
            </span>
            <span className="h-px w-10 bg-crimson" />
            <span className="text-xs font-semibold uppercase tracking-widest2 text-text-muted">
              {g.en}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-black leading-snug text-navy md:text-[42px] md:leading-[1.25]">
            {g.title1}
            <br className="hidden md:block" />
            {g.title2}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-text-muted md:text-base md:leading-9">
            {g.description}
          </p>
        </Reveal>

        {/* flow diagram */}
        <Reveal>
          <div className="relative border border-line-gray bg-soft-gray px-6 py-12 md:px-12 md:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
              {g.flow.map((f, i) => (
                <div key={f.step} className="relative">
                  {i < g.flow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-4 top-8 hidden -translate-y-1/2 text-xl font-bold text-brand md:block"
                    >
                      →
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-navy bg-white font-mono text-sm font-bold text-navy">
                      {f.step}
                    </span>
                    <div>
                      <p className="text-[17px] font-black leading-6 text-navy">
                        {f.title}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold tracking-wide text-crimson">
                        {f.sub}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-line-gray pt-4 text-[13px] leading-6 text-text-muted">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* map + management */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* map */}
          <Reveal>
            <div className="relative border border-line-gray bg-white p-2 md:p-3">
              <div className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-crimson" />
              <div className="absolute -right-px -bottom-px h-10 w-10 border-r-2 border-b-2 border-brand" />
              <GlobalMap />
              <p className="border-t border-line-gray px-3 py-2.5 text-right font-mono text-[10px] uppercase tracking-widest2 text-text-muted">
                {t.hero.mapCaption}
              </p>
            </div>
          </Reveal>

          {/* management cards */}
          <div className="flex flex-col justify-center gap-6">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest2 text-brand">
                {g.managementEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-snug text-navy md:text-[28px]">
                {g.managementTitle1}
                <br className="hidden md:block" />
                {g.managementTitle2}
              </h3>
            </Reveal>

            {g.offices.map((o, i) => (
              <Reveal key={o.name} delay={i * 100}>
                <div className="group relative border border-line-gray bg-white p-6 transition-colors duration-300 hover:border-navy md:p-7">
                  <span
                    className={`absolute left-0 top-0 h-full w-1 ${
                      i === 0 ? "bg-crimson" : "bg-brand"
                    }`}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-widest2 text-text-muted">
                      {o.tag}
                    </p>
                    <span
                      className={`h-2 w-2 rotate-45 ${
                        i === 0 ? "bg-crimson" : "bg-brand"
                      }`}
                    />
                  </div>
                  <h4 className="mt-2 text-lg font-black text-navy">{o.name}</h4>
                  <p className="mt-0.5 text-[11px] tracking-wide text-text-muted">
                    {o.en}
                  </p>
                  <p className="mt-3 border-t border-line-gray pt-3 text-[12.5px] leading-6 text-text-muted">
                    {o.address}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {o.roles.map((r) => (
                      <li
                        key={r}
                        className="border border-line-gray bg-soft-gray px-2.5 py-1 text-[11px] font-medium text-text-body"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="border-l-2 border-brand pl-5">
                {g.lines.map((m) => (
                  <div key={m.title} className="py-2.5">
                    <p className="flex items-center gap-2 text-[13.5px] font-bold text-navy">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                      {m.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-6 text-text-muted">
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ===== 大気感のあるフルワイドビジュアル（東京 × プネ拠点） ===== */}
      <Reveal className="mt-24 md:mt-28">
        <div className="relative h-[460px] overflow-hidden md:h-[600px]">
          <Image
            src="/images/j1bs-global-campus.jpg"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
          <div className="grid-bg absolute inset-0 opacity-25" />

          <div className="absolute left-6 top-6 h-14 w-14 border-l-2 border-t-2 border-crimson md:left-10 md:top-10" />
          <div className="absolute bottom-6 right-6 h-14 w-14 border-b-2 border-r-2 border-crimson md:bottom-10 md:right-10" />

          <div className="relative mx-auto flex h-full max-w-content flex-col justify-center px-5 md:px-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest2 text-white/70">
              {g.bandEyebrow}
            </p>
            <h3 className="mt-5 max-w-2xl text-[26px] font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
              {g.bandTitle1}
              <br />
              {g.bandTitle2}
              <span className="text-crimson">{g.bandHighlight}</span>
              {g.bandTitle3}
            </h3>
            <p className="mt-6 max-w-xl text-[13.5px] leading-7 text-white/75 md:text-[15px] md:leading-8">
              {g.bandBody}
            </p>

            <div className="mt-10 flex max-w-2xl items-stretch gap-0 border-t border-white/20">
              {g.campusPoints.map((p, i) => (
                <div
                  key={p.label}
                  className={`flex-1 py-6 pr-6 ${
                    i > 0 ? "border-l border-white/15 pl-6" : ""
                  }`}
                >
                  <p className="font-mono text-xl font-bold text-white md:text-2xl">
                    {p.value}
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-white/90">
                    {p.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-white/50">
                    {p.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* advantages */}
      <div className="mx-auto mt-24 max-w-content px-5 md:mt-28 md:px-8">
        <div className="grid gap-px border border-line-gray bg-line-gray md:grid-cols-2">
          {g.advantages.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 2) * 100}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-soft-gray md:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 shrink-0 rotate-45 bg-brand transition-colors group-hover:bg-crimson" />
                <h3 className="text-[16px] font-black leading-6 text-navy md:text-lg">
                  {a.title}
                </h3>
              </div>
              <p className="mt-4 text-[14px] leading-8 text-text-muted">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
