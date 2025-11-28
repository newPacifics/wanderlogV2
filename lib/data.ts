import { ContentItem } from './types';
import { posts, words, library, engineering } from '../.velite';

// Combine all collections into a single array
export const ALL_CONTENT: ContentItem[] = [
    ...posts,
    ...words,
    ...library,
    ...engineering,
];


