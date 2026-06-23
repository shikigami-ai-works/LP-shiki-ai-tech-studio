# Implementation Notes

Date: 2026-06-15

Active spec: `C:\Users\sakur\Downloads\私が作るべきランディングページの仕様書.md`

## Requirement Sorting

### 必須

- 証拠先行・相談獲得型LPとして、ヘッダー、ヒーロー、証拠ストリップ、課題提示、解決策、差別化、実績・成果物、進め方、FAQ、最終CTA、フッターを実装する。
- 問い合わせフォームはラベル、説明、インラインエラー、エラー要約、修正案、フォーカス制御、二重送信防止を持つ。
- サンクス導線を固有ページとして実装し、フォーム成功後に遷移できる。
- SEOメタ情報、canonical、OG/Twitter Card、JSON-LD構造化データを設置する。
- デスクトップとモバイルの両方で主コンテンツ、CTA、証拠導線、フォームを同等に見せる。
- FAQ、モバイルナビ、証拠詳細、CTA、フォームなど、enabledな操作要素は実際に状態変更、スクロール、遷移、バリデーション、サンクス表示のいずれかを起こす。
- `dataLayer.push()` を使い、`lp_view`、`cta_click`、`proof_click`、`scroll_depth`、`faq_expand`、`form_start`、`form_error`、`form_submit`、`generate_lead` を発火できる設計にする。
- `href="#"`、`javascript:void(0)`、`console.log`のみの操作を残さない。

### 後回し

- 本番の `POST /api/lead`、CRM、通知メール、Slack/Chat通知、CSRFトークン、レート制限、Captcha。
- GTMコンテナID、GA4 DebugView/Realtimeでの実測確認。
- 実在するGitHub、Zenn、Speaker Deck、制作物、検証ログURLの接続。
- 本番ドメイン確定後の canonical、OG画像URL、sitemap URL、Search Console送信。
- 実測 Core Web Vitals、Lighthouse、フィールドデータ監視。
- A/Bテスト、ヒートマップ、フォーム離脱分析、月次運用レポート。

### 未確定

- ブランド名、実名/屋号/法人名のどれで出すか。
- 本番ドメイン、サイト名、公開プロフィール、証拠リンクの実URL。
- 相談対象の価格帯、対応範囲、返信SLA、日程予約URL。
- CRM/MA、CMS、通知先、保存先、プライバシーポリシーの正式文面。
- 公開できる実績、数値、ロゴ、登壇資料、制作物キャプチャ。

## Decisions

### 2026-06-15: Empty project, static implementation

- Decision: The project directory had no files, no `package.json`, no Git repository, and CodeGraph was not initialized. The LP is implemented as dependency-free static HTML/CSS/JS.
- Reason: There was no existing framework or build pipeline to preserve, and the spec prioritizes low JS, semantic HTML, performance, and progressive enhancement.
- Tradeoff accepted: There is no framework-level lint/typecheck/build script. Verification uses static inspection, local HTTP serving, browser automation, and source searches.
- Affected files/behavior: `index.html`, `assets/styles.css`, `assets/app.js`, `thanks/index.html`, `privacy/index.html`, `robots.txt`, `sitemap.xml`.
- Formalize later: If this site is migrated to Astro, Next.js, or another framework, document the build and deploy process.

### 2026-06-15: Placeholder brand and proof URLs avoided

- Decision: The visible brand is temporarily `しき AI Tech Studio`, and external proof URLs are shown as not-yet-connected instead of linking to generic GitHub/Zenn/Speaker Deck homepages.
- Reason: The spec requires proof-first design, but actual public profile URLs were not provided. Fake generic proof links would weaken trust.
- Tradeoff accepted: The LP uses internal proof details and disabled "URL設定待ち" controls until real URLs are supplied.
- Affected files/behavior: Proof strip, proof cards, hero proof visual, footer.
- Formalize later: Replace all proof placeholders with real GitHub repos, articles, slides, artifacts, and verification logs.

### 2026-06-15: Static form success path

- Decision: The form validates client-side, prevents double submission, stores only non-PII conversion metadata in `sessionStorage`, and redirects to `thanks/index.html`.
- Reason: Backend, CRM, notification destination, CSRF implementation, and privacy operation are not specified.
- Tradeoff accepted: The local form proves UX, accessibility, and event design, but does not transmit the inquiry externally.
- Affected files/behavior: `index.html`, `assets/app.js`, `thanks/index.html`, `privacy/index.html`.
- Formalize later: Implement `POST /api/lead`, server-side validation, CSRF/rate limit/BOT checks, storage, notification, and 303 redirect.

### 2026-06-15: Reserved example domain in SEO artifacts

- Decision: Canonical, OG, and sitemap URLs use `https://shiki-ai-tech.example/`.
- Reason: The production domain is unknown, but the spec requires absolute URLs and SEO scaffolding.
- Tradeoff accepted: The SEO structure is present, but URLs must be replaced before public release.
- Affected files/behavior: `index.html`, `thanks/index.html`, `privacy/index.html`, `sitemap.xml`, `robots.txt`.
- Formalize later: Replace with the real canonical domain and generate final OG image assets.

### 2026-06-15: Draft privacy page

- Decision: A minimal privacy page is included so the footer privacy link is real and form consent has a target document.
- Reason: Footer links must not be dead, and the form requires a consent explanation.
- Tradeoff accepted: The policy is a draft because storage destination, controller identity, retention period, and notification flow are not specified.
- Affected files/behavior: `privacy/index.html`, form consent copy.
- Formalize later: Legal review and final privacy wording before public release.

### 2026-06-15: Mobile hero proof table collapsed

- Decision: The desktop hero shows the `Proof pipeline` table, while mobile hides that table and keeps the evidence map plus proof strip visible.
- Reason: At 390px width, keeping the full table pushed the proof strip far below the first viewport and weakened the spec requirement that the next proof section be visible early.
- Tradeoff accepted: Mobile users see the same proof concepts through the evidence map, proof strip, and downstream proof cards, but not the desktop table in the hero.
- Affected files/behavior: `assets/styles.css`, hero first viewport.
- Formalize later: If final brand assets are supplied, consider a mobile-specific proof visual instead of hiding the table.

### 2026-06-15: Video and schedule events omitted until matching UI exists

- Decision: `video_start`, `video_progress`, and `schedule_click` are not emitted because the implemented LP has no video or configured scheduling URL.
- Reason: Emitting analytics events for nonexistent enabled controls would create false measurement data.
- Tradeoff accepted: The event architecture covers current visible interactions; future video or scheduling UI must add the matching events.
- Affected files/behavior: `assets/app.js`, `thanks/index.html`.
- Formalize later: Add `schedule_click` when a real calendar URL is configured, and add video events only if an actual video is embedded.

### 2026-06-17: Production brand and Cloudflare Workers domain

- Decision: The public brand is `しきがみAI Works`, and the production domain is `https://shikigami-ai-works.jp/`.
- Reason: The domain and X account direction are aligned around `Shikigami_AI_` / `しきがみAI Works`.
- Tradeoff accepted: The Cloudflare project name remains `lp-shiki-ai-tech-studio` to match the existing deployed Worker, while the public-facing metadata, canonical URLs, sitemap, and visible brand use the finalized name.
- Affected files/behavior: `index.html`, `privacy/index.html`, `thanks/index.html`, `robots.txt`, `sitemap.xml`, `assets/site-icon.svg`, `assets/og-image.svg`, `wrangler.jsonc`.
- Formalize later: After `Git push`, verify the production deployment HTML no longer contains `shiki-ai-tech.example` or `しき AI Tech Studio`.

### 2026-06-17: Proof links connected to GitHub and note

- Decision: The proof strip and proof cards now link to `https://github.com/shikigami-ai-works` for GitHub evidence and `https://note.com/intentus_26` for article evidence.
- Reason: The LP should let visitors leave the first proof surfaces for Shiki's actual public profiles instead of seeing disabled placeholder URL buttons.
- Tradeoff accepted: The note account URL was selected from the publicly reachable note profile; if Shiki wants another note account, only the `href` targets and audit note need to change.
- Affected files/behavior: `index.html`, `assets/styles.css`, `assets/evidence-map.svg`, `docs/ui-interaction-audits/UI_INTERACTION_AUDIT_2026-06-17_proof-links.md`.
- Formalize later: Connect Speaker Deck and verification-log URLs once the real public destinations are decided.

### 2026-06-21: Bright homepage redesign from X.mp4 reference

- Decision: The homepage was redesigned as a bright, white-and-ice-blue version inspired by `outputs/assets/X.mp4`, using lightweight WebP assets under `assets/images/bright/` instead of embedding the 15MB reference video.
- Reason: The reference video has a strong dark cyberpunk identity and unrelated visible branding, while Shiki requested a bright version and allowed existing materials. Reusing the video directly would make the public homepage visually darker, heavier, and less brand-safe.
- Tradeoff accepted: The redesign borrows the video's motion language, floating panels, fine circuit lines, and dashboard density, but not its dark palette or source-video text. Motion is implemented with CSS and respects reduced-motion preferences.
- Affected files/behavior: `index.html`, `assets/styles.css`, `assets/app.js`, `assets/images/bright/*.webp`.
- Formalize later: If a final brand reel is created specifically for Shikigami AI Works, add a real video section with `video_start` / `video_progress` analytics and poster fallback.

### 2026-06-22: Five-pattern visual lab from selected images

- Decision: A separate internal comparison page was added under `patterns/` instead of replacing the current homepage. The visible page is `noindex,nofollow` and uses optimized WebP copies in `assets/images/patterns/`.
- Reason: Shiki asked to try five patterns from the current image folder. Keeping the patterns in a dedicated lab allows quick comparison without destabilizing the active bright homepage.
- Tradeoff accepted: The requested `outputs/image-inbox/選りすぐり素材/light/新しいフォルダー/` path was not present in the working tree, so the existing `outputs/image-inbox/選りすぐり素材/` image set was used. Duplicate `- コピー` files were skipped.
- Affected files/behavior: `patterns/index.html`, `patterns/patterns.css`, `patterns/patterns.js`, `assets/images/patterns/*.webp`.
- Formalize later: If Shiki chooses one pattern, promote that direction into the main homepage and run the full homepage UI audit again.

### 2026-06-22: Sakura Gateway promoted to homepage

- Decision: Pattern 03 `Sakura Gateway` was promoted into the main homepage. The header/footer brand mark now uses the fox logo, the hero uses the sakura torii image, the hero copy emphasizes the sakura gateway, and the solution visual uses the sealed-letter asset.
- Reason: Shiki selected pattern 03 and asked for ASOCFULL implementation. This keeps the stronger Shikigami identity while preserving the existing evidence-first proof, FAQ, and form flows.
- Tradeoff accepted: The wide desktop hero keeps the fox medallion and floating proof cards, but tablet/mobile hide the floating dashboard so the proof strip remains visible in the first viewport and text stays readable.
- Affected files/behavior: `index.html`, `thanks/index.html`, `privacy/index.html`, `assets/styles.css`, `assets/app.js`.
- Formalize later: If this direction is finalized for production, generate a matching OG image and update `assets/og-image.svg` or replace it with a raster social preview.
