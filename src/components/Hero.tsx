import HeroNetwork from "./HeroNetwork";

const HERO_POINTS = [
  { en: "UPSTREAM", jp: "上流工程・PMO" },
  { en: "GLOBAL", jp: "英語対応・海外拠点連携" },
  { en: "SAP S/4", jp: "SAP導入コンサルティング" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-28 md:pt-40"
    >
      {/* faint top grid */}
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70" />

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <div>
            <p
              className="hero-fade flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-text-muted"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="inline-block h-[2px] w-8 bg-crimson" />
              J1 Business Solutions · Global SAP Consulting
            </p>

            <h1
              className="hero-fade mt-7 text-[34px] font-black leading-[1.35] text-navy md:text-[54px] md:leading-[1.28]"
              style={{ animationDelay: "0.15s" }}
            >
              変革の時代を勝ち抜く、
              <br />
              確かな経験と
              <span className="relative whitespace-nowrap text-crimson">
                グローバル
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
              な視点を。
            </h1>

            <p
              className="hero-fade mt-5 font-mono text-[13px] tracking-wide text-text-muted md:text-sm"
              style={{ animationDelay: "0.25s" }}
            >
              Proven Expertise and Global Vision for Winning in the Age of
              Transformation.
            </p>

            <p
              className="hero-fade mt-8 max-w-xl text-[15px] leading-8 text-text-muted md:text-base md:leading-9"
              style={{ animationDelay: "0.35s" }}
            >
              日本企業の業務理解と、グローバルなSAPケイパビリティを融合。
              構想策定から導入・運用まで、企業変革を一貫して支援します。
            </p>

            <div
              className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-navy px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-brand"
              >
                <span className="absolute left-0 top-0 h-full w-1.5 bg-crimson" />
                SAP支援について相談する
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#message"
                className="inline-flex items-center justify-center gap-2 border border-line-gray bg-white px-8 py-4 text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-soft-gray"
              >
                代表挨拶を見る
              </a>
            </div>

            <div
              className="hero-fade mt-12 flex max-w-lg items-stretch gap-0"
              style={{ animationDelay: "0.55s" }}
            >
              {HERO_POINTS.map((p, i) => (
                <div
                  key={p.en}
                  className={`flex-1 px-4 first:pl-0 ${
                    i > 0 ? "border-l border-line-gray" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest2 text-crimson">
                    {p.en}
                  </p>
                  <p className="mt-1.5 text-[13px] font-bold leading-5 text-navy">
                    {p.jp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* network visual */}
          <div
            className="hero-fade relative hidden lg:block"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative border border-line-gray bg-white p-4 shadow-[0_30px_80px_-40px_rgba(23,26,42,0.35)]">
              <div className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-crimson" />
              <div className="absolute -right-px -top-px h-10 w-10 border-r-2 border-t-2 border-brand" />
              <HeroNetwork />
            </div>
            <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-widest2 text-text-muted">
              Japan → Consulting → SAP → Global Delivery
            </p>
          </div>
        </div>

        {/* mobile network */}
        <div className="hero-fade relative mt-12 lg:hidden" style={{ animationDelay: "0.4s" }}>
          <div className="border border-line-gray bg-white p-3">
            <HeroNetwork />
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="hero-fade mt-16 flex items-center justify-between border-t border-line-gray py-6 md:mt-20"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-text-muted">
            SAP Consulting / PMO / Global Delivery / Resource Solutions
          </p>
          <a
            href="#message"
            className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest2 text-text-muted transition-colors hover:text-crimson"
            aria-label="下へスクロール"
          >
            <span>SCROLL</span>
            <span className="block h-8 w-px animate-pulse bg-crimson/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
