<!-- cfb13d56-978f-4776-a55a-7fd5d0ac3ac4 712f89ff-2523-4563-8f3a-ec580bdcf416 -->
# Refactor Words Data Shape

## Changes Overview

Transform Words from word-specific structure (definition, etymology, usage) to general content structure with MDX body content.

## 1. Update Velite Schema

**File**: [`velite.config.ts`](velite.config.ts)

Update the words collection schema (lines 19-31):

- Add `subtitle` field (optional)
- Add `content: s.mdx()` for MDX body content
- Remove `definition`, `etymology`, `usage` fields
- Keep `title`, `date`, `tags`, `slug`

## 2. Migrate MDX Files

**Files**:

- [`content/words/petrichor.mdx`](content/words/petrichor.mdx)
- [`content/words/komorebi.mdx`](content/words/komorebi.mdx)

For each file:

- Update frontmatter to only include: `title`, `subtitle` (optional), `date`, `tags`
- Move `definition` content to MDX body
- Remove `etymology` and `usage` fields

## 3. Update Words List Page

**File**: [`app/words/page.tsx`](app/words/page.tsx)

Minimal changes to prevent breakage:

- Remove references to `word.etymology` (line 61-62)
- Remove references to `word.definition` (line 65-67)
- Keep the list structure with title, date, and tags
- Optionally show `word.subtitle` if present

## 4. Update Word Detail Page

**File**: [`app/words/[id]/page.tsx`](app/words/[id]/page.tsx)

Minimal changes to prevent breakage:

- Remove the definition display section (lines 40-46)
- Remove etymology and usage sections (lines 47-60)
- Add MDX content rendering using `word.content`
- Keep header with title, date, and tags
- Keep tags footer section

## Files to Modify

- `velite.config.ts` - Schema definition
- `content/words/petrichor.mdx` - Content migration
- `content/words/komorebi.mdx` - Content migration
- `app/words/page.tsx` - Remove broken field references
- `app/words/[id]/page.tsx` - Add MDX rendering, remove old sections

## Notes

- The `lib/types.ts` file uses generated types from Velite, so it will update automatically after schema changes
- UI will be kept minimal and functional, with proper UI enhancements planned separately

### To-dos

- [ ] Update words collection schema in velite.config.ts
- [ ] Migrate petrichor.mdx to new format
- [ ] Migrate komorebi.mdx to new format
- [ ] Update words list page UI to remove broken field references
- [ ] Update word detail page to render MDX content