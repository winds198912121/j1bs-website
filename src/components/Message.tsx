"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useI18n } from "@/lib/i18n";

export default function Message() {
  const { t } = useI18n();

  return (
    <section id="message" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* photo */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-full w-full border border-line-gray" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-crimson" />
              <div className="relative overflow-hidden bg-soft-gray">
                <Image
                  src="/images/misaki.jpg"
                  alt="代表取締役 三﨑 早人"
                  width={900}
                  height={1125}
                  priority={false}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-navy px-6 py-4 text-white">
                <p className="text-sm font-black tracking-wide">
                  {t.message.name}
                </p>
                <p className="mt-0.5 text-[11px] tracking-widest text-white/70">
                  {t.message.role}
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
                  {t.message.index}
                </span>
                <span className="h-px w-10 bg-crimson" />
                <span className="text-xs font-semibold uppercase tracking-widest2 text-text-muted">
                  {t.message.en}
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-snug text-navy md:text-[40px] md:leading-[1.3]">
                {t.message.title1}
                <br />
                {t.message.title2}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 text-[15px] leading-9 text-text-body md:text-[16px] md:leading-10">
                {t.message.p1}
              </p>
              <p className="mt-6 text-[15px] leading-9 text-text-body md:text-[16px] md:leading-10">
                {t.message.p2}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 border-l-2 border-brand bg-soft-gray p-6 md:p-8">
                <p className="text-[13px] leading-7 text-text-muted md:text-sm md:leading-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-brand">
                    {t.message.boxLabel}
                  </span>
                  <br />
                  <span className="mt-2 block">{t.message.box1}</span>
                  <span className="mt-3 block">{t.message.box2}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
