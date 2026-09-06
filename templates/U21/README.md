# U21 · Timeline page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U21/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/53

## Reasoning

- **why** · His 18:19: 'the timeline what docs have we made over those timelines'. Time is the one axis every record shares; without it 'what happened in 48 h' is a hand-written page (the Checkpoint) every time.
- **readers** · Human: what happened when. Agent: the ordered events to reconstruct state at a date.
- **questions** · What happened on day X? · When was this doc/commit/decision made and by which seat? · How dense was the work?
- **claim ceiling** · Only dated records; auto-backup commits marked as such.
- **data** · git log, OWNERS.md, decisions.json, source/, docs mtimes.
- **links out** · U17, U16, U18, U4
- **links in** · U4, U9, U1
- **privacy** · Public; private repos contribute counts, not messages.
- **empty state** · —
- **agent entry** · bin/az-timeline (to write)

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | timeline |
| subtitle | project · range |
| paragraph | — |
| mind_map | — |
| repos | commit lanes |
| research | — |
| docs | doc lane |
| progress | density |
| agents | seat lane |
| timeline | the page |
| docs_over_time | the doc lane |
| own_nav | lanes · days |

## Sections, in order

1. one axis, day ticks
2. lanes: commits · seats · decisions · docs · his words
3. filters by lane
4. hover = the record

- **lives at** · /timeline/ on the Agent Zero page and a 'timeline' section on every U4
- **instances** · one per project + one global · 10 projects + Agent Zero; axis = commits, seats born/closed, decisions, docs, source captures, writebacks
- **renders** · git log per repo (date, hash, author human/auto), OWNERS.md, decisions.json, ls source/, ls docs by mtime, owners.log
- **theme** · lane colours = the six accents · rail: U0
- **needs** · —

## Done when

Open /timeline/?project=halo and see 37 commits, HALO-ZERO born 5 Sep 12:01 and closed, its writebacks, and the docs it produced, on one axis

## Rob

- AM · industry page 'states flow' (received → normalized → …) as the lane legend · atlas/receipts/am-industry-law-firms.png
- 21st.dev · [timeline](https://21st.dev/@nyxbui/components/timeline) — his note: "timeline of text, it's clean. I wouldn't say amazing"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [estimated-arrival](https://21st.dev/@hedevelope/components/estimated-arrival) — his note: "estimated time arrival, really interesting, don't know where we'd use it, love to have it. Progress bar could be useful in the operator app somewhere"
- 21st.dev · [with-slash](https://21st.dev/@originui/components/breadcrumb/with-slash) — his note: "these breadcrumbs, the way they do them is just really nice"

## Compose

```sh
bin/compose U21 templates/U21/example.json --out /tmp/U21.html
```
