import { defineConfig, defineCollection, s } from 'velite';

// Define the posts collection
const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.string(),
    tags: s.array(s.string()),
    readingTime: s.string(),
    description: s.string().optional(),
    content: s.mdx(),
    slug: s.path(),
  }).transform(data => ({ ...data, type: 'post' as const })),
});

// Define the words collection
const words = defineCollection({
  name: 'Word',
  pattern: 'words/**/*.mdx',
  schema: s.object({
    title: s.string(),
    subtitle: s.string().optional(),
    date: s.string(),
    tags: s.array(s.string()),
    content: s.mdx(),
    slug: s.path(),
  }).transform(data => ({ ...data, type: 'word' as const, description: data.subtitle })),
});

// Define the library (books) collection
const library = defineCollection({
  name: 'Book',
  pattern: 'library/**/*.mdx',
  schema: s.object({
    title: s.string(),
    author: s.string(),
    date: s.string(),
    tags: s.array(s.string()),
    rating: s.number(),
    summary: s.string(),
    quotes: s.array(s.string()),
    slug: s.path(),
  }).transform(data => ({ ...data, type: 'book' as const, description: data.summary })),
});

// Define the engineering (demos) collection
const engineering = defineCollection({
  name: 'Demo',
  pattern: 'engineering/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.string(),
    tags: s.array(s.string()),
    componentKey: s.string(),
    description: s.string(),
    instructions: s.string(),
    slug: s.path(),
  }).transform(data => ({ ...data, type: 'demo' as const })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, words, library, engineering },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});

