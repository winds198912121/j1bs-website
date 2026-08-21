"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "#message", label: "代表挨拶" },
  { href: "#strengths", label: "私たちの強み" },
  { href: "#services", label: "サービス" },
  { href: "#global", label: "グローバルデリバリー" },
  { href: "#profile", label: "会社概要" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line-gray bg-white/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#top" aria-label="J1BS トップへ" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-text-body transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-navy px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-brand"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-crimson" />
              お問い合わせ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-[2px] w-6 bg-navy transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-navy transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-navy transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-navy transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid-bg absolute inset-0 opacity-40" />
        <nav
          className="relative flex flex-1 flex-col justify-center gap-1 px-8"
          aria-label="モバイルナビゲーション"
        >
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 border-b border-white/10 py-5 text-xl font-bold text-white transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              <span className="font-mono text-xs text-crimson">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-8 inline-flex w-fit items-center gap-2 bg-crimson px-8 py-4 text-sm font-bold text-white transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "440ms" }}
          >
            お問い合わせ
          </a>
        </nav>
        <div className="relative border-t border-white/10 px-8 py-6 text-xs text-white/50">
          J1ビジネスソリューションズ株式会社
          <br />
          J1 Business Solutions Co., Ltd.
        </div>
      </div>
    </>
  );
}
