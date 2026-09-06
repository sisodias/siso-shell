# U18 · Source page (his words)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U18/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/49

## Reasoning

- **why** · His 16:36: 'all of my prompts and absolutely everything'; 16:50: 'those 50,000 words and the last 20,000 words … a really important source'. The words are the root of every decision; they need a front end of their own.
- **readers** · Human: what did I say, when, and what happened because of it. Agent: the verbatim to quote instead of paraphrasing.
- **questions** · What did he say on X? · What did it cause? · When exactly (label vs transcript)?
- **claim ceiling** · Verbatim only; 'Reads' labelled as the seat's reading.
- **data** · source/*.md, siso-source manifest.
- **links out** · U16, U4, U5, U17
- **links in** · U9, U16, U4
- **privacy** · Private repo; public pages quote fragments.
- **empty state** · —
- **agent entry** · source/

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | date-time · slug |
| subtitle | to whom |
| paragraph | the words |
| mind_map | → decisions, briefs, pages |
| repos | — |
| research | — |
| docs | — |
| progress | caused |
| agents | — |
| timeline | the day |
| docs_over_time | — |
| own_nav | words · reads · caused |

## Sections, in order

1. the words, verbatim, dated
2. who it was said to
3. what it caused (decisions, briefs, pages)
4. the offset note (label vs transcript, GAPS F-8)

- **lives at** · /source/ index by date + /source/<file>/ (private repo siso-agent-zero-source if he rules so)
- **instances** · one per capture · 44 files, 111,930 words in 00_AGENT_ZERO/source/ + siso-source partitions (August 10,503, September 4,144 occurrences)
- **renders** · source/<date-time>-<slug>.md: verbatim block + Reads; transcript timestamp; the decisions/projects it caused
- **theme** · agents = reflect violet · rail: U0
- **needs** · —

## Done when

Open /source/2026-09-06-1650/ and see the 16:50 words verbatim, the transcript timestamp, and links to TEMPLATES and the rail work it caused

## Rob

- AM · research reader: source meta chips + claim ceiling · atlas/receipts/am-research-report-reader.png
- 21st.dev · [bento-card](https://21st.dev/@0xUrvish/components/bento-card) — his note: "really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [scrollable-sticky-footer](https://21st.dev/@originui/components/dialog/scrollable-sticky-footer) — his note: "frequently asked questions scrolly thing, could be useful"

## Compose

```sh
bin/compose U18 templates/U18/example.json --out /tmp/U18.html
```
