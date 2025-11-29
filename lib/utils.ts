/**
 * Sort items by date in reverse chronological order (latest first)
 * @param items Array of items with a date property
 * @returns Sorted array with most recent items first
 */
export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
    return [...items].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

