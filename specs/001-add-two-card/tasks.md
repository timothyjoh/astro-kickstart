# Tasks: Homepage Demo Cards

**Input**: Design documents from `/specs/001-add-two-card/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Phase 3.1: Setup
- [ ] T001 Ensure project dependencies are installed by running `npm install` in `/Users/timothyjohnson/wrk/astro-kickstart` and note completion in the upcoming QA log.
- [ ] T002 Review Preline card utility patterns in `src/components/preline/IconCards.astro`, then append an "Implementation Notes" snippet to `specs/001-add-two-card/research.md` listing the exact class names to reuse for the homepage demo cards.

## Phase 3.2: Verification Scaffolding ⚠️ MUST COMPLETE BEFORE 3.3
- [ ] T003 [P] Extend `specs/001-add-two-card/contracts/demo-card.md` with a "Verification" section detailing manual checks for the Blog and Todo cards (link target, aria-label, icon fallback, responsive layout).
- [ ] T004 [P] Create `specs/001-add-two-card/qa-checklist.md` capturing acceptance scenarios, accessibility steps, responsive breakpoints, and placeholders for command logs/screenshots.
- [ ] T005 Run `npm run astro check` to capture the pre-change baseline and paste the timestamped output into `specs/001-add-two-card/qa-checklist.md`.
- [ ] T006 Run `npm run build` to record the pre-change baseline and log the result in `specs/001-add-two-card/qa-checklist.md`.

## Phase 3.3: Core Implementation (ONLY after verification scaffolding is ready)
- [ ] T007 Update `src/components/Welcome.astro` to insert the new demo cards section directly beneath the hero, including both Blog and Todo anchors, descriptive headings, inline SVG icons marked `aria-hidden="true"`, aria-labels on links, and responsive Tailwind/Preline classes that stack on small screens and render two columns on medium+.

## Phase 3.4: Content & Data
- No content collection or schema updates required for this feature.

## Phase 3.5: Polish & Review
- [ ] T008 Update `specs/001-add-two-card/quickstart.md` if the implementation introduces any additional validation or deliverable notes (e.g., screenshots, command outputs) beyond the current guidance.
- [ ] T009 Re-run `npm run astro check` post-implementation and append the new output plus pass/fail status to `specs/001-add-two-card/qa-checklist.md`.
- [ ] T010 Re-run `npm run build` post-implementation and log results in `specs/001-add-two-card/qa-checklist.md`.
- [ ] T011 [P] Author `specs/001-add-two-card/tests/homepage-demo-card-manual.md` describing the user-story integration test steps (Given/When/Then) for verifying the new cards via `npm run preview`.
- [ ] T012 Run `npm run preview`, execute the manual test from T011, and document outcomes (navigation, responsiveness, accessibility notes) in `specs/001-add-two-card/qa-checklist.md`.
- [ ] T013 Capture updated homepage screenshots (desktop and mobile if possible), save them under `specs/001-add-two-card/assets/` (e.g., `demo-cards-desktop.png`, `demo-cards-mobile.png`), and reference the files inside the QA checklist.
- [ ] T014 [P] Draft PR-ready release notes in a new file `specs/001-add-two-card/pr-notes.md`, summarizing the feature impact, accessibility evidence, and command outputs for reuse in the eventual pull request.

## Dependencies
- T002 depends on T001 (needs repository ready before extracting utility classes).
- T005 and T006 require T004 to exist so command logs have a destination.
- T007 depends on completion of T003–T006 to ensure verification scaffolding is in place.
- T008 follows T007 in case implementation changes require documentation tweaks.
- T009–T013 depend on T007 (and T008 when notes are adjusted) to validate the updated homepage.
- T012 depends on T011 to supply the manual test script.
- T014 depends on T009–T013 to summarize verified outcomes.

## Parallel Execution Example
```
# Prepare verification scaffolding in parallel once setup is complete:
/task run T003
/task run T004

# After implementation, independent documentation tasks can proceed together:
/task run T011
/task run T014
```

## Notes
- Verification commands (`npm run astro check`, `npm run build`, `npm run preview`) must be logged in `specs/001-add-two-card/qa-checklist.md` before requesting review.
- Accessibility evidence (keyboard navigation, screen-reader announcement) should be captured during T012 and referenced in T014.
- Keep all edits within the feature branch `001-add-two-card`; commit after each logical milestone for reviewability.
