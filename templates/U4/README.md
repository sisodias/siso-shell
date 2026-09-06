# U4 · Project one pager (bigger; the hub that links to the rest)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U4/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/43

## Reasoning

- **why** · His 16:36: 'templates for like our project one pager which leads to all of the other project Cloudflare … loads of different repos, but we want like a set kind of UI template'; 18:19: 'title subtitle paragraph … mind map … link to all of the repos … all of the research what the research means … all of the docs the progress what agents we've had running on here the timeline'. This is the hub: every other page is one hop from it.
- **readers** · Human: the whole project in one screen, then click out. Agent: the entry to resume a project: front door, repos, verification lines, open modules.
- **questions** · What is this project and for whom? · Which repos, which are private, what is the head commit? · What is live (URLs) and does it return 200? · What landed, what is left, who is on it? · What did he say about it, when? · Which questions, industries and Works does it touch?
- **claim ceiling** · Repo heads and HTTP codes from live lookups with their timestamp; 'landed' only when verified against a remote or URL; his words verbatim from source/.
- **data** · plan/projects.json (this repo) + <repo>/.agents/{PAGE.md,HANDOFF.md,owners.log,page.url,repos.json} + bin/az-projects-table live cache; the same JSON feeds the project's own pages.dev front door and its Library Work.
- **links out** · U3 Works, U5 GQs, U8 industries, U14 people, U15 client account, U16 decisions, U17 seats, U18 source, U21 timeline, U22 nodes
- **links in** · U1, U9, U15
- **privacy** · Public front door for agency projects; client projects show repo names, visibility and dated activity, never payload.
- **empty state** · No URL → 'no live page yet' + the publish play; no owner → 'unowned' in red.
- **agent entry** · <repo>/.agents/PAGE.md (read first) · bin/az-projects-table

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | project name |
| subtitle | client or agency · one-line what · for whom |
| paragraph | in his words, dated |
| mind_map | repos · Works · questions · industries · people · nodes as a graph |
| repos | every repo incl. private: head, time, branch, visibility |
| research | research Works + one line each: what it means for this project |
| docs | the docs in the repos, dated |
| progress | modules with verification lines: landed / left |
| agents | every seat that ran: born, closed, what it landed, cost |
| timeline | commits + seats + decisions + docs on one axis |
| docs_over_time | docs plotted on that axis |
| own_nav | the ten sections |

## Sections, in order

1. what it is, in his words
2. repos incl. private (head, time, visibility)
3. live URLs with codes
4. owner seats + latest writeback
5. what landed (verified)
6. what is left → the module rows with verification lines
7. links: the Works, GQs and industries this project touches
8. the Cloudflare pages it leads to

- **lives at** · each project's *.pages.dev front door (Tier 1) AND mirrored as a Library Work of type project; atlas/p/<slug>.html is the prototype today
- **instances** · one per project, agency and client · 10 projects: Library, Foundry, Internal+Agent Base, Knowledge/siso-source, Plays/hub, GQ+compute, Agent Zero (agency) · Oracle, HALO, BykonzYard, Action Model (client)
- **renders** · plan/projects.json (repos with branch/head/private, urls with HTTP code, seats with last writeback, landed, said verbatim, left, modules with verification lines) + <repo>/.agents/{PAGE.md,HANDOFF.md,owners.log,page.url,repos.json}
- **theme** · project = today orange; client projects carry the client's own brand strip below the SISO shell · rail: U0
- **needs** · U0, U3

## Done when

Open <project>.pages.dev and https://great-library-of-siso.pages.dev/works/<project>/ and see the same one pager; every repo listed with its head commit from gh api, private ones marked private

## Rob

- AM · system-map root: 'Programme brief · date' kicker · 'Evidence ladder' counts with gate labels · 'OBSERVED' strip with commit hash · atlas/receipts/am-system-map-root.png
- AM · blueprint: chip row of entry points with live dots (system map, component catalogue, demo) · atlas/receipts/am-blueprint.png
- AM · research-os: 'central thesis' + 'decision posture' twin panels; track cards · atlas/receipts/am-research-os.png
- 21st.dev · [project-detail-view](https://21st.dev/@kavikatiyar/components/project-detail-view) — his note: "kind of nice, kind of simple, could be used somewhere in the operators thing. (Server management one was a bit shitty)"
- 21st.dev · [stats-card](https://21st.dev/@ravikatiyar162/components/stats-card) — his note: "I like this stats card, the earning one, really nice"
- 21st.dev · [mini-chart](https://21st.dev/@jatin-yadav05/components/mini-chart) — his note: "does this activity mini chart actually work? It does. Banging. We needed some graphs. This is going to be used in the operator thing"
- 21st.dev · [great-ui-revision-timeline](https://21st.dev/@saurabh-2607/components/great-ui-revision-timeline) — his note: "great-ui revision timeline looks cool, the only comp I'm going to give you from them"
- 21st.dev · [team-invitation](https://21st.dev/@kokonutd/components/team-invitation) — his note: "team invitation comp, don't know where it could be used but kind of cool. This team invitation is just good. If I mention they're good they're always good for a component bank"
- 21st.dev · [to-do-card](https://21st.dev/@rafa-porto/components/to-do-card) — his note: "to-do list, quite cool. Return activity, this could be reused in operator somewhere"

## Compose

```sh
bin/compose U4 templates/U4/example.json --out /tmp/U4.html
```
