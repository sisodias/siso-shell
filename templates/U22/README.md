# U22 · Estate / node page

> Spec row copied from `00_AGENT_ZERO/plan/templates.json` (6 Sep 2026 18:36). Template: `template.html`; JSON: `schema.json`; real data: `example.json`. Detail page: https://siso-shell.pages.dev/t/U22/ · issue: https://github.com/sisodias/siso-agent-zero-protocol/issues/63

## Reasoning

- **why** · 'What runs on laptop, Mini and client VPS' is GQ-017 and the placement rule has no enforcement; a node page makes 'where' visible.
- **readers** · Human: is the Mini up, what is on it. Agent: where to be born.
- **questions** · Is it reachable, by which route? · What runs there? · What is the budget left?
- **claim ceiling** · Probe-dated facts only.
- **data** · ESTATE.md, mini-probe, herdr.
- **links out** · U17, U10
- **links in** · U9, U1
- **privacy** · Public-safe; no IPs.
- **empty state** · —
- **agent entry** · ESTATE.md

## Content contract (his twelve, 18:19)

| slot | this family |
|---|---|
| title | node |
| subtitle | role |
| paragraph | — |
| mind_map | — |
| repos | — |
| research | — |
| docs | — |
| progress | probe |
| agents | seats here |
| timeline | probes |
| docs_over_time | — |
| own_nav | what · reach · seats · budget |

## Sections, in order

1. node: what runs there
2. reachability probe, dated
3. seats on it now
4. disk / swap / budgets
5. placement rule

- **lives at** · /estate/ on the Agent Zero page and the Library /estate/
- **instances** · one per node · 3 (laptop, Mac Mini, client VPS) + Cloudflare/Tailscale/WARP routes
- **renders** · ESTATE.md, estate/SWEEP-*.md, briefs/MINI-SYNC.md, ledger mini-probe, herdr roster, rate_limits
- **theme** · health green / danger rose · rail: U0
- **needs** · —

## Done when

Open /estate/mini/ and see the last probe time, the seats on it, and the reachability route with its date

## Rob

- AM · blueprint stat strip · atlas/receipts/am-blueprint.png


## Compose

```sh
bin/compose U22 templates/U22/example.json --out /tmp/U22.html
```
