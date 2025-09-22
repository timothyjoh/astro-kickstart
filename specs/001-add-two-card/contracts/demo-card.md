# UI Contract — Homepage Demo Card

## Purpose
Surface a prominent navigation entry for an existing demo route (Blog, Todo) directly beneath the homepage hero.

## Structure
- **Wrapper**: Anchor element `<a>` wrapping entire card (`href` points to target route).
- **Card Container**: `div` with Tailwind utilities `bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900` to match Preline cards.
- **Icon Badge**: `span` or `div` containing inline SVG icon inside a rounded badge (`inline-flex justify-center items-center size-14 rounded-full border-4 border-blue-50 bg-blue-100`); icon gets `aria-hidden="true"`.
- **Text Stack**:
  - `h3` heading (text-level 3) describing destination (e.g., "Explore the Blog").
  - `p` description summarizing what the visitor can expect after navigation.

## Accessibility
- Anchor must include `aria-label` summarizing action (e.g., "Go to blog demo").
- Heading + description MUST remain visible and descriptive if icons fail to render.
- Focus state relies on default browser outline plus Tailwind `focus-visible:ring` if already configured.

## Interactions
- Entire card is clickable; no nested interactive elements inside anchor.
- Hover/focus should leverage existing Preline `transition` classes (`transition-shadow hover:shadow-xl focus-visible:outline` as available).
- Navigation occurs in same tab without preventing default.

## Content Rules
- Titles limited to ≤30 characters to avoid wrapping onto three lines.
- Descriptions limited to one short sentence (≈90 characters) to maintain layout balance.

## Validation Checklist
- [ ] Anchor `href` matches destination route.
- [ ] `aria-label` communicates destination.
- [ ] Icon `role` not set; uses `aria-hidden="true"`.
- [ ] Heading is level 3 to maintain semantic order beneath hero content hierarchy.
- [ ] Card spacing matches design tokens (`gap-4`, `gap-2` as appropriate).

## Verification
- **Link targets**: In `npm run preview`, activate each card and confirm navigation to `/blog` and `/todo` within the same tab.
- **Accessible name**: With a screen reader running, focus each card and ensure the announced text includes the heading and description; verify `aria-label` matches the destination summary.
- **Icon fallback**: Temporarily set the SVG `display: none` via dev tools and confirm titles/descriptions alone convey purpose.
- **Responsive layout**: Resize viewport (<640px, ≥768px) and confirm cards stack on mobile and sit side-by-side on larger screens with consistent spacing.
- **Keyboard flow**: Tab through the hero into the cards and ensure each card receives a visible focus outline and is activatable via Enter/Space.

