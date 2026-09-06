# Sources — the 21st.dev components these parts are robbed from

His 21:05 order: *"repository cards like some of this stuff for these parts could come from 21st.dev that'd be a
lot better like the maps and graphs and mind map"* and *"do you not have the 21st.dev comps that we already saved
where are those so you can use those that would help you out a lot"*
(`00_AGENT_ZERO/source/2026-09-06-21xx-shaan-shell-good-parts-shoddy-21st-comps-opus-5-fable.md`).

**Corpus.** `~/SISO_Workspace/siso-ui-base/registry/` — 7,977 harvested bundles, queried with
`node registry/21st/find.mjs <query> --limit 6 --json`; his 112 curated picks with verbatim notes in
`registry/curated/picks.jsonl`. Every row below names the pick or the find query it came from.

**What is taken.** Presentation only: layout, proportion, motion technique, the shape of a card. No component
source is pasted — these parts are static HTML rendered by `bin/compose` on CRM tokens (`shell/tokens.css`), and
the corpus bundles are React + Tailwind + framer-motion. The bundle is read as reference and rebuilt.

**Rights.** 21st.dev publishes community components under the MIT licence in its site terms; there is no
per-component LICENSE file in the harvest, so *no per-component licence has been verified* — the row below records
the site-wide term and the fact that only the technique crossed over. `preview.webp` images are copied into
`parts/sources/` as attribution thumbnails, at the size the corpus stores them.

| part | source component | author | 21st URL | licence | what was taken | preview |
|---|---|---|---|---|---|---|
| `shell/rail.css` §3 (animated icons) | animated-state-icons | dev.yadhakim | https://21st.dev/@dev.yadhakim/components/animated-state-icons | MIT (21st.dev site terms; no per-component file) | the technique only: SVG geometry animated on a state change — stroke `pathLength` 0→1, transform origin at the glyph centre, `cubic-bezier(0.32, 0.72, 0, 1)` over 0.35–0.5 s, then a settle. Rebuilt in CSS (`stroke-dasharray`/`dashoffset` + `transform`) because framer-motion is not shippable in a static page. No colour, size or spacing token changed. | `parts/sources/animated-state-icons.webp` |
| `parts/map.html` + `bin/lib/helpers.mjs mapSvg` | mind-map (Mind Elixir) | ssshooter | https://21st.dev/@ssshooter/components/mind-map | MIT (21st.dev site terms) | the layout and the look of a real graph: root centred, first-level branches split left and right, curved bezier links from parent edge to child edge, leaves as boxed labels tinted by their branch, on a dark ground. The tidy-tree packing (Reingold-Tilford first/second walk, so siblings never collide and a parent sits at its children's midpoint) is implemented here in `mapSvg`; Mind Elixir itself is a React/canvas library and ships none of it into this page. Replaces the v1 fixed-radius ring — his "maps all this stuff a bit shoddy". | `parts/sources/mind-map.webp` |
| `parts/repos.html` | sonner-05 | shadcnspace | https://21st.dev/@shadcnspace/components/sonner-05 | MIT (21st.dev site terms) | the repository-card anatomy: rounded glyph tile, name over its locator in mono, a state pill top-right, a hairline rule, then the branch / head / recency meta row and one action button. Rated in the bank as "Repository state, branch, recency, status… unusually complete" (`curated/query.mjs`, scout 24/25). | `parts/sources/sonner-05.webp` |
| `parts/reasoning.html` | chain-of-thought | elements- | https://21st.dev/@elements-/components/chain-of-thought | MIT (21st.dev site terms) | the stepped spine: stages down a connecting rail, a state glyph per stage, and nested cards under the stage that produced them. Used to make "his words" vs "the seat's reading" vs "what this page may claim" structural rather than three stacked boxes. Bank note: "Collapsible live reasoning stages, sources, and status transitions" (scout 22/25). No collapsing here — a claim ceiling must not be hideable. | `parts/sources/chain-of-thought.webp` |
| `parts/gallery.html` | bento-card | 0xUrvish | https://21st.dev/@0xUrvish/components/bento-card | MIT (21st.dev site terms) | the card anatomy: small uppercase kicker, large short title, quiet two-line sub, then a recessed inset panel that holds the preview and bleeds off the card's bottom-right edge. His pick, signal **love**: *"really nice bento card. If we ever make a landing page this is a really good comp to have. Must mean a lot considering I've actively not been mentioning landing page stuff"* (`curated/picks.jsonl`). Answers "the gallery cards are a bit shit". | `parts/sources/bento-card.webp` |
| `parts/catalogue.html` + `parts/gallery.html` (search row) | apple-spotlight | samitkapoor | https://21st.dev/@samitkapoor/components/apple-spotlight | MIT (21st.dev site terms) | the search row: one tall pill (46px), glyph left, type larger than a form field, a focus ring rather than a border change, and the count riding inside the row. His pick, signal **love**: *"oh my gosh this apple spotlight is beautiful. Use it for search or something."* Answers *"searchable catalog yeah that's cool although again you could use some 21st.dev components for the search"*. The spotlight's expanding result panel is not taken: these catalogues filter in place. | `parts/sources/apple-spotlight.webp` |
| `parts/metrics.html` | stats-card | ravikatiyar162 | https://21st.dev/@ravikatiyar162/components/stats-card | MIT (21st.dev site terms) | one detail: the number carries a small inline qualifier ("36 projects") with the label as the quiet line under it, and an optional mono note below. His pick, signal **love**: *"I like this stats card, the earning one, really nice"*. | `parts/sources/stats-card.webp` |
| `parts/quickstart.html` | animated-terminal | dev.yadhakim | https://21st.dev/@dev.yadhakim/components/animated-terminal | MIT (21st.dev site terms) | the terminal chrome: window strip with lights, the file being run named in the title bar, one prompt glyph per command line. Answers "the agent entries and shit like the parts you have i say are still quite shit". **The typing animation is deliberately not taken** — these commands are real and meant to be copied, so they must not move. | `parts/sources/animated-terminal.webp` |

**Kept from v1, not re-robbed:** `evidence`, `activity`, `catalogue` (structure), `timeline`, `words`, `heading`, `related`, `chips`, `contents`, `sauce`, `section`, `loop`. His 21:05 named these as the good ones — *"i do like the evidence ones activity strips nice searchable catalog yeah that's cool"* — so they keep their shape; only the catalogue's search row changed.

His note on this pick (`curated/picks.jsonl` n=40, session 2026-09-04): *"animated state icons, always useful to
make the app feel nicer"*. Source read: `registry/21st-source-harvest/source/dev.yadhakim__animated-state-icons/code.tsx`
(sha256 `0bf375882fcd8344a244d7e642e969bfe5609bab21f66a01ab1006e5f5273cf0`, retrieved 2026-08-29).
