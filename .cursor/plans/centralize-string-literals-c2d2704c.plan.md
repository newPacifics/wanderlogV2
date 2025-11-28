<!-- c2d2704c-1bd0-4a55-b7aa-e35814289251 4218b51d-b26d-42c9-8767-ba5f5cceec83 -->
# Centralize String Literals into constants.ts

## Overview

Extract all hardcoded string literals from components into a centralized `lib/constants.ts` file with a mixed organizational structure (nested objects for page configs, simpler groupings for UI elements).

## Implementation Steps

### 1. Create [`lib/constants.ts`](lib/constants.ts)

Create a new constants file with the following structure:

**Site-wide constants:**

- `SITE_NAME`: "Lumina"
- `SITE_TAGLINE`: "A digital garden of thoughts, silence, and code."
- `SITE_COPYRIGHT`: "Lumina Digital Garden"

**Page configurations (nested by section):**

- `PAGES.home` - title, hero text, introduction paragraphs
- `PAGES.engineering` - title, description, accent color, base path
- `PAGES.library` - title, description, accent color, base path
- `PAGES.posts` - title, description, accent color, base path
- `PAGES.words` - title, description, accent color, base path

**Navigation items:**

- `NAV_LABELS` - labels for sidebar navigation items

**UI text constants:**

- `UI_TEXT.emptyState` - empty state message
- `UI_TEXT.buttons` - button labels (View Archive, Read Entry, View Demo, Return, etc.)
- `UI_TEXT.labels` - section labels (Entries, Definition, Etymology, Usage, Instructions, etc.)
- `UI_TEXT.theme` - Light Mode / Dark Mode
- `UI_TEXT.quotesSection` - "Marginalia & Quotes"
- `UI_TEXT.summarySection` - "Summary"

### 2. Update components to use constants

Update the following files to import and use the centralized constants:

**Core layout files:**

- [`app/page.tsx`](app/page.tsx) - home page hero and intro
- [`app/layout-client.tsx`](app/layout-client.tsx) - site name and footer
- [`components/Sidebar.tsx`](components/Sidebar.tsx) - site name, tagline, nav labels, theme toggle

**List pages:**

- [`app/engineering/page.tsx`](app/engineering/page.tsx)
- [`app/library/page.tsx`](app/library/page.tsx)
- [`app/posts/page.tsx`](app/posts/page.tsx)
- [`app/words/page.tsx`](app/words/page.tsx)

**Detail pages:**

- [`app/words/[id]/page.tsx`](app/words/[id]/page.tsx)
- [`app/posts/[id]/page.tsx`](app/posts/[id]/page.tsx)
- [`app/engineering/[id]/page.tsx`](app/engineering/[id]/page.tsx)
- [`app/library/[id]/page.tsx`](app/library/[id]/page.tsx)

### 3. Verify consistency

Ensure all string literals are properly replaced and the application functions identically to before the refactoring.

### To-dos

- [x] Create lib/constants.ts with all string literals organized
- [x] Update app/page.tsx to use constants
- [x] Update app/layout-client.tsx to use constants
- [x] Update components/Sidebar.tsx to use constants
- [ ] Update all list pages (engineering, library, posts, words) to use constants
- [ ] Update all detail pages to use constants