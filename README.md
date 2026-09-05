# SISO Shell

The shared, dependency-free navigation shell for SISO's static reading surfaces.
The Great Library is the first consumer. This package owns the rail; consumers
own their content, navigation destinations, and publication permissions.

Import `rail({ title, subtitle, links, home })` from `shell.mjs`, include its HTML
once, and load `assets/shell.css` and `assets/shell.js`. Give the body the class
`siso-shell`. Links are `{ label, href, active }`; only relative paths, fragments,
and HTTP(S) URLs are accepted. Copy assets at build time from a pinned package,
never maintain hand-edited consumer copies. No server or external fonts required.

The rail collapses to 20px, toggles with `[` outside editable fields, and stores
the preference locally. Navigation stays available without JavaScript. Mobile
starts collapsed with JavaScript. The visual strip retains a 44px hit target.

Run `npm test`. Index: https://github.com/sisodias/great-library-of-siso

Original static implementation from the owner's SISO CRM/Operator interaction
brief; no client code, data, or private operational identifiers are included.
No general redistribution license is asserted by this initial publication.
