# U10 · Now / activity

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U10/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/60

## Reasoning

- **why** · A page that answers 'who is doing what right now' without asking anyone; owners.log makes it possible.
- **readers** · Human: is anyone on it, when did they last write. Agent: whom to message, what is stale.
- **questions** · Who is live, where, doing what? · When did each last write back? · What is stale?
- **claim ceiling** · Only writeback lines with timestamps; no inferred status.
- **data** · owners.log per repo, OWNERS.md, herdr roster.
- **links out** · U17 seats, U4
- **links in** · U0, U1, U9
- **privacy** · Public-safe lines only.
- **empty state** · No seat live → says so.
- **agent entry** · bin/az-now

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Now |
| subtitle | dated |
| paragraph | — |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | freshness chips |
| agents | live seats |
| timeline | last 24 h |
| docs_over_time | — |
| own_nav | live · stale · nodes |

## Sections, in order

1. dated owner/runtime observations
2. task/outcome summaries
3. repo activity
4. coverage date
5. who to message

- **lives at** · /now/ on the Library; NOW.html on the atlas; <project>.pages.dev/now
- **instances** · one per site + one per project · Library /now/, atlas NOW.html, per-project owners.log views
- **renders** · owners.log lines (P5 writeback), OWNERS.md, herdr roster, rate_limits events
- **theme** · health green when fresh, danger rose when stale · rail: U0
- **needs** · U0

## Done when

Open /now/ and see the last writeback line per live seat with a timestamp under one hour old

## Rob

- AM · research-os 'CURRENT POSTURE' badge; status chips LIVE/PARTIAL · atlas/receipts/am-research-os.png
- 21st.dev · [mini-chart](https://21st.dev/@jatin-yadav05/components/mini-chart) — his note: "does this activity mini chart actually work? It does. Banging. We needed some graphs. This is going to be used in the operator thing"
- 21st.dev · [team-invitation](https://21st.dev/@kokonutd/components/team-invitation) — his note: "team invitation comp, don't know where it could be used but kind of cool. This team invitation is just good. If I mention they're good they're always good for a component bank"
- 21st.dev · [social-post-card](https://21st.dev/@ruixen.ui/components/social-post-card) — his note: "really cool. Don't know where it can be used but save this. I always like the UI of the design and the card and where the profile shows"
- 21st.dev · [audio-chat](https://21st.dev/@jatin-yadav05/components/audio-chat) — his note: "audio chat is really cool. Don't know where it'd be used, maybe not this project"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"

## Compose

```sh
bin/compose U10 templates/U10/example.json --out /tmp/U10.html
```
