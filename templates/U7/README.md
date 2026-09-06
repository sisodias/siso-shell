# U7 · Research doc reader

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U7/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/57

## Reasoning

- **why** · 20 docs on the site carry no shell; the Action Model research reader shows the pattern that works: breadcrumb, source meta, claim ceiling, on-this-page.
- **readers** · Human: read without losing orientation. Agent: the source path and hash to cite.
- **questions** · What is this doc, from which source file, which version? · What may it claim? · Where does it sit in the site?
- **claim ceiling** · Rendered from source; the claim ceiling states what the doc does not establish.
- **data** · the markdown/HTML source + its git path, lines, bytes, sha256.
- **links out** · U3 Work it belongs to, U18 source
- **links in** · U2 Research, U3, U4
- **privacy** · Public unless in a private repo → U11.
- **empty state** · —
- **agent entry** · site/docs/<name>.html

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | doc title |
| subtitle | rendered from <path> |
| paragraph | abstract |
| mind_map | — |
| repos | — |
| research | — |
| docs | the doc |
| progress | — |
| agents | — |
| timeline | — |
| docs_over_time | — |
| own_nav | ON THIS PAGE from its headings |

## Sections, in order

1. same shell + breadcrumb
2. title, description, date, author seat
3. table of contents rail
4. the doc
5. evidence / version panel
6. related

- **lives at** · /docs/<name>.html and /research/
- **instances** · one per document · 20 docs on the site (site/docs/*.html) + every research dossier Work
- **renders** · site/docs/*.html, research.json, the Works of type knowledge_system/bundle
- **theme** · section accent · rail: U0
- **needs** · U0

## Done when

Open /docs/frontier-question-template and see the grouped rail, a contents column and the same heading style as a Work page

## Rob

- AM · research-report reader, whole page · atlas/receipts/am-research-report-reader.png
- 21st.dev · [with-slash](https://21st.dev/@originui/components/breadcrumb/with-slash) — his note: "these breadcrumbs, the way they do them is just really nice"
- 21st.dev · [scrollable-sticky-footer](https://21st.dev/@originui/components/dialog/scrollable-sticky-footer) — his note: "frequently asked questions scrolly thing, could be useful"
- 21st.dev · [stock-portfolio-card](https://21st.dev/@kavikatiyar/components/stock-portfolio-card) — his note: "stock portfolio card, 50/50, maybe could be used in operator somewhere"

## Compose

```sh
bin/compose U7 templates/U7/example.json --out /tmp/U7.html
```
