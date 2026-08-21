import Image from "next/image";
import Reveal from "./Reveal";
import GlobalMap from "./GlobalMap";

const FLOW = [
  {
    step: "01",
    title: "日本",
    sub: "業務要件・経営課題",
    desc: "日本企業の業務理解と、変革のドライバーとなる要件を精緻に定義。",
  },
  {
    step: "02",
    title: "コンサルティング",
    sub: "上流工程・PMO",
    desc: "経験豊富なコンサルタントが構想策定からプロジェクトを指揮。",
  },
  {
    step: "03",
    title: "SAP / エンタープライズ",
    sub: "導入・フィット",
    desc: "SAP S/4をはじめ、Fit-to-Standardによる確実な導入を推進。",
  },
  {
    step: "04",
    title: "インド / グローバル",
    sub: "プネ拠点・デリバリー",
    desc: "インド・プネのSAPケイパビリティを活用し、導入・運用を継続支援。",
  },
];

const OFFICES = [
  {
    tag: "TOKYO HQ",
    name: "東京本社",
    en: "J1 Business Solutions Co., Ltd.",
    address: "〒163-1302 東京都新宿区西新宿6丁目5番1号 新宿アイランドタワー2階",
    roles: ["経営統括・プロジェクト統制", "上流工程 / PMO", "クライアントとの一元的な窓口"],
    accent: "crimson" as const,
  },
  {
    tag: "PUNE CENTER",
    name: "プネ拠点",
    en: "India Global Delivery Center",
    address: "インド・マハラシュトラ州プネ（Pune, Maharashtra, India）",
    roles: ["SAP導入・開発・保守", "グローバルデリバリー実行", "スケーラブルなリソース供給"],
    accent: "brand" as const,
  },
];

const MANAGEMENT_LINES = [
  {
    title: "拠点間の統制ライン",
    body: "東京本社が全体のプロジェクト統制を担い、プネ拠点のデリバリー品質を一元的にマネジメントします。",
  },
  {
    title: "毎日の進捗同期",
    body: "日本品質の基準で、日次の進捗・課題・リスクを確実に共有し、クロスボーダーでの齟齬を防ぎます。",
  },
];

const CAMPUS_POINTS = [
  { value: "2", label: "クロスボーダー拠点", en: "GLOBAL LOCATIONS" },
  { value: "TOKYO", label: "統括・上流工程", en: "MANAGEMENT & PMO" },
  { value: "PUNE", label: "SAPデリバリー", en: "DELIVERY CENTER" },
];

export default function GlobalDelivery() {
  return (
    <section id="global" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal className="mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
              05
            </span>
            <span className="h-px w-10 bg-crimson" />
            <span className="text-xs font-semibold uppercase tracking-widest2 text-text-muted">
              Japan × India — Global Delivery
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-black leading-snug text-navy md:text-[42px] md:leading-[1.25]">
            東京とインド・プネをつなぐ、
            <br className="hidden md:block" />
            グローバルデリバリーモデル
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-text-muted md:text-base md:leading-9">
            日本企業のビジネス要件と、インド・プネのグローバルSAPケイパビリティを融合。
            構想策定から導入・運用まで、クロスボーダーで一貫した支援を実現します。
          </p>
        </Reveal>

        {/* flow diagram */}
        <Reveal>
          <div className="relative border border-line-gray bg-soft-gray px-6 py-12 md:px-12 md:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
              {FLOW.map((f, i) => (
                <div key={f.step} className="relative">
                  {i < FLOW.length - 1 && (
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
                Tokyo HQ ⇄ Pune Delivery Center — Management Map
              </p>
            </div>
          </Reveal>

          {/* management cards */}
          <div className="flex flex-col justify-center gap-6">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest2 text-brand">
                Management Structure — 管理・統制体制
              </p>
              <h3 className="mt-3 text-2xl font-black leading-snug text-navy md:text-[28px]">
                2つの拠点を、1つの
                <br className="hidden md:block" />
                品質基準で統制
              </h3>
            </Reveal>

            {OFFICES.map((o, i) => (
              <Reveal key={o.name} delay={i * 100}>
                <div className="group relative border border-line-gray bg-white p-6 transition-colors duration-300 hover:border-navy md:p-7">
                  <span
                    className={`absolute left-0 top-0 h-full w-1 ${
                      o.accent === "crimson" ? "bg-crimson" : "bg-brand"
                    }`}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-widest2 text-text-muted">
                      {o.tag}
                    </p>
                    <span
                      className={`h-2 w-2 rotate-45 ${
                        o.accent === "crimson" ? "bg-crimson" : "bg-brand"
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
                {MANAGEMENT_LINES.map((m) => (
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
            alt="東京本社とインド・プネ拠点がつくるグローバルデリバリー体制のイメージ"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* ネイビーオーバーレイで大気感を演出 */}
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
          <div className="grid-bg absolute inset-0 opacity-25" />

          {/* コーナーアクセント */}
          <div className="absolute left-6 top-6 h-14 w-14 border-l-2 border-t-2 border-crimson md:left-10 md:top-10" />
          <div className="absolute bottom-6 right-6 h-14 w-14 border-b-2 border-r-2 border-crimson md:bottom-10 md:right-10" />

          <div className="relative mx-auto flex h-full max-w-content flex-col justify-center px-5 md:px-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest2 text-white/70">
              Global Campus Network — Tokyo × Pune
            </p>
            <h3 className="mt-5 max-w-2xl text-[26px] font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
              日本品質のマネジメントと、
              <br />
              インドのSAPケイパビリティを
              <span className="text-crimson">ひとつの体制</span>に。
            </h3>
            <p className="mt-6 max-w-xl text-[13.5px] leading-7 text-white/75 md:text-[15px] md:leading-8">
              東京本社が全体を統制し、プネ拠点がSAPデリバリーを実行する。
              国境を越えてつながる2つの拠点が、確かな品質で企業変革を支えます。
            </p>

            <div className="mt-10 flex max-w-2xl items-stretch gap-0 border-t border-white/20">
              {CAMPUS_POINTS.map((p, i) => (
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
          {ADVANTAGES.map((a, i) => (
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

const ADVANTAGES = [
  {
    title: "日本語での確実なコミュニケーション",
    body: "日本側の要件とグローバル側のデリバリーを、言葉と文脈のズレなく橋渡しします。",
  },
  {
    title: "拡張可能なSAPデリバリー体制",
    body: "プロジェクト規模やフェーズに応じて、国内外のリソースを柔軟にスケール。",
  },
  {
    title: "コストとケイパビリティの両立",
    body: "インドは単なる「安価なオフショア先」ではなく、高い技術力を持つSAPケイパビリティセンターです。",
  },
  {
    title: "長期にわたるサポート体制",
    body: "導入後の運用・改善まで見据えた、継続的なパートナーシップを構築します。",
  },
];
