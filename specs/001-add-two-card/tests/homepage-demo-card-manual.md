# Manual Test — Homepage Demo Cards

## Environment
- Build/serve using `npm run preview` after running `npm run build`.
- Test in desktop viewport (≥1280px) and mobile viewport (~375px wide).

## Scenario 1 — Blog card navigation
- **Given** the homepage is open just below the hero section in `npm run preview`,
- **When** I activate the "Explore the Blog" card via Enter/Space while focused or by clicking,
- **Then** the browser navigates in the same tab to `/blog` and the card's heading and description were announced by the screen reader during activation.

## Scenario 2 — Todo card navigation
- **Given** the homepage is open in `npm run preview`,
- **When** I activate the "Try the Todo App" card,
- **Then** the browser navigates in the same tab to `/todo`, and the descriptive copy remains visible/announced for assistive tech.

## Scenario 3 — Responsive layout
- **Given** the homepage cards are visible,
- **When** I resize the viewport to mobile width (~375px),
- **Then** the cards stack vertically with adequate spacing and touch-friendly hit areas; when returning to ≥768px, they display side-by-side with consistent gap.

## Scenario 4 — Icon fallback and focus treatment
- **Given** the cards are rendered,
- **When** I hide each SVG icon via dev tools or observe focus states while tabbing,
- **Then** the visible headings/descriptions still communicate destination, and each card shows a noticeable focus ring tied to the anchor.

## Recording Results
- Document pass/fail outcomes and accessibility notes in `specs/001-add-two-card/qa-checklist.md` under "Manual Test Results".
- Capture updated screenshots and store them in `specs/001-add-two-card/assets/` for PR attachments.
