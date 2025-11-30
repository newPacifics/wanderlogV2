<!-- 7fbcb800-8aeb-498a-9102-6470078e3da2 50051b8c-e4d2-409a-9c79-43788b755c13 -->
# Update Navigation and Tag Styling

## Changes Overview

### 1. Change Lab Tab Color (Light Red)

In [`components/Sidebar.tsx`](components/Sidebar.tsx), line 80, change the DEMO (Lab) tab color from slate (gray-blue) to a light red color scheme:

- **Current**: `bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100`
- **New**: `bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-100`

This will match the pattern of other tabs (Posts=blue, Lexicon=emerald, Library=amber, Lab=red).

### 2. Color-Code Tags to Match Tabs

In [`components/ContentCard.tsx`](components/ContentCard.tsx), line 37, replace the generic `leaf` color tag with dynamic colors based on the content type:

- **Posts** → Blue: `bg-blue-50 text-blue-900`
- **Lexicon** → Emerald: `bg-emerald-50 text-emerald-900`
- **Library** → Amber: `bg-amber-50 text-amber-900`
- **Lab/Demo** → Red: `bg-red-50 text-red-900`

Will need to:

- Accept the `label` prop and map it to appropriate colors
- Create a mapping function or conditional logic to determine the background and text colors
- Apply dark mode variants as well

### 3. Remove Section Dividers

In [`app/page.tsx`](app/page.tsx):

- Line 65: Remove `border-b border-paper-200 dark:border-zinc-800` from Favorites section header
- Line 77: Remove `border-b border-paper-200 dark:border-zinc-800` from Recently Tended section header

Keep the flex layout but remove the horizontal border styling.