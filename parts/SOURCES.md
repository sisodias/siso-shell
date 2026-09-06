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

His note on this pick (`curated/picks.jsonl` n=40, session 2026-09-04): *"animated state icons, always useful to
make the app feel nicer"*. Source read: `registry/21st-source-harvest/source/dev.yadhakim__animated-state-icons/code.tsx`
(sha256 `0bf375882fcd8344a244d7e642e969bfe5609bab21f66a01ab1006e5f5273cf0`, retrieved 2026-08-29).
