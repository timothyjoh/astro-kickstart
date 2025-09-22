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
4. Validate responsiveness by adjusting viewport widths; confirm stacked layout on small screens and side-by-side cards on larger screens.
5. Run verification commands before committing:
   - `npm run astro check`
   - `npm run build`
   - `npm run preview` and manually navigate to the homepage to exercise both cards.

## Deliverables
- Updated `Welcome.astro` with demo card section.
- Accessibility confirmation notes captured for PR summary (keyboard navigation + screen reader announcement).
