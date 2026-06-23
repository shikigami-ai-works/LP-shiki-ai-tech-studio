# UI Interaction Audit: New LP

Date: 2026-06-23
Scope audited: `index.html` homepage after `docs/new-lp-spec.md` rewrite.
Launch method: `python -m http.server 4173 --bind 127.0.0.1`
Target URL: `http://127.0.0.1:4173/`

## Summary

- Result: Pass for all enabled homepage controls in scope.
- Disabled control: `公開URL整理中` is intentionally disabled for artifacts/logs because no curated public URL exists yet.
- Remaining production gap: the contact form is still a static validation and thanks-page route; backend storage, notification, CRM, rate limiting, and server-side validation are not connected.

## Verification Commands And Evidence

- `node --check assets/app.js`: pass.
- Static dead-control search for `href="#"`, `javascript:void`, `console.log`, `TODO`, and stale placeholder strings in `index.html`, `assets/app.js`, `assets/styles.css`: no matches.
- Browser load check with in-app Browser: title matched, DOM contained the new hero headline, console errors/warnings were empty.
- Browser screenshot API timed out, so desktop and mobile visual screenshots were captured with Chrome headless as local, uncommitted QA artifacts.
- External proof links:
  - `https://github.com/shikigami-ai-works`: HTTP 200
  - `https://note.com/intentus_26`: HTTP 200
- Runtime interaction verification used Chrome DevTools Protocol against the local static server.

## Audit Table

| UI element | Type | Visible location | Code reference | Connected handler/action | Expected behavior | Observable result | Verification method | Result | Fix needed | Manual confirmation needed |
|---|---|---|---|---|---|---|---|---|---|---|
| Skip link | Link | Focus at top of page | `index.html` | `href="#main"` | Move focus/scroll target to main content | Target `#main` exists | Source inspection | Pass | No | No |
| Brand home link | Link | Header/footer | `index.html` | `href="./"` | Navigate to homepage | Real local route | Source inspection | Pass | No | No |
| Mobile menu toggle | Button | Mobile header | `assets/app.js` `setupNavigation()` | Toggle `aria-expanded` and `body.nav-open` | Open mobile nav, close after nav click | `false -> true -> false`, `#faq` navigation observed | CDP mobile click | Pass | No | No |
| Header nav: 証拠 | Link | Header nav | `index.html` | `href="#proof"` + smooth scroll | Scroll to evidence cards | Target exists and nav handler applies | Source and runtime hash checks | Pass | No | No |
| Header nav: 対象 | Link | Header nav | `index.html` | `href="#audience"` + smooth scroll | Scroll to target visitors | Target exists | Source inspection | Pass | No | No |
| Header nav: 相談パック | Link | Header nav | `index.html` | `href="#service-packs"` + smooth scroll | Scroll to service packs | Target exists | Source inspection | Pass | No | No |
| Header nav: 進め方 | Link | Header nav | `index.html` | `href="#process"` + smooth scroll | Scroll to process | Target exists | Source inspection | Pass | No | No |
| Header nav: FAQ | Link | Header/mobile nav | `index.html` | `href="#faq"` + smooth scroll | Scroll to FAQ and close mobile nav | Mobile nav closed and hash became `#faq` | CDP mobile click | Pass | No | No |
| Header CTA | Link | Header nav | `index.html` | `href="#contact"` + `cta_click` | Scroll to contact form | Target exists; event listener attached by `[data-track='cta']` | Source inspection | Pass | No | No |
| Hero primary CTA | Link | Hero | `index.html` | `href="#contact"` + `cta_click` | Scroll to contact form | Target exists | Source inspection | Pass | No | No |
| Hero secondary CTA | Link | Hero | `index.html` | `href="#proof"` + `cta_click` | Scroll to evidence cards | Target exists | Source inspection | Pass | No | No |
| Proof chip: GitHub | External link | Proof strip | `index.html`, `assets/app.js` | Link + `proof_click` + `cta_click` | Open public GitHub profile | HTTP 200; `data-proof-id="github"` tracked | HTTP check and source inspection | Pass | No | No |
| Proof chip: note/articles | External link | Proof strip | `index.html`, `assets/app.js` | Link + `proof_click` + `cta_click` | Open public note profile | HTTP 200; `data-proof-id="articles"` tracked | HTTP check and source inspection | Pass | No | No |
| Proof chip: artifacts | Button | Proof strip | `index.html`, `assets/app.js` | `data-proof-open="artifacts"` | Open evidence dialog | Dialog opened, title set, 3 list items, `proof_click` and `evidence_open` emitted | CDP click | Pass | No | No |
| Proof chip: logs/validation | Button | Proof strip | `index.html`, `assets/app.js` | `data-proof-open="logs"` | Open evidence dialog | Same dialog path as proof buttons | Source and shared handler inspection | Pass | No | No |
| Proof chip: contact | Link | Proof strip | `index.html` | `href="#contact"` + `cta_click` | Scroll to contact form | Target exists | Source inspection | Pass | No | No |
| Service pack: AI相談整理 | Link | Service pack card | `index.html`, `assets/app.js` | `data-service-pack="ai-consulting"` | Select matching request type and scroll to contact | Shared service-pack handler covers this ID | Source and shared handler inspection | Pass | No | No |
| Service pack: RAG/LLM検証設計 | Link | Service pack card | `index.html`, `assets/app.js` | `data-service-pack="rag-llm-validation"` | Select matching request type and scroll to contact | Hash `#contact`, select value `rag-llm-validation`, visible status updated, `service_pack_click` emitted | CDP click | Pass | No | No |
| Service pack: Agent/Automation設計 | Link | Service pack card | `index.html`, `assets/app.js` | `data-service-pack="agent-automation"` | Select matching request type and scroll to contact | Shared service-pack handler covers this ID | Source and form success test | Pass | No | No |
| Service pack: LP証拠導線改善 | Link | Service pack card | `index.html`, `assets/app.js` | `data-service-pack="lp-proof-route"` | Select matching request type and scroll to contact | Shared service-pack handler covers this ID | Source and shared handler inspection | Pass | No | No |
| Evidence card: GitHub interpretation | Button | Evidence cards | `index.html`, `assets/app.js` | `data-proof-open="github"` | Open evidence dialog | Dialog route verified with GitHub dialog-contact test | CDP click | Pass | No | No |
| Evidence card: GitHub見る | External link | Evidence cards | `index.html` | GitHub URL + `proof_click` + `cta_click` | Open public GitHub profile | HTTP 200 | HTTP check | Pass | No | No |
| Evidence card: note interpretation | Button | Evidence cards | `index.html`, `assets/app.js` | `data-proof-open="articles"` | Open evidence dialog | Shared proof-dialog handler covers this ID | Source and shared handler inspection | Pass | No | No |
| Evidence card: noteを見る | External link | Evidence cards | `index.html` | note URL + `proof_click` + `cta_click` | Open public note profile | HTTP 200 | HTTP check | Pass | No | No |
| Evidence card: artifacts interpretation | Button | Evidence cards | `index.html`, `assets/app.js` | `data-proof-open="artifacts"` | Open evidence dialog | Dialog opened and analytics emitted | CDP click | Pass | No | No |
| Evidence card: 公開URL整理中 | Disabled button | Evidence cards | `index.html` | `disabled` | Communicate unavailable public artifact URL | Disabled and not clickable | Source and runtime inventory | Pass | No | No |
| Evidence card: LP/UI audits interpretation | Button | Evidence cards | `index.html`, `assets/app.js` | `data-proof-open="lp-audits"` | Open evidence dialog | Shared proof-dialog handler covers this ID | Source and shared handler inspection | Pass | No | No |
| Evidence card: 監査メモを見る | Link | Evidence cards | `index.html` | Local Markdown link | Open this audit memo | File exists at linked path | File creation and source inspection | Pass | No | No |
| Proof dialog close X | Button | Evidence dialog | `index.html`, `assets/app.js` | `data-proof-close` | Close dialog | Dialog closed after close control click | CDP click | Pass | No | No |
| Proof dialog contact CTA | Link | Evidence dialog | `index.html`, `assets/app.js` | `href="#contact"` + `data-proof-close` | Close dialog and scroll to contact | Dialog closed, hash `#contact` | CDP click | Pass | No | No |
| Proof dialog secondary close | Button | Evidence dialog | `index.html`, `assets/app.js` | `data-proof-close` | Close dialog | Shared close handler covers this control | Source and shared handler inspection | Pass | No | No |
| FAQ: 相談内容が曖昧でも大丈夫ですか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Shared FAQ handler covers details | Source inspection | Pass | No | No |
| FAQ: 守秘が必要な内容は送ってよいですか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Shared FAQ handler covers details | Source inspection | Pass | No | No |
| FAQ: 実装まで依頼できますか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Shared FAQ handler covers details | Source inspection | Pass | No | No |
| FAQ: RAGやエージェントの品質はどう判断しますか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Open became true; `faq_expand` emitted `quality` | CDP click | Pass | No | No |
| FAQ: 料金はどの段階で決まりますか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Shared FAQ handler covers details | Source inspection | Pass | No | No |
| FAQ: GitHubや記事が少なくてもLP改善できますか？ | Details summary | FAQ | `index.html`, `assets/app.js` | Native details toggle + `faq_expand` | Open answer and emit tracking | Shared FAQ handler covers details | Source inspection | Pass | No | No |
| Final CTA | Link | Final CTA band | `index.html` | `href="#contact"` + `cta_click` | Scroll to contact form | Target exists | Source inspection | Pass | No | No |
| Contact form request type | Select | Contact form | `index.html`, `assets/app.js` | Native select + validation | Select request type and validate required field | Service-pack click set value; invalid submit showed error when empty | CDP click and submit | Pass | No | No |
| Contact form name | Text input | Contact form | `index.html`, `assets/app.js` | Required validation | Accept name and report missing value | Missing-name error observed | CDP submit | Pass | No | No |
| Contact form organization | Text input | Contact form | `index.html`, `assets/app.js` | Optional max-length validation | Accept optional organization | Included in validation map with no required error | Source inspection | Pass | No | No |
| Contact form email | Email input | Contact form | `index.html`, `assets/app.js` | Required email validation | Accept valid email and reject missing/invalid | Valid submit used `test@example.com` | CDP submit | Pass | No | No |
| Contact form related URL | URL input | Contact form | `index.html`, `assets/app.js` | Optional URL validation | Accept valid URL and record related-url presence | Valid submit set `has_related_url: true` | CDP submit | Pass | No | No |
| Contact form timeline | Select | Contact form | `index.html`, `assets/app.js` | Optional select | Store selected timeline metadata | Valid submit stored `timeline: month` | CDP submit | Pass | No | No |
| Contact form message | Textarea | Contact form | `index.html`, `assets/app.js` | Required 30-2000 char validation | Accept sufficiently detailed message | Valid submit succeeded | CDP submit | Pass | No | No |
| Privacy checkbox | Checkbox | Contact form | `index.html`, `assets/app.js` | Required checked state | Require privacy consent | Invalid form counts included missing fields; valid submit required checked state | CDP submit | Pass | No | No |
| Privacy link | Link | Contact form/footer | `index.html` | `href="privacy/"` | Navigate to privacy page | Local route exists | Source and file inspection | Pass | No | No |
| Honeypot | Hidden input | Hidden form field | `index.html`, `assets/app.js` | Hidden bot field validation | Block bot-filled submission | Hidden from UI; validator returns generic error if filled | Source inspection | Pass | No | No |
| Form submit | Submit button | Contact form | `index.html`, `assets/app.js` | Client validation, sessionStorage, thanks redirect | Show errors when invalid; redirect when valid; emit submit/generate lead events | Invalid summary visible; valid submit redirected to `/thanks/index.html`, `generate_lead` emitted | CDP submit | Pass | No | No |
| Form error summary buttons | Dynamic buttons | Contact form after invalid submit | `assets/app.js` | Focus corresponding field | Move focus to field from summary item | Buttons are created with field focus handlers | Source and invalid summary inspection | Pass | No | No |
| Footer proof links | Links | Footer | `index.html`, `assets/app.js` | GitHub/note URLs + `proof_click` | Open proof profiles | HTTP 200 for both profiles | HTTP check | Pass | No | No |
| Footer contact link | Link | Footer | `index.html` | `href="#contact"` | Scroll to contact form | Target exists | Source inspection | Pass | No | No |

## Remaining Items

- No failed enabled controls remain in the audited homepage scope.
- Public artifacts/logs need curated destinations before the disabled `公開URL整理中` state should become an enabled link.
- Production contact intake still needs backend implementation before the page can honestly claim real inquiry delivery.
