# Phase 1 Data Model — Site-wide DaisyUI Theme Picker

## Layout Surfaces
- **`src/layouts/Layout.astro`**: Wraps all non-blog routes; must render the theme picker in the upper-right chrome, forward the current theme to `<html data-theme>` on initial render, and hydrate the picker island.
- **`src/layouts/BlogLayout.astro`**: Mirrors the base layout requirements so blog pages expose the same picker and synchronize `data-theme`.

## Components & Islands
- **`ThemePickerDropdown` (new, `src/components/ThemePickerDropdown.tsx`)**:
  - Props: `themes: string[]`, `defaultTheme: string` ("light"), `storageKey: string` (constant), optional `onThemeChange` callback for analytics hooks.
  - Local State: `selectedTheme` derived from storage or default.
  - Effects: On mount, read stored value; on change, update state, write to storage, dispatch DOM event or callback, update `<html data-theme>`.
  - Accessibility: Associates `<label>` with `<select>`, ensures focus ring visible, announces current theme via `aria-live` optional? maybe not necessary but ensures standard.

## Utilities
- **`src/lib/theme.ts` (new)**:
  - `getAvailableThemes()`: returns string list from resolved Tailwind config, gracefully handling missing DaisyUI config.
  - `applyTheme(theme: string)`: updates `document.documentElement.dataset.theme` if running in browser.
  - `loadStoredTheme(storageKey: string)`: safe read from local storage with try/catch.
  - `persistTheme(theme: string)`: safe write with try/catch.

## State & Data Flow
1. Astro layout imports `getAvailableThemes()` at build time to retrieve list and pass to picker island as serialized props.
2. Layout sets the SSR default `data-theme="light"`; hydration script checks storage and overrides before React island renders to avoid flash (via inline script or initial prop).
3. Picker island renders dropdown with `themes` list, selects stored theme if provided, and listens for change events.
4. On change, component updates React state, calls `applyTheme()`, and persists to storage. Layout receives updated theme visually via DOM attribute.
5. When navigation occurs, stored value persists; on subsequent loads, pre-hydration script/initial effect reapplies theme.

## Storage & Keys
- **Local Storage Key**: `astro-theme-preference` (final name to confirm in implementation). Stored value is DaisyUI theme string; invalid or missing values revert to `light`.

## External Interfaces
- No network or server APIs invoked.
- DaisyUI/Tailwind config consumed as internal dependency only.

## Testing Hooks
- Expose `data-testid="theme-picker"` on the `<select>` for manual/automated verification.
- Provide deterministic ordering (alphabetical) so acceptance criteria can assert expected entries.

## Open Questions
- None — all clarifications resolved during Phase 0.
