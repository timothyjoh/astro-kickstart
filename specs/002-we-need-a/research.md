# Phase 0 Research — Site-wide DaisyUI Theme Picker

## DaisyUI Theme Enumeration Strategy
- **Decision**: Resolve the DaisyUI theme list at build time by importing Tailwind's resolved config (via `tailwindcss/resolveConfig`) and reading the `daisyui.themes` array, falling back to DaisyUI's default theme set when the config omits overrides.
- **Rationale**: Using Tailwind's resolved config keeps the dropdown in sync with any DaisyUI configuration changes without hardcoding strings, aligning with Utility-Driven Styling.
- **Alternatives considered**: Hardcoding the theme names (rejected: violates requirement to support all DaisyUI themes); reading runtime global `window.daisyui` metadata (rejected: relies on undocumented internals and not available during SSR).

## Applying Themes Site-Wide
- **Decision**: Update the `<html>` element's `data-theme` attribute directly and mirror the selected value in local storage, reading once on hydration and on subsequent route loads.
- **Rationale**: DaisyUI derives styles from `data-theme`; manipulating the root element ensures instant updates without recalculating component styles, matching the spec's "Daisy way" requirement. Local storage persistence satisfies the persistence requirement with minimal tooling.
- **Alternatives considered**: Wrapping the app in a global React provider (rejected: unnecessary hydration and conflicts with Astro-first layout ownership); toggling class names per section (rejected: inconsistent with DaisyUI's theming model).

## Accessibility Guidelines for Theme Dropdown
- **Decision**: Implement the picker as a native `<select>` styled with DaisyUI/Tailwind utilities, include a visually-hidden label, and ensure focus states remain visible.
- **Rationale**: Native selects provide built-in keyboard navigation and screen reader support, reducing custom accessibility risk while still matching DaisyUI aesthetics.
- **Alternatives considered**: Building a custom listbox/combobox widget (rejected: higher complexity and accessibility burden without additional benefit); using a button that cycles through themes (rejected: poor discoverability for a large theme set).

## Persistence Fallback Handling
- **Decision**: Wrap local storage access in try/catch and default to the "light" theme when storage is unavailable or values are invalid.
- **Rationale**: Supports environments with restricted storage (Safari private mode, server rendering) while honoring the default requirement.
- **Alternatives considered**: Relying solely on local storage without guards (rejected: risks runtime errors); storing preference in cookies (rejected: unnecessary network overhead for client-only state).
