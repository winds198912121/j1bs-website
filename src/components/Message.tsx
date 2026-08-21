import Image from "next/image";
import Reveal from "./Reveal";

export default function Message() {
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
                <p className="text-sm font-black tracking-wide">三﨑 早人</p>
                <p className="mt-0.5 text-[11px] tracking-widest text-white/70">
                  HAYATO MISAKI · 代表取締役
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
                  02
                </span>
                <span className="h-px w-10 bg-crimson" />
                <span className="text-xs font-semibold uppercase tracking-widest2 text-text-muted">
                  Message from the President
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-snug text-navy md:text-[40px] md:leading-[1.3]">
                複雑なプロジェクトを調和させる
                <br />
                「コンダクター」の存在
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 text-[15px] leading-9 text-text-body md:text-[16px] md:leading-10">
                急速なビジネス変革が求められる現代。AIをはじめとする先進技術は不可欠なツールですが、それらをビジネスの成功へ導くには、依然として「人」の知見と経験がカギとなります。私は、複雑なプロジェクトを調和させる「コンダクター」が必要だと考えています。
              </p>
              <p className="mt-6 text-[15px] leading-9 text-text-body md:text-[16px] md:leading-10">
                J1BSは、多様な業界・プロジェクトで培ったグローバルな視点と、これまでのネットワークを活かし、海外拠点との連携を含めた柔軟なリソース提供が可能です。クライアント様の成功を第一に考える「伴走者」として、確かな価値を提供してまいります。
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 border-l-2 border-brand bg-soft-gray p-6 md:p-8">
                <p className="text-[13px] leading-7 text-text-muted md:text-sm md:leading-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-brand">
                    Message in English
                  </span>
                  <br />
                  <span className="mt-2 block">
                    In an era of rapid business transformation, advanced
                    technologies like AI are essential tools. However, achieving
                    success still requires the insights and experiences of
                    &ldquo;people.&rdquo; I believe there is a critical need for
                    a &ldquo;conductor&rdquo; to harmonize complex projects.
                  </span>
                  <span className="mt-3 block">
                    With an extensive background across industries and a global
                    network, J1BS offers flexible resources, including global
                    collaboration. We act as a &ldquo;partner&rdquo; whose
                    priority is our clients&rsquo; success.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
