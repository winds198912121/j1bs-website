export default function HeroNetwork() {
  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label="日本からコンサルティング、SAP、インドのグローバルデリバリーへとつながるネットワーク図"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#D9DDE3" opacity="0.6" />
        </pattern>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#173A70" />
          <stop offset="100%" stopColor="#173A70" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <rect width="600" height="520" fill="url(#dots)" />

      {/* secondary dashed connections */}
      <path
        d="M80 88 C 170 128, 300 178, 430 240"
        fill="none"
        stroke="#173A70"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="3 10"
        className="animate-dash-slow"
      />
      <path
        d="M255 160 C 320 300, 400 400, 545 428"
        fill="none"
        stroke="#A72A2F"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="3 10"
        className="animate-dash-slow"
      />

      {/* main flow lines */}
      <path
        d="M80 88 C 145 88, 195 160, 255 160"
        fill="none"
        stroke="#173A70"
        strokeWidth="1.6"
      />
      <path
        d="M255 160 C 320 160, 365 240, 430 240"
        fill="none"
        stroke="#173A70"
        strokeWidth="1.6"
      />
      <path
        d="M430 240 C 478 240, 490 428, 545 428"
        fill="none"
        stroke="#173A70"
        strokeWidth="1.6"
      />

      {/* traveling particles */}
      <circle r="2.6" fill="#173A70">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M80 88 C 145 88, 195 160, 255 160"
        />
      </circle>
      <circle r="2.6" fill="#173A70">
        <animateMotion
          dur="7s"
          begin="1.6s"
          repeatCount="indefinite"
          path="M255 160 C 320 160, 365 240, 430 240"
        />
      </circle>
      <circle r="3.2" fill="#A72A2F">
        <animateMotion
          dur="8s"
          begin="3.2s"
          repeatCount="indefinite"
          path="M430 240 C 478 240, 490 428, 545 428"
        />
      </circle>
      <circle r="2.2" fill="#173A70" opacity="0.7">
        <animateMotion
          dur="12s"
          begin="0.8s"
          repeatCount="indefinite"
          path="M80 88 C 170 128, 300 178, 430 240"
        />
      </circle>

      {/* satellite dots */}
      <circle cx="150" cy="310" r="2" fill="#173A70" opacity="0.4" className="float-y" />
      <circle cx="350" cy="420" r="2.2" fill="#173A70" opacity="0.45" className="float-y" style={{ animationDelay: "1.2s" }} />
      <circle cx="505" cy="120" r="2" fill="#A72A2F" opacity="0.5" className="float-y" style={{ animationDelay: "2s" }} />
      <circle cx="60" cy="330" r="1.6" fill="#173A70" opacity="0.35" />

      {/* nodes */}
      <g>
        <circle cx="80" cy="88" r="11" fill="none" stroke="#173A70" className="pulse-ring" />
        <circle cx="80" cy="88" r="6" fill="#173A70" />
        <text x="80" y="122" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',sans-serif">日本</text>
        <text x="80" y="138" textAnchor="middle" fontSize="10.5" fill="#626874" fontFamily="'Noto Sans JP',sans-serif">業務要件</text>
      </g>
      <g>
        <circle cx="255" cy="160" r="11" fill="none" stroke="#171B2A" strokeOpacity="0.5" className="pulse-ring delay-1" />
        <circle cx="255" cy="160" r="5.5" fill="#171B2A" />
        <text x="255" y="194" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',sans-serif">コンサルティング</text>
        <text x="255" y="210" textAnchor="middle" fontSize="10.5" fill="#626874" fontFamily="'Noto Sans JP',sans-serif">上流工程・PMO</text>
      </g>
      <g>
        <circle cx="430" cy="240" r="11" fill="none" stroke="#173A70" className="pulse-ring delay-2" />
        <circle cx="430" cy="240" r="6" fill="#173A70" />
        <text x="430" y="274" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',sans-serif">SAP / S/4HANA</text>
        <text x="430" y="290" textAnchor="middle" fontSize="10.5" fill="#626874" fontFamily="'Noto Sans JP',sans-serif">エンタープライズ基盤</text>
      </g>
      <g>
        <circle cx="545" cy="428" r="13" fill="none" stroke="#A72A2F" className="pulse-ring" />
        <circle cx="545" cy="428" r="13" fill="none" stroke="#A72A2F" strokeOpacity="0.6" className="pulse-ring delay-1" />
        <circle cx="545" cy="428" r="6.5" fill="#A72A2F" />
        <text x="545" y="462" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',sans-serif">インド</text>
        <text x="545" y="478" textAnchor="middle" fontSize="10.5" fill="#626874" fontFamily="'Noto Sans JP',sans-serif">グローバルデリバリー</text>
      </g>

      {/* corner tags */}
      <text x="14" y="30" fontSize="9.5" letterSpacing="3" fill="#173A70" opacity="0.6" fontFamily="Inter,sans-serif" fontWeight="600">TOKYO</text>
      <text x="486" y="506" fontSize="9.5" letterSpacing="3" fill="#A72A2F" opacity="0.65" fontFamily="Inter,sans-serif" fontWeight="600">GLOBAL</text>
    </svg>
  );
}
