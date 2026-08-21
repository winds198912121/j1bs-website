import Reveal from "./Reveal";

const SERVICES = [
  {
    no: "01",
    en: "IT Strategy & Business Transformation",
    jp: "IT戦略・ビジネス変革",
    items: [
      "IT戦略・構想策定支援",
      "業務改革（BPR）支援",
      "ソリューション導入ベンダー評価・選定支援",
      "RFP作成代行支援",
    ],
  },
  {
    no: "02",
    en: "Enterprise Solutions — SAP S/4",
    jp: "エンタープライズソリューション",
    items: [
      "SAP S/4導入コンサルティング支援",
      "要件定義・業務フィット支援",
      "Fit-to-Standard による導入アプローチ",
      "グローバルロールアウト支援",
    ],
  },
  {
    no: "03",
    en: "Project Management & PMO",
    jp: "プロジェクトマネジメント",
    items: [
      "プロジェクトマネジメント支援（PMO）",
      "チェンジマネジメント支援",
      "IT組織変革・ITサービスプロセス運用改善",
      "プロジェクト品質・ガバナンス管理",
    ],
  },
  {
    no: "04",
    en: "Resource Solutions",
    jp: "リソースソリューション",
    items: [
      "プロフェッショナル人材（コンサルタント・エンジニア）の紹介・派遣",
      "海外拠点との連携による柔軟なリソースアサイン",
      "オフショア・ニアショア体制構築支援",
    ],
  },
];

export default function Services() {
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
              04
            </span>
            <span className="h-px w-10 bg-crimson" />
            <span className="text-xs font-semibold uppercase tracking-widest2 text-white/50">
              Our Services
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
            サービス内容
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/70 md:text-base md:leading-9">
            上流工程から運用まで、企業変革に必要なサービスを一貫して提供します。
          </p>
        </Reveal>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {SERVICES.map((s, i) => (
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
                {s.jp}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {s.en}
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
