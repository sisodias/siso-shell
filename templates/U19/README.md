# U19 · Compute run page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U19/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/45

## Reasoning

- **why** · A God Question without runs is opinion; the J2 '4×' claim survived a night because no page showed ratio 1.00× with effort null. Receipts must be visible.
- **readers** · Human: did it work, what did it cost. Agent: the preregistration to repeat and the receipt shape to emit.
- **questions** · What was tested? · What was applied vs requested? · What are the numbers, with n? · What decision does it change?
- **claim ceiling** · Numbers only from receipt files; requested vs applied shown separately.
- **data** · domains/compute/runs/.
- **links out** · U5, U16, U17
- **links in** · U5, U9
- **privacy** · Public.
- **empty state** · No acceptance.json → 'unfinished run'.
- **agent entry** · domains/compute/runs/<run>/README or preregistration.json

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | run id |
| subtitle | GQ · date · host |
| paragraph | what we expected |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | verdict |
| agents | seat |
| timeline | arms |
| docs_over_time | — |
| own_nav | prereg · arms · numbers · verdict |

## Sections, in order

1. preregistration (what we expected)
2. arms + effort applied
3. tokens in/out per arm, ratio with n
4. acceptance verdict
5. runtime audit
6. what it changes (decision)

- **lives at** · /runs/<run>/ under its God Question
- **instances** · one per measured run · runs: 2026-09-05-gq-compute, 2026-09-06-j2 (medium vs xhigh), e1 windows ×3; receipts in domains/compute/runs/
- **renders** · domains/compute/runs/<run>/{preregistration,run,acceptance,runtime-audit}.json, events.jsonl, metadata.json (effort applied), receipts
- **theme** · research = focus blue · rail: U0
- **needs** · —

## Done when

Open /runs/2026-09-06-j2/ and see two arms, 122,427 vs 122,327 input, ratio 1.00×, reasoning_effort null in both, verdict 'untested'

## Rob

- AM · block-runtime stat cards + bordered thesis box as 'verdict' · atlas/receipts/am-block-runtime.png
- AM · system-map evidence ladder as run state · atlas/receipts/am-system-map-root.png
- 21st.dev · [performance-benchmark-card](https://21st.dev/@kavikatiyar/components/performance-benchmark-card) — his note: "another performance benchmark card, might be useful"
- 21st.dev · [donut-chart](https://21st.dev/@ravikatiyar162/components/donut-chart) — his note: "could be a really cool animation if we use it well, donut chart card. Could be used somewhere on the operator dashboard"
- 21st.dev · [mini-chart](https://21st.dev/@jatin-yadav05/components/mini-chart) — his note: "does this activity mini chart actually work? It does. Banging. We needed some graphs. This is going to be used in the operator thing"
- 21st.dev · [stats-widget](https://21st.dev/@ravikatiyar162/components/stats-widget) — his note: "nice different stat widget"

## Compose

```sh
bin/compose U19 templates/U19/example.json --out /tmp/U19.html
```
