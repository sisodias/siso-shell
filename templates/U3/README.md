# U3 · Library module (standard Work) page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U3/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/46

## Reasoning

- **why** · His 16:36: 'for each of the modules like it'll be connected to the github repo front-end … even client stock will have the listing of the repos even if they private'; 16:50: 'different categories of modules … projects, niches, client, personal … all of that stuff was distilled already from intelligence, so it's just about getting eyes on that stuff now'.
- **readers** · Human: understand one thing and its 'sauce' in a minute. Agent: entry file, command, owner, verification line, then go.
- **questions** · What is it and why does it matter? · Where is the code, is it public? · What can I use from it today (sauce)? · How do I verify it works? · Who owns it and when did they last write?
- **claim ceiling** · Facts from the registry record and the repo; 'why it matters' is authored and labelled as such; maturity from the record, not from prose.
- **data** · registry/works/<id>.json, releases, source_links, repos.json in the repo's .agents/, owners.log; type decides the section set (research_question → U5, project → U4, private → U11).
- **links out** · U4 project, U12 releases, U14 person, U16 decisions, U17 seats
- **links in** · U2, U1, U4
- **privacy** · Public unless the record is private → U11.
- **empty state** · Missing 'sauce' → 'no assets registered' with the gls command; never filler.
- **agent entry** · docs/module-page-template.md → src/build.mjs work page

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Work name |
| subtitle | section · type · maturity kicker + one-line what |
| paragraph | why it matters (authored) |
| mind_map | typed relationship map: repo, releases, people, questions, projects |
| repos | repo + satellites with public/private/access/rights |
| research | research Works it rests on, one line each on what they mean |
| docs | docs in the repo, dated |
| progress | verification line + state |
| agents | owner + last writeback |
| timeline | releases + writebacks |
| docs_over_time | docs by date |
| own_nav | the eight sections |

## Sections, in order

1. kicker: section/type/maturity
2. title + why it matters (authored)
3. repo + satellites cards with public/private/rights
4. sauce: 3–7 real assets
5. contents / capabilities
6. agent quick-start: entry file, commands, owner, verification line
7. evidence / limits / version
8. related work

- **lives at** · /works/<slug>/ (template on 1 of 47 today: siso-foundry, docs/module-page-template.md)
- **instances** · one per Work, by category · 47 Works: 18 research_question · 8 knowledge_system · 4 bundle · 3 project · 3 tool · 2 section · 2 agent_system · 2 capability_pack · 2 playbook · 2 application · 1 library
- **renders** · registry/works/<id>.json + releases + source_links; his categories 16:50: 'projects, niches, client, personal' → maps onto type + section; connected to the GitHub repo front end (repos.json) 'even if they private'
- **theme** · accent by section · rail: U0
- **needs** · U0, U2

## Done when

Open any of the 47 /works/<slug>/ and see the same eight sections in the same order; the repo card's visibility matches gh api

## Rob

- AM · research-report reader: breadcrumb · huge serif title · 'Rendered from source' · file chips (lines, bytes, sha256) · CLAIM CEILING panel with source path · ON THIS PAGE column · atlas/receipts/am-research-report-reader.png
- AM · industry page: kicker with observed date · posture panel · stat strip · tinted sections · entity chips · atlas/receipts/am-industry-law-firms.png
- 21st.dev · [project-detail-view](https://21st.dev/@kavikatiyar/components/project-detail-view) — his note: "kind of nice, kind of simple, could be used somewhere in the operators thing. (Server management one was a bit shitty)"
- 21st.dev · [with-slash](https://21st.dev/@originui/components/breadcrumb/with-slash) — his note: "these breadcrumbs, the way they do them is just really nice"
- 21st.dev · [agent-plan](https://21st.dev/@isaiahbjork/components/agent-plan) — his note: "drop-down agent plan, might be useful. We've done a really nice onboarding dropdown and our UI is better, but the way this component works is maybe slightly better"
- 21st.dev · [glass-blog-card-shadcnui](https://21st.dev/@moumensoliman/components/glass-blog-card-shadcnui) — his note: "glass blog card, just nice, could be reused on the operator side"
- 21st.dev · [estimated-arrival](https://21st.dev/@hedevelope/components/estimated-arrival) — his note: "estimated time arrival, really interesting, don't know where we'd use it, love to have it. Progress bar could be useful in the operator app somewhere"

## Compose

```sh
bin/compose U3 templates/U3/example.json --out /tmp/U3.html
```
