<!-- aa802d53-6af9-43d0-bfab-bacb35c164d2 a508d81f-0f6b-4a3b-99f2-bb51c06303d0 -->
# MDX Migration with Velite

## Overview

Migrate from the hardcoded TypeScript data in [`lib/data.ts`](lib/data.ts) to a file-system based approach using **Velite** (modern, actively maintained Contentlayer alternative) with MDX files and YAML frontmatter.

## Content Structure

### Folder Organization

```
content/
├── posts/           # Essays (ContentType.POST)
│   ├── architecture-of-silence.mdx
│   └── digital-gardens-vs-blogs.mdx
├── words/           # Word definitions (ContentType.WORD)
│   ├── komorebi.mdx
│   └── petrichor.mdx
├── library/         # Books (ContentType.BOOK)
│   ├── timeless-way-of-building.mdx
│   └── thinking-fast-and-slow.mdx
└── engineering/     # Demos (ContentType.DEMO)
    ├── algorithmic-harmony.mdx
    └── recursive-tree.mdx
```

### Frontmatter Schema by Type

**Posts**: title, date, tags, readingTime, description

**Words**: title, date, tags, definition, etymology, usage

**Books**: title, author, date, tags, rating, summary, quotes (array)

**Demos**: title, date, tags, componentKey, description, instructions

## Implementation Steps

### 1. Install Velite

Install `velite` package as dev dependency

### 2. Configure Velite

Create [`velite.config.ts`](velite.config.ts) with collection definitions:

- Define `posts`, `words`, `library`, `engineering` collections using zod schemas
- Each collection maps to content folder and content type
- Configure MDX processing with rehype/remark plugins
- Set output to `.velite` directory

### 3. Integrate with Next.js

Update [`next.config.ts`](next.config.ts) to trigger Velite builds during dev/build

### 4. Migrate Content Files

Create MDX files for all 8 content items from [`lib/data.ts`](lib/data.ts):

- 2 posts → `content/posts/*.mdx`
- 2 words → `content/words/*.mdx`
- 2 books → `content/library/*.mdx`
- 2 demos → `content/engineering/*.mdx`

Each file gets YAML frontmatter + body content (for posts/books)

### 5. Update Type Definitions

Modify [`lib/types.ts`](lib/types.ts) to import and re-export Velite-generated types from `.velite`

### 6. Replace Data Access Layer

Update [`lib/data.ts`](lib/data.ts) to import collections from `.velite` instead of hardcoded array

### 7. Update All Page Components

Modify pages to use Velite's generated data and MDX:

- [`app/posts/page.tsx`](app/posts/page.tsx) and [`app/posts/[id]/page.tsx`](app/posts/[id]/page.tsx)
- [`app/words/page.tsx`](app/words/page.tsx) and [`app/words/[id]/page.tsx`](app/words/[id]/page.tsx)
- [`app/library/page.tsx`](app/library/page.tsx) and [`app/library/[id]/page.tsx`](app/library/[id]/page.tsx)
- [`app/engineering/page.tsx`](app/engineering/page.tsx) and [`app/engineering/[id]/page.tsx`](app/engineering/[id]/page.tsx)

Use `MDXContent` component from Velite for rendering

### 8. Update Build Configuration

Update [`package.json`](package.json) scripts to ensure Velite runs during build

Add `.velite` to [`.gitignore`](.gitignore)

## Key Benefits

- **Modern**: Velite is built for Next.js App Router with full TypeScript support
- **Fast**: Optimized build performance and caching
- **Type-safe**: Auto-generates TypeScript types with zod schemas
- **Scalable**: Content as flat files, easy to edit and version control
- **Flexible**: YAML frontmatter for metadata, MDX for rich content
- **Actively maintained**: Regular updates and community support

### To-dos

- [ ] Install velite package as dev dependency
- [ ] Create velite.config.ts with collection schemas
- [ ] Update next.config.ts to integrate Velite
- [ ] Create content/ folder and migrate 8 MDX files
- [ ] Update lib/types.ts to use Velite-generated types
- [ ] Replace lib/data.ts with Velite imports
- [ ] Update all page components to use Velite data and MDX
- [ ] Update .gitignore and package.json scripts