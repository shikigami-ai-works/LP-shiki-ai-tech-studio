# UI Interaction Audit - Bright Homepage

- Date: 2026-06-21
- Scope: `index.html`, `assets/app.js`, `assets/styles.css`
- Local URL: `http://127.0.0.1:4173/`
- Reference input: `outputs/assets/X.mp4`
- Implementation target: bright version of the reference-style homepage for Shikigami AI Works

## Summary

The bright homepage interaction surface was audited in the in-app browser after implementation. All visible enabled controls on the homepage have a real observable outcome. Disabled proof links remain non-interactive because the external destinations are not available yet.

Direct runtime reads of `window.dataLayer` and `sessionStorage` were not available from the in-app browser's read-only automation world, so the audit verifies visible DOM, URL, dialog, form, and navigation outcomes at runtime, plus source-level analytics/storage wiring in `assets/app.js`.

## Visible Interactive Elements

| UI element | Type | Visible location | Code reference | Connected handler/action | Expected behavior | Observable result | Verification method | Result | Fix needed | Manual confirmation needed |
|---|---|---|---|---|---|---|---|---|---|---|
| Menu toggle | Button | Mobile header | `index.html`, `assets/app.js` | `toggleNav()` | Opens/closes mobile navigation and updates `aria-expanded` | Body receives `nav-open`, nav display becomes visible, `aria-expanded=true` | Browser click at mobile viewport | Pass | No | No |
| Hero proof CTA | Link/button style | Hero section | `index.html` | Anchor navigation to `#proof` | Scrolls to proof section | URL hash becomes `#proof`, proof section reaches viewport top | Browser click | Pass | No | No |
| Header contact CTA | Link/button style | Header | `index.html` | Anchor navigation to `#contact` | Scrolls to contact form | URL hash becomes `#contact`, contact section reaches viewport top | Browser click | Pass | No | No |
| Proof strip detail buttons | Buttons | Proof strip | `index.html`, `assets/app.js` | `openProofDialog()` | Opens modal with proof-specific title and details | Dialog opens with title `登壇資料で見せるべき証拠` and three detail bullets | Browser click | Pass | No | No |
| Proof dialog close | Button | Modal | `index.html`, `assets/app.js` | `closeProofDialog()` | Closes modal and restores normal page state | Dialog `open` becomes false | Browser click | Pass | No | No |
| FAQ rows | Native disclosure | FAQ section | `index.html`, `assets/app.js` | Native `<details>` plus `toggle` tracking | Expands/collapses answer text | First FAQ row opens and answer text is visible | Browser click | Pass | No | No |
| Lead form submit, invalid | Form action | Contact section | `index.html`, `assets/app.js` | `handleFormSubmit()` validation path | Shows summary error and focuses first invalid field | Summary is visible, invalid count is 5, focus moves to `lead-type` | Browser submit | Pass | No | No |
| Lead form submit, valid | Form action | Contact section | `index.html`, `assets/app.js`, `thanks/index.html` | `handleFormSubmit()` success path | Stores local payload and navigates to thanks page | URL changes to `/thanks/index.html`; thanks status confirms local send completion | Browser submit | Pass | No | No |
| Disabled Speaker Deck URL | Disabled link state | Evidence card | `index.html` | `aria-disabled="true"` | No enabled click target until real URL exists | Rendered as disabled, not part of enabled click audit | DOM inspection | Pass | No | Yes, only when URL is added |
| Disabled implementation log URL | Disabled link state | Evidence card | `index.html` | `aria-disabled="true"` | No enabled click target until real URL exists | Rendered as disabled, not part of enabled click audit | DOM inspection | Pass | No | Yes, only when URL is added |

## Verification

- Syntax: `node --check assets\app.js`
- Static dead-control scan: no `href="#"`, `javascript:void`, `console.log`, or `TODO` matches in homepage interaction files.
- Browser desktop check:
  - Title loaded correctly.
  - Hero image loaded with natural dimensions.
  - No console errors or warnings.
  - Proof strip is visible in the first viewport.
- Browser mobile check:
  - Viewport tested at 390px wide.
  - No horizontal overflow: `scrollWidth == clientWidth`.
  - Proof strip is visible in the first viewport.
  - Hero fact rail does not expose a visible scrollbar.
- Source-level event/storage wiring:
  - `cta_click`, `proof_click`, `faq_expand`, `generate_lead`, and `form_submit` are wired through `pushEvent()`.
  - Lead form success path writes the local payload through `sessionStorage.setItem()`.

## Screenshots

- Desktop: `C:\Users\sakur\AppData\Local\Temp\shikigami-bright-final-desktop-v2.png`
- Mobile: `C:\Users\sakur\AppData\Local\Temp\shikigami-bright-final-mobile-v2.png`
