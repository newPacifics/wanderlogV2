<!-- 36d31c80-7884-49f4-b001-d9164c51db1c a66cdecf-7e35-43ad-b6b6-1b2f78f470b3 -->
# Upgrade Words Hub Page UI

## Overview

Replace the current timeline/list layout in [`app/words/page.tsx`](app/words/page.tsx) with a modern 2-column grid layout featuring card-based design.

## Changes Required

### Update [`app/words/page.tsx`](app/words/page.tsx)

1. **Replace the list container** (lines 27-74) with the grid layout:

- Change from `<div className="space-y-16">` to `<div className="grid grid-cols-1 md:grid-cols-2 gap-6">`
- Remove the timeline-style article structure with left border and dots

2. **Update card structure** for each word:

- Replace the `<article>` element with a `<div>` using the prototype's card styling
- Apply hover effects: `hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md`
- Use white background with subtle borders: `bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5`

3. **Restructure card content**:

- **Header row**: Display title and first tag side-by-side with `justify-between`
- **Title**: Keep as clickable link, use serif font with group hover effect
- **Tag badge**: Display `word.tags[0]` with monospace font in a rounded badge
- **Date**: Display below title/tag with appropriate styling
- **Subtitle**: Show in italic text below the date (if exists)
- **Content**: Render the MDX content with truncation (use `line-clamp-3` or similar Tailwind utility)
- **Read Entry button**: Keep at the bottom of each card with arrow icon

4. **Remove timeline elements**:

- Timeline dots and left border styling only
- Keep the date and "Read Entry" button (moved to card layout)

5. **Keep existing**:

- Header section with title, description, and entry count (lines 16-25)
- Empty state handling (lines 28-32)
- Link structure to individual word pages

## Data Mapping

- `word.slug` → use as key and for link href
- `word.title` → card title
- `word.tags[0]` → tag badge in top-right
- `word.subtitle` → italic subtitle text
- `word.content` → MDX content rendered in paragraph