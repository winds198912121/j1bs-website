# J1 Business Solutions Co., Ltd. — Official Website

J1ビジネスソリューションズ株式会社（J1BS）の公式コーポレートサイト。

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · クライアントサイドのみの軽量アニメーション（CSS / SVG / IntersectionObserver）

## ローカル起動

```bash
npm install
npm run dev        # http://localhost:3000
```

## 本番ビルド

```bash
npm run build
npm start
```

## プロジェクト構成

```text
src/
  app/
    layout.tsx        # メタデータ・SEO・フォント
    page.tsx          # トップページ（単一ページ構成）
    globals.css       # Tailwind + アニメーション
    sitemap.ts        # sitemap.xml
    robots.ts         # robots.txt
  components/
    Header.tsx        # スティッキー ナビゲーション / モバイルメニュー
    Hero.tsx          # メインビジュアル
    HeroNetwork.tsx   # 日本→コンサルティング→SAP→インド のネットワークSVGアニメーション
    Message.tsx       # 代表挨拶（三﨑 早人）
    Strengths.tsx     # 私たちの強み
    Services.tsx      # サービス内容（4カテゴリ）
    GlobalDelivery.tsx# Japan × India グローバルデリバリー
    Cases.tsx         # 実績・事例（準備中）
    Profile.tsx       # 会社概要
    Contact.tsx       # お問い合わせ（mailto連携フォーム）
    Footer.tsx
    Logo.tsx          # J1BS ロゴマーク（SVG）
    Reveal.tsx        # スクロール リビール
    SectionHeading.tsx
public/
  favicon.svg
  og.png              # OGP画像
  images/misaki.jpg   # 代表写真（提供素材を最適化）
```

## ブランドカラー

| 役割 | カラー | HEX |
| --- | --- | --- |
| Primary Navy | 基調 | `#171B2A` |
| Brand Blue | テクノロジー・リンク | `#173A70` |
| Brand Red | アクセント・CTA | `#A72A2F` |
| Soft Gray | セクション背景 | `#F3F4F6` |
| Border Gray | 罫線 | `#D9DDE3` |

## 注意事項

- ロゴはテキストベースの「J1BS」マーク（`Logo.tsx` / `favicon.svg`）を使用。
  名刺画像からクリーンな透過PNG / SVGロゴが用意でき次第、デザイン変更なしで差し替え可能。
- お問い合わせフォームはメールクライアント連携（mailto）方式。バックエンド不要で動作。
- `https://j1bs.com` を Vercel / ドメイン設定後に有効化予定。
