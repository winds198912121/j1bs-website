import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#171B2A",
        "navy-deep": "#0E1120",
        brand: "#173A70",
        crimson: "#A72A2F",
        "soft-gray": "#F3F4F6",
        "line-gray": "#D9DDE3",
        "text-body": "#181A1F",
        "text-muted": "#626874",
      },
      fontFamily: {
        sans: [
          "Inter",
          '"Noto Sans JP"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        wide2: "0.08em",
        widest2: "0.18em",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
