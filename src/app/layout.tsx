import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://j1bs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "J1ビジネスソリューションズ株式会社 | J1 Business Solutions Co., Ltd.",
    template: "%s | J1 Business Solutions Co., Ltd.",
  },
  description:
    "SAP S/4導入をはじめとする上流工程コンサルティング、PMO、グローバルデリバリーを提供するJ1ビジネスソリューションズ株式会社（J1BS）。日本企業の業務理解とグローバルなSAPケイパビリティを融合し、構想策定から導入・運用まで企業変革を支援します。",
  keywords: [
    "SAP コンサルタント",
    "SAP S/4HANA",
    "SAP 導入支援",
    "SAP コンサルティング",
    "PMO",
    "IT戦略",
    "グローバルデリバリー",
    "J1BS",
    "J1ビジネスソリューションズ",
  ],
  authors: [{ name: "J1ビジネスソリューションズ株式会社" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "J1 Business Solutions Co., Ltd.",
    title:
      "J1ビジネスソリューションズ株式会社 | J1 Business Solutions Co., Ltd.",
    description:
      "変革の時代を勝ち抜く、確かな経験とグローバルな視点を。SAPコンサルティング・PMO・グローバルデリバリー。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "J1BS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "J1ビジネスソリューションズ株式会社 | J1BS",
    description:
      "SAPコンサルティング・PMO・グローバルデリバリー。日本とグローバルをつなぐ、確かな経験と視点。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171B2A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
