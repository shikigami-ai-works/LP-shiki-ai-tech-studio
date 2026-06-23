# LP Benchmark Thin Score - 2026-06-23

## ASOCFULL Loop Log

- Deployment Mode: Three-Slot Mode
- Driver: Mei Earthlight - collect, classify, score, and write the artifacts
- Checker: Shadow Abyss - reject unsafe imitation, fake proof, over-large enterprise patterns, and scope drift
- Recorder: Kotonoha Tsuzuri - compress the findings into adopt/defer/reject decisions and a new LP spec handoff
- Objective: Thin-score 100 Japanese-oriented freelance, AI consulting, and engineer LP/homepage references, then extract only P0 patterns for the Shikigami AI Works rewrite.
- Target Scope: `docs/lp-benchmark-thin-score-2026-06-23.md`, `docs/new-lp-spec.md`
- Out Of Scope: editing `index.html`, `assets/styles.css`, `assets/app.js`, pushing Git, copying external copy/designs, claiming exact traffic order.
- Verification: HTTP metadata sweep completed for 100 URLs; 93 fetched successfully, 7 returned blocked/not found/timeout during the sweep.

## Method

This is a thin benchmark, not a full conversion audit. Each page was scored by URL category, page type, target user, first-view promise, visible CTA/trust pattern, reusable pattern, risk, Shikigami fit, and priority.

Score meaning:

- `P0`: adopt into the next LP specification.
- `P1`: keep as supporting inspiration.
- `P2`: useful only as contrast or later detail.
- `Reject`: do not reuse for this page.

Fit score is not page quality. It is transferability to a small, proof-first, Japanese-facing AI implementation/consulting LP for Shikigami AI Works.

## Category Summary

| Category | Count | Main value | Main risk |
|---|---:|---|---|
| Freelance agent / consultant matching | 19 | clear offer, conditions, search/category structure, process | becomes job-board-like and too transactional |
| Talent marketplace / career platform | 20 | segmented user intent, social proof, simple registration flow | dilutes the AI consulting identity |
| AI company / AI product | 29 | AI value proposition, productized services, use cases, technology credibility | abstract AI-brand wording without proof |
| Enterprise AI consulting | 12 | governance, use cases, phased adoption, reasons to choose | too large-company-heavy for Shiki's page |
| Engineer media / technical blog | 20 | proof through articles, tags, trend surfaces, technical credibility | media feed can overpower the conversion path |

## 100-URL Thin Score Table

| No | URL | Category | Page Type | Target | Reusable Pattern | Drop / Risk | Fit | Priority |
|---:|---|---|---|---|---|---|---:|---|
| 1 | https://freelance.levtech.jp/ | Freelance | Agent LP | IT freelancers | Numeric trust, flow, limited-member framing | Job-board density | 4 | P1 |
| 2 | https://itpropartners.com/ | Freelance | Agent LP | Flexible freelance workers | Clear condition promise such as weekly commitment and direct案件 | Too staffing-like | 7 | P0 |
| 3 | https://mid-works.com/ | Freelance | Search LP | Freelance engineers | Skill/category entry and company examples | Search UI too dominant | 5 | P1 |
| 4 | https://www.geechs-job.com/ | Freelance | Agent LP | Freelancers considering independence | Separate paths for immediate work, independence, market value | Career support tone not service-fit | 4 | P1 |
| 5 | https://tech-stock.com/ | Freelance | Agent LP | High-reward IT engineers | Benefit-first heading and new案件 sections | Salary-first appeal | 3 | P2 |
| 6 | https://tech.coconala.com/ | Freelance | Agent LP | Freelance IT engineers | Long operating history and exclusive案件 proof | Same as staffing market | 5 | P1 |
| 7 | https://pe-bank.jp/ | Freelance | Agent LP | IT freelancers | Search, new projects, reason-to-choose, guide | Heavy portal structure | 4 | P2 |
| 8 | https://freelance-start.com/ | Freelance | Aggregator | Freelancers comparing案件 | Aggregation and comparison concept | JS-only capture weak in thin fetch | 3 | P2 |
| 9 | https://freelance-hub.jp/ | Freelance | Aggregator | Freelance engineers/creators | Search by language, framework, role, condition | Search dominates conversion | 4 | P1 |
| 10 | https://engineer-style.jp/ | Freelance | Media/agent candidate | Freelancers | High-traffic comparison/media pattern | 403 during sweep, needs manual review | 2 | P2 |
| 11 | https://freelance.findy-code.io/ | Freelance | Specialist agent LP | High-skill engineers | High-skill, remote, support reasons, user voice | Candidate-side framing | 7 | P0 |
| 12 | https://www.engineer-factory.com/freelance/ | Freelance | Agent LP | IT freelancers | Career support plus keyword/skill search | Too much案件 navigation | 4 | P2 |
| 13 | https://techbiz.com/ | Freelance | Corporate site | Freelance/workstyle stakeholders | Simple company/service/recruit split | Not a conversion LP | 2 | P2 |
| 14 | https://www.lancers.jp/ | Marketplace | Work marketplace | Clients and professionals | "There is a pro for X" category proof and large scale | Marketplace breadth can dilute message | 8 | P0 |
| 15 | https://crowdworks.jp/ | Marketplace | Work marketplace | Clients and workers | Massive marketplace trust and work categories | Too broad and commodity-like | 4 | P1 |
| 16 | https://coconala.com/ | Marketplace | Skill marketplace | Buyers of skills | Scene/category entry and free registration prompt | Skill-store feel | 5 | P1 |
| 17 | https://www.bizseek.jp/ | Marketplace | Work marketplace | Clients/workers | Lightweight matching pattern | Low extractable signal | 2 | P2 |
| 18 | https://shufti.jp/ | Marketplace | Task platform | Remote workers/clients | App-first task flow | App redirect, weak LP signal | 2 | P2 |
| 19 | https://workshift-sol.com/ | Marketplace | Global work platform | Clients/workers | Cross-border talent idea | 403 during sweep | 2 | P2 |
| 20 | https://www.skillshift.com/ | Marketplace | Local skill platform | Regional side workers | Regional skill matching concept | Weak metadata in sweep | 2 | P2 |
| 21 | https://www.timeticket.jp/ | Marketplace | Time/skill marketplace | Individuals buying time | Time-ticket productization idea | 403 during sweep | 3 | P2 |
| 22 | https://www.any-crew.com/ | Marketplace | Company/platform | Companies needing talent | Platform plus agent service split | Corporate site, low CTA clarity | 3 | P2 |
| 23 | https://sokudan.work/ | Marketplace | Freelance matching LP | Freelancers and companies | Immediate match promise and short registration | Registration promise not core for Shiki | 6 | P1 |
| 24 | https://goworkship.com/ | Marketplace | Matching platform | Freelance/side-job talent | Platform and specialist matching framing | Candidate/client split | 5 | P1 |
| 25 | https://findy-code.io/ | Marketplace | Engineer career LP | Engineers | GitHub-based skill proof and offer path | Career product not consulting | 7 | P0 |
| 26 | https://www.wantedly.com/ | Marketplace | Business SNS | People and teams | Mission/culture-based discovery | Emotion-first, weak proof for LP | 3 | P2 |
| 27 | https://www.green-japan.com/ | Marketplace | Job platform | IT/Web job seekers | Feature/category exploration | Recruiting-site mismatch | 2 | P2 |
| 28 | https://paiza.jp/ | Marketplace | Learning/career platform | Programmers | Skill assessment and learning-to-career bridge | Education/career focus | 4 | P1 |
| 29 | https://lapras.com/ | Marketplace | AI scout service | Engineers | Market-value visualization and interview/user content | Job seeker framing | 6 | P1 |
| 30 | https://forkwell.com/ | Marketplace | Career platform | IT engineers | Career seriousness and engineer focus | Recruiting mismatch | 3 | P2 |
| 31 | https://offers.jp/ | Marketplace | AI-era engineer platform | High-class engineers | "AI era" framing, skill/experience positioning | Recruiting mismatch | 6 | P1 |
| 32 | https://www.bigdata-navi.com/ | Freelance | Niche agent LP | AI/data freelancers | Niche authority: AI/data specialist first-registration positioning | Freelancer-side, not client-side | 8 | P0 |
| 33 | https://www.anken-navi.jp/ | Freelance | Agent LP | Freelance engineers/designers | Simple案件紹介 and site explanation | Generic案件 site | 3 | P2 |
| 34 | https://www.high-performer.jp/consultant/ | Freelance | Consultant matching LP | Freelance consultants | Consultant-specific案件 categories and features | Matching-platform tone | 5 | P1 |
| 35 | https://freeconsultant.jp/ | Freelance | Consultant agent LP | Strategy/PMO/IT consultants | Featured projects, strengths, occupation/location entry | High-end matching not Shiki service | 5 | P1 |
| 36 | https://pmo-navi.com/ | Freelance | PM/PMO agent LP | PM/PMO consultants | Role-specific problem and project examples | Project-board density | 4 | P2 |
| 37 | https://pro-connect.jp/ | Freelance | Consultant matching platform | Strategy/IT consultants | New monthly projects and fast payment proof | Payment/案件 focus | 4 | P2 |
| 38 | https://circu.co.jp/pro-sharing/ | Marketplace | Pro-sharing consulting LP | Companies with business issues | "Any issue can be solved with a pro", clients, solution, cases, flow | Enterprise matching, not individual proof | 8 | P0 |
| 39 | https://carryme.jp/ | Marketplace | Pro-contract platform | Business professionals | "Professional contract" framing and small-start projects | CXO/talent marketplace feel | 4 | P1 |
| 40 | https://lotsful.jp/ | Marketplace | Side-job matching | Companies/workers | Side-job/professional matching | 403 during sweep | 2 | P2 |
| 41 | https://remogu.jp/ | Freelance | Remote agent LP | Remote freelance engineers | Remote-only niche promise and role/experience filters | Candidate-side only | 4 | P1 |
| 42 | https://techdirect.jp/ | Freelance | Direct-contract platform | Freelance engineers | Direct contract and remote ratio proof | Platform mechanics not needed | 5 | P1 |
| 43 | https://japan-ai.co.jp/ | AI company | AI platform/consulting LP | Companies adopting AI | AI transformation partner, platform plus consulting, product menu | Large-company tone if copied | 9 | P0 |
| 44 | https://avilen.co.jp/ | AI company | AI/DX service LP | Corporate AI/DX teams | Training, development, internalization, track record bundle | Big org breadth | 9 | P0 |
| 45 | https://aidemy.net/ | AI company | AI training/platform | Companies and learners | Learning/service packaging for AI adoption | Training-school identity | 5 | P1 |
| 46 | https://www.abejainc.com/ | AI company | AI implementation brand | Enterprise AI teams | Implementation, LLM, governance, tech blog credibility | Abstract brand copy risk | 8 | P0 |
| 47 | https://www.preferred.jp/ja/ | AI company | Research/company site | Advanced technology audience | Research/deep-tech credibility | Too research-company-like | 5 | P1 |
| 48 | https://exawizards.com/ | AI company | AI/DX company | Enterprises | AI products plus social/enterprise proof | Broad portfolio | 6 | P1 |
| 49 | https://www.pkshatech.com/ | AI company | AI solution/company | Enterprises | Algorithm/product company credibility | Corporate investor feel | 5 | P1 |
| 50 | https://www.brainpad.co.jp/ | AI company | Data/AI company | Corporate data teams | Data/AI expertise and case-led credibility | Too corporate-heavy | 6 | P1 |
| 51 | https://www.fronteo.com/ | AI company | AI solution company | Legal/medical/business teams | Solution/business/news/seminar structure | Domain-specific complexity | 5 | P1 |
| 52 | https://laboro.ai/ | AI company | AI company | Enterprise AI teams | Custom AI development positioning | 404 during sweep | 3 | P2 |
| 53 | https://ridge-i.com/ | AI company | AI consulting/development | Companies needing AI | Service/company/client split | Needs case detail before adoption | 5 | P1 |
| 54 | https://plus-zero.co.jp/ | AI company | AI/DX company | Companies with process issues | Case headlines tied to measurable business change | Case-heavy home may be hard without evidence | 8 | P0 |
| 55 | https://heroz.co.jp/ | AI company | Corporate AI brand | AI/business audience | Strong AI mission headline | Too broad, low conversion | 3 | P2 |
| 56 | https://inside.ai/ | AI company | AI platform/company | Corporate AI users | AI, DX, RAG, LLM proof surface | Sparse captured content | 5 | P1 |
| 57 | https://stockmark.co.jp/ | AI company | AI product/company | Knowledge workers/companies | Short product-minded promise and solution/tech split | Product identity not consulting | 6 | P1 |
| 58 | https://datafluct.com/ | AI company | Data/AI company | Data-driven teams | Data-oriented brand axis | Low visible capture | 3 | P2 |
| 59 | https://www.matrixflow.net/ | AI company | No-code AI tool LP | Business users | Pain-first, use-case-first, usage-count proof | Tool-specific, not service-specific | 8 | P0 |
| 60 | https://signate.jp/ | AI company | Competition/community | AI/data scientists | Community/competition proof | Redirected, weak LP capture | 4 | P1 |
| 61 | https://givery.co.jp/ | AI company | Corporate/DX service | Companies | Product portfolio and DX/AI credibility | Corporate umbrella | 4 | P2 |
| 62 | https://www.allganize.ai/ja/home | AI company | GenAI/AI agent platform | Companies automating workflows | Workflow automation, solution menu, RAG/LLM/AI agent terms | Product platform tone | 9 | P0 |
| 63 | https://www.alt.ai/ | AI company | AI company | Corporate/AI audience | News-first corporate AI proof | Low LP signal | 3 | P2 |
| 64 | https://karakuri.ai/ | AI company | AI agent product LP | Customer support/operations | Specific domain automation promise | Narrow CS domain | 6 | P1 |
| 65 | https://elyza.ai/ | AI company | LLM company | Enterprise LLM users | LLM/agent technical credibility | Sparse captured content | 6 | P1 |
| 66 | https://cinnamon.ai/ | AI company | AI solution company | Companies with document/RAG issues | Concept, IDP, RAG, client proof | Product solution breadth | 8 | P0 |
| 67 | https://layerx.co.jp/ | AI company | Corporate/product company | Business users/recruits | "Implement the future" brand plus product split | Brand/recruit mix | 5 | P1 |
| 68 | https://algomatic.jp/ | AI company | AI venture studio/company | AI product audience | AI-revolution mission and portfolio concept | Mission too abstract | 4 | P2 |
| 69 | https://www.dentsudigital.co.jp/services/data-ai/mugen-ai | Enterprise | AI service LP | Marketers/enterprise teams | Named service/productized AI offer | Agency-enterprise scale | 5 | P1 |
| 70 | https://www.nttdata.com/jp/ja/services/generative-ai/ | Enterprise | GenAI service LP | Enterprise AI/DX leaders | Future vision, service menu, "why choose us" | Too large enterprise | 8 | P0 |
| 71 | https://group.nec/jp/ja/solutions/ai/llm/ | Enterprise | GenAI platform LP | Enterprise AI teams | Trusted AI, platform, process transformation,課題 sections | Big-vendor tone | 7 | P1 |
| 72 | https://www.hitachi-solutions.co.jp/generativeai/ | Enterprise | GenAI support LP | Companies adopting GenAI | Problem solving, 3 points, process, use cases | Corporate vendor density | 8 | P0 |
| 73 | https://www.accenture.com/jp-ja/services/data-ai | Enterprise | Data/AI consulting | Large enterprise leaders | Big-picture AI change and data readiness | Too broad and lofty | 5 | P1 |
| 74 | https://www.ibm.com/jp-ja/consulting/artificial-intelligence | Enterprise | AI consulting LP | Companies seeking AI consulting | Unlock potential, use cases, customer cases, experts | IBM-scale credibility impossible to mirror | 8 | P0 |
| 75 | https://www.pwc.com/jp/ja/services/consulting/analytics/generative-ai.html | Enterprise | GenAI consulting | Enterprise leaders | Reports/research as proof and topical knowledge | Report-heavy, less direct CTA | 6 | P1 |
| 76 | https://www.deloitte.com/jp/ja/services/consulting/services/artificial-intelligence-and-data.html | Enterprise | AI/data consulting | Enterprise leaders | Data/AI service authority | Abstract service page | 5 | P1 |
| 77 | https://www.mckinsey.com/jp | Enterprise | Consulting corporate | Executives | Global strategy authority | Timeout and too broad | 2 | P2 |
| 78 | https://www.abeam.com/jp/ja/service/ai/ | Enterprise | AI consulting service | Enterprise AI teams | Trends/issues, strengths, services, cases | Enterprise consulting tone | 8 | P0 |
| 79 | https://www.mizuhobank.co.jp/corporate/tech/index.html | Enterprise | Tech/corporate page | Corporate clients | Finance-tech trust concept | 403 during sweep, non-LP | 2 | P2 |
| 80 | https://global.fujitsu/en-global/offering/ai-technologies-and-solutions | Enterprise | AI solutions LP | Enterprises | Business-specific AI, approach, co-creation, consulting | English/global orientation | 6 | P1 |
| 81 | https://qiita.com/ | Engineer media | Technical community | Engineers | Tag/article proof, contribution and discoverability | Community feed not conversion LP | 8 | P0 |
| 82 | https://zenn.dev/ | Engineer media | Technical community | Engineers | Articles/books/publications as proof surfaces | Community/event content noise | 8 | P0 |
| 83 | https://teratail.com/ | Engineer media | Q&A community | Engineers | Q&A credibility and problem-solving trail | Low LP signal | 4 | P1 |
| 84 | https://techfeed.io/ | Engineer media | Technical aggregation | Engineers | Latest tech information hub and expert framing | Information platform not service | 5 | P1 |
| 85 | https://dev.classmethod.jp/ | Engineer media | Technical blog | Engineers/cloud teams | "Tried it" technical proof and event/blog structure | Media scale impossible to mirror | 8 | P0 |
| 86 | https://atmarkit.itmedia.co.jp/ | Engineer media | IT media | IT professionals | Category authority and editorial credibility | Mojibake capture, media-heavy | 4 | P1 |
| 87 | https://codezine.jp/ | Engineer media | Developer media | Developers | News, articles, recommendations, ranking | Media portal density | 5 | P1 |
| 88 | https://gihyo.jp/ | Engineer media | Publisher/media | Engineers | Category and search structure | Publisher identity | 4 | P1 |
| 89 | https://prog-8.com/ | Engineer media | Learning LP | Beginners/learners | Beginner-to-builder transformation copy | Education positioning | 5 | P1 |
| 90 | https://dotinstall.com/ | Engineer media | Learning service | Programming learners | Short lesson/productized learning promise | Learning service mismatch | 3 | P2 |
| 91 | https://techacademy.jp/magazine/ | Engineer media | School/media LP | Learners | Free consultation and student output proof | School sales flow | 5 | P1 |
| 92 | https://udemy.benesse.co.jp/ | Engineer media | Learning media | Working adults | Skill-up media and course recommendation | Media/course sales mismatch | 3 | P2 |
| 93 | https://www.publickey1.jp/ | Engineer media | Tech blog | Enterprise IT readers | Named author authority, deep technical trend proof | Blog-only layout | 7 | P1 |
| 94 | https://ledge.ai/ | Engineer media | AI news media | AI/business readers | AI-specialized news authority and contact route | Media/advertising context | 6 | P1 |
| 95 | https://aismiley.co.jp/ai_news/ | Engineer media | AI product/media portal | AI buyers | AI product comparison, document request, news ranking | Portal/comparison feel | 6 | P1 |
| 96 | https://enterprisezine.jp/ | Engineer media | Enterprise IT media | Enterprise tech readers | New articles, popular authors, links | Media density | 4 | P1 |
| 97 | https://www.sbbit.jp/ | Engineer media | Business IT media | Business/IT leaders | Event/seminar/whitepaper proof pattern | Media monetization pattern | 5 | P1 |
| 98 | https://techblog.lycorp.co.jp/ja | Engineer media | Corporate tech blog | Engineers | Technical categories, latest articles, AI section | Corporate scale | 7 | P1 |
| 99 | https://engineering.mercari.com/ | Engineer media | Corporate engineering blog | Engineers | Blog, event, team/career, technology split | Recruiting/brand mix | 7 | P1 |
| 100 | https://developers.cyberagent.co.jp/blog/ | Engineer media | Corporate developer blog | Engineers | Developer blog as technical proof archive | Corporate scale | 7 | P1 |

## P0 Adoption Patterns

1. Concrete-condition promise: replace vague "AI consultation" with specific promise units such as RAG validation, agent automation, proof-route repair, and LP evidence design.
2. Niche authority: state the page is for AI implementation judgment, RAG, LLM agents, automation, and evidence-first personal/company branding, not generic AI transformation.
3. Proof surface before persuasion: GitHub, note/articles, artifacts, logs, and public profiles should appear before long service explanation.
4. Evidence cards with interpretation: every proof card must say "what this proves", not just link out.
5. Use-case grid: show common consultation cases by pain and deliverable.
6. Service packs: package offers into small, understandable units instead of an open-ended "contact me".
7. Adoption flow: show a step-by-step path from rough message to issue decomposition, validation plan, prototype, and next action.
8. Risk/governance FAQ: answer confidentiality, unclear requirements, feasibility, pricing range, and no-fake-proof policy.
9. Technical media proof: treat articles/blog/GitHub as a small technical credibility layer, not a separate media site.
10. Case-headline style: use specific before/after outcomes only when Shiki has real evidence; otherwise use "sample deliverable" or "available output" wording.

## Reject / Do Not Copy

- Do not copy wording, layout, graphics, claims, badges, or case phrasing from any reference page.
- Do not invent company logos, client counts, awards, or "No.1" claims.
- Do not turn the page into an案件検索 site, marketplace, media portal, or enterprise consulting brochure.
- Do not adopt huge global-enterprise language such as "transform the entire business" unless the actual offer supports it.
- Do not make enabled controls that do nothing.

## ASOC Review

- Mei: P0 should be implementation-ready and tied to concrete sections.
- Shadow: The biggest risk is fake trust. Any borrowed pattern that depends on large public proof must either use real Shiki proof or be removed.
- Tsuzuri: The specification should not become a collage. Use only patterns that improve conversion, trust, or clarity for Shikigami AI Works.
