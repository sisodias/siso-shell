# U6 · Erdős question page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U6/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/59

## Reasoning

- **why** · His 16:50: 'we need one for each ERDOS question'. Four problems, a frozen laptop lane, a Mini lane, certificates: a GQ page with maths-specific state.
- **readers** · Human: is it solved, replayable, what did it cost. Agent: the certificate path and the replay command.
- **questions** · What is the problem? · What is proven, what is conjectured? · Is the certificate replayable, by which command? · What compute did it take, where?
- **claim ceiling** · Proof state only from a certificate or an audit file; never from a handoff sentence.
- **data** · SISO_Research/erdos/goals/*.md, audits/, DECISION-LOG.html, CHECKPOINT-2026-08-30.html.
- **links out** · U19 runs, U22 nodes
- **links in** · U5 index, U2 Research
- **privacy** · Public.
- **empty state** · No certificate → 'unverified' in amber.
- **agent entry** · SISO_Research/erdos/AGENTS.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Erdős NNN |
| subtitle | statement in one line |
| paragraph | approach |
| mind_map | reductions |
| repos | erdos repo + certificate files |
| research | papers/sources |
| docs | audits |
| progress | proven / conjectured / replayable |
| agents | fleet seats |
| timeline | attempts |
| docs_over_time | — |
| own_nav | problem · approach · certificate · compute |

## Sections, in order

1. problem statement
2. approach + reductions
3. certificate / replay status
4. compute spent + host
5. decision log
6. what would close it

- **lives at** · Library Works of type research_question, section Research, one per problem; the erdos repo as their satellite
- **instances** · one per problem in the Erdős fleet · 4 (742, 647, 23, 848; SISO_Research/erdos, laptop lane frozen 30 Aug, Mini lane)
- **renders** · SISO_Research/erdos/goals/*.md, DECISION-LOG.html, CHECKPOINT-2026-08-30.html, audits/, proof certificates
- **theme** · research = focus blue · rail: U0
- **needs** · U5

## Done when

Open /works/erdos-742/ and see the problem, the proof-logging status and a link to the replayable certificate

## Rob

- AM · block-runtime synthesis page: badge · headline · bordered thesis box · stat cards · atlas/receipts/am-block-runtime.png
- 21st.dev · [scrollable-sticky-footer](https://21st.dev/@originui/components/dialog/scrollable-sticky-footer) — his note: "frequently asked questions scrolly thing, could be useful"

## Compose

```sh
bin/compose U6 templates/U6/example.json --out /tmp/U6.html
```
