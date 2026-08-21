import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STRENGTHS = [
  {
    no: "01",
    en: "UPSTREAM EXPERTISE",
    title: "確かな上流工程の実績",
    body: "SAP S/4導入における要件定義や、システムソリューションへ業務をフィットさせる柔軟なアプローチ。構想段階から現場を理解したコンサルティングを提供します。",
  },
  {
    no: "02",
    en: "GLOBAL CAPABILITIES",
    title: "グローバル対応力とネットワーク",
    body: "英語対応可能な体制と、国内外の多様なリソースを柔軟にアサイン。日本と海外をつなぐクロスボーダーなプロジェクト体制を実現します。",
  },
  {
    no: "03",
    en: "EXPERIENCED CONDUCTORS",
    title: "プロジェクトを成功へ導くコンダクター",
    body: "経験豊富なコンサルタントが、PMOやチェンジマネジメントとしてプロジェクトを円滑に推進。複雑なステークホルダーを調和させます。",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="scroll-mt-20 bg-soft-gray py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          index="03"
          en="Our Strengths"
          title="私たちの強み"
          description="大手コンサルティングファーム・SIerとのパートナーシップに最適な、経験と実行力。J1BSは「確かな経験」と「グローバルな視点」で、クライアントの変革を支えます。"
        />

        <div className="grid gap-px overflow-hidden border border-line-gray bg-line-gray md:grid-cols-3">
          {STRENGTHS.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 120}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-navy md:p-10"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-crimson opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-crimson">
                  {s.no}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest2 text-text-muted transition-colors group-hover:text-white/50">
                  {s.en}
                </span>
              </div>
              <h3 className="mt-10 text-xl font-black leading-8 text-navy transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <div className="mt-4 h-px w-10 bg-brand transition-all duration-300 group-hover:w-16 group-hover:bg-crimson" />
              <p className="mt-5 text-[14px] leading-8 text-text-muted transition-colors group-hover:text-white/75">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
