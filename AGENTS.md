# AGENTS.md

## Project

J1ビジネスソリューションズ株式会社 (J1 Business Solutions Co., Ltd.) 公式コーポレートサイト。
Next.js 15 App Router + TypeScript + Tailwind CSS 3。バックエンドなし・静的配信想定（Vercel）。

## Commands

```bash
npm install
npm run dev      # 開発サーバー http://localhost:3000
npm run build    # 本番ビルド（push 前には必ず成功させる）
npm start        # 本番サーバー
```

## Content rules

- 実績・数字・資格・顧客情報はソース資料（J1BS_Website_Draft.md）にない限り**捏造しない**。
- 実績セクションは「準備中（Coming Soon）」表示を維持する。
- 主要コピーは `docs/requirements.md` に集約しており、文言変更はそちらと実装の両方を更新する。
- 会社情報（住所・電話・メール・代表者名）の変更時は `Profile.tsx` と `Contact.tsx`、`Footer.tsx` の3箇所を確認する。

## Design tokens

colors: navy `#171B2A`, navy-deep `#0E1120`, brand `#173A70`, crimson `#A72A2F`, soft-gray `#F3F4F6`, line-gray `#D9DDE3` (tailwind.config.ts)。

配色比率の目安: 白系 70% / ネイビー 20% / ブルー 5% / レッド 5%。

## Styling conventions

- コンポーネントは `src/components/` に 1 コンポーネント 1 ファイル。
- スクロール出現アニメーションは `Reveal` を使う。
- アニメーションは CSS / SVG の軽量実装に留め、重いライブラリを追加しない。
- `prefers-reduced-motion` 対応済み（globals.css）。
