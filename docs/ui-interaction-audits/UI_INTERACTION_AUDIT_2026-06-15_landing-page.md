# UI Interaction Audit: landing-page

Date: 2026-06-15

Scope audited: Home LP, mobile navigation, proof details, FAQ, lead form, thanks page, privacy page links.

Launch method: `python -m http.server 4173 --bind 127.0.0.1` from `D:\自分のホームページ`

Target URL: `http://127.0.0.1:4173/`

## Results

| UI element | Type | Visible location | Code reference | Connected handler/action | Expected behavior | Observable result | Verification method | Result | Fix needed | Manual confirmation needed |
|---|---|---|---|---|---|---|---|---|---|---|
| Header nav links | Links | Header | `index.html` | Anchor navigation plus CTA tracking | Scroll to sections | FAQ nav scrolled to `#faq`; contact CTA scrolled to form | Browser DOM CUA click + DOM state | Pass | No | No |
| Mobile menu | Button | Mobile header | `index.html`, `assets/app.js` | Toggles `nav-open` and `aria-expanded` | Open mobile nav | `aria-expanded=true`, nav display `grid`, no horizontal overflow | Browser viewport 390x844 + DOM CUA click | Pass | No | No |
| Hero primary CTA | Link | Hero | `index.html`, `assets/app.js` | Anchor navigation plus `cta_click` | Scroll to lead form | Clean URL click moved `#contact` to viewport top | Browser DOM CUA click + scroll state | Pass | No | No |
| Hero proof CTA | Link | Hero | `index.html`, `assets/app.js` | Anchor navigation plus `cta_click` | Scroll to proof section | Same anchor handler and section target as proof nav | Source inspection + nav click pattern | Pass | No | No |
| Proof strip buttons | Buttons | Proof strip | `index.html`, `assets/app.js` | `data-proof-open` opens dialog | Show evidence detail dialog | GitHub button opened dialog with expected title/copy | Browser DOM CUA click + DOM state | Pass | No | No |
| Proof dialog close | Button | Proof dialog | `index.html`, `assets/app.js` | `data-proof-close` closes dialog | Close dialog | Dialog open state changed true then false | Browser DOM CUA click + DOM state | Pass | No | No |
| Evidence card detail buttons | Buttons | Evidence section | `index.html`, `assets/app.js` | Shared `data-proof-open` handler | Open matching proof detail | Same handler as proof strip; GitHub path verified | Source inspection + Browser proof test | Pass | No | No |
| External proof URL controls | Disabled buttons | Evidence cards | `index.html` | Disabled until real URLs exist | No enabled dead link | Buttons are disabled and visibly labeled `外部URL未設定` | Source inspection | Pass | No | Real proof URLs still need configuration |
| FAQ items | Details/Summary | FAQ section | `index.html`, `assets/app.js` | Native `<details>` toggle plus `faq_expand` | Expand answer text | Pricing FAQ opened and answer text became visible | Browser DOM CUA click + DOM state | Pass | No | No |
| Form empty submit | Button | Lead form | `index.html`, `assets/app.js` | Client validation | Show errors and focus first invalid field | Summary visible, invalid fields marked, focus returned to `lead-type` | Browser DOM CUA click + DOM state | Pass | No | No |
| Form normal submit | Button | Lead form | `index.html`, `assets/app.js` | Validate, disable submit, store non-PII session metadata, redirect | Prevent double submit and navigate to thanks | `aria-busy=true`, submit disabled, text `送信中です`, then `/thanks/index.html` | Browser key input + DOM CUA click + URL/state check | Pass | No | Backend delivery still needs implementation |
| Privacy link | Link | Form/footer | `index.html`, `privacy/index.html` | Navigate to privacy page | Open privacy page | `/privacy/` returned HTTP 200 | HTTP check + local ref check | Pass | No | Final legal text needed |
| Thanks page links | Links | Thanks page | `thanks/index.html` | Navigate back to proof/contact | Return to next action | `/thanks/` returned HTTP 200; proof/contact links present | HTTP check + DOM state | Pass | No | Schedule URL not configured |

## Commands And Checks

- `node --check assets\app.js`
- Static HTML structure check: one H1 per page, image alt present, JSON-LD parses.
- Forbidden enabled-placeholder search: no `href="#"`, `javascript:void`, `console.log`, `TODO`, or `FIXME` outside docs.
- HTTP checks: `/`, `/privacy/`, `/thanks/`, `/sitemap.xml`, `/robots.txt` all returned 200.
- Browser desktop: page identity, no blank page, no console errors, proof dialog, FAQ, form invalid and valid flows.
- Browser mobile 390x844: no horizontal overflow, proof strip visible in first viewport, mobile menu opens.

## Remaining Items

- Browser screenshot capture worked on desktop but timed out on mobile viewport in the Browser runtime. Mobile was verified through DOM metrics and interaction state.
- `dataLayer.push()` calls are implemented in source, but Browser read-only evaluation could not inspect page JS globals directly. Event names were verified by source search.
- Real external proof URLs, GTM/GA4, backend `POST /api/lead`, CRM/notification destination, CSRF, rate limiting, and production domain remain unconfigured.
