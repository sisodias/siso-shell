/* bin/lib/compose.mjs — compose(family, data, opts) → page HTML.
 * A family is templates/<id>/template.html (the body, composed from parts/). The page frame is templates/_layout.html:
 * shell rail (from opts.nav or data.nav), topbar breadcrumb, the body, and "On this page" built from the body's
 * <section class="siso-section" id="…"><…><h2>Title</h2>. No framework, no build step beyond node. */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { makeEngine, esc } from './engine.mjs';
import { helpers } from './helpers.mjs';
import { rail, head as shellHead } from '../../shell.mjs';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const engine = makeEngine({ partsDir: join(ROOT, 'parts'), helpers });

export function readJSON(p) { return JSON.parse(readFileSync(p, 'utf8')); }

/** 'U4' → templates/U4/template.html · 'U23/detail' → templates/U23/detail.html */
export function templateFile(family) {
  const [id, variant = 'template'] = family.split('/');
  let f = join(ROOT, 'templates', id, `${variant}.html`);
  if (!existsSync(f) && variant === 'template' && existsSync(join(ROOT, 'templates', `${id}.html`))) f = join(ROOT, 'templates', `${id}.html`); // page-level: templates/how.html, templates/404.html
  if (!existsSync(f)) throw new Error(`No template for family ${family} (${f})`);
  return { id, variant, file: f, dir: join(ROOT, 'templates', id) };
}
export function familyDir(id) { return templateFile(id).dir; }

/** Find sections in rendered body HTML → [{label, href}] for the rail's "On this page" group. */
export function sectionsOf(html) {
  const out = [];
  const re = /<section[^>]*class="[^"]*\bsiso-section\b[^"]*"[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/g;
  let m;
  while ((m = re.exec(html))) out.push({ label: m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), href: `#${m[1]}` });
  return out;
}

export function renderPart(name, data) { return engine.render(engine.partial(name), data); }

/**
 * @param {string} family  e.g. 'U4'
 * @param {object} data    the family's JSON (schema.json describes it)
 * @param {object} opts    { nav: {title, home, mark, groups, utilities, operator}, current, base: URL prefix for shell/ and parts/, stream }
 */
export function compose(family, data, opts = {}) {
  const { id, file } = templateFile(family);
  const template = readFileSync(file, 'utf8');
  const body = engine.render(template, data);
  const nav = opts.nav || data.nav;
  if (!nav) throw new Error('compose needs opts.nav (rail groups)');
  const base = (opts.base ?? '').replace(/\/$/, '');
  const page = sectionsOf(body);
  const railHtml = rail({ ...nav, current: opts.current ?? data.current ?? '', page });
  const layout = readFileSync(join(ROOT, 'templates', '_layout.html'), 'utf8');
  const meta = data.meta || {};
  const ctx = {
    title: meta.title || data.title || family,
    description: meta.description || '',
    stream: opts.stream || meta.stream || data.stream || 'projects',
    family: id,
    base,
    head: shellHead(`${base}/shell`) + `<link rel="stylesheet" href="${esc(base)}/parts/parts.css"><script src="${esc(base)}/parts/catalogue.js" defer></script>`,
    rail: railHtml,
    crumb: meta.crumb || [],
    actions: meta.actions || [],
    body,
    generated: opts.generated || new Date().toISOString(),
    source: meta.source || '',
  };
  return engine.render(layout, ctx);
}

export { engine, esc };
