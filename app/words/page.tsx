import React from 'react';
import * as runtime from 'react/jsx-runtime';
import { words } from '../../lib/data';
import { PAGES } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import EmptyState from '../../components/EmptyState';
import ContentCard from '../../components/ContentCard';

export default function WordsPage() {
    const items = words;
    const title = PAGES.words.title;
    const description = PAGES.words.description;
    const accentColor = PAGES.words.accentColor;
    const basePath = PAGES.words.basePath;

    return (
        <CollectionPageContainer>
            <CollectionPageHeader 
                title={title}
                description={description}
                itemCount={items.length}
            />

            {items.length === 0 && <EmptyState />}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((word) => {
                    // Extract the slug without the 'words/' prefix
                    const wordSlug = word.slug.replace('words/', '');
                    
                    // Create the MDX component from the content string
                    const getMDXContent = new Function(word.content);
                    const MDXContent = getMDXContent({ React, ...runtime }).default;
                    
                    return (
                        <ContentCard
                            key={word.slug}
                            label={word.tags[0]}
                            date={word.date}
                            title={word.title}
                            preview={<MDXContent />}
                            href={`${basePath}/${wordSlug}`}
                            linkWrapsCard={false}
                            author={word.author}
                        />
                    );
                })}
            </div>
        </CollectionPageContainer>
    );
}

