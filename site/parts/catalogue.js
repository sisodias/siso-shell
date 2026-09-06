/* parts/catalogue.js — filter behaviour for parts/catalogue.html. Robbed from the Action Model searchable track filter
 * (clients/actionmodel/site/blueprint/index.html:357-400): normalised data-search string per card, visible count. */
(() => {
  document.querySelectorAll('[data-catalogue]').forEach((root) => {
    const search = root.querySelector('[data-cat-search]');
    const filters = [...root.querySelectorAll('[data-cat-filter]')];
    const items = [...root.querySelectorAll('[data-cat-item]')];
    const count = root.querySelector('[data-cat-count]');
    const empty = root.querySelector('[data-cat-empty]');
    if (!items.length) return;
    function apply() {
      const q = (search && search.value || '').trim().toLowerCase();
      let shown = 0;
      for (const item of items) {
        let ok = !q || (item.getAttribute('data-search') || item.textContent).toLowerCase().includes(q);
        for (const f of filters) { const v = f.value; if (ok && v && item.getAttribute('data-tag-' + f.getAttribute('data-cat-filter')) !== v) ok = false; }
        if (ok) { item.removeAttribute('data-hidden'); shown++; } else item.setAttribute('data-hidden', '');
      }
      if (count) count.textContent = `${shown} of ${items.length}`;
      if (empty) empty.hidden = shown > 0;
    }
    if (search) search.addEventListener('input', apply);
    filters.forEach((f) => f.addEventListener('change', apply));
    // ?type=research_question style deep links
    const params = new URLSearchParams(location.search);
    filters.forEach((f) => { const v = params.get(f.getAttribute('data-cat-filter')); if (v) f.value = v; });
    if (params.get('q') && search) search.value = params.get('q');
    apply();
  });
})();
