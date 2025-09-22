# Theme Persistence Integration Scenario

## Objective
Ensure theme selection persists across page reloads, navigation, and storage failure conditions for both base and blog layouts.

## Scenario 1 — Persisted Theme Across Reloads
1. Start `npm run preview` and open the home page.
2. Select the `forest` theme from the picker; observe immediate UI change.
3. Reload the page and confirm `forest` remains applied and displayed in the picker.
4. Navigate to `/blog`; verify the blog layout reflects `forest` and the picker matches.
5. Return to the home page using in-app navigation and confirm the theme remains consistent.

## Scenario 2 — Storage Disabled Fallback
1. Open the site in a private/incognito window or disable local storage via DevTools Application panel.
2. Refresh the page; the layout should revert to the default `light` theme without crashing.
3. Attempt to change the theme; ensure no unhandled errors occur even if persistence is blocked.

## Scenario 3 — Storage Reset Recovery
1. With storage enabled, select the `cupcake` theme.
2. Clear the `astro-theme-preference` key from local storage.
3. Reload the page; confirm it falls back to `light` gracefully.

## Evidence to Capture
- Screenshots showing theme consistency on home and blog pages.
- Console logs (if any) that indicate storage access failures handled via fallback.
- Notes on keyboard navigation sequences used during testing.
