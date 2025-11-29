import React from 'react';
import { posts } from '../../lib/data';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import TimelineList from '../../components/TimelineList';

export default function PostsPage() {
    const items = posts;
    const title = PAGES.posts.title;
    const description = PAGES.posts.description;
    const accentColor = PAGES.posts.accentColor;
    const basePath = PAGES.posts.basePath;

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
                slugPrefix="posts"
            />
        </CollectionPageContainer>
    );
}

