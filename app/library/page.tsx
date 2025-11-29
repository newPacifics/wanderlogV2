import React from 'react';
import { library } from '../../lib/data';
import { Star } from 'lucide-react';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import TimelineList from '../../components/TimelineList';
import { Book } from '../../.velite';

export default function LibraryPage() {
    const items = library;
    const title = PAGES.library.title;
    const description = PAGES.library.description;
    const accentColor = PAGES.library.accentColor;
    const basePath = PAGES.library.basePath;

    return (
        <CollectionPageContainer>
            <CollectionPageHeader 
                title={title}
                description={description}
                itemCount={items.length}
            />

            <TimelineList
                items={items}
                basePath={basePath}
                accentColor={accentColor}
                buttonText={UI_TEXT.buttons.readEntry}
                slugPrefix="library"
                renderCustomContent={(item) => {
                    const book = item as Book;
                    return (
                        <div className="flex items-center gap-1 text-amber-500/80 mb-3">
                            {Array.from({ length: book.rating }).map((_, i) => (
                                <Star key={i} size={12} fill="currentColor" />
                            ))}
                            <span className="text-sm text-ink-light dark:text-zinc-500 ml-2 font-serif italic">
                                {UI_TEXT.labels.by} {book.author}
                            </span>
                        </div>
                    );
                }}
            />
        </CollectionPageContainer>
    );
}

