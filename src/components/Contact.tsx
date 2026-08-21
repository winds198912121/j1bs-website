"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
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
      `${c.form.mailSubject}${form.company || form.name}`,
    );
    const body = encodeURIComponent(
      [
        "━━━━━━━━━━━━━━━━━━━━━━",
        c.form.mailHeader,
        "━━━━━━━━━━━━━━━━━━━━━━",
        "",
        `${c.form.mailName}：${form.name}`,
        `${c.form.mailCompany}：${form.company}`,
        `${c.form.mailEmail}：${form.email}`,
        "",
        c.form.mailContent,
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
                {c.index}
              </span>
              <span className="h-px w-10 bg-crimson" />
              <span className="text-xs font-semibold uppercase tracking-widest2 text-white/50">
                {c.en}
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-black leading-snug text-white md:text-[42px] md:leading-[1.25]">
              {c.title}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-9 text-white/70">
              {c.description}
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                  {c.emailLabel}
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
                  {c.phoneLabel}
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
                  {c.addressLabel}
                </p>
                <p className="mt-2 whitespace-pre-line text-[14px] leading-7 text-white/75">
                  {c.address}
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
                    {c.form.sentTitle}
                  </h3>
                  <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/60">
                    {c.form.sentBody}
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
                        {c.form.name} <span className="text-crimson">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder={c.form.namePh}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-[12px] font-bold text-white/70"
                      >
                        {c.form.company}
                      </label>
                      <input
                        id="company"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder={c.form.companyPh}
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[12px] font-bold text-white/70"
                    >
                      {c.form.email} <span className="text-crimson">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder={c.form.emailPh}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[12px] font-bold text-white/70"
                    >
                      {c.form.message} <span className="text-crimson">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder={c.form.messagePh}
                      className={`${inputCls} resize-y`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-crimson px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#8f2227]"
                  >
                    <span className="absolute left-0 top-0 h-full w-1.5 bg-white/25" />
                    {c.form.submit}
                  </button>
                  <p className="text-center text-[11px] leading-5 text-white/40">
                    {c.form.privacy}
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
