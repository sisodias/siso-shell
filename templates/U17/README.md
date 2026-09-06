# U17 · Agent seat page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U17/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/52

## Reasoning

- **why** · His 16:50: 'agents should be ephemeral … the projects are forever'. Ephemeral means a record, not a memory: every seat gets one page so the project keeps what the agent learned.
- **readers** · Human: what did this agent do and cost. Agent: the handoff to resume from and the brief pattern that worked.
- **questions** · What was it born from? · What did it land, verified? · What did it cost? · Where is its reasoning (rollout)? · How did it close?
- **claim ceiling** · Landed only with a commit/URL; cost from token_count events labelled cumulative vs uncached.
- **data** · briefs/, handoffs/, OWNERS.md, owners.log, ~/.codex/sessions rollouts (private satellite).
- **links out** · U4, U19, U21, U18
- **links in** · U4, U9, U10
- **privacy** · Public page; rollout private.
- **empty state** · No handoff → 'closed without handoff' in red.
- **agent entry** · handoffs/<SEAT>.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | SEAT |
| subtitle | model · node · born → closed |
| paragraph | what it was for (brief) |
| mind_map | project → modules → commits |
| repos | repos it wrote to |
| research | — |
| docs | — |
| progress | landed / left |
| agents | itself + successors |
| timeline | born · writebacks · closed |
| docs_over_time | handoff sections by time |
| own_nav | born · landed · cost · rollout · closed |

## Sections, in order

1. born: date, brief, node, model, harness
2. what it landed (verified)
3. what it cost (uncached in / out / reasoning)
4. its writebacks
5. its rollout (path, size, private)
6. closed: how, handoff

- **lives at** · /seats/<SEAT>/ under the project it served; the rollout stays in <project>-sessions
- **instances** · one per seat that ever ran · ~30 seats 5–6 Sep (12 closed Astra seats + Fable heads + Oracle lane + Mini seats); ledger/OWNERS.md lines
- **renders** · briefs/<SEAT>.md (born from), handoffs/<SEAT>.md, OWNERS.md lines, owners.log, rollout path + token maxima (GAPS M-4), verification line
- **theme** · agents = reflect violet · rail: U0
- **needs** · —

## Done when

Open /seats/HALO-ZERO/ and see born 5 Sep 12:01, 37 commits landed on the mirror, 184.6M cumulative tokens, the rollout path, and its handoff

## Rob

- AM · research-os track card: kicker · status · 'ORIGINAL TASK' · atlas/receipts/am-research-os.png
- AM · block-runtime stat cards for cost · atlas/receipts/am-block-runtime.png
- 21st.dev · [agent-plan](https://21st.dev/@isaiahbjork/components/agent-plan) — his note: "drop-down agent plan, might be useful. We've done a really nice onboarding dropdown and our UI is better, but the way this component works is maybe slightly better"
- 21st.dev · [ai-planning](https://21st.dev/@arunjdass/components/ai-planning) — his note: "AI planning, I like how it dropped down and can show a bunch of information. Not sure where we'd use it"
- 21st.dev · [stats-card](https://21st.dev/@ravikatiyar162/components/stats-card) — his note: "I like this stats card, the earning one, really nice"
- 21st.dev · [estimated-arrival](https://21st.dev/@hedevelope/components/estimated-arrival) — his note: "estimated time arrival, really interesting, don't know where we'd use it, love to have it. Progress bar could be useful in the operator app somewhere"

## Compose

```sh
bin/compose U17 templates/U17/example.json --out /tmp/U17.html
```
