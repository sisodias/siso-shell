# U15 · Client account page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U15/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/56

## Reasoning

- **why** · Client work is one of the two axes; today each client project is an island and the account (Camron → Oracle + HALO) is nowhere.
- **readers** · Human: everything for one client. Agent: the projects to resume for that client.
- **questions** · Which projects belong to this account? · What is live for them? · What is owed and when?
- **claim ceiling** · Deliverables only when a URL or commit proves them.
- **data** · account repo, projects.json group, owners.log.
- **links out** · U4, U14, U11
- **links in** · U1, U14
- **privacy** · Gated; the Library shows a stub.
- **empty state** · —
- **agent entry** · <account-repo>/.agents/PAGE.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | account |
| subtitle | client · since |
| paragraph | the engagement |
| mind_map | account → projects → repos |
| repos | all, private marked |
| research | — |
| docs | — |
| progress | deliverables |
| agents | seats |
| timeline | engagement |
| docs_over_time | — |
| own_nav | projects · repos · money · people |

## Sections, in order

1. account in one line
2. projects (U4 cards)
3. repos incl. private
4. money + deliverables (private)
5. people
6. timeline

- **lives at** · <account>.pages.dev (private-gated) + Library stub
- **instances** · one per client account (the account repo over its project repos) · 3 accounts → 5 client projects (ofm: Oracle, HALO · bykonz: BykonzYard · actionmodel: Actionist)
- **renders** · his 5 Sep 22:20 'You've got client projects and you've got agency work. It should be split like that.'; account repo; the projects' U4 pages
- **theme** · client brand strip under the SISO shell · rail: U0
- **needs** · —

## Done when

Open the ofm account page and see Oracle and HALO as two project cards with their live URLs and heads

## Rob

- AM · blueprint hero + chip row per project · atlas/receipts/am-blueprint.png


## Compose

```sh
bin/compose U15 templates/U15/example.json --out /tmp/U15.html
```
