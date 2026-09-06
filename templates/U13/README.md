# U13 · Reusable modules (the parts every family composes)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U13/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/42

## Reasoning

- **why** · Every family composes the same parts; build them once as partials or every page drifts (the atlas already has 24 hand-written pages). The Action Model pages are the proof that these parts render from real data.
- **readers** · Human: consistent reading. Agent: consistent DOM to parse.
- **questions** · Which parts exist and what data does each take?
- **claim ceiling** · —
- **data** · a fixture page with all parts + their JSON shapes.
- **links out** · all
- **links in** · all
- **privacy** · —
- **empty state** · each part has a truthful empty state (and the site has a real 404, GAPS F-3).
- **agent entry** · siso-shell partials + fixture

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | — |
| subtitle | — |
| paragraph | — |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | — |
| agents | — |
| timeline | — |
| docs_over_time | — |
| own_nav | the parts |

## Sections, in order

1. one HTML/CSS partial each
2. dark tokens
3. no framework
4. a fixture page showing all 12
5. truthful empty state + a real 404 (GAPS F-3)

- **lives at** · siso-shell (or a Library src/components/ dir) as static partials the generator composes; the 21st.dev bank (112 picks, 62 libraries) is the source for cards, bento, dialogs, tables
- **instances** · 12 modules from library-ui-spec §6 · 12
- **renders** · library-ui-spec.md §6: shell; heading+breadcrumb+state badges; authored reasoning block (source vs interpretation); ecosystem loop + typed relationship map; repo/satellite cards with public/private/access/rights; sauce cards; contents/capability list + procedure; agent quick-start panel; evidence/limits/version panel; activity strip; searchable catalogue cards/table + empty states; related work
- **theme** · tokens + accents · rail: U0
- **needs** · U0

## Done when

Open /docs/ui-fixture and see the 12 modules rendered once each with their names; view-source shows each is one partial

## Rob

- AM · evidence ladder (system-map) · claim ceiling + file chips (reader) · posture panel + stat strip + entity chips + states flow (industry) · chip row with live dots + numbered rail (blueprint) · thesis/posture twin panels + track cards (research-os) · thesis box + on-this-page grid (block-runtime)
- 21st.dev · [bento-card](https://21st.dev/@0xUrvish/components/bento-card) — his note: "really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"
- 21st.dev · [project-detail-view](https://21st.dev/@kavikatiyar/components/project-detail-view) — his note: "kind of nice, kind of simple, could be used somewhere in the operators thing. (Server management one was a bit shitty)"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [ai-input](https://21st.dev/@aghasisahakyan1/components/ai-input) — his note: "ask AI input. Really cool the way it pops up, then we're not always wasting space. Having an AI chat always showing is the bad way to go on Oracle. This is definitely the best way, definitely best UI principles. Hand over to an agent to look into"

## Compose

```sh
bin/compose U13 templates/U13/example.json --out /tmp/U13.html
```
