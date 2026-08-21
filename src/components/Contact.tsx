"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `【お問い合わせ】${form.company || form.name}様より`,
    );
    const body = encodeURIComponent(
      [
        "━━━━━━━━━━━━━━━━━━━━━━",
        "J1BS お問い合わせフォーム",
        "━━━━━━━━━━━━━━━━━━━━━━",
        "",
        `お名前：${form.name}`,
        `会社名：${form.company}`,
        `メールアドレス：${form.email}`,
        "",
        "【お問い合わせ内容】",
        form.message,
        "",
        "━━━━━━━━━━━━━━━━━━━━━━",
      ].join("\n"),
    );
    window.location.href = `mailto:info@j1bs.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full border border-line-gray bg-white px-4 py-3.5 text-[14px] text-text-body placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand";

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-24 md:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-brand/25 blur-[130px]" />

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* left copy */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-widest2 text-crimson">
                08
              </span>
              <span className="h-px w-10 bg-crimson" />
              <span className="text-xs font-semibold uppercase tracking-widest2 text-white/50">
                Contact
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
              お問い合わせ
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-9 text-white/70">
              SAPプロジェクト、グローバルデリバリー、SAP人材・技術支援について、お気軽にご相談ください。
              初回のご相談は無料です。
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                  Email
                </p>
                <a
                  href="mailto:info@j1bs.com"
                  className="mt-2 inline-block text-xl font-bold text-white underline decoration-crimson decoration-2 underline-offset-8 transition-colors hover:text-white/80 md:text-2xl"
                >
                  info@j1bs.com
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                  Phone
                </p>
                <a
                  href="tel:03-5050-6007"
                  className="mt-2 inline-block text-xl font-bold text-white transition-colors hover:text-white/80 md:text-2xl"
                >
                  03-5050-6007
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                  Address
                </p>
                <p className="mt-2 text-[14px] leading-7 text-white/75">
                  〒163-1302 東京都新宿区西新宿6丁目5番1号
                  <br />
                  新宿アイランドタワー2階
                </p>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={150}>
            <div className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center border border-crimson font-mono text-xl font-bold text-crimson">
                    ✓
                  </span>
                  <h3 className="mt-8 text-xl font-black text-white">
                    メールアプリが起動しました
                  </h3>
                  <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/60">
                    送信内容をご確認の上、そのままお送りください。
                    ご連絡を心よりお待ちしております。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[12px] font-bold text-white/70"
                      >
                        お名前 <span className="text-crimson">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="山田 太郎"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-[12px] font-bold text-white/70"
                      >
                        会社名
                      </label>
                      <input
                        id="company"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="株式会社○○"
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[12px] font-bold text-white/70"
                    >
                      メールアドレス <span className="text-crimson">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[12px] font-bold text-white/70"
                    >
                      お問い合わせ内容 <span className="text-crimson">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="SAP導入支援、PMO、グローバルデリバリー、人材派遣など、ご相談内容をご記入ください。"
                      className={`${inputCls} resize-y`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-crimson px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#8f2227]"
                  >
                    <span className="absolute left-0 top-0 h-full w-1.5 bg-white/25" />
                    送信する（メールアプリが起動します）
                  </button>
                  <p className="text-center text-[11px] leading-5 text-white/40">
                    フォームはお使いのメールアプリで info@j1bs.com 宛に送信されます。
                    個人情報はお問い合わせ対応の目的のみに使用します。
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
