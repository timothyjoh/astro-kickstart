# Release Notes — Site-wide DaisyUI Theme Picker

## Summary
- Added reusable theme utilities (`src/lib/theme.ts`) to enumerate DaisyUI themes and manage persistence.
- Introduced a ThemePickerDropdown React island (`src/components/ThemePickerDropdown.tsx`) with accessible native select control.
- Mounted the picker in both global and blog layouts with pre-hydration scripts to honor stored preferences.

## Verification
- `npm run astro check`: **fails** due to legacy TypeScript issues (see `specs/002-we-need-a/logs/astro-check-post.txt`).
- `npm run build`: **fails** for the same reasons (see `specs/002-we-need-a/logs/build.txt`).
- Manual QA: pending until baseline build succeeds; preparatory plan captured in `specs/002-we-need-a/logs/manual-qa.md`.

## Follow-ups
- Resolve existing TypeScript errors in Todo demo and blog scripts to unblock build/preview for manual verification.
- Re-run delivery gates and update this document with concrete results once blockers are addressed.
