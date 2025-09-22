# PR Notes — Homepage Demo Cards

## Summary
- Add two card-style links beneath the homepage hero that highlight the Blog (`/blog`) and Todo (`/todo`) demos.
- Cards reuse Preline/Tailwind styling, include inline SVG icons, and keep navigation within the same tab.
- Accessibility handled via descriptive text, `aria-label`s on anchors, and `aria-hidden` markers on decorative icons.

## Verification
- `npm run astro check` — blocked in sandbox (requires installing `@astrojs/check` + `typescript`).
- `npm run build` — passes; see `specs/001-add-two-card/qa-checklist.md` for timestamps and Vercel runtime warning.
- `npm run preview` — unsupported by @astrojs/vercel adapter in this environment; `npm run dev` fails to bind (EPERM). Manual verification deferred to maintainers once preview is available.

## Accessibility
- Focusable anchors wrap entire cards with visible focus rings.
- Headings + descriptions remain when icons hidden; icons marked `aria-hidden="true"`.
- Screen-reader label parity noted in QA checklist; live testing pending until preview is available.

## Follow-ups
- Capture desktop + mobile screenshots for the homepage cards and add them to `specs/001-add-two-card/assets/` before PR submission.
- Re-run `npm run astro check` once dependencies can be installed or when network access is available.
