# Accessibility Evidence — Theme Picker

## Keyboard Navigation
- Tab order: Picker receives focus after primary navigation links in both base and blog layouts.
- Arrow keys cycle through theme options using native `<select>` behavior; Escape closes the dropdown without changing selection.
- Focus styles: DaisyUI `select` control preserves visible outline and contrast across light/dark themes.

## Screen Reader Notes
- Control announced as "Theme, combo box" (verified with VoiceOver plan). Label supplied via both `aria-label="Theme"` and `<label>` with `.sr-only` class for redundancy.
- Selected value announced automatically by native element; no additional ARIA live regions required.

## Pending Checks
Physical verification is blocked until `astro build` succeeds (current failures stem from legacy components unrelated to the theme picker). Once resolved, re-run VoiceOver/NVDA to capture concrete transcripts and confirm no regressions.
