# U11 · Private Work stub (client + personal)

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U11/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/58

## Reasoning

- **why** · His 16:36: 'even client stock will have the listing of the repos even if they private'. The stub is how a private thing is visible without leaking.
- **readers** · Human: what it is and why it exists. Agent: that it exists, who owns it, how to get access.
- **questions** · Why does this exist? · Who owns it, who is it for? · How do I get access? · When did it last move?
- **claim ceiling** · Purpose, owner, relationship, dated activity; nothing from inside the repo.
- **data** · catalog repositories[] visibility, repos.json, owners.log dates.
- **links out** · U14 person, U15 client account, U4
- **links in** · U2, U4, U15
- **privacy** · Private by construction.
- **empty state** · —
- **agent entry** · registry record with visibility=private

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | name |
| subtitle | private · client/personal |
| paragraph | public-safe purpose |
| mind_map | — |
| repos | listed, locked |
| research | — |
| docs | — |
| progress | — |
| agents | owner |
| timeline | dated activity |
| docs_over_time | — |
| own_nav | purpose · access · activity |

## Sections, in order

1. public-safe purpose
2. owner + relationship
3. why it exists
4. how access works
5. the repo listed, marked private
6. dated activity

- **lives at** · /works/<slug>/ rendered from the stub schema; no payload
- **instances** · one per private repo / satellite · 4 private repos in catalog (27 total) + siso-source + oracle-source/sessions + halocrm-mirror + bykonz-scout-review + actionmodel-private
- **renders** · catalog repositories[] lifecycle_status + visibility; repos.json per front door; his 16:36: 'even client stock will have the listing of the repos even if they private'
- **theme** · clients = tasks amber; personal = reflect violet · rail: U0
- **needs** · U3

## Done when

Open /works/halo-crm/ logged out and see the purpose, the owner, 'private mirror' and a dated activity line, and no code, roster or payload

## Rob

- AM · system-map nav chips RESEARCH_ONLY as the 'private' chip · atlas/receipts/am-system-map-root.png
- 21st.dev · [popover](https://21st.dev/@efferd/components/popover) — his note: "profile selector popover, pop it in a profile thing / settings. We need one of that for the operator"
- 21st.dev · [edit-profile-dialog](https://21st.dev/@originui/components/dialog/edit-profile-dialog) — his note: "nice profile card out of the box. Edit profile dialog's a nice card out of the box"
- 21st.dev · [project-detail-view](https://21st.dev/@kavikatiyar/components/project-detail-view) — his note: "kind of nice, kind of simple, could be used somewhere in the operators thing. (Server management one was a bit shitty)"

## Compose

```sh
bin/compose U11 templates/U11/example.json --out /tmp/U11.html
```
