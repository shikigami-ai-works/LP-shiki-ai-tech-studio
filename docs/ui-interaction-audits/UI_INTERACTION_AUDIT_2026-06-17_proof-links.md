# UI Interaction Audit: proof links

Date: 2026-06-17
Scope audited: landing page proof strip and proof-card external profile/article links only.
Launch method: `python -m http.server 4173 --bind 127.0.0.1` from `D:\自分のホームページ`
Target URL: `http://127.0.0.1:4173/`

## Result

| UI element | Type | Visible location | Code reference | Connected handler/action | Expected behavior | Observable result | Verification method | Result | Fix needed | Manual confirmation needed |
|---|---|---|---|---|---|---|---|---|---|---|
| GitHub / 実装の痕跡 | Link | Proof strip, first viewport | `index.html` | `href="https://github.com/shikigami-ai-works"` | Open Shikigami AI Works GitHub profile in a new tab | Reached `https://github.com/shikigami-ai-works`; title `shikigami-ai-works (しきがみ AI ワークス) · GitHub` | Browser click + URL/title check | Pass | No | No |
| GitHubを見る | Link | Proof section repository card | `index.html` | `href="https://github.com/shikigami-ai-works"` | Open Shikigami AI Works GitHub profile in a new tab | Reached `https://github.com/shikigami-ai-works`; title `shikigami-ai-works (しきがみ AI ワークス) · GitHub` | Browser click + URL/title check | Pass | No | No |
| note / 技術記事 | Link | Proof strip, first viewport | `index.html` | `href="https://note.com/intentus_26"` | Open the note profile in a new tab | Reached `https://note.com/intentus_26`; title `Intentus｜会社員、AIと世界の観察ログ｜note` | Browser click + URL/title check | Pass | No | No |
| noteを見る | Link | Proof section article card | `index.html` | `href="https://note.com/intentus_26"` | Open the note profile in a new tab | Reached `https://note.com/intentus_26`; title `Intentus｜会社員、AIと世界の観察ログ｜note` | Browser click + URL/title check | Pass | No | No |

## Checks Run

- `git diff --check -- index.html assets\styles.css assets\evidence-map.svg`
- Static search confirmed `Zenn / 技術記事` and `Zenn / Blog` are no longer present in `index.html` / `assets\evidence-map.svg`.
- Browser DOM check confirmed two note links, both with `target="_blank"` and `rel="noopener noreferrer"`.
- Mobile viewport check at `390x844` confirmed the proof-strip note link and proof-card note link retain their width, text, and target URL.

## Remaining Items

- Zenn/Speaker Deck/log placeholder controls outside this narrow proof-link scope remain unchanged.
- The note URL was inferred from public availability as `https://note.com/intentus_26`; replace the URL if Shiki wants a different note account.
