import { ContentItem } from './types';
import { posts as rawPosts, words as rawWords, library as rawLibrary, engineering as rawEngineering } from '../.velite';
import { sortByDateDesc } from './utils';
import { FAVORITE_SLUGS } from './constants';

// Export sorted collections (sorted at build time, once)
export const posts = sortByDateDesc(rawPosts);
export const words = sortByDateDesc(rawWords);
export const library = sortByDateDesc(rawLibrary);
export const engineering = sortByDateDesc(rawEngineering);

// Combine all collections into a single sorted array (build time too)
export const ALL_CONTENT: ContentItem[] = sortByDateDesc([
    ...posts,
    ...words,
    ...library,
    ...engineering,
]);

// Export favorites based on FAVORITE_SLUGS in the order defined (computed once at module load)
export const favorites = FAVORITE_SLUGS
    .map(slug => ALL_CONTENT.find(item => item.slug === slug))
    .filter((item): item is ContentItem => item !== undefined);


