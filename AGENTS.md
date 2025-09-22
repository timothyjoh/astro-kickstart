# Repository Guidelines

## Project Structure & Module Organization
`src/` holds application code: page shells live in `src/pages`, shared UI in `src/components`, layout wrappers in `src/layouts`, domain logic and utilities in `src/lib`, and styling tokens in `src/styles`. Content collections (e.g., blog posts) live in `src/content`, while long-form references sit under `docs/`. Static assets ship from `public/`, and Tailwind configuration is centralized in `components.json`.

## Build, Test & Development Commands
Use `npm install` to sync dependencies. `npm run dev` starts the Astro dev server with hot reload. `npm run build` compiles the production site to `dist/`, and `npm run preview` serves that build for smoke-testing. `npm run astro check` runs Astro's type and content safety checks; call it before opening a pull request.

## Coding Style & Naming Conventions
Stick to modern TypeScript/JS without semicolons and two-space indentation, mirroring existing files. Favor `.astro` files for composition and `.tsx` React islands for interactive widgets. Co-locate feature assets (images, partials) with their component or page. Tailwind utility classes are preferred over ad-hoc CSS; keep custom styles in `src/styles` when utilities fall short.

## Testing Guidelines
No automated test harness is configured yet. When adding logic-heavy modules, include self-contained tests using your preferred runner (Vitest integrates cleanly) and document how to execute them in `docs/` until generalized. At minimum, run `npm run astro check` and manually exercise affected routes in `npm run preview`. Name scenario files after the component or page they validate (e.g., `TodoApp.spec.ts`).

## Commit & Pull Request Guidelines
Follow the existing short, imperative commit style (`bbc7a3c better aside styles, with mobile`). Group related changes into a single commit and reference issue IDs when available. Pull requests should summarize the user-facing impact, list verification steps (`npm run build`, route screenshots), and note any config or environment changes such as new `.env` keys. Request review from maintainers familiar with the touched area (UI, data, content).

## Environment & Secrets
Copy `.env.example` to `.env` and populate `PUBLIC_INSTANTDB_APP_ID` before running the Todo demo. Never commit populated `.env` files; instead, update `.env.example` when new variables are required and mention them in release notes.
