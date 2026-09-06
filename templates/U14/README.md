# U14 · Person page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U14/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/55

## Reasoning

- **why** · Every client project points at a person and nothing renders one; the 5 Sep 22:20 ruling 'account repo over project repos' has no page.
- **readers** · Human: who is this, what do we do for them, where are we. Agent: the account repo + the projects.
- **questions** · Who? · Which projects and repos? · When did we last deliver? · What is owed?
- **claim ceiling** · Public-safe identity and relationship only; words and money private.
- **data** · account repo .agents/, projects.json, owners.log.
- **links out** · U15, U4, U11
- **links in** · U4, U1
- **privacy** · Public stub; private detail behind the account repo.
- **empty state** · —
- **agent entry** · <account-repo>/.agents/PAGE.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | name |
| subtitle | role · since |
| paragraph | relationship |
| mind_map | projects → repos |
| repos | account + project repos |
| research | — |
| docs | — |
| progress | deliverables |
| agents | seats on their projects |
| timeline | deliveries |
| docs_over_time | — |
| own_nav | who · projects · activity |

## Sections, in order

1. who, in one line
2. relationship + since
3. projects + repos
4. what they said (private, dated)
5. what we owe / they owe
6. activity

- **lives at** · Library Work of type person (public-safe) + private account repo
- **instances** · one per client, collaborator, person in the graph · 3 clients (Camron · ofm, Fahmy · bykonz, Cena · actionmodel) + the People Graph programme
- **renders** · PEOPLE-GRAPH-PROGRAM.md, client account repos, projects.json 'for whom', WhatsApp intake words (private)
- **theme** · clients = tasks amber · rail: U0
- **needs** · —

## Done when

Open /people/camron/ and see two projects (Oracle, HALO), their repos and the last dated activity; no message content

## Rob

- AM · research-os track cards as 'project cards per person' · atlas/receipts/am-research-os.png
- 21st.dev · [social-card](https://21st.dev/@shailendrakumar19999/components/social-card) — his note: "always been a cool socials card, it's always been good"
- 21st.dev · [social-post-card](https://21st.dev/@ruixen.ui/components/social-post-card) — his note: "really cool. Don't know where it can be used but save this. I always like the UI of the design and the card and where the profile shows"
- 21st.dev · [popover](https://21st.dev/@efferd/components/popover) — his note: "profile selector popover, pop it in a profile thing / settings. We need one of that for the operator"
- 21st.dev · [card-5](https://21st.dev/@lavikatiyar/components/card-5) — his note: "this card if you rob it out the box is really good. New opportunity card. Could be used somewhere, just the design of the way the card is laid out, maybe for models. Good UI design"
- 21st.dev · [social-card](https://21st.dev/@shailendrakumar19999/components/social-card) — his note: "always been a cool socials card, it's always been good"

## Compose

```sh
bin/compose U14 templates/U14/example.json --out /tmp/U14.html
```
