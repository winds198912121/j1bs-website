"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export default function Profile() {
  const { t, locale } = useI18n();
  const p = t.profile;

  return (
    <section id="profile" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading index={p.index} en={p.en} title={p.title} />

        <Reveal>
          <div className="border border-line-gray">
            {p.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid md:grid-cols-[240px_1fr] ${
                  i > 0 ? "border-t border-line-gray" : ""
                }`}
              >
                <div className="flex items-center gap-3 bg-soft-gray px-6 py-5 md:px-8">
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand" />
                  <span className="text-[13px] font-bold tracking-wide text-navy">
                    {row.label}
                  </span>
                </div>
                <div className="px-6 py-5 text-[14px] leading-7 text-text-body md:px-8 md:text-[15px]">
                  {row.value1}
                  {row.value2 && row.value2 !== row.value1 && (
                    <span className="mt-1 block text-[13px] text-text-muted">
                      {row.value2}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 text-[12px] leading-6 text-text-muted">
            {p.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
