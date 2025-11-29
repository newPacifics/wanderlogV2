<!-- afd5d532-cb9f-41e6-8fbb-2b393971ffdc 79841795-8c52-487a-bb31-bc25f4da8ea9 -->
# Refactor Collection Page Wrappers

## Overview

Create reusable wrapper and header components that are currently duplicated across all four collection pages (engineering, library, posts, words), standardizing on the words page sizing.

## Common Elements to Extract

### 1. Page Container

All pages share the outer container div:

```tsx
<div className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
```

Will be standardized to the words page sizing (`max-w-5xl`, `py-16`)

### 2. Page Header

All pages have identical header structure with only spacing differences:

- Sparkles icon + entry count badge
- Page title (h1) 
- Description with left border

Will standardize the bottom margin to `mb-10` (from words page)

### 3. Empty State

All pages share identical empty state component when no items exist.

## Implementation Steps

1. **Create new shared components** in `components/` directory:

   - `CollectionPageContainer.tsx` - Wrapper for the page content
   - `CollectionPageHeader.tsx` - Header with title, description, and count badge
   - `EmptyState.tsx` - Empty state message component

2. **Update [`app/engineering/page.tsx`](app/engineering/page.tsx)**:

   - Import the new shared components
   - Replace container div with `<CollectionPageContainer>`
   - Replace header section with `<CollectionPageHeader>`
   - Replace empty state with `<EmptyState>`
   - Keep existing article listing structure

3. **Update [`app/library/page.tsx`](app/library/page.tsx)**:

   - Same refactoring as engineering page
   - Keep library-specific rating stars display

4. **Update [`app/posts/page.tsx`](app/posts/page.tsx)**:

   - Same refactoring as engineering page

5. **Update [`app/words/page.tsx`](app/words/page.tsx)**:

   - Same refactoring, already uses target sizing
   - Keep grid layout structure

## Benefits

- Single source of truth for container sizing and header styling
- Any future changes to spacing, colors, or layout can be made in one place
- Maintains page-specific content rendering (timeline vs grid, ratings, etc.)