# Agent guide: SISO shell and template bank

This repository owns reusable presentation: the shared CRM-derived shell, static
page parts and task-specific template compositions. It does not own the Library
registry, project task systems, private operational data or runtime admission.

## Read before changing source

1. Read [README.md](README.md) for the implementation and current reuse examples.
2. Read the complete binding [Library UI specification](https://github.com/sisodias/great-library-of-siso/blob/a6cfb54152ba7cf08e258ff7fd43159ff97ab562/docs/library-ui-spec.md)
   and check the latest Library source for a successor before consequential work.
3. Recover the existing shell/Library owner's current handoff through an authorized
   route. A recorded owner name is not live presence; missing observations do not
   authorize a replacement. Preserve other owners' dirty and unpublished work.
4. Read [parts/SOURCES.md](parts/SOURCES.md), `shell/rail.css` source annotations,
   the relevant `templates/<family>/template.html`, its input/schema and the
   implementation in `bin/lib/compose.mjs` / `bin/lib/helpers.mjs`.
5. Read Library [contribution](https://github.com/sisodias/great-library-of-siso/blob/a6cfb54152ba7cf08e258ff7fd43159ff97ab562/CONTRIBUTING.md)
   and [publication-safety](https://github.com/sisodias/great-library-of-siso/blob/a6cfb54152ba7cf08e258ff7fd43159ff97ab562/SECURITY.md)
   boundaries. Keep private donor/source material out of public code, fixtures,
   screenshots, issues and pull requests.

These references are a dated navigation aid, not authority to replace later
source instructions. Do not invent a new task queue, consumer registry or owner.

## What each layer does

| Layer | Source | Boundary |
| --- | --- | --- |
| Shared navigation | `shell.mjs`, `shell/` | One coherent actual CRM reference; Library adaptations recorded |
| Reusable parts | `parts/` | Presentation of approved data; no invented facts or source collection |
| Per-task composition | `templates/` | Arrange parts to answer the reader's job, not force every page into the same layout |
| Rendering | `bin/lib/engine.mjs`, `compose.mjs`, `helpers.mjs` | Static rendering; preserve escaping, source distinctions and accessible equivalents |
| Gallery/example derivation | `bin/lib/data.mjs`, `site/templates.json` | Dated inputs are not live observations or proof of completion |
| Generated output | `site/` | Replaceable artifact, not authored truth or an accepted Library Release |
| Selection and consumer pin | Library `registry/`, `package.json`, `package-lock.json` | Owned by the Library integration maintainer |

`bin/build-site` currently writes derived family examples and READMEs as well as
site output. Inspect that write set before running it; do not sweep generated or
peer-owned changes into a commit. Use an isolated checkout for verification when
shared work is present. Schema files describe input contracts; schema presence
alone does not establish that a compose invocation validated its input.

## Design and evidence rules

The reader should understand what something does, why it matters, how to use it,
what the evidence supports and where to go next. Follow UI spec §§5-6 for depth.
Purpose, useful entry actions and explanation should not be buried under raw
identifiers, long activity dumps or decorative repeated cards.

Use one source-pinned CRM GroupedRail/style revision. Keep its attribution and
third-party notices. For Library integration, preserve the intentional roughly
20px collapsed handle with a usable target; do not clip a compact icon rail to fit.
Do not substitute an unrelated sidebar or mix token revisions. Existing good
modules and authored content are not disposable merely because a redesign is open.

Compose maps from actual source relationships. Explain the relationship, expose
full labels and provide readable text alongside the diagram. Spatial position,
colour or a grouping label must not invent ownership, dependency or admission.

Treat these as different observations: source exists, build passed, Release was
registered, Snapshot selected it, consumer pinned it, installation was observed,
artifact was deployed, and a reviewer accepted the rendered UI. Each claim needs
its own evidence. File existence must not become "published" or turn a "done when"
criterion into a verification result. A missing URL/owner/relationship input means
not observed here, not proof that the corresponding thing does not exist.

No private payload becomes publishable because it carries a lock badge. Never
copy private protocol memos, client data, credentials, machine paths or raw owner
logs into examples. Use approved public records, or explicitly synthetic test
fixtures. Preserve pending/unknown rights; a public locator is not a licence.

For Library consumers, the integration path is an exact reviewed source Release,
a successor selected Snapshot, explicit consumer re-pin and generated asset copy.
The generic reuse examples in README are not an override of that consumer policy.
Never rewrite accepted Release/Snapshot history to make a new version look selected.

## Verification and bounded delivery

Run the relevant focused tests first, then the existing full test/build checks in
an isolated source checkout:

```sh
node --test tests/template-observation-states.test.mjs
node --test
```

Keep builds and servers within the existing 2 GB constraint. Inspect the builder's
write set before generating a site. Do not start a provider session, new worker,
scheduler, deployment or fleet operation as a side effect of reading this guide.

Text/markup tests are not a visual pass. Require an exact source revision and
rendered before/after evidence for representative root, Work, framework/project,
industry, question and document views. Check 2000×1250 desktop, narrow mobile,
keyboard/focus, 200% text, reduced motion, no JavaScript and denied storage.
Exercise click/`[` collapse, persistence, Cmd/Ctrl+K, Escape/focus restoration,
deep links, one navigation/main landmark, skip link and preserved anchors.
Horizontal scrolling belongs inside large diagrams/tables, not the whole page.

Before parallel implementation, follow the Library's canonical-main reservation
Event rule with non-overlapping paths. Give any authorized lane one owner,
outcome, verification and STOP; preserve the existing source owners. A review
branch alone is not a canonical reservation or a replacement owner appointment.

Deliver changed paths, source commit, executed checks, open content/data gaps and
actual screenshots where available. Keep source, full-build, rendered acceptance
and deployment receipts separate. Stop on unresolved ownership, conflicting local
work, unavailable donor evidence, privacy/rights uncertainty or failed acceptance.
Do not merge or deploy merely because the template files exist.
