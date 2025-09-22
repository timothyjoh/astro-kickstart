# Phase 0 Research — Homepage Demo Cards

## Card Layout Pattern
- **Decision**: Reuse the Preline-style card shell (`bg-white shadow-lg rounded-lg p-5`) with a simplified grid that renders two cards under the hero using Tailwind utilities already present in `IconCards.astro`.
- **Rationale**: Keeps visual style consistent with existing demo cards while allowing a tighter layout suited to only two entries; avoids introducing bespoke CSS.
- **Alternatives Considered**:
  - **Custom CSS box** similar to the hero "news" link — rejected because it breaks the Tailwind-first styling direction.
  - **Full import of `IconCards.astro`** — rejected since it renders six hard-coded cards and would require more refactoring than necessary.

## Icon Strategy
- **Decision**: Embed inline SVG icons within each card, marked `aria-hidden="true"` and paired with descriptive text in the heading/description.
- **Rationale**: Inline SVGs mirror the pattern already used for hero links, require no additional assets, and keep icons tightly coupled to card semantics while remaining accessible.
- **Alternatives Considered**:
  - **External icon font or component library** — rejected to avoid new dependencies and keep bundle minimal.
  - **Raster images from `public/`** — rejected because vector icons scale better and avoid additional asset management.

## Responsive Placement
- **Decision**: Wrap the cards in a centered container with `max-w` constraints and `gap` utilities, using `grid` with `md:grid-cols-2` and `gap-6` to stack on small viewports and sit side-by-side on larger screens.
- **Rationale**: Matches responsive behavior from existing Preline sections and satisfies spec requirement for stacked layout on small screens without custom CSS.
- **Alternatives Considered**:
  - **Flexbox row with media queries** — rejected since Tailwind grid utilities already provide the needed responsiveness with less code.
  - **Three-column grid with empty placeholder** — rejected because it adds unnecessary DOM nodes and complicates accessibility.

## Implementation Notes
- **Container classes**: `max-w-3xl mx-auto px-4 sm:px-6 lg:px-8` for section wrapper derived from Preline container sizing.
- **Grid classes**: `grid gap-6 md:grid-cols-2` to stack on mobile and split into two columns on medium screens.
- **Card shell**: `bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`.
- **Icon badge**: `inline-flex justify-center items-center w-14 h-14 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800`.
- **Icon styling**: `w-6 h-6 text-blue-600 dark:text-blue-400` with `aria-hidden="true"`.
- **Text stack**: `text-lg font-semibold text-gray-800 dark:text-white` for headings; `text-gray-600 dark:text-neutral-400` for descriptions; add `space-y-1` inside each card body for consistent rhythm.

