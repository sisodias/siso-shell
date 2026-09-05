import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rail } from './shell.mjs';
test('escapes content and rejects executable and protocol-relative links', () => {
  assert.match(rail({ title: '<script>', links: [{ label: 'A&B', href: '/agents/', active: true }] }), /&lt;script&gt;/);
  for (const href of ['javascript:alert(1)', '//evil.test', '/\\evil.test', 'https://good.test\n']) assert.throws(() => rail({ title: 'Test', links: [{ label: 'x', href }] }));
});
