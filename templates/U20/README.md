# U20 · Play / skill page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U20/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/62

## Reasoning

- **why** · Eight plays let fourteen contexts behave as one system; an agent must find the play and its command without reading a brief.
- **readers** · Human: what plays exist. Agent: the exact command and whether it is installed here.
- **questions** · What does it do? · How do I run it? · Is it installed on this harness/machine? · Has it been used for real?
- **claim ceiling** · Installed only with a probe receipt.
- **data** · hub registry + probe receipts + OWNERS lines.
- **links out** · U17, U9
- **links in** · U9, U2 Agents
- **privacy** · Public.
- **empty state** · Not installed here → the add-skill command.
- **agent entry** · siso-skills-hub registry/skills/<path>/SKILL.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | play |
| subtitle | one line |
| paragraph | when to use |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | installed matrix |
| agents | owner |
| timeline | uses |
| docs_over_time | — |
| own_nav | what · command · installed · uses |

## Sections, in order

1. what it does in one line
2. the command
3. where installed (harness × machine) with probe date
4. used for real: receipts
5. source hash

- **lives at** · Library section Agents → /plays/<id>/ and /skills/<name>/
- **instances** · one per play and per hub skill · 8 plays (P1–P8) + 32 hub skills (siso-skills-hub)
- **renders** · atlas/FRAMEWORKS-2026-09-05.html, skills-hub registry/skills/*/SKILL.md, install state per harness per machine (cold-discovery probes)
- **theme** · agents = reflect violet · rail: U0
- **needs** · —

## Done when

Open /plays/P5-writeback/ and see the command, installed on Claude+Codex on laptop+Mini with probe dates, and three real uses

## Rob

- AM · blueprint chip row with live dots as the install matrix · atlas/receipts/am-blueprint.png
- 21st.dev · [countdown-number](https://21st.dev/@reuno-ui/components/countdown-number) — his note: "countdown component, always loved it. Can be used in coming-soon features or wherever"
- 21st.dev · [workflow-builder-card](https://21st.dev/@ravikatiyar162/components/workflow-builder-card) — his note: "I like this workflow builder card, could be used in the dashboard somewhere"
- 21st.dev · [to-do-card](https://21st.dev/@rafa-porto/components/to-do-card) — his note: "to-do list, quite cool. Return activity, this could be reused in operator somewhere"
- 21st.dev · [draggable-priority-list](https://21st.dev/@nikhiljainsam/components/draggable-priority-list) — his note: "priority queue, thought about it, could be used somewhere in the operator"

## Compose

```sh
bin/compose U20 templates/U20/example.json --out /tmp/U20.html
```
