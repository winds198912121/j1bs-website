import Reveal from "./Reveal";

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
    sub: "グローバルデリバリー",
    desc: "インドのSAPケイパビリティを活用し、導入・運用を継続支援。",
  },
];

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
            日本とグローバルをつなぐ、
            <br className="hidden md:block" />
            デリバリーモデル
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-text-muted md:text-base md:leading-9">
            日本企業のビジネス要件と、インドのグローバルSAPケイパビリティを融合。
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

        {/* advantages */}
        <div className="mt-16 grid gap-px border border-line-gray bg-line-gray md:grid-cols-2">
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
