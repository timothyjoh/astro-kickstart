# Implementation Plan: Homepage Demo Cards

**Branch**: `001-add-two-card` | **Date**: 2025-09-22 | **Spec**: `/Users/timothyjohnson/wrk/astro-kickstart/specs/001-add-two-card/spec.md`
**Input**: Feature specification from `/Users/timothyjohnson/wrk/astro-kickstart/specs/001-add-two-card/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Identify impacted Astro surfaces (pages, components, layouts, content, styles)
   → Confirm constitution guardrails for accessibility, content collections, and build gates
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Deliver two homepage demo cards directly beneath the hero section, styled to match existing Preline card patterns, each linking in-page to `/blog` and `/todo` with descriptive copy and icons while preserving accessibility and responsiveness.

## Technical Context
**Language/Version**: Astro 5.x with TypeScript support; static Astro components (no new islands expected)  
**Primary Dependencies**: Astro core components, existing Preline/Tailwind utility classes, inline SVG icon patterns already used in `Welcome.astro`  
**Storage**: None required; cards use static copy within the page  
**Testing**: `npm run astro check`, `npm run build`, manual `npm run preview` smoke test focusing on homepage desktop/mobile behavior, plus accessibility spot-check (keyboard + screen reader labels)  
**Target Platform**: SSR-capable Astro build targeting Vercel adapter per constitution  
**Project Type**: Astro SSR marketing/demo site  
**Performance Goals**: Maintain lightweight hero section with minimal additional DOM/hydration; icons inline to avoid extra network requests  
**Constraints**: Must align with Astro-First Composition (Astro templates), Accessible Component Stack (semantic HTML, aria-labels, focus states), Utility-Driven Styling (Tailwind/Preline classes), Validated Delivery Gates (document required verification commands)  
**Scale/Scope**: Single route touch (`src/components/Welcome.astro` via `src/pages/index.astro`); introduces two new cards with shared grid wrapper

## Constitution Check
_Status_: PASS (initial review and post-design recheck)
- **Astro-First Composition**: Update remains within Astro component `Welcome.astro`, keeping layout orchestrated by `Layout.astro` without introducing React islands.
- **Accessible Component Stack**: Cards will use semantic headings, descriptive text, and aria-labels/accessible names, mirroring existing accessible patterns; icons receive `aria-hidden="true"` with text alternatives.
- **Content Collection Integrity**: No content collections touched; static copy embedded within component as permitted by spec.
- **Utility-Driven Styling**: Apply Tailwind/Preline utility classes already used in `preline` components; avoid bespoke CSS unless necessary for layout adjustments.
- **Validated Delivery Gates**: Plan includes running `npm run astro check`, `npm run build`, and manual preview validation per acceptance criteria.

## Project Structure

### Documentation (this feature)
```
specs/001-add-two-card/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
src/
├── pages/        # Route definitions (.astro)
├── components/   # React islands & shared UI
├── layouts/      # Shared shells and metadata
├── content/      # Content collections & schema
├── hooks/        # Reusable client hooks
├── lib/          # Framework-agnostic utilities
├── styles/       # Tailwind layers & bespoke CSS
└── assets/       # Local images and media

public/           # Static assets served as-is
docs/             # Long-form project documentation
.specify/         # Planning and automation templates

tests/            # Added when automated suites exist
```

**Structure Decision**: Touch `src/components/Welcome.astro` to insert the new card grid; reuse existing assets under `src/assets` if needed for icons or inline SVG definitions; keep `src/pages/index.astro` unchanged beyond consuming the updated component to honor Astro-First composition.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Confirm existing Preline card styling patterns and responsive grid options to reuse.
   - Identify accessible icon usage pattern within current homepage components.
   - Verify whether additional CSS adjustments are necessary or if Tailwind utilities suffice.

2. **Generate and dispatch research agents**:
   ```
   Research existing Preline card markup in repo for consistency
   Research icon usage within Welcome.astro to align aria handling
   Research responsive spacing utilities already used to avoid bespoke CSS
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Capture route and component impacts** in `data-model.md`:
   - Document homepage data needs (static content), layout considerations, and absence of new data sources.
   - Outline component structure for the card section including headings, copy, and icon placement.

2. **Define UI and content contracts** under `/contracts/`:
   - Provide card contract describing title, description, icon semantics, link target, and keyboard interaction expectations.

3. **Extract test scenarios** from user stories:
   - Describe manual preview checks for navigation, responsiveness, and accessibility obligations per acceptance scenarios.

4. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh codex`
   - Append current feature context (new card section, homepage touchpoints) while keeping file under 150 lines.

**Output**: data-model.md, /contracts/*, quickstart.md updates, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base.
- Translate research decisions into concrete implementation and validation tasks for `Welcome.astro` and related assets.
- Include accessibility verification steps (screen reader labels, keyboard focus) and delivery gate commands.

**Ordering Strategy**:
- Begin with environment/setup confirmation (ensure `.env` not needed), then implementation of card markup/styling, followed by icon integration, responsive tuning, and finally validation/documentation tasks.
- Mark independent items (e.g., icon asset updates) with `[P]` when parallelizable.

**Estimated Output**: 20-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [X] Phase 3: Tasks generated (/tasks command)
- [X] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
