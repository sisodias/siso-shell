# U8 · Industry detail / value research

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U8/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/54

## Reasoning

- **why** · His 14:26: 'the per industry research with all of the projects and what we're offering'; the bet is 'industry by industry'. The Action Model industry page already renders this shape from real data.
- **readers** · Human: is this industry worth it, what would we build, what do we offer. Agent: the JSON contract Foundry writes.
- **questions** · What does the workflow look like? · What do vendors already sell? · Which of our modules apply, which projects? · What is the offer and the value estimate, measured or not? · Where are the gaps?
- **claim ceiling** · Value numbers only from the value model with inputs shown; 'unmeasured' stays unmeasured.
- **data** · siso-foundry intelligence/agency/industries/<slug>.json, value model, projects.json cross-refs.
- **links out** · U4 projects, U3 modules, U14 people
- **links in** · U1, U2 Industries
- **privacy** · Public.
- **empty state** · No value inputs → 'unmeasured' chip.
- **agent entry** · siso-foundry scripts/build_industry_pages.py (dirty, unpushed)

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | industry |
| subtitle | demand in one line |
| paragraph | what the research says |
| mind_map | workflow map |
| repos | repos of candidate modules |
| research | records + meaning |
| docs | — |
| progress | rank / unmeasured |
| agents | FOUNDRY seats |
| timeline | observed dates |
| docs_over_time | — |
| own_nav | workflow · vendors · modules · projects · offer · gaps |

## Sections, in order

1. process / workflow map
2. current marketed capabilities
3. candidate modules
4. SISO projects that apply
5. the offer
6. value inputs + rank (unmeasured stays unmeasured)
7. evidence gaps

- **lives at** · /industries/<slug>/ + /industries/ index (Foundry writes JSON, Library renders)
- **instances** · one per industry · 17 records (siso-foundry intelligence/agency/industries), law-firm pilot live
- **renders** · Foundry industry JSON (process hypotheses 70, capability rows 35), N2 value model + 10 examples, his 14:26 ask: 'per industry research with all of the projects and what we're offering'
- **theme** · clients/niches = tasks amber · rail: U0
- **needs** · U0, U3

## Done when

Open /industries/law_firms/ and see the seven sections filled from the record; open /industries/ and see 17 rows each with a rank or 'unmeasured'

## Rob

- AM · industry page whole: breadcrumb · CLAIM CEILING · kicker with observed date · posture panel · 4 stats · tinted sections · entity chips · states flow · ON THIS PAGE · atlas/receipts/am-industry-law-firms.png
- 21st.dev · [workflow-builder-card](https://21st.dev/@ravikatiyar162/components/workflow-builder-card) — his note: "I like this workflow builder card, could be used in the dashboard somewhere"
- 21st.dev · [anomaly-heatmap](https://21st.dev/@aghasisahakyan1/components/anomaly-heatmap) — his note: "some sort of heat map, that'll be useful"
- 21st.dev · [heat-map-xl](https://21st.dev/@reaviz/components/heat-map-xl) — his note: "(charts batch; heat map. Order in the batch: incident report / funnel / glassmorphism portfolio bit mid / line chart four)"

## Compose

```sh
bin/compose U8 templates/U8/example.json --out /tmp/U8.html
```
