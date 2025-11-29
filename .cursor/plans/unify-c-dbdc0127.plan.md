<!-- dbdc0127-e74c-4120-a981-d010d8c6ede8 870beeef-efd9-4061-a474-abc6e44d62cd -->
# Unify Collection Lists Component

## Overview

Consolidate the nearly identical timeline list implementations from Library, Posts, and Engineering pages into a single reusable `TimelineList` component. 

## Current State

- **Library, Posts, Engineering**: ~95% duplicate code (lines 25-75 in each file)
- Same timeline design with left border, date badges, tags display
- Minor differences: button text, data-specific fields (Library has rating/author)
- **Words page**: Already uses `ContentCard` component (grid layout) - no changes needed

## Implementation Steps

### 1. Create `TimelineList` Component

Create [`components/TimelineList.tsx`](components/TimelineList.tsx) with:

- Generic props interface accepting any content item type
- Configurable fields: `basePath`, `accentColor`, button text
- Support for optional custom content (for Library's rating display)
- Render function prop pattern for flexibility

**Key features:**

- Handle slug extraction logic
- Timeline UI with left border and animated dot
- Date and tags display
- Title with hover effects
- Description/summary display
- Call-to-action link button

### 2. Update Collection Pages

Refactor [`app/library/page.tsx`](app/library/page.tsx), [`app/posts/page.tsx`](app/posts/page.tsx), and [`app/engineering/page.tsx`](app/engineering/page.tsx):

- Replace duplicate `<div className="space-y-16">` blocks with `<TimelineList />`
- Pass collection-specific data and configuration
- For Library: pass custom render function for rating stars

### 3. Keep Words Page Unchanged

[`app/words/page.tsx`](app/words/page.tsx) uses a different layout pattern (grid with ContentCard), so no changes needed.

## Expected Outcome

- **~240 lines** of duplicate code reduced to **~1 reusable component**
- Future timeline refinements apply to all 3 pages at once
- Cleaner, more maintainable codebase
- No visual changes to the UI

### To-dos

- [ ] Create TimelineList component with flexible props and render patterns
- [ ] Refactor Library page to use TimelineList component
- [ ] Refactor Posts page to use TimelineList component
- [ ] Refactor Engineering page to use TimelineList component