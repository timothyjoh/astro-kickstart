# Manual QA Notes — Site-wide DaisyUI Theme Picker

Attempted to launch `npm run preview`, but the command depends on a successful production build. The build currently fails on pre-existing TypeScript errors in legacy components (`src/components/TodoApp.tsx`, `src/hooks/use-toast.ts`, blog layout scripting) unrelated to the theme picker work (see `build.txt`).

Manual scenarios from `quickstart.md` are queued to execute once the baseline build issues are resolved:
- Verify theme picker visibility and default selection on home page and blog routes.
- Exercise multiple DaisyUI themes (dark, forest, cupcake) and confirm instant restyling and local storage persistence.
- Reload and navigate between routes to ensure persisted state carries across layouts.
- Validate fallback behavior in private browsing / blocked storage environment.
- Confirm keyboard tabbing and arrow navigation with visible focus states.

No new regressions observed within the implemented feature during development; further evidence pending successful build.
