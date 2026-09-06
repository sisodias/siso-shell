# Sources — where each part's design came from

His 21:05 order: *"repository cards like some of this stuff for these parts could come from 21st.dev that'd be a
lot better like the maps and graphs and mind map"* and *"do you not have the 21st.dev comps that we already saved
where are those"*
(`00_AGENT_ZERO/source/2026-09-06-21xx-shaan-shell-good-parts-shoddy-21st-comps-opus-5-fable.md`).

## The bank

**`SISO_Knowledge/design-system/`** — the SISO design system hub (`Lordsisodia/siso-knowledge`). Ours. 3,567
components with **real installed source**, not previews: `library/21st-dev/` (3,494), `library/kokonutui/` (40),
`library/motion-primitives/` (33). Each folder holds the component `.tsx`, its `demo.tsx`, a `registry-item.json`
(shadcn registry entry with its real npm dependencies) and a `classification.json` (category, subcategory, visual
style, interactions, complexity, use cases, AI summary). `library/manifest.json` is the index; `CATALOG.md` is the
usage-first read; `cli/` is the picker (`pick` / `query` / `add` / `facets`).

Query it by name, category or summary through the manifest + classification files. That is what the rows below
were chosen from, and each names the exact folder.

**Read the real source, not a picture.** Every row below cites a file and a line where the rule came from. Where a
component's own behaviour would be wrong for a record page, the row says what was deliberately dropped and why.

**What crosses over.** These parts are static HTML rendered by `bin/compose` on CRM tokens; the hub's components
are React + Tailwind (+ visx, framer-motion). So the *rule* crosses over and is rebuilt — layout maths, proportion,
what a shape signifies, motion timing — and the runtime does not.

| part | hub component | what was taken |
|---|---|---|
| `parts/map.html` + `bin/lib/helpers.mjs mapSvg` | **`library/21st-dev/airbnb-linktypes`** (and `airbnb-dendrogram`) — visx `Tree`/`Cluster` from `@visx/hierarchy`, i.e. d3's Reingold–Tilford tidy tree, with `LinkHorizontalCurve` branches | the layout itself, computed at build time and emitted as plain SVG. Three rules verbatim: **(1)** `separation={(a,b) => (a.parent===b.parent ? 1 : 0.5) / 0.5}` — siblings sit at twice the gap of cousins, so a subtree reads as one block (`linktypes.tsx:321`); **(2)** a node's *shape* says whether it leads anywhere — parents solid with a small radius, dead ends dashed and pill-shaped (`linktypes.tsx:222-231`, `strokeDasharray={isParentInData ? '0' : '2,2'}`); **(3)** links are curves from parent edge to child edge, never straight spokes. Replaces the v1 fixed-radius ring — the star he called *"a bit shoddy"*. React and visx are not shipped. |
| `parts/gallery.html` | **`library/21st-dev/0xurvish-bento-card`** (`bento-card.tsx`, 17 KB of real source; classified `card / bento-dashboard-tab-card`, complexity `composite`) | the card anatomy: small uppercase kicker, large short title, quiet two-line sub, then a recessed inset panel holding the preview that bleeds off the bottom-right edge. His pick, signal **love**: *"really nice bento card. If we ever make a landing page this is a really good comp to have."* Answers *"the gallery cards are a bit shit"*. Its tab-switching `LayoutGroup`/`AnimatePresence` is not taken — a gallery card is a link, not a tab bar. |
| `parts/catalogue.html` + `parts/gallery.html` (search row) | **`library/21st-dev/samitkapoor-apple-spotlight`** | the search row: one tall pill (46px), glyph left, type larger than a form field, a focus ring rather than a border change, count riding inside the row. His pick, signal **love**: *"oh my gosh this apple spotlight is beautiful. Use it for search or something."* Answers *"searchable catalog yeah that's cool although again you could use some 21st.dev components for the search"*. The expanding result panel is not taken: these catalogues filter in place. |
| `shell/rail.css` §3 (animated icons) | **`library/21st-dev/dev.yadhakim-animated-state-icons`** | the technique: SVG geometry animated on a state change — stroke `pathLength` 0→1, transform origin at the glyph centre, `cubic-bezier(0.32, 0.72, 0, 1)` over 0.35–0.5 s, then a settle. Rebuilt in CSS (`stroke-dasharray`/`dashoffset` + `transform`); framer-motion is not shipped. His pick: *"animated state icons, always useful to make the app feel nicer"*. No colour, size or spacing token changed. |
| `parts/metrics.html` | **`library/21st-dev/ravikatiyar162-stats-card`** | the number carries a small inline qualifier ("36 projects") with the label as the quiet line under it, plus an optional mono note. His pick, signal **love**: *"I like this stats card, the earning one, really nice"*. |
| `parts/repos.html` | pattern (`shadcnspace/sonner-05`, seen in the preview mirror; **not** in the hub — no installed source to cite) | glyph tile, name over its locator in mono, state pill top-right, hairline rule, branch/head/recency meta row, one action. Worth re-pointing at a hub component when an equivalent is imported. |
| `parts/reasoning.html` | pattern (`elements-/chain-of-thought`, seen in the preview mirror; **not** in the hub) | a stepped spine: stages down a connecting rail, a state glyph per stage, nested cards under the stage that produced them — so "his words" vs "the seat's reading" vs "the claim ceiling" is structural. The collapsing is deliberately not taken: a claim ceiling must not be hideable. |
| `parts/quickstart.html` | pattern (`dev.yadhakim/animated-terminal`, seen in the preview mirror; **not** in the hub) | window strip with lights, the entry file named in the title bar, one prompt glyph per command line. Answers *"the agent entries and shit like the parts you have i say are still quite shit"*. The typing animation is deliberately not taken — these commands are real and meant to be copied, so they must not move. |

The last three rows are honest about their footing: they came from the preview mirror at
`siso-ui-base/registry/21st/` (bundles + screenshots, no installable source) before the hub was located. The hub
has no equivalent installed yet — `grep`ing `library/` for `sonner`, `chain-of-thought` and `terminal` returns
`sean0205-sonner`, nothing, and two unrelated terminals. Importing proper equivalents with
`scripts/add-21st.mjs` and re-pointing those rows is the obvious next pass.

**Kept from v1, not re-sourced:** `evidence`, `activity`, `catalogue` (structure), `timeline`, `words`, `heading`,
`related`, `chips`, `contents`, `sauce`, `section`, `loop`. His 21:05 named these as the good ones — *"i do like
the evidence ones activity strips nice searchable catalog yeah that's cool"* — so they keep their shape; only the
catalogue's search row changed.
