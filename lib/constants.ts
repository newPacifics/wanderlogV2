// Site-wide constants
export const SITE_NAME = 'wander.log';
export const SITE_TAGLINE = 'Floating logs of ideas, drafts, and experiments.';
export const SITE_COPYRIGHT = 'Wanderlog';

// Favorite content slugs
export const FAVORITE_SLUGS = [
  'words/2025-07-all-our-yesterdays',
  'engineering/2025-10-converge-high-level-design',
  'library/2014-07-common-sense',
];

// Page configurations
export const PAGES = {
  home: {
    title: '/sev/log/wander',
    intro1: '',
    recentlyTendedLabel: 'Recently Tended',
  },
  engineering: {
    title: 'Laboratory',
    description: 'Interactive experiments, algorithms, and visual code.',
    accentColor: 'text-slate-700 dark:text-slate-300',
    basePath: '/engineering',
  },
  library: {
    title: 'Library',
    description: 'Notes, summaries, and marginalia from my reading log. (auto-generated quotes)',
    accentColor: 'text-amber-700 dark:text-amber-300',
    basePath: '/library',
  },
  posts: {
    title: 'Posts',
    description: 'Reflections on design, philosophy, and the quiet structure of things.',
    accentColor: 'text-blue-700 dark:text-blue-300',
    basePath: '/posts',
  },
  words: {
    title: 'Lexicon',
    description: 'A collection of beautiful, specific, or untranslatable words.',
    accentColor: 'text-emerald-700 dark:text-emerald-300',
    basePath: '/words',
  },
} as const;

// Navigation labels
export const NAV_LABELS = {
  overview: 'Overview',
  essays: 'Posts',
  lexicon: 'Lexicon',
  library: 'Library',
  lab: 'Lab',
} as const;

// UI text constants
export const UI_TEXT = {
  emptyState: 'The garden bed is prepared, but seeds have not yet been planted.',
  buttons: {
    viewArchive: 'View Archive',
    readEntry: 'Read Entry',
    viewDemo: 'View Demo',
    return: 'Return',
  },
  labels: {
    entries: 'Entries',
    definition: 'Definition',
    etymology: 'Etymology',
    usage: 'Usage',
    instructions: 'Instructions',
    summary: 'Summary',
    quotesSection: 'Marginalia & Quotes',
    by: 'by',
  },
  theme: {
    light: 'Light Mode',
    dark: 'Dark Mode',
  },
} as const;

