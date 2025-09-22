
# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

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
[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context
**Language/Version**: [Astro 5.x, TypeScript, React 19 or NEEDS CLARIFICATION]  
**Primary Dependencies**: [Astro Content Collections, Tailwind 4, DaisyUI, Ariakit, InstantDB or NEEDS CLARIFICATION]  
**Storage**: [Content Collections, InstantDB, local storage or N/A]  
**Testing**: [Astro check, Vitest, Playwright, manual preview or NEEDS CLARIFICATION]  
**Target Platform**: [SSR via Vercel, static build, other]  
**Project Type**: [Astro SSR web app unless clarified otherwise]  
**Performance Goals**: [Core Web Vitals, bundle size, hydration budget or NEEDS CLARIFICATION]  
**Constraints**: [Accessibility criteria, schema requirements, env vars or NEEDS CLARIFICATION]  
**Scale/Scope**: [Number of routes, components, content entries or NEEDS CLARIFICATION]

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

[Document alignment with Astro-First Composition, Accessible Component Stack, Content Collection Integrity, Utility-Driven Styling, Validated Delivery Gates]

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
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

**Structure Decision**: [List touched directories (pages, components, content, styles, lib) and how Astro-First Composition is preserved]

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Capture route and component impacts** in `data-model.md`:
   - Page data needs, loaders, and content collection dependencies
   - Component props, local state, and hydration boundaries
   - Environment variables required (e.g., InstantDB IDs)

2. **Define UI and content contracts** under `/contracts/`:
   - For each changed page/component, outline expected props, events, accessibility notes
   - For content updates, document markdown frontmatter requirements and migration steps
   - Record test IDs or ARIA expectations for interactive widgets

3. **Extract test scenarios** from user stories:
   - Each story → manual or automated scenario exercised via `npm run preview`
   - Include accessibility assertions (keyboard focus path, screen-reader output)
   - Flag any NEEDS CLARIFICATION around testing strategy

4. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh codex`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, quickstart.md updates, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Derive setup tasks from research decisions (env vars, tokens, tooling)
- Translate UI/content contracts into verification + implementation tasks
- Map data-model entries to explicit file updates in pages, components, content
- Capture accessibility evidence and delivery gates as standalone tasks

**Ordering Strategy**:
- Follow Setup → Verification → Implementation → Content → Polish cadence
- Mark [P] for independent files; keep hydration boundaries respected

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
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [ ] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
