# U9 · Agent Zero page (his concepts + the fleet, on the Library)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U9/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/47

## Reasoning

- **why** · His 16:36: 'the template for Agent Zero and like a repo of all of my main concepts and information for Agent Zero. So if I want to see that front end and see what's going on with Agent Zero, see all of the main projects and all of that stuff linked to it, it's all there.'
- **readers** · Human: the whole thing from the top. Agent: the read order + the register + the decisions, then the project it touches.
- **questions** · What is the bet and the two axes? · What are his concepts, in his words, by date? · Which projects exist and what state are they in? · What is allocated, done, unallocated, by host? · What was decided and what reverses it? · Who is running now and where?
- **claim ceiling** · Every number from a JSON in this repo; his words only from source/.
- **data** · INTENT.md, BASELINE.md, plan/*.json, GOD-QUESTIONS.md, source/, ledger/OWNERS.md, atlas/now.json.
- **links out** · U4 all projects, U5 GQs, U16 decisions, U17 seats, U18 source, U21 timeline, U22 nodes, U20 plays
- **links in** · U1
- **privacy** · Public page; the repo may stay private (D on source/ → private siso-agent-zero-source).
- **empty state** · —
- **agent entry** · INTENT.md → BASELINE.md → this page

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Agent Zero |
| subtitle | the bet |
| paragraph | INTENT in his words |
| mind_map | projects · questions · plays · nodes |
| repos | this repo + harness-lab |
| research | the GQs |
| docs | atlas readings by date |
| progress | register 51: 7 landed · 24 partial · 20 untouched, by host |
| agents | every seat, live and closed |
| timeline | decisions + seats + readings |
| docs_over_time | atlas pages by date |
| own_nav | bet · concepts · projects · register · decisions · fleet · gaps |

## Sections, in order

1. the bet + the two axes
2. his concepts (source/ index, dated, verbatim)
3. projects → U4 pages
4. register: allocated / not allocated / done, by host, with verification lines
5. decisions D-1…D-29
6. fleet now (owners, nodes)
7. gaps

- **lives at** · Library Work 'Agent Zero' (type agent_system) + agent-zero.pages.dev front door; atlas/ stays the laptop-local live view
- **instances** · one · 1 (+ the 24 atlas pages it fronts)
- **renders** · INTENT.md, BASELINE.md, plan/{modules,projects,decisions}.json, GOD-QUESTIONS.md, source/ (44 verbatim files, 111,930 words), ledger/OWNERS.md, the atlas
- **theme** · agents = reflect violet · rail: U0
- **needs** · U0, U4

## Done when

Open https://great-library-of-siso.pages.dev/works/agent-zero/ from a cold browser and see the register with 51 rows, each with its host and verification line, and the 44 source files listed by date

## Rob

- AM · system-map registry rail with counts + status chips · atlas/receipts/am-system-map-root.png
- AM · research-os pack index + hero posture card · atlas/receipts/am-research-os.png
- 21st.dev · [ai-input](https://21st.dev/@aghasisahakyan1/components/ai-input) — his note: "ask AI input. Really cool the way it pops up, then we're not always wasting space. Having an AI chat always showing is the bad way to go on Oracle. This is definitely the best way, definitely best UI principles. Hand over to an agent to look into"
- 21st.dev · [agent-plan](https://21st.dev/@isaiahbjork/components/agent-plan) — his note: "drop-down agent plan, might be useful. We've done a really nice onboarding dropdown and our UI is better, but the way this component works is maybe slightly better"
- 21st.dev · [agent-avatar](https://21st.dev/@educalvolpz/components/agent-avatar) — his note: "(agent avatar; part of the AI/agent set, no separate comment)"
- 21st.dev · [animated-state-icons](https://21st.dev/@dev.yadhakim/components/animated-state-icons) — his note: "animated state icons, always useful to make the app feel nicer"

## Compose

```sh
bin/compose U9 templates/U9/example.json --out /tmp/U9.html
```
