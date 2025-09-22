# ThemePickerDropdown Contract Verification Script

## Purpose
Validate that the ThemePickerDropdown component fulfills its contract requirements for theme availability, instant application, persistence, and accessibility.

## Preconditions
- Build succeeds (`npm run build`).
- Preview server running locally (`npm run preview`).
- Browser DevTools open for local storage inspection.

## Steps
1. Navigate to the home page and locate the theme picker in the upper-right header.
2. Confirm the control is a labeled `<select>` with `data-testid="theme-picker"` and visible focus styles.
3. Open the dropdown and verify all DaisyUI themes are present; confirm alphabetical order with `light` listed first.
4. Select a theme such as `dark` and verify the change is reflected immediately across the page (background, typography, buttons).
5. Inspect the `<html>` element and confirm `data-theme="dark"` (or selected theme) is applied instantly.
6. Open DevTools → Application → Local Storage and confirm `astro-theme-preference` is set to the selected theme.
7. Refresh the page; ensure the theme remains applied and the dropdown shows the persisted selection.
8. Toggle to a second theme (e.g., `cupcake`) and repeat steps 5–7.
9. Confirm no console errors appear during interactions.

## Acceptance Criteria
- Dropdown remains keyboard-accessible (Tab + arrow keys) and screen reader announces "Theme" and selected value.
- All themes derived from DaisyUI configuration are available and ordering criteria met.
- Theme transitions happen without page reloads.
- Local storage persistence works with fallback to default when cleared.
