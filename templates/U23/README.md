# U23 · Template gallery

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U23/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/64

## Reasoning

- **why** · His 18:19: 'i'd want to see all of the templates and then from those templates i can like click on it to see something … click on the page to actually see the page template and the component'. The gallery is how he and the Library UI Fable agree on each template before it is built.
- **readers** · Human: judge each template. Agent: the contract to build to.
- **questions** · Which templates exist and in what order? · What must each carry? · What can I rob for it? · What proves it done?
- **claim ceiling** · —
- **data** · plan/templates.json + the two Luna inventories.
- **links out** · all
- **links in** · U9
- **privacy** · Public.
- **empty state** · —
- **agent entry** · bin/az-templates

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Templates |
| subtitle | the map |
| paragraph | — |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | — |
| agents | — |
| timeline | — |
| docs_over_time | — |
| own_nav | cards · order |

## Sections, in order

1. card per template
2. detail: reasoning block · content contract · wireframe · components to rob (with screenshots) · example today · verification · issue

- **lives at** · atlas/TEMPLATES-2026-09-06.html + atlas/t/<id>.html; later the Library /docs/templates/
- **instances** · one page + one detail page per template · 24 templates (this map)
- **renders** · plan/templates.json: every row's reasoning, content contract, sections, rob-from lists (Action Model inventory + 21st.dev picks), example today, verification
- **theme** · each card in its family's accent · rail: U0
- **needs** · —

## Done when

Open the gallery, click U4, and see its reasoning, its twelve-item content contract, a wireframe with the sections, the Action Model panels to rob with screenshots, the 21st.dev picks, and the live prototype

## Rob

- AM · blueprint hero + chip rows · atlas/receipts/am-blueprint.png
- 21st.dev · [bento-card](https://21st.dev/@0xUrvish/components/bento-card) — his note: "really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"
- 21st.dev · [feature-carousel](https://21st.dev/@0xUrvish/components/feature-carousel) — his note: "feature carousel could be a way of showing models: carousel click through the models to their profile picture. Food for thought"
- 21st.dev · [project-detail-view](https://21st.dev/@kavikatiyar/components/project-detail-view) — his note: "kind of nice, kind of simple, could be used somewhere in the operators thing. (Server management one was a bit shitty)"

## Compose

```sh
bin/compose U23 templates/U23/example.json --out /tmp/U23.html
```
