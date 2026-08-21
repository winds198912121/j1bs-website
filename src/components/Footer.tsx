import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm text-[13px] leading-7 text-white/55">
              変革の時代を勝ち抜く、確かな経験とグローバルな視点を。
              SAPコンサルティング・PMO・グローバルデリバリーで、企業変革を支援します。
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/35">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-[13px]">
              <li>
                <a href="#message" className="text-white/70 transition-colors hover:text-white">
                  代表挨拶
                </a>
              </li>
              <li>
                <a href="#strengths" className="text-white/70 transition-colors hover:text-white">
                  私たちの強み
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 transition-colors hover:text-white">
                  サービス内容
                </a>
              </li>
              <li>
                <a href="#profile" className="text-white/70 transition-colors hover:text-white">
                  会社概要
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/35">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-[13px] text-white/70">
              <li>
                <a
                  href="mailto:info@j1bs.com"
                  className="transition-colors hover:text-white"
                >
                  info@j1bs.com
                </a>
              </li>
              <li>
                <a href="tel:03-5050-6007" className="transition-colors hover:text-white">
                  03-5050-6007
                </a>
              </li>
              <li className="leading-6">
                〒163-1302
                <br />
                東京都新宿区西新宿6丁目5番1号
                <br />
                新宿アイランドタワー2階
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-wide text-white/40">
            © {new Date().getFullYear()} J1 Business Solutions Co., Ltd. All
            Rights Reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest2 text-white/40 transition-colors hover:text-white"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
