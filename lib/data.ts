import { ContentItem } from './types';
import { posts as rawPosts, words as rawWords, library as rawLibrary, engineering as rawEngineering } from '../.velite';
import { sortByDateDesc } from './utils';

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


