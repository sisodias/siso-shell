# U2 · Section / catalogue

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U2/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/50

## Reasoning

- **why** · Nine index routes exist and six have no shell and no filters; 16 Works sit 'Unassigned'. A catalogue that cannot be filtered by type/maturity/section is a list, not a catalogue.
- **readers** · Human: find the thing. Agent: same, via the JSON the page renders.
- **questions** · How many of X exist? · Which are active / experimental / retired? · Which have a public repo?
- **claim ceiling** · Only registry records; counts equal the JSON; no 'coming soon' rows.
- **data** · catalog.json works[] + registry/{releases,snapshots,source-inventories}; a section.json per route.
- **links out** · U3, U12, U11
- **links in** · U1, U0
- **privacy** · Public; private Works appear as U11 stubs.
- **empty state** · Empty filter → 'no records match' + the filters that would.
- **agent entry** · site/<section>/index.html built from the section's JSON

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | section name |
| subtitle | what belongs here |
| paragraph | scope in two lines |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | counts by type and maturity |
| agents | — |
| timeline | — |
| docs_over_time | — |
| own_nav | filters · list |

## Sections, in order

1. section purpose + scope
2. real counts
3. filter by type / maturity / section
4. cards with kicker, summary, repo state
5. truthful empty state

- **lives at** · /works/ /releases/ /snapshots/ /research/ /agents/ /industries/ /estate/ /promotion/ /intelligence/
- **instances** · Works, Releases, Snapshots, Research, Agents, Industries, Estate, Promotion, Intelligence · 9 sections
- **renders** · catalog.json works[] (type, maturity, section, source_links), releases (86), snapshots (40), research.json, industries index
- **theme** · section accent · rail: U0
- **needs** · U0

## Done when

Open /works/ and filter type=research_question and see exactly 18 cards; every card's repo badge says public/private truthfully

## Rob

- AM · research-os track cards: kicker · status chip · 'ORIGINAL TASK' · one paragraph · atlas/receipts/am-research-os.png
- AM · system-map industries grid (13 dirs) rendered from JSON · site/system-map/industries/
- 21st.dev · [stats-widget](https://21st.dev/@ravikatiyar162/components/stats-widget) — his note: "nice different stat widget"
- 21st.dev · [review-filter-bars](https://21st.dev/@ruixen.ui/components/review-filter-bars) — his note: "filter by rating. Don't know where we would use it but save it, it's cool"
- 21st.dev · [tree-with-filtering](https://21st.dev/@originui/components/tree/tree-with-filtering) — his note: "tree drop down, not sure when you'd ever use that"
- 21st.dev · [list](https://21st.dev/@lavikatiyar/components/list) — his note: "(list; no separate comment)"

## Compose

```sh
bin/compose U2 templates/U2/example.json --out /tmp/U2.html
```
