# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract impacted Astro surfaces (pages, components, layouts, content, styles)
2. Load optional design documents:
   → data-model.md: Map page data, component props, env dependencies → implementation tasks
   → contracts/: Each UI/content contract → verification + build task
   → research.md: Extract setup decisions (fonts, env vars, tooling) → setup tasks
3. Generate tasks by category:
   → Setup: dependencies, environment, Tailwind tokens
   → Verification: astro check, automated tests, manual preview evidence
   → Core: pages, components, layouts, hooks, lib utilities
   → Content: content collection updates, migrations, docs
   → Polish: accessibility notes, screenshots, release prep
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Verification tasks precede implementation delivery
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All constitution gates represented? (Astro-First, Accessibility, Content collections, Styling, Delivery gates)
   → Verification outputs captured?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- Root Astro project: `src/pages`, `src/components`, `src/layouts`, `src/content`, `src/lib`, `src/styles`
- Assets: `src/assets` (processed) or `public` (served as-is)
- Documentation: `docs/` or repo root markdown
- Tests (when introduced): `tests/` matching feature scope (e.g., `tests/components`, `tests/routes`)

## Phase 3.1: Setup
- [ ] T001 Ensure dependencies installed (`npm install`) and Tailwind config in `components.json` mirrors plan decisions
- [ ] T002 Sync environment by copying `.env.example` → `.env` and populating InstantDB IDs if required
- [ ] T003 [P] Update design tokens or shared config in `src/styles/` or `components.json`

## Phase 3.2: Verification Scaffolding ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: Verification tasks MUST run and initially fail or capture expected diffs before implementation**
- [ ] T004 [P] Add/update Vitest/Playwright test in `tests/` (or plan manual fallback) covering new interaction
- [ ] T005 [P] Run `npm run astro check` to baseline content schema and type safety (record output)
- [ ] T006 Prepare manual QA checklist for affected routes (screenshots, keyboard flow)

## Phase 3.3: Core Implementation (ONLY after verification scaffolding is ready)
- [ ] T007 [P] Implement page updates in `src/pages/[route].astro`
- [ ] T008 [P] Build or extend React island in `src/components/[Component].tsx`
- [ ] T009 Wire shared logic or fetching utilities in `src/lib/[module].ts`
- [ ] T010 Update layout wrappers in `src/layouts/` for shared metadata or theming

## Phase 3.4: Content & Data
- [ ] T011 Adjust content schemas in `src/content/config.ts` and migrate entries in `src/content/`
- [ ] T012 Populate or update markdown/MDX entries with frontmatter meeting contract requirements
- [ ] T013 Record migration or authoring guidance in `docs/` (e.g., `docs/blog-setup.md`)

## Phase 3.5: Polish & Review
- [ ] T014 [P] Re-run `npm run astro check`, `npm run build`, `npm run preview` and capture results for the PR
- [ ] T015 [P] Attach accessibility evidence (keyboard walkthrough, screen-reader notes) to PR description
- [ ] T016 Update release notes/README if new env vars or user-facing behavior introduced
- [ ] T017 Remove dead code, unused assets, and confirm formatting (e.g., `npx prettier --check` when applicable)

## Dependencies
- Verification scaffolding (T004-T006) completes before implementation (T007-T010)
- Schema/content updates (T011-T012) depend on data-model and contract decisions from Phase 1
- Final verification (T014) depends on implementation completion
- Documentation tasks (T013, T016) depend on finalized behavior

## Parallel Example
```
# Launch independent island and style updates together:
Task: "T008 [P] Build Todo filters in src/components/TodoFilters.tsx"
Task: "T003 [P] Extend theme tokens in components.json"
```

## Notes
- [P] tasks manipulate different files with no ordering dependency
- Verification evidence (logs, screenshots) MUST be captured before requesting review
- Commit after each logical task completion to preserve reviewability
- Avoid merging without re-running the delivery gates (astro check, build, preview)

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each UI/content contract → verification task + implementation task
   - Accessibility notes → dedicated checklist task

2. **From Data Model**:
   - Each page/component data mapping → update in `src/pages` or `src/components`
   - New env requirements → `.env.example` update task

3. **From User Stories**:
   - Each story → manual QA scenario within Phase 3.2 and Phase 3.5
   - Quickstart scenarios → documentation or quickstart.md refresh tasks

4. **Ordering**:
   - Setup → Verification → Implementation → Content → Polish
   - Dependencies block parallel execution; keep Astro-First Composition intact

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] Verification (astro check/build/preview/tests) tasks present
- [ ] Accessibility/accountability tasks present
- [ ] Each implementation task references an explicit file path
- [ ] Parallel tasks operate on distinct files
- [ ] Content collection changes include schema + data updates
- [ ] Delivery gates scheduled before completion
