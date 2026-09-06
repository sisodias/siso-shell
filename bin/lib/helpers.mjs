/* bin/lib/helpers.mjs — template helpers: {{icon name}}, {{map data}}, {{timeline data}}, {{json data}}, {{n value}}. */
import { icon } from '../../shell/icons.mjs';
import { esc } from './engine.mjs';

const num = (v) => typeof v === 'number' ? v.toLocaleString('en-GB') : esc(v);

/** Typed relationship map — a real graph, laid out by a tidy-tree algorithm, not a ring of nodes at one radius.
 *
 * Source: the SISO design system hub, `SISO_Knowledge/design-system/library/21st-dev/airbnb-linktypes`
 * (and its sibling `airbnb-dendrogram`) — the installed visx tree components, ours. See parts/SOURCES.md.
 * Those render `Tree` from `@visx/hierarchy`, which is d3's Reingold-Tilford tidy tree, with
 * `LinkHorizontalCurve` branches. A static page ships no React and no visx, so the same layout is computed
 * here at build time and emitted as plain SVG. Three rules are taken from that source verbatim:
 *   1. `separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / 0.5}` — siblings sit at twice the gap of
 *      cousins, so a subtree reads as one block (linktypes.tsx:321).
 *   2. a node's SHAPE says whether it has children: parents solid with a small radius, leaves dashed with a
 *      pill radius (linktypes.tsx:222-231, `strokeDasharray={isParentInData ? '0' : '2,2'}`).
 *   3. links are curves from parent edge to child edge, not straight spokes.
 * The v1 map put every node on one circle at a fixed radius (a star), which is what collided and what
 * "maps all this stuff a bit shoddy" named.
 *
 * data: {centre:{label,href}, types:[{type,label,tone,items:[{label,href,rel,private}]}]}
 * Returns SVG with no script and no dependency.
 */
const MAP_CHAR = 6.35;                 // measured advance of --crm-font-mono at 11px (the leaf label size)
const MAP_BOX_H = 26;                  // leaf box height
const MAP_V_GAP = 10;                  // vertical gap between siblings
const MAP_H_GAP = 62;                  // horizontal gap between depths
const MAP_PAD = 22;

const mapWidth = (label, depth) => {
  const chars = Math.min(String(label).length, depth === 1 ? 26 : 30);
  return Math.round(chars * MAP_CHAR) + (depth === 1 ? 26 : 22);
};
const mapClip = (label, depth) => {
  const max = depth === 1 ? 26 : 30;
  const s = String(label);
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
};

/* Reingold-Tilford, one side. Nodes carry {h} (their own height); the walk assigns y, and x comes from depth. */
function mapLayout(branches, side) {
  let cursor = 0;
  const rows = [];
  for (const b of branches) {
    const leaves = (b.items || []);
    const kids = [];
    const top = cursor;
    for (const leaf of leaves) {
      kids.push({ ...leaf, y: cursor + MAP_BOX_H / 2, depth: 2, side, tone: b.tone });
      cursor += MAP_BOX_H + MAP_V_GAP;
    }
    /* second walk: a parent sits at the midpoint of the block its children occupy — the tidy-tree rule. */
    const y = kids.length ? (top + cursor - MAP_V_GAP + MAP_BOX_H) / 2 - MAP_BOX_H / 2 : cursor + MAP_BOX_H / 2;
    if (!kids.length) cursor += MAP_BOX_H + MAP_V_GAP;
    rows.push({ branch: b, y, kids, side });
    /* visx separation: siblings 1, cousins 0.5/0.5 = 2 — so the gap between two subtrees is twice a sibling gap */
    cursor += MAP_V_GAP;
  }
  return { rows, height: Math.max(cursor - 18 - MAP_V_GAP, 0) };
}

export function mapSvg(data) {
  if (!data || !Array.isArray(data.types) || !data.types.length) return '';
  const types = data.types.filter((t) => (t.items || []).length || t.label);
  /* Split branches between the two sides, heaviest first, so the two columns end up near the same height
   * (Mind Elixir's `direction` on each first-level child, chosen for us instead of hand-set). */
  const sorted = [...types].map((t, i) => ({ t, i, n: (t.items || []).length }));
  const left = [], right = [];
  let lw = 0, rw = 0;
  for (const s of sorted.sort((a, b) => b.n - a.n || a.i - b.i)) {
    if (rw <= lw) { right.push(s); rw += s.n + 1; } else { left.push(s); lw += s.n + 1; }
  }
  const ord = (arr) => arr.sort((a, b) => a.i - b.i).map((s) => s.t);
  const L = mapLayout(ord(left), -1), R = mapLayout(ord(right), 1);

  const branchW = Math.max(...types.map((t) => mapWidth(t.label, 1)), 90);
  const leafW = Math.max(...types.flatMap((t) => (t.items || []).map((it) => mapWidth(it.label, 2))), 110);
  const rootW = mapWidth(data.centre?.label || 'map', 1) + 16;
  const half = rootW / 2 + MAP_H_GAP + branchW + MAP_H_GAP + leafW;
  const W = Math.round(half * 2 + MAP_PAD * 2);
  const H = Math.round(Math.max(L.height, R.height, 80) + MAP_PAD * 2);
  const cx = W / 2;
  const cy = H / 2;

  const sideX = (side, depth) => side < 0
    ? (depth === 1 ? cx - rootW / 2 - MAP_H_GAP - branchW : cx - rootW / 2 - MAP_H_GAP - branchW - MAP_H_GAP - leafW)
    : (depth === 1 ? cx + rootW / 2 + MAP_H_GAP : cx + rootW / 2 + MAP_H_GAP + branchW + MAP_H_GAP);

  /* A link is a cubic whose control points sit halfway across the gap — the Mind Elixir branch curve. */
  const link = (x1, y1, x2, y2, tone, wide) => {
    const mx = (x1 + x2) / 2;
    return `<path class="edge tone-${esc(tone || 'muted')}${wide ? ' edge--trunk' : ''}" d="M${x1.toFixed(1)} ${y1.toFixed(1)}C${mx.toFixed(1)} ${y1.toFixed(1)} ${mx.toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
  };

  let edges = '', nodes = '';
  for (const { rows, } of [L, R]) {
    for (const row of rows) {
      const side = row.side;
      const offset = (side < 0 ? L : R).height;
      const top = cy - offset / 2;
      const by = top + row.y + MAP_BOX_H / 2;
      const bx = sideX(side, 1);
      const bAnchor = side < 0 ? bx + branchW : bx;          // the edge of the branch box facing the root
      const bOuter = side < 0 ? bx : bx + branchW;
      edges += link(cx + (side < 0 ? -rootW / 2 : rootW / 2), cy, bAnchor, by, row.branch.tone, true);
      const count = (row.branch.items || []).length;
      nodes += `<g class="node node--branch tone-${esc(row.branch.tone || 'muted')}"><rect x="${bx.toFixed(1)}" y="${(by - MAP_BOX_H / 2).toFixed(1)}" width="${branchW}" height="${MAP_BOX_H}" rx="7"/><text x="${(bx + branchW / 2).toFixed(1)}" y="${by.toFixed(1)}" text-anchor="middle" dominant-baseline="central">${esc(mapClip(row.branch.label, 1))}${count ? ` <tspan class="count">${count}</tspan>` : ''}</text></g>`;
      for (const kid of row.kids) {
        const ky = top + kid.y;
        const kx = sideX(side, 2);
        const kAnchor = side < 0 ? kx + leafW : kx;
        edges += link(bOuter, by, kAnchor, ky, row.branch.tone, false);
        const label = esc(mapClip(kid.label, 2)) + (kid.private ? ' 🔒' : '');
        const isLeaf = !kid.href;   // visx rule 2: a node with somewhere to go is drawn as a parent (solid, small radius); a dead end is dashed and pill-shaped
        const inner = `<g class="node node--leaf${isLeaf ? ' node--dead' : ''} tone-${esc(row.branch.tone || 'muted')}"><rect x="${kx.toFixed(1)}" y="${(ky - MAP_BOX_H / 2).toFixed(1)}" width="${leafW}" height="${MAP_BOX_H}" rx="${isLeaf ? 13 : 6}"/><text x="${(kx + (side < 0 ? leafW - 11 : 11)).toFixed(1)}" y="${ky.toFixed(1)}" text-anchor="${side < 0 ? 'end' : 'start'}" dominant-baseline="central">${label}</text>${kid.rel ? `<title>${esc(kid.label)} — ${esc(kid.rel)}</title>` : `<title>${esc(kid.label)}</title>`}</g>`;
        nodes += kid.href ? `<a href="${esc(kid.href)}">${inner}</a>` : inner;
      }
    }
  }
  const c = data.centre || {};
  const rootLabel = esc(mapClip(c.label || 'map', 1));
  const rootG = `<g class="node node--root"><rect x="${(cx - rootW / 2).toFixed(1)}" y="${(cy - 17).toFixed(1)}" width="${rootW.toFixed(1)}" height="34" rx="10"/><text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central">${rootLabel}</text></g>`;
  const total = types.reduce((n, t) => n + (t.items || []).length, 0);
  return `<svg class="map__svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Relationship map: ${esc(c.label || '')}, ${types.length} branches, ${total} linked records"><title>${esc(c.label || 'map')}</title><g class="map__edges">${edges}</g>${nodes}${c.href ? `<a href="${esc(c.href)}">${rootG}</a>` : rootG}</svg>`;
}

/** One-axis timeline with lanes and day ticks. events: [{at (ISO or 'YYYY-MM-DD HH:MM'), lane, label, href, auto}] */
export function timelineSvg(data) {
  if (!data || !Array.isArray(data.events) || !data.events.length) return '';
  const parse = (s) => { const d = new Date(String(s).replace(' ', 'T')); return isNaN(d) ? null : d; };
  const evs = data.events.map((e) => ({ ...e, t: parse(e.at) })).filter((e) => e.t);
  if (!evs.length) return '';
  const lanes = data.lanes && data.lanes.length ? data.lanes : [...new Set(evs.map((e) => e.lane))].map((id) => ({ id, label: id, tone: 'muted' }));
  const t0 = data.from ? parse(data.from) : new Date(Math.min(...evs.map((e) => +e.t)));
  const t1 = data.to ? parse(data.to) : new Date(Math.max(...evs.map((e) => +e.t)));
  const span = Math.max(+t1 - +t0, 3600e3);
  const padL = 96, padR = 24, padT = 26, rowH = 34, W = 960, H = padT + lanes.length * rowH + 30;
  const x = (t) => padL + ((+t - +t0) / span) * (W - padL - padR);
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Timeline, ${evs.length} events across ${lanes.length} lanes">`;
  // day ticks
  // day ticks at local midnight, labelled with the local date (events are local wall-clock strings)
  const pad2 = (n) => String(n).padStart(2, '0');
  const day = new Date(t0); day.setHours(0, 0, 0, 0);
  for (let d = new Date(day); d <= t1; d.setDate(d.getDate() + 1)) {
    const label = `${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    const xx = d < t0 ? padL : x(d);
    out += `<line class="grid" x1="${xx.toFixed(1)}" y1="${padT - 6}" x2="${xx.toFixed(1)}" y2="${H - 26}"/><text class="day" x="${(xx + 4).toFixed(1)}" y="${H - 10}">${label}</text>`;
  }
  lanes.forEach((lane, i) => {
    const y = padT + i * rowH + rowH / 2;
    out += `<g class="tone-${esc(lane.tone || 'muted')}"><text class="lane-label" x="8" y="${y}" dominant-baseline="middle">${esc(lane.label)}</text><line class="grid" x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}"/>`;
    for (const e of evs.filter((e) => e.lane === lane.id)) {
      const xx = x(e.t);
      const dot = `<circle class="ev${e.auto ? ' ev--auto' : ''}" cx="${xx.toFixed(1)}" cy="${y}" r="${e.auto ? 3 : 4.5}"><title>${esc(e.at)} · ${esc(e.label)}</title></circle>`;
      out += e.href ? `<a href="${esc(e.href)}">${dot}</a>` : dot;
    }
    out += '</g>';
  });
  out += '</svg>';
  return out;
}

export const helpers = {
  icon: (v) => icon(String(v)),
  map: (v) => mapSvg(v),
  timeline: (v) => timelineSvg(v),
  json: (v) => esc(JSON.stringify(v, null, 2)),
  n: (v) => num(v),
  lower: (v) => esc(String(v ?? '').toLowerCase()),
  count: (v) => Array.isArray(v) ? String(v.length) : (v && typeof v === 'object' ? String(Object.keys(v).length) : '0'),
};
