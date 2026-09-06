# U5 · God Question page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U5/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/44

## Reasoning

- **why** · His 16:36: 'all the different God questions, which are different allocations of compute, like we need a template for each and every God question project, right? Because it will show a bunch of stuff.' A GQ page is where a decision target meets its evidence and its compute.
- **readers** · Human: what are we trying to learn, what do we know, what is it costing. Agent: the decision target + counterexample rule + which modules to run next.
- **questions** · What is the exact question and the decision it changes? · What is the current answer and its counterexample? · What evidence exists, dated, with receipts? · Which compute modules are allocated / done / unallocated? · What would close it?
- **claim ceiling** · Evidence lines cite a receipt path; 'answer' is labelled proposed until a receipt supports it; ratios carry n.
- **data** · GOD-QUESTIONS.md card, plan/modules.json rows with domain god-questions, domains/compute/runs/<run>/ receipts (U19), source/ words that raised it.
- **links out** · U19 runs, U16 decisions, U18 source, U3 Works it produced, U4 projects it serves
- **links in** · U1, U9, U4
- **privacy** · Public.
- **empty state** · No run yet → 'no receipt; allocated to <host>' or 'unallocated'.
- **agent entry** · GOD-QUESTIONS.md#GQ-NNN · domains/compute/runs/

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | GQ-NNN · the question |
| subtitle | decision target |
| paragraph | why it matters, in his words |
| mind_map | question → subquestions → modules → runs → Works |
| repos | repos the runs live in |
| research | evidence lines with receipts + what each means |
| docs | docs it produced |
| progress | modules: allocated / done / unallocated by host |
| agents | seats that ran on it + cost |
| timeline | runs + decisions by date |
| docs_over_time | — |
| own_nav | question · state · evidence · compute · next |

## Sections, in order

1. the question + decision target
2. research state + counterexample
3. evidence map with dated receipts (J2 ratio, E1 windows…)
4. subquestions → compute modules allocated / not
5. expected answer package
6. who is on it + host (webui/luna/codex/shaan/hold)

- **lives at** · /works/frontier-question-gq-NNN/ + /god-questions/ index
- **instances** · one per GQ · 22 (GOD-QUESTIONS.md; 18 registered as Works; 14 GQ URLs fall through to root)
- **renders** · GOD-QUESTIONS.md cards (question, decision target, counterexample, evidence lines), docs/frontier-question-template.html (exact question, why it matters, assumptions, evidence map, subquestions, expected answer package), domains/compute/runs/<run>/ receipts
- **theme** · research = focus blue · rail: U0
- **needs** · U0, U3

## Done when

Open /works/frontier-question-gq-011/ and see GQ-011's card, its evidence lines citing the Oracle token-waste lesson, and the register modules that feed it

## Rob

- AM · industry page 'DEMAND POSTURE' panel (observed · signal=E · validated=U) as the GQ 'current answer' panel · atlas/receipts/am-industry-law-firms.png
- AM · system-map 'Evidence ladder' (preserved / qualified / admitted) as the evidence-state ladder · atlas/receipts/am-system-map-root.png
- AM · research reader CLAIM CEILING · atlas/receipts/am-research-report-reader.png
- 21st.dev · [anomaly-heatmap](https://21st.dev/@aghasisahakyan1/components/anomaly-heatmap) — his note: "some sort of heat map, that'll be useful"
- 21st.dev · [scrollable-sticky-footer](https://21st.dev/@originui/components/dialog/scrollable-sticky-footer) — his note: "frequently asked questions scrolly thing, could be useful"
- 21st.dev · [performance-benchmark-card](https://21st.dev/@kavikatiyar/components/performance-benchmark-card) — his note: "another performance benchmark card, might be useful"
- 21st.dev · [timeline](https://21st.dev/@nyxbui/components/timeline) — his note: "timeline of text, it's clean. I wouldn't say amazing"

## Compose

```sh
bin/compose U5 templates/U5/example.json --out /tmp/U5.html
```
