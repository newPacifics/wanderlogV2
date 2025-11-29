<!-- 79e8a59a-bdbd-4ca7-9ce7-03d4bf5beaf3 2ff3466c-700c-43e0-b1d6-c4b56a13f9d1 -->
# Refactor Content Cards

## Overview

Extract the duplicated card UI from Overview and Words pages into a shared `ContentCard` component while keeping data logic isolated. Unify all content previews to use MDX rendering instead of description/summary fields.

## Changes

### 1. Create ContentCard Component

Create [`components/ContentCard.tsx`](components/ContentCard.tsx) with:

- Props: `label`, `date`, `title`, `preview` (ReactNode), `href`, `linkWrapsCard` (boolean)
- Reusable card UI with all current styling
- Two link behaviors:
- `linkWrapsCard={true}`: Link wraps entire card (Overview style)
- `linkWrapsCard={false}`: Link only wraps title (Words style)

### 2. Update Overview Page ([`app/page.tsx`](app/page.tsx))

- Import and use the new `ContentCard` component
- Change `renderContentPreview` to always render MDX content for ALL content types (not just words)
- Remove the conditional logic that uses `description` or `summary` fields
- Pass `linkWrapsCard={true}` to maintain current full-card link behavior
- Pass `item.type` as the `label` prop

### 3. Update Words Page ([`app/words/page.tsx`](app/words/page.tsx))

- Import and use the new `ContentCard` component
- Remove the subtitle rendering logic (lines 55-59)
- Pass `linkWrapsCard={false}` to maintain current title-only link behavior
- Pass `word.tags[0] `as the `label` prop
- Render MDX content as preview

## Key Design Decisions

1. **Data logic stays isolated**: Each page still handles its own data mapping (label, date extraction, preview generation)
2. **MDX-first approach**: All content types now render their MDX content in previews, not frontmatter fields
3. **Flexible link behavior**: Component supports both link styles via a boolean prop
4. **No subtitle**: Removed from Words page as requested (legacy field)

## Files Changed

- New: [`components/ContentCard.tsx`](components/ContentCard.tsx)
- Modified: [`app/page.tsx`](app/page.tsx)
- Modified: [`app/words/page.tsx`](app/words/page.tsx)

### To-dos

- [ ] Create ContentCard component with flexible link behavior
- [ ] Update Overview to use ContentCard with MDX-first previews
- [ ] Update Words page to use ContentCard without subtitle