/* siso-shell — the SISO CRM GroupedRail as a static shell.
 * rail(opts) returns the <nav class="siso-sidebar"> markup; behaviour is shell/rail.js; sizes are shell/rail.css + shell/tokens.css.
 * Markup mirrors SISOCRM product-app src/components/GroupedRail.tsx (sha256 a5f0ae6a…8936e): header (brand · identity · toggle),
 * search row, body (labelled groups, and the same destinations as a compact icon strip), global row, operator dock.
 * Groups are headings, never <details>: clicking a heading does nothing. Only the per-page "On this page" group folds. */
import { icon } from './shell/icons.mjs';

const esc = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
export function safeHref(value) {
  if (typeof value !== 'string' || !/^(?:\.{0,2}\/(?!\/)|#|https?:\/\/)/.test(value) || /[\x00-\x20\\]/.test(value)) throw new Error(`Unsafe shell link: ${value}`);
  return esc(value);
}
const isExternal = (href) => /^https?:\/\//i.test(href);

function status(dest) {
  if (dest.private) return `<span class="siso-sidebar__link-status" title="private">${icon('lock')}</span>`;
  if (dest.status) return `<span class="siso-sidebar__link-status">${esc(dest.status)}</span>`;
  return '';
}

function navLink(dest, active) {
  const href = safeHref(dest.href);
  const ext = isExternal(dest.href);
  return `<a class="siso-sidebar__nav-link${active ? ' is-active' : ''}" href="${href}" data-label="${esc(dest.label).toLowerCase()}"${active ? ' aria-current="page"' : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${icon(dest.icon || 'circle-dot')}<span>${esc(dest.label)}</span>${status(dest)}</a>`;
}
function compactLink(dest, active) {
  const href = safeHref(dest.href);
  const ext = isExternal(dest.href);
  return `<a class="siso-sidebar__compact-link${active ? ' is-active' : ''}" href="${href}" aria-label="${esc(dest.label)}" title="${esc(dest.label)}"${active ? ' aria-current="page"' : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${icon(dest.icon || 'circle-dot')}</a>`;
}

/**
 * @param {object} o
 * @param {string} o.title        product name in the identity block (CRM: "SISO CRM")
 * @param {string} [o.home]       brand link
 * @param {string} [o.mark]       one or two letters in the brand tile (no image in a static shell)
 * @param {Array<{id:string,label:string,destinations:Array<{id?:string,label:string,href:string,icon?:string,private?:boolean,status?:string,match?:string}>}>} o.groups
 * @param {string} [o.current]    href of the current page (marks is-active)
 * @param {Array<{label:string,href:string}>} [o.page]  "On this page" anchors; rendered as the one folding group
 * @param {Array<{label:string,href:string,icon?:string}>} [o.utilities]  CRM global row (Needs you · New deal); default none
 * @param {{name:string,status?:string,href?:string}} [o.operator]  operator dock; default none
 * @param {boolean} [o.collapsed] initial state before JS reads the preference
 */
export function rail(o) {
  if (!o || !Array.isArray(o.groups) || !o.groups.length) throw new Error('rail needs groups');
  const current = o.current || '';
  const isActive = (d) => !!current && (d.href === current || (d.match && new RegExp(d.match).test(current)));
  const groups = o.groups.map((g) => `<section class="siso-sidebar__nav-group" id="siso-nav-section-${esc(g.id)}" aria-labelledby="siso-nav-group-${esc(g.id)}" data-group-label="${esc(g.label).toLowerCase()}"><h2 class="siso-sidebar__group-heading" id="siso-nav-group-${esc(g.id)}">${esc(g.label)}</h2><div class="siso-sidebar__nav-items">${g.destinations.map((d) => navLink(d, isActive(d))).join('')}</div></section>`).join('');
  const pageGroup = o.page && o.page.length ? `<details class="siso-sidebar__nav-group siso-sidebar__page-group" id="siso-nav-section-page" data-group-label="on this page" open><summary class="siso-sidebar__group-heading">On this page</summary><div class="siso-sidebar__nav-items">${o.page.map((a) => `<a class="siso-sidebar__nav-link" href="${safeHref(a.href)}" data-label="${esc(a.label).toLowerCase()}">${icon('hash')}<span>${esc(a.label)}</span></a>`).join('')}</div></details>` : '';
  const all = o.groups.flatMap((g) => g.destinations);
  const compact = all.map((d) => compactLink(d, isActive(d))).join('');
  const utilities = o.utilities && o.utilities.length ? `<div class="siso-sidebar__global-row" aria-label="Global actions" data-verify-global-utilities="${o.utilities.length}">${o.utilities.map((u) => `<a class="siso-sidebar__utility-link" href="${safeHref(u.href)}" aria-label="${esc(u.label)}" title="${esc(u.label)}">${icon(u.icon || 'bell')}</a>`).join('')}</div>` : '';
  const operator = o.operator ? `<div class="siso-sidebar__operator"><div class="siso-sidebar__profile" data-verify-profile-state="static"><a class="siso-sidebar__profile-orb" href="${safeHref(o.operator.href || '#')}" aria-label="Operator"><span class="siso-sidebar__brand-mark">${esc((o.operator.name || 'S').slice(0, 2))}</span></a><div class="siso-sidebar__profile-copy"><span class="siso-sidebar__profile-label">${esc(o.operator.name)}</span><span class="siso-sidebar__profile-status">${esc(o.operator.status || 'Live')}</span></div></div></div>` : '';
  const collapsed = !!o.collapsed;
  return `<nav class="siso-sidebar ${collapsed ? 'is-collapsed' : 'is-expanded'}" aria-label="Global navigation" data-siso-rail data-verify-unit="GroupedRail" data-verify-direction="B" data-verify-material="champagne-glass-v2" data-verify-expanded-width="232" data-verify-collapsed-width="52" data-verify-utility-width="44" data-verify-nav-groups="${o.groups.length}" data-verify-compact-destinations="${all.length}" data-verify-collapsed="${collapsed}">
  <div class="siso-sidebar__bloom" aria-hidden="true"></div>
  <div class="siso-sidebar__noise" aria-hidden="true"></div>
  <header class="siso-sidebar__header">
    <a class="siso-sidebar__brand" href="${safeHref(o.home || '/')}" aria-label="${esc(o.title)} home"><span class="siso-sidebar__brand-mark">${esc(o.mark || 'S')}</span></a>
    <div class="siso-sidebar__identity"><span class="siso-sidebar__product-name">${esc(o.title)}</span></div>
    <button type="button" class="siso-sidebar__toggle" aria-label="${collapsed ? 'Expand rail' : 'Collapse rail'}" title="${collapsed ? 'Expand navigation' : 'Collapse navigation'} ([)" aria-expanded="${!collapsed}">${icon('panel-left-close', 'siso-sidebar__toggle-close')}${icon('panel-left-open', 'siso-sidebar__toggle-open')}</button>
  </header>
  <label class="siso-sidebar__search" title="Jump to anything (⌘K)" data-shell-search="rail-trigger">${icon('search', 'siso-sidebar__search-icon')}<input class="siso-sidebar__search-input" type="search" placeholder="Search…" aria-label="Search destinations" autocomplete="off" spellcheck="false"><kbd class="siso-sidebar__search-shortcut">⌘K</kbd></label>
  <div class="siso-sidebar__body">
    <div class="siso-sidebar__navigation" data-verify-nav-groups="${o.groups.length}">${groups}${pageGroup}<div class="siso-sidebar__empty" hidden>No destinations match.</div></div>
    <div class="siso-sidebar__compact-navigation" aria-label="Page navigation" data-verify-compact-destinations="${all.length}" hidden>${compact}</div>
  </div>
  ${utilities}
  ${operator}
</nav>`;
}

/** The <head> lines a consumer includes once. `base` is the URL prefix where shell/ is served. */
export function head(base = '/shell') {
  const b = base.replace(/\/$/, '');
  return `<link rel="stylesheet" href="${esc(b)}/tokens.css"><link rel="stylesheet" href="${esc(b)}/rail.css"><script src="${esc(b)}/rail.js" defer></script>`;
}
export { esc, icon };
