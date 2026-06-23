# Asset Classification

Date: 2026-06-21

Scope: `outputs/image-inbox/`

Purpose: Reclassify the newly supplied image materials for the Shikigami AI Works homepage. This pass classifies and records candidates only. It does not move source images, copy public assets, or wire images into the page.

## ASOC Loop 1 Summary

| Item | Result |
|---|---:|
| Inbox images scanned | 216 |
| Total inbox size | 455.93 MB |
| Unique SHA-256 hashes | 195 |
| Exact duplicate groups | 21 |
| Files inside duplicate groups | 42 |
| Open errors | 0 |

Generated review artifacts:

- `outputs/image-review/asset-inventory-2026-06-21.csv`
- `outputs/image-review/asset-review-summary-2026-06-21.json`
- `outputs/image-review/reclass-2026-06-21-sheet-01.jpg` through `outputs/image-review/reclass-2026-06-21-sheet-14.jpg`

Current public asset state:

- Tracked public visuals are still `assets/site-icon.svg`, `assets/og-image.svg`, and `assets/evidence-map.svg`.
- `assets/images/` does not exist in the current working tree.
- The previous classification text mentioned copied `assets/images/` files, but those files are not present now.
- All original inbox images remain under ignored `outputs/`; this pass did not add heavy PNG originals to Git-tracked public assets.

## Classification Policy

| Class | Meaning | Action |
|---|---|---|
| `adopt-homepage` | Strong fit for the public homepage after optimization | Create resized `.webp` or compressed derivatives before use |
| `adopt-brand` | Logo, badge, icon, or brand accent candidate | Keep source, derive small public versions only |
| `hold-background` | Usable as a quiet section background, but not distinctive enough for first view | Keep for later design pass |
| `hold-composite-source` | Useful source material, but needs masking, cleanup, or composition | Do not use directly |
| `separate-project` | Better suited to VN, TRPG, Codex Speech, or UI kit work than this homepage | Keep out of the homepage pass |
| `reject-homepage` | Wrong subject, too generic, too dark/blank, screenshot-like, or brand-confusing | Do not use on the homepage |
| `reject-duplicate` | Exact duplicate of another source | Use only one representative |

## Top Homepage Candidates

| Priority | ID | Source | Class | Best use | Reason | Before use |
|---:|---|---|---|---|---|---|
| 1 | `0003` | `outputs/image-inbox/選りすぐり素材/019e537e-cb0b-7920-976e-e076f760b807/ig_036997ffc42abcc6016a11428c468881918ef581293fdccf97.png` | `adopt-homepage` | Main hero or first worldview band | Moon, sakura, circuit tree, and dark left space fit the brand and can carry overlaid copy | Crop/test mobile, add dark overlay, export web derivative |
| 2 | `0098` | `outputs/image-inbox/選りすぐり素材/spas/ig_03375e62768611e5016a128ff1658081919b78e382cc9cfa35.png` | `adopt-homepage` | Proof/implementation architecture section | Golden circuit gateway visually supports "implementation path" and proof-first positioning | Use as section image, not behind dense text without overlay |
| 3 | `0124` | `outputs/image-inbox/選りすぐり素材/spas/ig_05fcb6319776cc9b016a13128946e08191af79c00b5823bd15.png` | `adopt-homepage` | Systems/workflow visual | Rich AI city/network scene fits agent, RAG, and automation themes | Too dense for small cards; use wide band or modal/detail area |
| 4 | `0127` | `outputs/image-inbox/選りすぐり素材/spas/ig_05fcb6319776cc9b016a1313692ae88191942dc09052df3683.png` | `adopt-homepage` | Trust, human value, or closing CTA support | Heart-like network motif bridges technical proof with human value | Avoid overly sentimental copy |
| 5 | `0116` | `outputs/image-inbox/選りすぐり素材/spas/ig_05fcb6319776cc9b016a1310828a1c8191a66c44f10f6cfe72.png` | `adopt-homepage` | Alternate hero or project-world visual | Gold and cyan structure adds scale without relying on the sakura motif | Needs contrast test against current green/white LP palette |
| 6 | `0088` | `outputs/image-inbox/選りすぐり素材/shikigami-logo-03-sakura-api-logo-fixed-v2-under-1mb.png` | `adopt-brand` | Raster logo, favicon source, social avatar source | Best logo candidate because it is already under 1 MB and visually readable | Derive small transparent/icon variants if needed |
| 7 | `0130` | `outputs/image-inbox/選りすぐり素材/新しいフォルダー/cyber-sakura-cleanup-v02.png` | `adopt-brand` | Badge, section marker, footer seal | Clean cyber-sakura circle reads as a technical sakura seal | Keep secondary to the fox logo |
| 8 | `0084` | `outputs/image-inbox/選りすぐり素材/sakura/ig_0b29227204c20c93016a11344c45988191ad1e032f059a72ab.png` | `adopt-brand` | Thin divider, proof-strip accent, small decorative band | Wide sakura-circuit branch can add identity without dominating the page | Use sparingly to avoid decorative clutter |
| 9 | `0077` | `outputs/image-inbox/選りすぐり素材/sakura/ig_055757ff6bd833ef016a10802cfb00819183c2555f6edd1b13.png` | `adopt-brand` | Square badge or icon candidate | High-detail circuit flower supports the sakura API visual language | Needs downscale readability test |
| 10 | `0047` | `outputs/image-inbox/選りすぐり素材/codexspeech-hero-anime-butterfly.png` | `separate-project` | Codex Speech or portfolio case-study hero | Strong image, but it is more product/project-specific than homepage-wide branding | Use only if a Codex Speech case study appears |

## Folder And ID Range Decisions

| ID range | Source group | Decision | Notes |
|---|---|---|---|
| `0001`-`0046` | Moonlit sakura circuit tree variants | `adopt-homepage` representative, hold the rest | Use `0003` as the first pick. `0036`, `0041`, and `0046` are named variants but exact duplicates exist in `D001`, `D007`, and `D012`; avoid copying both names and hashes. |
| `0048`-`0051` | `image2-horror-trpg` | `separate-project` | Good TRPG proposal visuals, but too dark and topic-specific for Shikigami AI Works homepage. |
| `0052`-`0075` | Light blue, white, and pastel AI backgrounds | `hold-background` | Useful for quiet section backgrounds. They are too generic for first-view brand identity. |
| `0076`-`0087` | Sakura icon, tree, branch, and flower assets | `adopt-brand` / hold | Good accent source group. Prioritize `0084`, `0077`, and `0080`; avoid using many at once. |
| `0088`-`0090` | Shikigami fox logo variants | `adopt-brand` | Prefer `0088` for production because it is the under-1 MB variant. Keep `0089` as the heavier source and `0090` as an alternate crop. |
| `0091`-`0127` | Gold/cyan/blue AI architecture and abstract system scenes | `adopt-homepage` representative, hold the rest | Strong proof-first visual pool. Prioritize `0098`, `0124`, `0127`, `0116`, `0118`, and `0106`. Avoid placing dense images behind small text. |
| `0128` | UI screenshot-like image | `reject-homepage` | Do not use unless it becomes documented proof for a specific product and public permission/status is clear. |
| `0129`-`0136` | Cyber-sakura circular badge variants | `adopt-brand` representative, hold the rest | Prefer `0130` or `0136`. Keep as secondary seal, not primary identity. |
| `0137`-`0147` | Dark parchment/background and green-bordered frame sheets | `separate-project` / `reject-homepage` | More VN/UI oriented than homepage oriented. Green borders make direct publication unsuitable. |
| `0148`-`0166` | UI panel and dialogue-frame components | `separate-project` | Useful for VN or UI kit work. Not appropriate for the current evidence-first LP. Several files are exact duplicates. |
| `0167`-`0182` | Dark sakura textures and ornate frames | `separate-project` / hold | Possible VN background/frame material. Too frame-like for this homepage. |
| `0183`-`0198` | Green-screen sakura branches | `hold-composite-source` | Useful only after chroma key or masking. Do not publish directly. |
| `0199`-`0208` | Pink UI panel components | `separate-project` | Nice UI source material, but it would push the homepage toward VN UI styling. |
| `0209`-`0212` | Dark square/rectangular sakura frames and textures | hold / `separate-project` | Could become decorative backgrounds elsewhere, but not needed for the LP right now. |
| `0213`-`0216` | Soft pastel sakura paper backgrounds | `hold-background` | Gentle enough for section texture, but low priority compared with stronger brand assets. |

## Reject And Safety Rules Applied

- Do not publish original multi-megabyte PNGs directly above the fold.
- Do not put green-screen sakura branch images on the site until the green background is removed.
- Do not use VN dialogue panels or decorative UI frames for this LP unless the page direction changes to a VN-style brand expression.
- Do not use `0128` as proof imagery unless the underlying product/page is intentionally public and described.
- Do not copy duplicate hashes into public assets. Pick one representative per visual.
- Do not let the image palette split the site into unrelated themes. The safest visual line is dark navy/black plus sakura pink, electric cyan, and gold.

## Next Best Action

Create optimized public derivatives for a very small first batch, then test them in the current static LP without committing heavy originals:

1. `0003` -> `assets/images/hero/sakura-circuit-moon-hero.webp`
2. `0098` -> `assets/images/sections/golden-circuit-gateway.webp`
3. `0124` -> `assets/images/sections/ai-system-city.webp`
4. `0088` -> `assets/images/brand/shikigami-fox-logo.webp` and small favicon/social derivatives if needed
5. `0130` -> `assets/images/brand/cyber-sakura-badge.webp`

Suggested next ASOCFULL prompt:

```text
ASOCFULLで、D:\自分のホームページ の画像採用ミニ実装を1ループだけ実行して。

目的:
docs/asset-classification.md の2026-06-21分類に従い、採用上位5枚だけをWeb用に最適化し、現在の静的LPへ過剰に壊さない範囲で組み込む。

対象:
- source:
  - outputs/image-inbox/選りすぐり素材/019e537e-cb0b-7920-976e-e076f760b807/ig_036997ffc42abcc6016a11428c468881918ef581293fdccf97.png
  - outputs/image-inbox/選りすぐり素材/spas/ig_03375e62768611e5016a128ff1658081919b78e382cc9cfa35.png
  - outputs/image-inbox/選りすぐり素材/spas/ig_05fcb6319776cc9b016a13128946e08191af79c00b5823bd15.png
  - outputs/image-inbox/選りすぐり素材/shikigami-logo-03-sakura-api-logo-fixed-v2-under-1mb.png
  - outputs/image-inbox/選りすぐり素材/新しいフォルダー/cyber-sakura-cleanup-v02.png
- output:
  - assets/images/
  - index.html
  - assets/styles.css
  - docs/implementation-notes.md if any spec-unstated design judgment is made

制約:
- 原寸PNGをそのまま公開導線に使わない。
- まずWebP/JPEGなどの軽量派生を作る。
- 既存の証拠-first LP構造、フォーム、proof links、dataLayer hooksを壊さない。
- UI上で有効なクリック要素を追加するなら必ず実動作を持たせる。
- commit/pushはしない。

検証:
- 生成画像の寸法と容量を確認する。
- ローカルHTTPサーバーで表示確認する。
- デスクトップ/モバイル幅でヒーロー、proof strip、主要CTAが読めることをスクリーンショット確認する。
- 画像参照切れがないことを確認する。

完了条件:
- 採用上位5枚の軽量派生が assets/images/ にある。
- LPが画像を使っても読みやすさを保っている。
- 変更ファイルと未解決リスクを報告する。
```
