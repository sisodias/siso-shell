import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { makeEngine } from '../bin/lib/engine.mjs';

// Isolate the two text contracts. Unrelated partials and SVG geometry are
// stubbed: this suite is not a browser, layout, or full-composition test.
const projectSource = readFileSync(new URL('../templates/U4/template.html', import.meta.url), 'utf8');
const mapSource = readFileSync(new URL('../parts/map.html', import.meta.url), 'utf8');
const partsDir = mkdtempSync(join(tmpdir(), 'siso-observation-contract-'));
for (const name of new Set([...projectSource.matchAll(/\{\{>\s+([\w-]+)/g)].map(match => match[1]))) {
  writeFileSync(join(partsDir, `${name}.html`), '');
}
after(() => rmSync(partsDir, { recursive: true, force: true }));
const engine = makeEngine({ partsDir, helpers: { map: () => '<svg data-test-map="stub"></svg>' } });
const absent = [['missing', undefined], ['null', null], ['empty array', []]];

for (const [label, value] of absent) {
  test(`Project: ${label} URLs mean unknown deployment, not no deployment`, () => {
    const html = engine.render(projectSource, { urls: value });
    assert.match(html, /No deployment observations are supplied for this view\./);
    assert.doesNotMatch(html, /No live page yet|node scripts\/publish\.mjs/);
  });
  test(`Project: ${label} seats mean missing observations, not no owner`, () => {
    const html = engine.render(projectSource, { seats: value });
    assert.match(html, /No owner observations are supplied for this view\./);
    assert.doesNotMatch(html, /Unowned:|no seat has ever run|class="empty no"/);
    assert.match(html, /check the project's existing handoff\./);
  });
  test(`Map: ${label} types do not prove relationships are absent`, () => {
    const html = engine.render(mapSource, { types: value });
    assert.match(html, /No relationship data is supplied for this view\./);
    assert.doesNotMatch(html, /Nothing linked yet|no repos, Works, questions or people/);
  });
}

test('Map: a mixture of linked and unlinked items has a qualified legend', () => {
  const html = engine.render(mapSource, {
    centre: { label: 'Synthetic fixture' },
    types: [{ label: 'Related records', tone: 'research', items: [
      { label: 'Linked fixture', href: 'https://example.com/record' },
      { label: 'Unlinked fixture' },
    ] }],
  });
  assert.match(html, /Nodes with a supplied link open their record\./);
  assert.match(html, /not an ownership or dependency claim\./);
  assert.doesNotMatch(html, /Each leaf links to its record/);
  assert.match(html, /<span class="n">2<\/span>/);
});

test('Project: supplied observations still render with dates and escaping', () => {
  const html = engine.render(projectSource, {
    urls: [{ url: 'https://example.com/', what: 'Synthetic <fixture>', code: 200, checked: '2026-09-07', tone: 'muted' }],
    seats: [{ name: 'Synthetic <owner>', state: 'recorded', last: { at: '2026-09-07', what: 'Synthetic observation' } }],
  });
  assert.match(html, /https:\/\/example\.com\//);
  assert.match(html, /Synthetic &lt;fixture&gt;/);
  assert.match(html, /Synthetic &lt;owner&gt;/);
  assert.match(html, /2026-09-07/);
  assert.doesNotMatch(html, /No deployment observations|No owner observations/);
});

test('Map: supplied type labels retain HTML escaping', () => {
  const html = engine.render(mapSource, {
    types: [{ label: '<unsafe-label>', tone: 'muted', items: [{ label: 'Synthetic record' }] }],
  });
  assert.match(html, /&lt;unsafe-label&gt;/);
  assert.doesNotMatch(html, /<unsafe-label>/);
});

test('Map: text alternative preserves a long full label and relationship meaning', () => {
  const label = 'A complete source record label that is longer than the SVG clipping threshold';
  const rel = 'Supplies evidence; does not own or contain the receiving Work.';
  const html = engine.render(mapSource, { types: [{ label: 'Evidence sources', type: 'related_to', items: [{ label, rel }] }] });
  assert.ok(html.includes(label)); assert.ok(html.includes(rel));
  assert.match(html, /<details class="map__records"/);
  assert.match(html, /<summary>Read the relationship records<\/summary>/);
  assert.match(html, /Source group: <code>related_to<\/code>/);
});

test('Map: absent relationship explanations stay explicitly unknown', () => {
  const html = engine.render(mapSource, { types: [{ label: 'Sources', items: [{ label: 'Record without description' }] }] });
  assert.match(html, /No relationship description supplied\./);
});

test('Map: private metadata does not imply access to a payload', () => {
  const html = engine.render(mapSource, { types: [{ label: 'Sources', items: [{ label: 'Public-safe stub', private: true }] }] });
  assert.match(html, /Private record; no payload provided\./);
});

test('Map: relationship descriptions are escaped rather than inserted as HTML', () => {
  const html = engine.render(mapSource, { types: [{ label: 'Sources', items: [{ label: '<record>', rel: '<script>unsafe()</script>' }] }] });
  assert.match(html, /&lt;record&gt;/);
  assert.match(html, /&lt;script&gt;unsafe\(\)&lt;\/script&gt;/);
  assert.doesNotMatch(html, /<script>/);
});

test('Map: an empty supplied group is not a claim that its records do not exist', () => {
  const html = engine.render(mapSource, { types: [{ label: 'Unobserved group', items: [] }] });
  assert.match(html, /No record observations are supplied in this group\./);
});
