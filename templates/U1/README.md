# U1 · Library landing (root front door)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U1/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/48

## Reasoning

- **why** · His 16:36: the Library is 'a way to actually see that shit'; 'look at what we currently have and figure out why it's stupid'. The root is the only page a stranger or a cold agent sees first.
- **readers** · Human: understand SISO in 30 s, pick a door. Agent: read the loop and the counts, then follow catalog.json.
- **questions** · What is SISO building and why? · How big is it (counts)? · Where do I go for a project / a question / an industry? · What moved this week?
- **claim ceiling** · Counts come from catalog.json at build; the loop shows the thesis and marks measured results only where a receipt exists.
- **data** · catalog.json (works, repositories, assemblies, inventories), GOD-QUESTIONS.md count, industries index, the latest owners.log lines for 'what moved'.
- **links out** · U2 sections, U4 projects, U5 GQs, U8 industries, U9 Agent Zero, U21 timeline
- **links in** · everything
- **privacy** · Public.
- **empty state** · A section with 0 items says '0, nothing registered yet' with the gls command to register.
- **agent entry** · Great_Library_of_SISO/src/build.mjs → site/index.html

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | Great Library of SISO |
| subtitle | the bet in one line (INTENT.md) |
| paragraph | his words, dated |
| mind_map | the ecosystem loop, every node a link |
| repos | 27 repos, 23 public / 4 private, as a count + link |
| research | latest research Works |
| docs | latest docs |
| progress | counts strip |
| agents | live seats from /now/ |
| timeline | last 7 days strip |
| docs_over_time | — |
| own_nav | loop · sections · latest · doors |

## Sections, in order

1. purpose in his words
2. the loop: clients fund compute → owners build → packs enter the Library → people+repos feed Foundry → questions turn evidence into breakthroughs
3. section counts from catalog.json
4. featured: latest Works, latest GQ, latest project one pagers
5. search

- **lives at** · great-library-of-siso.pages.dev/ (Great_Library_of_SISO/src build)
- **instances** · one page · 1
- **renders** · catalog.json counts (47 Works, 86 Releases, 40 Snapshots, 8 inventories, 27 repos 23 public / 4 private, 17 industries, 22 GQ), the ecosystem loop from library-ui-spec §6, featured entry points
- **theme** · brand gradient hero, section accents · rail: U0
- **needs** · U0

## Done when

Open the root and see the loop diagram with every node a real link, the counts equal to catalog.json, and the grouped rail

## Rob

- AM · system-map hero: serif headline + one-paragraph thesis + 'Evidence ladder' counts panel with gate labels · atlas/receipts/am-system-map-root.png
- AM · blueprint hero: kicker · gradient headline · chip row of entry points with live dots · 4-stat strip · atlas/receipts/am-blueprint.png
- AM · research-os: 6-stat strip with coloured numbers, 'central thesis' panel + 'decision posture' checklist · atlas/receipts/am-research-os.png
- 21st.dev · [bento-card](https://21st.dev/@0xUrvish/components/bento-card) — his note: "really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"
- 21st.dev · [welcome-modal](https://21st.dev/@ravikatiyar162/components/welcome-modal) — his note: "welcome new models, that's what we needed"
- 21st.dev · [feature-carousel](https://21st.dev/@0xUrvish/components/feature-carousel) — his note: "feature carousel could be a way of showing models: carousel click through the models to their profile picture. Food for thought"
- 21st.dev · [onboardin-dialog](https://21st.dev/@originui/components/dialog/onboardin-dialog) — his note: "another dialog card, could be useful. That's more landing page shit"

## Compose

```sh
bin/compose U1 templates/U1/example.json --out /tmp/U1.html
```
