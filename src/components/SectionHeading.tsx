import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  en,
  title,
  description,
  dark = false,
}: {
  index: string;
  en: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-xs font-semibold tracking-widest2 ${
            dark ? "text-crimson" : "text-crimson"
          }`}
        >
          {index}
        </span>
        <span className="h-px w-10 bg-crimson" />
        <span
          className={`text-xs font-semibold uppercase tracking-widest2 ${
            dark ? "text-white/50" : "text-text-muted"
          }`}
        >
          {en}
        </span>
      </div>
      <h2
        className={`mt-5 text-3xl font-black leading-snug md:text-[42px] md:leading-[1.25] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-8 md:text-base md:leading-9 ${
            dark ? "text-white/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
