# Shikigami AI Works New LP Specification

Status: Draft for rewrite
Date: 2026-06-23
Source: `docs/lp-benchmark-thin-score-2026-06-23.md`

## Objective

Rewrite the Shikigami AI Works homepage into a Japanese-facing, proof-first LP for AI implementation judgment, RAG/LLM/agent validation, automation design, and evidence-route repair.

The page must make these clear within the first viewport:

- who Shikigami AI Works helps,
- what can be requested,
- what proof exists before contact,
- what concrete artifact the visitor receives,
- what the next action is.

## Positioning

Primary positioning:

> AI実装・RAG・エージェント化の相談前に、作る力と判断材料を見える化する。

Secondary positioning:

> Shikigami AI Worksは、LLM/RAG/AIエージェント/自動化/LP証拠導線の相談を、検証可能な実装方針と次の一手へ分解する小さなAI実装スタジオです。

Do not position the page as:

- a general AI transformation company,
- a freelance matching site,
- an engineering media portal,
- a course/school,
- a marketplace,
- a large enterprise consulting firm.

## Target Visitors

Primary:

- small business owners or creators who want to use AI but cannot decide the first validation step,
- technical founders or solo builders who need RAG/LLM/agent direction,
- teams that have a PoC idea but lack implementation judgment,
- individuals or small teams whose homepage lacks proof routes and trust signals.

Secondary:

- people evaluating whether Shiki can actually build, reason, and document,
- collaborators who want to inspect public proof before contact.

## Conversion Goal

Primary CTA:

- `相談内容を送る`

Secondary CTA:

- `証拠を見る`

Tertiary links:

- GitHub
- note/articles
- artifacts/logs
- implementation notes or proof examples when public-safe

## Page Architecture

### 1. Hero

Purpose: state the offer with enough specificity to stop vague AI-consulting drift.

Required content:

- brand: `Shikigami AI Works`
- headline: `AI実装・RAG・エージェント化の相談前に、作る力と判断材料を見える化する。`
- lead: `LLM、RAG、エージェント、自動化、LP証拠導線の相談を、検証可能な実装方針と次の一手へ分解します。`
- primary CTA: `相談内容を送る`
- secondary CTA: `証拠を見る`
- visible proof facts:
  - `GitHubで実装痕跡を確認`
  - `note/articlesで思考過程を確認`
  - `成果物は判断に使える形で残す`

Avoid:

- abstract hero copy like "AIで未来を変える",
- invented client logos,
- decorative proof that does not link anywhere.

### 2. Proof Strip

Purpose: show evidence before asking for trust.

Required proof chips:

- GitHub / implementation traces
- note / technical writing
- artifacts / examples
- logs / validation notes
- contact / consultation path

Each proof chip must have a real observable outcome:

- external link,
- modal with explanation,
- scroll target,
- disabled state with reason when not yet available.

### 3. "Who This Is For"

Purpose: make the visitor self-select quickly.

Cards:

1. `AI導入の最初の検証テーマが決まらない`
   - output: issue decomposition and validation candidate list
2. `RAGやLLM活用がPoCで止まりそう`
   - output: retrieval design, eval viewpoint, implementation risk map
3. `エージェント化/自動化の適用範囲を決めたい`
   - output: workflow breakdown, automation boundary, failure handling plan
4. `ホームページに信用材料が足りない`
   - output: proof-route map, evidence card design, CTA repair plan

### 4. Service Packs

Purpose: replace vague contact with requestable units.

P0 service packs:

| Pack | Visitor problem | Output |
|---|---|---|
| AI相談整理 | "何をAI化すべきか分からない" | problem map, feasibility notes, next-step prompt |
| RAG/LLM検証設計 | "検索・回答品質をどう試すか分からない" | validation plan, data boundary, eval checklist |
| Agent/Automation設計 | "どこまで自動化してよいか分からない" | workflow map, tool boundary, failure path |
| LP証拠導線改善 | "実績や制作物を信用に変えられない" | proof inventory, section rewrite, CTA map |

Rules:

- Each pack needs one clear CTA: `この相談を送る`.
- Each pack must name deliverables.
- Do not show prices unless real pricing is decided.

### 5. Evidence Cards

Purpose: turn proof into interpretation.

Each evidence card must include:

- proof source,
- what the visitor can inspect,
- what it proves,
- what it does not prove yet,
- link or disabled reason.

Required cards:

1. GitHub
   - proves: implementation trace, repo structure, public code hygiene
   - does not prove: private client work
2. note/articles
   - proves: reasoning, documentation, technical framing
   - does not prove: production SLA
3. artifacts/logs
   - proves: output discipline and validation habits
   - does not prove: every past experiment is production-ready
4. LP/UI audits
   - proves: interaction integrity and proof-first design discipline
   - does not prove: backend CRM integration unless implemented

### 6. Use Cases

Purpose: borrow enterprise AI LP clarity without enterprise bloat.

Use-case rows:

| Situation | Bad next move | Shikigami next move |
|---|---|---|
| "生成AIを使いたいがテーマが曖昧" | tool selection first | problem decomposition first |
| "RAGを作りたい" | vector DB choice first | source/data/eval boundary first |
| "エージェントで自動化したい" | full automation first | human-in-loop and failure path first |
| "LPを作ったが信用されない" | visual polish first | proof source and CTA route first |

### 7. Process

Purpose: reduce inquiry anxiety.

Steps:

1. `相談内容を送る`
   - rough text is acceptable.
2. `論点を分解する`
   - unclear parts become questions or assumptions.
3. `検証方針を決める`
   - output, scope, proof, and risk are named.
4. `必要なら実装/改善に進む`
   - only after the validation boundary is clear.

### 8. FAQ

Required FAQ:

- `相談内容が曖昧でも大丈夫ですか？`
- `守秘が必要な内容は送ってよいですか？`
- `実装まで依頼できますか？`
- `RAGやエージェントの品質はどう判断しますか？`
- `料金はどの段階で決まりますか？`
- `GitHubや記事が少なくてもLP改善できますか？`

FAQ tone:

- honest,
- no overpromise,
- do not imply guaranteed business outcomes.

### 9. Contact Form

Purpose: convert rough intent into analyzable input.

Required fields:

- request type:
  - AI相談整理
  - RAG/LLM検証設計
  - Agent/Automation設計
  - LP証拠導線改善
  - その他
- name
- organization optional
- email
- related URL optional
- timeline optional
- message
- privacy checkbox
- honeypot

Message helper text:

> 背景、困っていること、試したこと、見てほしいURLや資料があれば書いてください。未整理でもかまいません。

### 10. Footer

Required:

- brand
- proof links
- contact link
- privacy link
- canonical domain

## Visual Direction

Keep:

- Sakura Gateway identity,
- calm technical feel,
- proof-first hierarchy,
- visible CTA,
- mobile-friendly proof routes.

Improve:

- make service packs more concrete,
- reduce abstract copy,
- increase evidence-card interpretation,
- keep sections scan-friendly.

Avoid:

- huge enterprise SaaS hero,
- marketplace search layout,
- media-feed homepage,
- fake client logos or fake numbers,
- decorative UI that looks clickable but is not.

## Content Rules

- Copy ideas, not copy text.
- Any numerical claim must have a real source.
- Any external proof link must be real.
- Any unavailable proof must be disabled with a reason, hidden, or described as planned.
- The LP must not say or imply "client result" unless the result is public-safe and verifiable.

## Analytics / Interaction Requirements

Keep or add events for:

- `lp_view`
- `cta_click`
- `proof_click`
- `service_pack_click`
- `evidence_open`
- `faq_expand`
- `form_start`
- `form_error`
- `form_submit`
- `generate_lead`

Every visible interactive element must have a real user-observable outcome.

## Rewrite Acceptance Criteria

- First viewport explains target, offer, proof route, and CTA.
- Service packs are visible before the final contact form.
- At least four proof/evidence cards explain what each proof source proves.
- No fake numbers, fake logos, fake testimonials, or borrowed claims.
- Mobile and desktop both expose CTA, proof route, service packs, FAQ, and contact form.
- All enabled buttons/links are verified with a UI interaction audit.
- `docs/implementation-notes.md` records any decision not specified here.

## Next Implementation Ticket

Implement the new LP specification in the existing static site.

Target files:

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `docs/implementation-notes.md`
- a new UI interaction audit under `docs/ui-interaction-audits/`

Forbidden changes:

- no Git commit/push unless Shiki explicitly says `Git push`,
- no fake proof,
- no dead enabled controls,
- no unrelated preservation artifacts in source Git.

Verification:

- `node --check assets/app.js`
- local static preview
- desktop/mobile visual check
- UI interaction audit for all visible controls
- manual proof link check
