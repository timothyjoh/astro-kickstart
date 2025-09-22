# ThemePickerDropdown Contract

## Purpose
Provide a global control that allows visitors to select any DaisyUI theme, applying it immediately and persisting the preference.

## Props
- `themes: string[]` — Full DaisyUI theme list provided by the layout; must contain at least the default `light` theme.
- `defaultTheme: string` — Fallback theme name when storage lacks a valid value.
- `storageKey: string` — Local storage key used for persistence; default to `"astro-theme-preference"`.
- `onThemeChange?: (theme: string) => void` — Optional callback invoked after a successful theme switch for analytics or future hooks.

## Behavior
1. On mount, read persisted theme value; if invalid, fall back to `defaultTheme`.
2. Render a `<select>` with the provided theme options sorted alphabetically but keeping `defaultTheme` first.
3. When the value changes:
   - Update internal state so the UI reflects the new selection.
   - Persist the selection via safe local storage write.
   - Call `applyTheme` helper to update `<html data-theme>` immediately.
   - Fire `onThemeChange` callback if provided.
4. Register an effect to ensure the initial theme is applied once hydration occurs, preventing divergence with SSR markup.

## Accessibility Notes
- Include an always-visible label (`Theme`) or an associated `aria-label`/`aria-labelledby` that meets WCAG 2.1.
- Ensure the control participates in natural tab order and retains focus styles from Tailwind/DaisyUI.
- Announce the currently selected theme via the `select`'s native behavior; no additional ARIA widgets required.

## Styling
- Apply DaisyUI form-control classes (e.g., `select select-bordered`) combined with layout-specific spacing to match header chrome.
- Provide responsive alignment so the picker stays aligned in mobile view (collapse into header menu if needed later; for now align right with margin).

## Dependencies
- `getAvailableThemes`, `applyTheme`, `loadStoredTheme`, `persistTheme` helpers under `src/lib/theme`.
- Browser `window` availability; guard against SSR execution by checking `typeof window !== 'undefined'` before side effects.

## Testing Hooks
- Attach `data-testid="theme-picker"` to the `<select>` element.
- Expose currently applied theme on the `select` value and ensure the `<html>` element's `data-theme` updates to match.

## Outstanding Questions
- None.
