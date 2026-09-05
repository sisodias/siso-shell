const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
function safeHref(value) {
  if (typeof value !== 'string' || !/^(?:\/(?!\/)|#|https?:\/\/)/.test(value) || /[\u0000-\u0020\\]/.test(value)) throw new Error('Unsafe shell link');
  return esc(value);
}
export function rail({ title, subtitle = 'SISO', links, home = '/' }) {
  return `<a class="siso-skip" href="#content">Skip to content</a>
  <aside class="siso-rail" aria-label="Site navigation">
    <div class="siso-rail-content" id="siso-rail-content">
      <a class="siso-rail-brand" href="${safeHref(home)}"><span class="siso-monogram">S</span><b>${esc(title)}</b><small>${esc(subtitle)}</small></a>
      <p class="siso-rail-label">Explore the ecosystem</p>
      <nav>${links.map((link, i) => `<a href="${safeHref(link.href)}"${link.active ? ' aria-current="page"' : ''}><span>${String(i + 1).padStart(2, '0')}</span>${esc(link.label)}</a>`).join('')}</nav>
      <p class="siso-rail-foot">One connected library.<br>Independent sources.<br><kbd>[</kbd> toggle navigation</p>
    </div>
    <button hidden class="siso-rail-toggle" aria-expanded="true" aria-controls="siso-rail-content" aria-label="Collapse navigation"><span aria-hidden="true">‹</span></button>
  </aside>`;
}
