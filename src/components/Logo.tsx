export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="9" fill="#171B2A" />
      <text
        x="14"
        y="31"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="21"
        fill="#FFFFFF"
      >
        J1
      </text>
      <rect x="27" y="35" width="13" height="4" rx="1" fill="#A72A2F" />
      <rect x="27" y="27" width="6" height="4" rx="1" fill="#173A70" />
    </svg>
  );
}

export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span
          className={`text-[17px] font-extrabold tracking-wide ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          J1<span className="text-crimson">BS</span>
        </span>
        <span
          className={`text-[10px] tracking-widest2 ${
            dark ? "text-white/60" : "text-text-muted"
          }`}
        >
          J1 BUSINESS SOLUTIONS
        </span>
      </span>
    </span>
  );
}
