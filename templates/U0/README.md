# U0 · Shell: CRM GroupedRail + SISO tokens (the one shell)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U0/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/41

## Reasoning

- **why** · His 13:09 to LIBRARY-ZERO: 'you're not using our size of crm side nav, which is Specifically what I told you to do'; 16:50: 'not all of them have side nav so they're connected'; 18:19: 'the side nav is a bit shit'. One shell is what makes 60+ pages across 10 repos and 6 pages.dev sites feel like one place.
- **readers** · Human: orient, jump between families, collapse it and read. Agent: the rail's link data is the site map; Cmd-K search is the same map as text.
- **questions** · Where am I in the ecosystem? · What are the sibling pages? · Which section of this page do I want?
- **claim ceiling** · May assert only what the link data says exists; every destination must return 200 or be marked private.
- **data** · A link JSON per site (groups → destinations → status chip); built at publish; the rail reads it, never hand-edited HTML.
- **links out** · every family
- **links in** · every family
- **privacy** · Public; private destinations show a lock chip, never a payload.
- **empty state** · No JS: the page still reads; the rail is absent, nav.top remains.
- **agent entry** · siso-shell/shell.mjs rail({groups}) · atlas/crm-rail.js (port v2)

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | brand block: site name + subtitle |
| subtitle | — |
| paragraph | — |
| mind_map | the grouped destinations are the map |
| repos | — |
| research | — |
| docs | — |
| progress | — |
| agents | — |
| timeline | — |
| docs_over_time | — |
| own_nav | group 'On this page' from the page's anchors |

## Sections, in order

1. brand block
2. groups: Now / Plan / Readings / Outside (atlas) · Library / Research / Agents / Projects / Estate (Library)
3. compact icons
4. search (Cmd-K)
5. collapse handle
6. current-page marker

- **lives at** · siso-shell repo (public) as plain HTML/CSS/JS; atlas/crm-rail.{css,js} is the first port (AGENT-ZERO, 17:05, Luna rail-port)
- **instances** · every page family below · 1 shell · 18 Library routes · 24 atlas pages · 10 front doors
- **renders** · SISOCRM product-app GroupedRail.tsx/.css + tokens.css (hashes in briefs/LIBRARY-UI-FABLE.md): grouped nav, compact mode keeps the destination map, 20px collapsed handle, [ toggles, Cmd-K search, persisted preference; tokens: --siso-bg #202020, --siso-orange #FFA726 brand, --siso-gradient-brand 135° red→orange, semantic accents today/tasks/health/focus/reflect/danger, Geist
- **theme** · tokens.css verbatim; the CRM gradient as the one brand gradient; his 'color streams' = the six semantic accents used per section (Research=focus blue, Agents=reflect violet, Projects=today orange, Clients=tasks amber, Health/estate=health green, Blocked=danger rose) · rail: is the rail
- **needs** · —

## Done when

Open https://great-library-of-siso.pages.dev/ and /industries/law_firms/ and http://127.0.0.1:8890/atlas/ and see the same grouped rail: press [ and it collapses to a 20px handle on all three; press Cmd-K and a search box filters the destinations

## Rob

- AM · system-map registry rail: grouped sections with counts and LIVE/PARTIAL/RESEARCH_ONLY chips, ⌘K 'Search registry', footer 'REGISTRY 256 PAGES' · atlas/receipts/am-system-map-root.png
- AM · blueprint: numbered links, [ toggle navigation, collapse chevron · atlas/receipts/am-blueprint.png
- AM · block-runtime: 'On this page' grid · atlas/receipts/am-block-runtime.png
- 21st.dev · [notifications-menu](https://21st.dev/@ahmedmayara/components/notifications-menu) — his note: "banging notifications menu, a really good one. We need a good notifications menu and this is a side one so it doesn't take up much space"
- 21st.dev · [apple-spotlight](https://21st.dev/@samitkapoor/components/apple-spotlight) — his note: "oh my gosh this apple spotlight is beautiful. Use it for search or something. We already have something like that for search but this is really cool"
- 21st.dev · [agent-plan](https://21st.dev/@isaiahbjork/components/agent-plan) — his note: "drop-down agent plan, might be useful. We've done a really nice onboarding dropdown and our UI is better, but the way this component works is maybe slightly better"
- 21st.dev · [popover](https://21st.dev/@efferd/components/popover) — his note: "profile selector popover, pop it in a profile thing / settings. We need one of that for the operator"
- 21st.dev · [action-dropdown](https://21st.dev/@moumensoliman/components/action-dropdown) — his note: "this drop down is quite cool, action drop down"

## Compose

```sh
bin/compose U0 templates/U0/example.json --out /tmp/U0.html
```
