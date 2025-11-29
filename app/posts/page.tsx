import React from 'react';
import * as runtime from 'react/jsx-runtime';
import { posts } from '../../lib/data';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import TimelineList from '../../components/TimelineList';
import { Post } from '../../.velite';

export default function PostsPage() {
    const items = posts;
    const title = PAGES.posts.title;
    const description = PAGES.posts.description;
    const accentColor = PAGES.posts.accentColor;
    const basePath = PAGES.posts.basePath;

    // Render MDX content preview with fade effect
    const renderDescription = (item: Record<string, unknown>) => {
        const post = item as Post;
        // Check if item has content property
        if ('content' in post && post.content && typeof post.content === 'string') {
            const getMDXContent = new Function(post.content);
            const MDXContent = getMDXContent({ React, ...runtime }).default;
            
            return (
                <div className="relative mb-4">
                    <div className="line-clamp-4 prose dark:prose-invert text-ink-light dark:text-zinc-400 leading-relaxed">
                        <MDXContent />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-paper-100 dark:from-zinc-900 to-transparent pointer-events-none" />
                </div>
            );
        }
        
        // Fallback for items without content
        return (
            <p className="text-ink-light dark:text-zinc-400 font-serif text-lg leading-relaxed line-clamp-3 mb-4">
                {post.description || ''}
            </p>
        );
    };

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
                renderDescription={renderDescription} 
            />
        </CollectionPageContainer>
    );
}

