# Phase 1 Quickstart — Homepage Demo Cards

## Prerequisites
- Dependencies installed via `npm install`.
- `.env` not required for this feature; ensure no sensitive keys are introduced.

## Implementation Highlights
1. Update `src/components/Welcome.astro`:
   - Insert a new section beneath the hero containing a two-card grid.
   - Populate each card with title, description, inline SVG icon, and anchor linking to `/blog` and `/todo`.
2. Apply Tailwind/Preline utility classes from existing `IconCards.astro` for visual consistency (`bg-white shadow-lg rounded-lg p-5`, responsive grid, spacing utilities).
3. Ensure accessibility:
   - Provide meaningful text for each link via headings and descriptions.
   - Mark decorative icons `aria-hidden="true"` and set `aria-label` on anchors summarizing destinations.
   - Confirm focus outlines remain visible with `focus-visible` utilities on the anchor.
4. Validate responsiveness by adjusting viewport widths; confirm stacked layout on small screens and side-by-side cards on larger screens.
5. Capture verification evidence:
   - Log baseline and post-change results for `npm run astro check` and `npm run build` in `specs/001-add-two-card/qa-checklist.md` (note blockers if the sandbox prevents dependency installs).
   - Use `npm run preview` to execute the manual test script in `specs/001-add-two-card/tests/homepage-demo-card-manual.md` and record observations in the QA checklist.
   - Save updated homepage screenshots to `specs/001-add-two-card/assets/` and reference them from the QA checklist.

## Deliverables
- Updated `src/components/Welcome.astro` with demo card section.
- Completed QA log at `specs/001-add-two-card/qa-checklist.md` including command outputs and accessibility notes.
- Manual preview script at `specs/001-add-two-card/tests/homepage-demo-card-manual.md`.
- Screenshot assets illustrating desktop and mobile layouts.
- PR-ready summary in `specs/001-add-two-card/pr-notes.md` referencing verification evidence.
