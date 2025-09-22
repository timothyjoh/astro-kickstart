# Implementation Plan: Site-wide DaisyUI Theme Picker

**Branch**: `002-we-need-a` | **Date**: 2025-09-22 | **Spec**: `/specs/002-we-need-a/spec.md`
**Input**: Feature specification from `/specs/002-we-need-a/spec.md`

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
Introduce a global theme picker dropdown in the upper-right layout chrome so visitors can switch among all DaisyUI themes, with instant site-wide updates and persisted preferences across visits.

## Technical Context
**Language/Version**: Astro 5.x with TypeScript; React islands limited to interactive widgets  
**Primary Dependencies**: Astro, Tailwind 4, DaisyUI, localStorage browser API  
**Storage**: Client-side local storage for theme preference; no server data  
**Testing**: `npm run astro check`, `npm run preview`, manual regression of theme switching and persistence  
**Target Platform**: Astro SSR deployment via Vercel adapter (per constitution)  
**Project Type**: Astro SSR web app with hydrated islands  
**Performance Goals**: Zero reload theme changes, negligible additional bundle weight, no regression to Core Web Vitals  
**Constraints**: Maintain accessible dropdown control, respect DaisyUI theme contract, operate without localStorage (fallback to default)  
**Scale/Scope**: Single global layout control affecting all routes; impacts base and blog layouts plus shared components

## Constitution Check
- **Astro-First Composition**: Theme control lives inside existing Astro layouts with a single React island for interactivity; no routing changes or bypass of layout wrappers.  
- **Accessible Component Stack**: Dropdown will expose an explicit accessible name, standard keyboard interactions, and reuse DaisyUI/Tailwind primitives without custom complex widgets.  
- **Content Collection Integrity**: No content schemas change; blog collections untouched.  
- **Utility-Driven Styling**: Styling relies on Tailwind + DaisyUI utilities; avoid bespoke CSS unless absolutely required.  
- **Validated Delivery Gates**: Plan includes running `npm run astro check`, `npm run build`, and `npm run preview` before merge with documented evidence.

## Project Structure

### Documentation (this feature)
```
specs/002-we-need-a/
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

**Structure Decision**: Touch `src/layouts/Layout.astro` and `src/layouts/BlogLayout.astro` to mount the picker; add a reusable interactive island under `src/components` (and supporting utility under `src/lib` if needed) while keeping overall composition Astro-first.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context**:
   - Determine the canonical way to enumerate DaisyUI theme names at runtime/build time without hardcoding.
   - Validate best practices for applying DaisyUI themes by swapping the `data-theme` attribute and syncing with Astro layouts.
   - Confirm accessibility expectations for dropdown-based theme controls, including keyboard focus order and labeling.

2. **Generate research tasks**:
   - Research DaisyUI theme enumeration strategies for Astro/Tailwind projects.
   - Research instant theme switching patterns using `data-theme` on `<html>` with persistence fallbacks.
   - Research accessible dropdown guidelines for theme selectors within Tailwind/DaisyUI context.

3. **Consolidate findings** in `research.md` capturing decision, rationale, alternatives, ensuring no open NEEDS CLARIFICATION remain.

## Phase 1: Design & Contracts
1. Record layout/component impacts and state flows in `data-model.md` (layouts, new picker island, optional storage helper).
2. Define UI contract(s) under `/contracts/` describing props, events, accessibility notes, and persistence expectations for the theme picker.
3. Draft `quickstart.md` summarizing environment prerequisites, verification commands, and manual QA steps for theme switching and persistence.
4. Run `.specify/scripts/bash/update-agent-context.sh codex` to refresh `AGENTS.md` with new context without exceeding constraints.

## Phase 2: Task Planning Approach
**Task Generation Strategy**:
- Base tasks on research decisions, sequencing configuration updates, component authoring, and persistence wiring.
- Derive verification tasks from acceptance scenarios (manual theme change, reload persistence, storage fallback).
- Capture accessibility checks (labeling, keyboard navigation) and delivery gates as explicit tasks.

**Ordering Strategy**:
- Follow Setup → Infrastructure (utilities) → Component implementation → Layout integration → Persistence wiring → Verification cadence with `[P]` markers for parallel-safe items.

**Estimated Output**: 18-25 ordered tasks in `tasks.md` once generated by `/tasks`.

## Phase 3+: Future Implementation
- **Phase 3**: `/tasks` command generates actionable checklist.  
- **Phase 4**: Implement code changes per tasks.  
- **Phase 5**: Validate with automated checks and manual QA before merge.

## Complexity Tracking
No constitutional deviations identified; table intentionally left empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|

## Progress Tracking

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
