import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-20 bg-soft-gray py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          index="06"
          en="Case Studies"
          title="実績・事例"
          description="プロジェクト実績・導入事例につきましては、順次掲載してまいります。"
        />

        <Reveal>
          <div className="relative overflow-hidden border border-dashed border-line-gray bg-white px-8 py-20 text-center md:py-24">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center border border-line-gray font-mono text-xs font-bold text-text-muted">
                SOON
              </span>
              <h3 className="mt-8 text-2xl font-black text-navy md:text-3xl">
                実績・事例は準備中です
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-8 text-text-muted">
                プロジェクト実績・導入事例につきましては、順次掲載してまいります。
                個別のご相談・詳細につきましては、直接お問い合わせください。
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-crimson pb-1 text-sm font-bold text-navy transition-colors hover:text-crimson"
              >
                お問い合わせへ
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
