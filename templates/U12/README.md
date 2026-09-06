# U12 · Release / Snapshot / Assembly record

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U12/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/61

## Reasoning

- **why** · What is pinned is what an agent can rely on; the record must show the exact commit and its evidence.
- **readers** · Human: what version is this. Agent: the locator to fetch.
- **questions** · Exact version and scope? · Source locators? · Evidence and rights?
- **claim ceiling** · gls records only; immutable history untouched.
- **data** · registry/{releases,snapshots,assemblies,source-inventories}.
- **links out** · U3
- **links in** · U2, U3
- **privacy** · Public.
- **empty state** · —
- **agent entry** · bin/gls

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | release id |
| subtitle | of Work X |
| paragraph | — |
| mind_map | — |
| repos | — |
| research | — |
| docs | evidence |
| progress | — |
| agents | — |
| timeline | pinned at |
| docs_over_time | — |
| own_nav | version · locators · evidence |

## Sections, in order

1. exact version + scope
2. source locators
3. evidence
4. distribution + rights
5. what it pins, linked to its Work

- **lives at** · /releases/<id>/ /snapshots/<id>/ /promotion/
- **instances** · one per pinned thing · 86 releases · 40 snapshots · 2 assemblies · 8 source inventories
- **renders** · registry/{releases,snapshots,assemblies,source-inventories}/*.json (gls schemas, immutable history)
- **theme** · section accent · rail: U0
- **needs** · U0, U3

## Done when

Open any /releases/<id>/ and see the pinned commit as a link that resolves, and the Work it belongs to

## Rob

- AM · research reader file chips: lines · bytes · sha256 · atlas/receipts/am-research-report-reader.png
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [with-slash](https://21st.dev/@originui/components/breadcrumb/with-slash) — his note: "these breadcrumbs, the way they do them is just really nice"

## Compose

```sh
bin/compose U12 templates/U12/example.json --out /tmp/U12.html
```
