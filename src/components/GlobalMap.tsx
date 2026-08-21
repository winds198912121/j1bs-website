/* 東京本社 × インド・プネ拠点を地図上で示すグローバル体制マップ */
const JAPAN_PATHS = [
  "M 70.0 -18.8 L 68.6 -17.4 68.5 -16.3 70.2 -15.7 70.9 -17.0 72.3 -17.6 73.3 -16.8 74.8 -18.2 74.5 -19.0 72.6 -19.5 71.5 -18.6 70.0 -18.8 Z",
  "M 90.9 -26.0 L 90.9 -28.5 93.3 -30.8 93.4 -32.7 92.0 -35.9 89.2 -35.5 88.1 -34.0 88.5 -31.4 86.9 -28.5 81.6 -25.3 79.9 -26.4 77.2 -22.3 74.4 -22.7 69.2 -22.0 67.3 -20.4 64.7 -19.2 63.3 -17.8 60.9 -17.1 61.9 -15.4 63.6 -14.8 62.9 -12.7 64.2 -11.8 65.9 -12.7 67.6 -16.7 65.0 -18.4 68.0 -18.5 71.1 -19.6 75.6 -20.1 75.7 -18.3 77.5 -17.4 81.2 -20.1 85.7 -20.3 89.1 -21.4 90.4 -23.0 90.0 -24.2 90.9 -26.0 Z",
  "M 102.8 -40.3 L 102.2 -43.0 100.4 -42.0 98.6 -42.5 96.6 -43.3 93.5 -45.7 92.7 -43.9 92.0 -40.6 89.2 -40.5 87.9 -38.7 88.3 -36.4 91.2 -36.4 92.6 -39.0 96.7 -37.4 99.0 -39.7 102.8 -40.3 Z",
];

const INDIA_PATHS = [
  "M -22.5 -5.3 L -25.4 -5.6 -24.5 -6.6 -25.7 -8.1 -27.5 -7.1 -29.7 -7.7 -32.7 -6.2 -35.1 -4.4 -37.2 -4.1 -36.1 -3.4 -36.3 -2.0 -38.4 -1.9 -40.6 -2.0 -42.3 -1.7 -44.6 -2.6 -44.9 -4.9 -46.5 -4.4 -46.7 -3.4 -46.3 -1.9 -46.6 -1.0 -48.8 -0.9 -51.9 -1.5 -53.9 -1.7 -55.4 -2.9 -59.0 -3.2 -62.4 -4.5 -64.9 -5.6 -67.4 -6.5 -66.4 -8.7 -64.7 -9.8 -68.3 -11.4 -70.9 -12.9 -71.6 -15.5 -69.7 -15.2 -69.7 -16.3 -70.7 -17.5 -70.4 -19.4 -73.2 -22.2 -75.7 -20.2 -78.6 -19.9 -82.6 -20.4 -83.9 -19.4 -82.9 -17.4 -82.0 -15.8 -79.9 -14.7 -82.1 -13.3 -82.1 -11.6 -84.6 -9.3 -86.3 -6.9 -89.0 -4.5 -92.0 -4.6 -94.9 -2.2 -93.2 -1.2 -92.9 0.6 -91.4 1.8 -90.9 3.8 -96.6 3.8 -98.3 5.4 -95.3 7.4 -94.5 8.3 -95.8 9.1 -92.4 12.0 -90.5 12.2 -86.8 10.9 -86.3 13.0 -86.3 15.9 -84.4 23.4 -82.0 26.6 -81.6 28.1 -81.0 31.0 -79.6 33.2 -78.7 34.3 -77.7 36.7 -76.5 40.0 -74.0 42.1 -72.9 41.5 -72.1 39.9 -69.7 39.2 -70.5 38.4 -69.3 36.7 -68.0 36.6 -68.0 32.6 -66.9 30.4 -67.0 28.4 -67.5 25.4 -66.8 23.6 -65.5 23.5 -63.2 22.6 -61.9 22.1 -61.9 21.0 -59.3 19.5 -57.4 18.0 -54.4 15.2 -50.7 13.7 -49.3 12.3 -49.5 10.5 -46.3 10.0 -44.5 10.1 -44.1 9.2 -44.5 7.3 -45.4 5.5 -45.0 4.1 -46.6 3.5 -46.0 2.7 -44.4 1.8 -46.3 0.5 -45.3 -1.0 -43.3 -0.0 -42.0 0.1 -41.8 1.7 -39.3 2.0 -36.9 2.0 -35.4 2.4 -36.6 4.4 -37.8 4.5 -38.6 5.8 -37.2 7.0 -36.7 5.6 -36.0 5.5 -34.6 9.3 -33.4 8.7 -33.6 7.7 -33.1 6.9 -33.0 4.5 -30.9 5.0 -29.8 3.1 -29.6 2.0 -28.2 -0.0 -28.3 -1.3 -24.9 -3.0 -23.1 -2.5 -23.3 -4.0 -22.4 -4.4 -22.5 -5.3 Z",
];

const ARC_UP = "M 237.8 350.2 C 320 235, 540 185, 631.5 257.9"; // デリバリー（東京→プネ）
const ARC_DOWN = "M 631.5 257.9 C 555 330, 375 380, 237.8 350.2"; // 統制・レポーティング（プネ→東京）

const GRATICULE_LON = [274.5, 394.1, 513.7, 633.3];
const GRATICULE_LAT = [234.8, 288.5, 342.2, 396];

export default function GlobalMap() {
  return (
    <svg
      viewBox="0 0 920 600"
      role="img"
      aria-label="東京本社とインド・プネ拠点をつなぐグローバルデリバリー体制の地図"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="oceanDots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="#173A70" opacity="0.10" />
        </pattern>
        <linearGradient id="oceanGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#EDF0F4" />
        </linearGradient>
      </defs>

      {/* ocean */}
      <rect width="920" height="600" fill="url(#oceanGrad)" />
      <rect width="920" height="600" fill="url(#oceanDots)" />

      {/* graticule */}
      <g stroke="#173A70" strokeOpacity="0.12" strokeWidth="1">
        {GRATICULE_LON.map((x) => (
          <line key={`lon${x}`} x1={x} y1="150" x2={x} y2="460" />
        ))}
        {GRATICULE_LAT.map((y) => (
          <line key={`lat${y}`} x1="150" y1={y} x2="740" y2={y} />
        ))}
      </g>

      {/* sea labels */}
      <text x="470" y="216" fontSize="9.5" letterSpacing="2.5" fill="#173A70" opacity="0.35" fontFamily="'Noto Sans JP',Inter,sans-serif">
        日本海
      </text>
      <text x="736" y="420" fontSize="9.5" letterSpacing="2.5" fill="#173A70" opacity="0.35" fontFamily="'Noto Sans JP',Inter,sans-serif">
        太平洋
      </text>
      <text x="436" y="414" fontSize="9.5" letterSpacing="2.5" fill="#173A70" opacity="0.35" fontFamily="'Noto Sans JP',Inter,sans-serif">
        ベンガル湾
      </text>
      <text x="132" y="404" fontSize="9.5" letterSpacing="2.5" fill="#173A70" opacity="0.35" fontFamily="'Noto Sans JP',Inter,sans-serif">
        アラビア海
      </text>

      {/* countries */}
      <g transform="translate(430,310) scale(2.3)">
        {INDIA_PATHS.map((d, i) => (
          <path
            key={`in${i}`}
            d={d}
            fill="#173A70"
            fillOpacity="0.055"
            stroke="#173A70"
            strokeOpacity="0.4"
            strokeWidth="1.1"
          />
        ))}
        {JAPAN_PATHS.map((d, i) => (
          <path
            key={`jp${i}`}
            d={d}
            fill="#A72A2F"
            fillOpacity="0.045"
            stroke="#173A70"
            strokeOpacity="0.4"
            strokeWidth="1.1"
          />
        ))}
      </g>

      {/* country labels */}
      <text x="290" y="238" fontSize="13" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',Inter,sans-serif">
        インド
      </text>
      <text x="290" y="252" fontSize="8.5" letterSpacing="2.5" fill="#626874" fontFamily="Inter,sans-serif" fontWeight="600">
        INDIA
      </text>
      <text x="612" y="196" fontSize="13" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',Inter,sans-serif">
        日本
      </text>
      <text x="612" y="210" fontSize="8.5" letterSpacing="2.5" fill="#626874" fontFamily="Inter,sans-serif" fontWeight="600">
        JAPAN
      </text>

      {/* connection arcs */}
      <path
        d={ARC_UP}
        fill="none"
        stroke="#173A70"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeDasharray="4 8"
        className="animate-dash"
      />
      <path
        d={ARC_DOWN}
        fill="none"
        stroke="#A72A2F"
        strokeOpacity="0.65"
        strokeWidth="1.6"
        strokeDasharray="4 8"
        className="animate-dash-slow"
      />

      {/* traveling particles */}
      <circle r="3" fill="#173A70">
        <animateMotion dur="7s" repeatCount="indefinite" path={ARC_UP} />
      </circle>
      <circle r="3.4" fill="#A72A2F">
        <animateMotion dur="9s" begin="2.5s" repeatCount="indefinite" path={ARC_DOWN} />
      </circle>
      <circle r="2" fill="#173A70" opacity="0.6">
        <animateMotion dur="10s" begin="1s" repeatCount="indefinite" path={ARC_UP} />
      </circle>

      {/* Pune node */}
      <g>
        <circle cx="237.8" cy="350.2" r="10" fill="none" stroke="#173A70" className="pulse-ring" />
        <circle cx="237.8" cy="350.2" r="5.5" fill="#173A70" />
        <text x="225" y="368" textAnchor="end" fontSize="13.5" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',Inter,sans-serif">
          プネ拠点
        </text>
        <text x="225" y="382" textAnchor="end" fontSize="8.5" letterSpacing="1.5" fill="#626874" fontFamily="Inter,sans-serif" fontWeight="600">
          PUNE · 18.52°N 73.85°E
        </text>
      </g>

      {/* Tokyo node */}
      <g>
        <circle cx="631.5" cy="257.9" r="11" fill="none" stroke="#A72A2F" className="pulse-ring" />
        <circle cx="631.5" cy="257.9" r="11" fill="none" stroke="#A72A2F" strokeOpacity="0.55" className="pulse-ring delay-1" />
        <circle cx="631.5" cy="257.9" r="6" fill="#A72A2F" />
        <text x="644" y="254" fontSize="13.5" fontWeight="700" fill="#181A1F" fontFamily="'Noto Sans JP',Inter,sans-serif">
          東京本社
        </text>
        <text x="644" y="268" fontSize="8.5" letterSpacing="1.5" fill="#626874" fontFamily="Inter,sans-serif" fontWeight="600">
          TOKYO · 35.68°N 139.69°E
        </text>
      </g>

      {/* legend */}
      <g fontFamily="'Noto Sans JP',Inter,sans-serif">
        <rect x="176" y="452" width="10" height="10" fill="#A72A2F" />
        <text x="194" y="461" fontSize="10.5" fill="#626874">東京本社（統括・PMO）</text>
        <rect x="176" y="472" width="10" height="10" fill="#173A70" />
        <text x="194" y="481" fontSize="10.5" fill="#626874">プネ拠点（デリバリーセンター）</text>
      </g>

      {/* panel tag */}
      <text x="846" y="32" fontSize="9" letterSpacing="3" fill="#173A70" opacity="0.5" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="end">
        JAPAN × INDIA NETWORK
      </text>
    </svg>
  );
}
