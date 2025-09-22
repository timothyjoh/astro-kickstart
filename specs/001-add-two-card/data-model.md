# Phase 1 — Data & Component Model

## Routes & Layouts
- `src/pages/index.astro`
  - Continues to render `<Welcome />` inside `Layout.astro`; no new route data loaders required.
- `src/layouts/Layout.astro`
  - Unchanged; ensures head/meta remain centralized per constitution.

## Components
- `src/components/Welcome.astro`
  - Adds a `section` immediately after the hero that wraps a two-card grid.
  - Each card includes:
    - Heading text (e.g., "Explore the Blog", "Try the Todo App").
    - Description copy describing the destination purpose.
    - Inline SVG icon within a rounded badge element.
    - Anchor that covers the card body (`href="/blog"` and `/todo`).
  - Cards use Tailwind/Preline utility classes (`bg-white shadow-lg rounded-lg p-5`, `grid md:grid-cols-2 gap-6`, etc.) for styling and responsiveness.
  - Section wrapper uses `max-w-3xl mx-auto px-4 sm:px-6 lg:px-8` to align with existing Preline containers.

## Content & Copy
- Static titles and descriptions authored directly in the component:
  - Blog card description emphasizes article discovery.
  - Todo card description highlights interactive demo.
- Copy kept short (1-2 sentences) to avoid layout overflow; future localization would move strings to a data array in the same component.

## Icons & Assets
- Inline SVG icons in component file; no external assets introduced.
- Icons marked `aria-hidden="true"` and accompanied by visually rendered labels for accessibility.

## Styling & Tokens
- Relies on Tailwind/Preline utility classes already present in repo; no updates to `components.json` or custom CSS.
- Spacing and typography inherit from existing global styles; ensures consistency across light/dark modes.

## Accessibility Expectations
- Entire card rendered within an anchor to provide a single, focusable target with `aria-label` summarizing destination.
- Descriptive headings ensure screen readers announce purpose even if icon hidden.
- Ensure color contrast via existing utility classes (white background, dark text) consistent with Preline defaults.

## Verification Inputs
- Manual QA: verify navigation occurs without full page reload within same tab.
- Responsive test: confirm `grid` stacks on <640px viewports and displays two columns ≥768px.
- Accessibility spot check: keyboard tabbing focuses each card once; screen reader announces title + description.

## Dependencies & Assumptions
- Assumes Tailwind utilities compiled via current Astro build; no new build tooling required.
- Assumes `/blog` and `/todo` routes remain valid and accessible.
