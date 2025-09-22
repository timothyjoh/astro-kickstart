# Quickstart — Site-wide DaisyUI Theme Picker

## Prerequisites
- Ensure dependencies installed: `npm install`
- Verify `.env` includes `PUBLIC_INSTANTDB_APP_ID` if running the Todo demo (unchanged by this feature)

## Build & Verification Commands
1. `npm run astro check`
2. `npm run build`
3. `npm run preview`

Document the command outcomes in the PR description.

## Manual QA Checklist
- Start preview server (`npm run preview`) and open the home page.
- Confirm the theme picker appears in the upper-right corner with `light` selected by default.
- Switch to at least three different themes (e.g., `dark`, `cupcake`, `forest`) and ensure the entire site restyles instantly.
- Reload the page; verify the last selected theme persists and is reflected in both UI and page styling.
- Open a blog post route and confirm the picker shows the persisted theme and still switches themes site-wide.
- Disable local storage (DevTools -> Storage disable) or test in private browsing; ensure the site falls back to `light` without console errors.
- Navigate with keyboard (Tab/Shift+Tab) to ensure the picker is reachable and retains visible focus.

## Accessibility Spot Checks
- Use VoiceOver/NVDA to ensure the picker is announced as "Theme" with the current value.
- Confirm arrow keys cycle through options while announcing the selection.

## Rollback Plan
- Revert layout changes and remove the theme picker component; ensure default `data-theme="light"` remains in layouts.
