<!--
Sync Impact Report
Version: N/A → 1.0.0
Modified Principles: Initial adoption (Astro-First Composition; Accessible Component Stack; Content Collection Integrity; Utility-Driven Styling; Validated Delivery Gates)
Added Sections: Implementation Constraints; Development Workflow; Governance
Removed Sections: none
Templates requiring updates:
- ✅ .specify/templates/plan-template.md (version reference + Astro structure updated)
- ✅ .specify/templates/spec-template.md (added constitution alignment checklist)
- ✅ .specify/templates/tasks-template.md (rewritten for Astro workflow)
Follow-up TODOs: none
-->
# Astro Kickstart Constitution

## Core Principles

### Astro-First Composition
Astro Kickstart MUST treat Astro templates as the canonical delivery surface.
- Pages in `src/pages` MUST be authored in `.astro`; React islands reside in `src/components` only when interaction demands client state.
- Shared structure and metadata MUST flow through layout wrappers in `src/layouts` to keep head management centralized.
- Content-driven routes MUST use Astro Content Collections rather than bespoke filesystem reads.
Rationale: This preserves the SSR-first architecture, keeps routing predictable, and minimizes hydration cost.

### Accessible Component Stack
Every interactive surface MUST prioritize accessible, themeable components.
- Ariakit components are the default for complex widgets; DaisyUI utilities MAY be used when an accessible primitive already exists.
- New component introductions MUST document keyboard and screen-reader checks in the pull request summary.
- Theme tokens and spacing decisions MUST be sourced from `components.json` to maintain brand alignment.
Rationale: Enforcing a verified component stack prevents regressions and keeps accessibility non-negotiable.

### Content Collection Integrity
Content MUST flow through typed collections so the blog remains trustworthy.
- Markdown entries live under `src/content/blog` and MUST satisfy the schema enforced by `src/content/config.ts`.
- Draft content MUST set `draft: true`; published posts MUST include `title`, `description`, `date`, `tags`, and `author`.
- Schema changes demand a documentation update in `docs/` plus a migration checklist in the associated plan.
Rationale: Using collections guarantees type safety, predictable routing, and consistent authoring expectations.

### Utility-Driven Styling
Tailwind utilities back every presentation layer change.
- Styling MUST lean on Tailwind 4 utilities; bespoke CSS belongs in `src/styles` with an explicit rationale comment.
- Font imports live in layout or global style entry points; component-level overrides MUST reference the shared tokens.
- Theme adjustments MUST pass through DaisyUI configuration rather than hard-coded colors.
Rationale: Utility-first styling keeps the UI consistent, slim, and easily refactorable.

### Validated Delivery Gates
Verification steps MUST precede every merge.
- Contributors MUST run `npm run astro check`, `npm run build`, and `npm run preview` and record outcomes in the PR description.
- Manual QA MUST cover updated routes or components with linked screenshots or screen recordings.
- Environment changes MUST update `.env.example` and note new variables in release notes.
Rationale: Enforced gates catch regressions before deployment and document the expected runtime posture.

## Implementation Constraints
- Runtime MUST target Astro 5 with SSR enabled per `astro.config.mjs`; deployments rely on Vercel adapters configured in that file.
- React usage is limited to island components under `src/components`; shared utilities live in `src/lib` and MUST remain framework-agnostic.
- InstantDB integrations MUST read `PUBLIC_INSTANTDB_APP_ID` from `.env`; never commit populated secrets.
- Static assets ship from `public/`; fonts and global styles belong to `src/styles` following the Fontsource workflow described in `README.md`.

## Development Workflow
- Work MUST branch from `main` using `feature/<slug>` naming and include a `.specify/templates/plan-template.md`-driven plan with a Constitution Check section.
- Commits use short, imperative summaries and MUST group related changes; link issues when available.
- Pull requests MUST document verification logs, accessibility notes for UI changes, and highlight any content schema updates.
- Releases or deploy previews MUST confirm blog content validation and InstantDB environment readiness.

## Governance
- This constitution supersedes conflicting project lore; unresolved conflicts escalate to the maintainers listed in `README.md`.
- Amendments require consensus from two maintainers via pull request review plus a recorded decision in the PR description.
- Versioning follows semantic rules: MAJOR for breaking governance shifts, MINOR for new principles or mandatory sections, PATCH for clarifications.
- Compliance is reviewed at plan creation (Initial Constitution Check) and during PR review; violations block merge until resolved or waived by maintainers.

**Version**: 1.0.0 | **Ratified**: 2025-09-22 | **Last Amended**: 2025-09-22
