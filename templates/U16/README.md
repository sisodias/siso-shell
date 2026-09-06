# U16 · Decision page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U16/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/51

## Reasoning

- **why** · 'You just decide all of the answers for me' (D-1…D-29) means decisions are the constitution; a future Agent Zero must be able to read them one by one with the words that caused them.
- **readers** · Human: what did we decide and why. Agent: the rule to obey and what would reverse it.
- **questions** · What was decided, when? · In whose words? · What did it change? · Is it still in force?
- **claim ceiling** · Only decisions in decisions.json; a proposal is labelled proposal.
- **data** · plan/decisions.json + source/.
- **links out** · U18, U4, U5, U9
- **links in** · U9, U4, U5
- **privacy** · Public.
- **empty state** · —
- **agent entry** · plan/decisions.json

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | D-NN · one line |
| subtitle | date · in force / superseded |
| paragraph | his words |
| mind_map | → modules, projects, plays it gates |
| repos | — |
| research | — |
| docs | — |
| progress | in force |
| agents | — |
| timeline | decided · reaffirmed · reversed |
| docs_over_time | — |
| own_nav | decision · words · effects · reversal |

## Sections, in order

1. the decision in one line
2. his words (verbatim)
3. what it changed (files, modules)
4. what reverses it
5. superseded by

- **lives at** · /decisions/ index + /decisions/D-NN/ under the Agent Zero page
- **instances** · one per decision · 29 (plan/decisions.json D-1…D-29) + harness-lab DECISIONS.md
- **renders** · plan/decisions.json: id, date, his words, what it changed, what reverses it; the source/ file it came from
- **theme** · agents = reflect violet · rail: U0
- **needs** · —

## Done when

Open /decisions/D-25/ and see 'no seat is spawned without a verification line', the 5 Sep words that caused it, and the modules it gates

## Rob

- AM · system-map 'OBSERVED' strip with hash as the 'in force since' strip · atlas/receipts/am-system-map-root.png
- AM · system-map artifacts decision-ledger-json pages · site/system-map/artifacts/p01/decision-ledger-json/
- 21st.dev · [bento-card](https://21st.dev/@0xUrvish/components/bento-card) — his note: "really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"
- 21st.dev · [leaderboard-card](https://21st.dev/@trophyso/components/leaderboard-card) — his note: "this would be so banging in the operators dashboard. I'd make a whole page for this. Models could have streaks, get assigned badges. We're going to gamify a bit for them, on the operators performance side of the admin board"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [performance-benchmark-card](https://21st.dev/@kavikatiyar/components/performance-benchmark-card) — his note: "another performance benchmark card, might be useful"

## Compose

```sh
bin/compose U16 templates/U16/example.json --out /tmp/U16.html
```
