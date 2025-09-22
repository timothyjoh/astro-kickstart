# Tasks: Site-wide DaisyUI Theme Picker

**Input**: Design documents from `/specs/002-we-need-a/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/

## Execution Flow (main)
Follows the template: setup → verification scaffolding → core implementation → polish, honoring constitution guardrails and delivery gates.

## Task List
- [ ] T001 Install project dependencies with `npm install` at repo root to ensure Tailwind/DaisyUI packages are available (depends on clean working copy).
- [ ] T002 Update or create `tailwind.config.mjs` at repo root so DaisyUI is registered and its `themes` array is exported for runtime enumeration (depends on T001).
- [ ] T003 Run `npm run astro check` before making changes and capture the output in `specs/002-we-need-a/logs/astro-check-baseline.txt` (depends on T001).
- [ ] T004 [P] Draft the ThemePickerDropdown contract verification script in `specs/002-we-need-a/tests/theme-picker-contract.md`, outlining checks for theme listing, immediate application, and persistence (depends on T003).
- [ ] T005 [P] Document the persisted-theme integration scenario in `specs/002-we-need-a/tests/theme-persistence.md`, covering reload behavior and cross-layout coverage (depends on T003).
- [ ] T006 Implement `src/lib/theme.ts` with `getAvailableThemes`, `applyTheme`, `loadStoredTheme`, and `persistTheme`, including safe fallbacks when storage is unavailable (depends on T002).
- [ ] T007 Build `src/components/ThemePickerDropdown.tsx` to satisfy the contract: render labeled native `<select>`, sort themes with default first, wire to theme utilities, expose `data-testid="theme-picker"`, and support optional `onThemeChange` (depends on T006).
- [ ] T008 Update `src/layouts/Layout.astro` to import the theme utilities and ThemePickerDropdown, inject the picker into the upper-right header, pre-apply stored theme via inline script before hydration, and pass serialized theme props (depends on T007).
- [ ] T009 Update `src/layouts/BlogLayout.astro` to mirror the picker integration, ensuring the blog nav hosts the control and the layout syncs the `data-theme` attribute with storage fallbacks (depends on T008).
- [ ] T010 Run `npm run astro check` after implementations and save the output to `specs/002-we-need-a/logs/astro-check-post.txt` (depends on T009).
- [ ] T011 Run `npm run build` and record the log in `specs/002-we-need-a/logs/build.txt` (depends on T010).
- [ ] T012 Launch `npm run preview`, execute the manual QA checklist from `quickstart.md`, and capture observations in `specs/002-we-need-a/logs/manual-qa.md` (depends on T011).
- [ ] T013 Summarize keyboard and screen-reader accessibility evidence for the theme picker in `specs/002-we-need-a/logs/accessibility.md`, referencing T004/T005 outcomes (depends on T012).
- [ ] T014 [P] Record verification results and theme-picker rollout notes for the PR in `docs/release-notes.md` (or create the file if missing) to document user-facing changes (depends on T013).
- [ ] T015 [P] Run `npx prettier --check "src/**/*.{astro,ts,tsx}" "specs/002-we-need-a/**/*"` and fix formatting issues as needed to keep the codebase tidy (depends on T013).

## Dependencies
- T002 ← T001
- T003 ← T001
- T004 ← T003
- T005 ← T003
- T006 ← T002
- T007 ← T006
- T008 ← T007
- T009 ← T008
- T010 ← T009
- T011 ← T010
- T012 ← T011
- T013 ← T012
- T014 ← T013
- T015 ← T013

## Parallel Execution Examples
- `task run T004 T005` → Develop contract and integration test scripts concurrently once baseline checks are logged.
- `task run T014 T015` → After validation, update release notes while running formatting checks in parallel.

## Notes
- Maintain Astro-first composition by limiting React usage to the new `ThemePickerDropdown` island and keeping layouts in `.astro` files.
- Respect accessibility commitments: visible labels, keyboard navigation, and documented assistive tech verification are mandatory before completion.
- Delivery gates (`astro check`, `build`, `preview`) must be executed and their logs attached before requesting review.
