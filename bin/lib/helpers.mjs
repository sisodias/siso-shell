/* bin/lib/helpers.mjs — template helpers: {{icon name}}, {{map data}}, {{timeline data}}, {{json data}}, {{n value}}. */
import { icon } from '../../shell/icons.mjs';
import { esc } from './engine.mjs';

const num = (v) => typeof v === 'number' ? v.toLocaleString('en-GB') : esc(v);

/** Typed relationship map: centre node, one ring segment per type, nodes on the ring. Pure SVG, no library. */
export function mapSvg(data) {
  if (!data || !Array.isArray(data.types) || !data.types.length) return '';
  const W = 720, H = 460, cx = W / 2, cy = H / 2, R = 165;
  const nodes = data.types.flatMap((t) => (t.items || []).map((it) => ({ ...it, type: t })));
  const n = Math.max(nodes.length, 1);
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Relationship map: ${esc(data.centre?.label || '')} and ${n} linked records">`;
  out += `<title>${esc(data.centre?.label || 'map')}</title>`;
  // type arcs (labels) around the ring
  let idx = 0;
  const seg = (2 * Math.PI) / n;
  const start = -Math.PI / 2;
  for (const t of data.types) {
    const count = (t.items || []).length; if (!count) continue;
    const a0 = start + seg * idx, a1 = start + seg * (idx + count);
    const mid = (a0 + a1) / 2; const lr = R + 44;
    const lx = cx + Math.cos(mid) * lr, ly = cy + Math.sin(mid) * lr;
    out += `<g class="tone-${esc(t.tone || 'muted')}"><text class="type-label" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle">${esc(t.label)}</text></g>`;
    idx += count;
  }
  idx = 0;
  for (const node of nodes) {
    const a = start + seg * idx + seg / 2;
    const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
    const tone = node.type.tone || 'muted';
    out += `<line class="edge edge--typed tone-${esc(tone)}" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`;
    const label = String(node.label).length > 22 ? String(node.label).slice(0, 21) + '…' : String(node.label);
    const right = Math.cos(a) >= -0.05;
    const tx = x + (right ? 11 : -11), anchor = right ? 'start' : 'end';
    const g = `<g class="node tone-${esc(tone)}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6"/><text x="${tx.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle">${esc(label)}${node.private ? ' 🔒' : ''}</text></g>`;
    out += node.href ? `<a href="${esc(node.href)}">${g}</a>` : g;
    idx++;
  }
  const c = data.centre || {};
  const cg = `<g class="centre"><circle cx="${cx}" cy="${cy}" r="46"/><text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle">${esc(String(c.label || '').slice(0, 14))}</text></g>`;
  out += c.href ? `<a href="${esc(c.href)}">${cg}</a>` : cg;
  out += '</svg>';
  return out;
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
  const day = new Date(t0); day.setHours(0, 0, 0, 0);
  for (let d = new Date(day); d <= t1; d.setDate(d.getDate() + 1)) {
    if (d < t0) continue;
    const xx = x(d);
    out += `<line class="grid" x1="${xx.toFixed(1)}" y1="${padT - 6}" x2="${xx.toFixed(1)}" y2="${H - 26}"/><text class="day" x="${(xx + 4).toFixed(1)}" y="${H - 10}">${d.toISOString().slice(5, 10)}</text>`;
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
