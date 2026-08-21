import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROFILE_ROWS = [
  {
    label: "会社名",
    value: (
      <>
        J1ビジネスソリューションズ株式会社
        <span className="mt-1 block text-[13px] text-text-muted">
          J1 Business Solutions Co., Ltd.
        </span>
      </>
    ),
  },
  {
    label: "代表取締役",
    value: (
      <>
        三﨑 早人
        <span className="ml-2 text-[13px] text-text-muted">Hayato Misaki</span>
      </>
    ),
  },
  {
    label: "所在地",
    value: (
      <>
        〒163-1302 東京都新宿区西新宿6丁目5番1号
        <br className="hidden md:block" />
        新宿アイランドタワー2階
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <a
        href="tel:03-5050-6007"
        className="transition-colors hover:text-crimson"
      >
        03-5050-6007
      </a>
    ),
  },
  {
    label: "事業内容",
    value: (
      <>
        業務コンサルティング
        <span className="mx-2 text-text-muted">/</span>
        コンサルタント・エンジニア派遣
      </>
    ),
  },
  {
    label: "Web / Email",
    value: (
      <span className="flex flex-wrap gap-x-6 gap-y-1">
        <a
          href="https://j1bs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand underline decoration-line-gray underline-offset-4 transition-colors hover:text-crimson"
        >
          http://j1bs.com
        </a>
        <a
          href="mailto:info@j1bs.com"
          className="font-medium text-brand underline decoration-line-gray underline-offset-4 transition-colors hover:text-crimson"
        >
          info@j1bs.com
        </a>
      </span>
    ),
  },
];

export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          index="07"
          en="Company Profile"
          title="会社概要"
        />

        <Reveal>
          <div className="border border-line-gray">
            {PROFILE_ROWS.map((row, i) => (
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
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 text-[12px] leading-6 text-text-muted">
            ※ 当サイトはJ1ビジネスソリューションズ株式会社の公式コーポレートサイトです。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
