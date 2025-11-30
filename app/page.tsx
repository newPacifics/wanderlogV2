import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { ALL_CONTENT, favorites } from '../lib/data';
import { ArrowRight } from 'lucide-react';
import { BookContent } from '../lib/types';
import { PAGES, UI_TEXT } from '../lib/constants';
import ContentCard from '../components/ContentCard';

export default function HomePage() {
    const recent = ALL_CONTENT.slice(0, 3);

    // Helper function to render content preview - always uses MDX content
    const renderContentPreview = (item: typeof ALL_CONTENT[0]) => {
        // Check if item has content property (words, posts, demos have it; books might not)
        if ('content' in item && item.content) {
            const getMDXContent = new Function(item.content);
            const MDXContent = getMDXContent({ React, ...runtime }).default;
            return <MDXContent />;
        }
        
        // Fallback for items without MDX content (legacy)
        if (item.type === 'book') {
            return <>{(item as BookContent).summary}</>;
        }
        return <>{item.description}</>;
    };

    // Helper function to render a content card
    const renderCard = (item: typeof ALL_CONTENT[0]) => {
        // Extract the slug without the collection prefix
        const slugWithoutPrefix = item.slug.split('/')[1];
        const path = `/${item.type === 'book' ? 'library' : item.type === 'demo' ? 'engineering' : item.type + 's'}/${slugWithoutPrefix}`;
        
        return (
            <ContentCard
                key={item.slug}
                label={item.type}
                date={item.date}
                title={item.title}
                preview={renderContentPreview(item)}
                href={path}
                linkWrapsCard={true}
                author={item.author}
            />
        );
    };

    return (
        <div className="max-w-10xl mx-auto py-10 px-6 md:px-12 animate-fade-in">
            <section className="mb-14">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-ink dark:text-white mb-8 tracking-tight leading-[1.1]">
                    {PAGES.home.title}
                </h1>
                <div className="prose prose-xl dark:prose-invert font-serif text-ink-light dark:text-zinc-400 max-w-2xl leading-relaxed">
                    <p>
                        {PAGES.home.intro1}
                    </p>
                </div>
            </section>

            {/* Favorites Section */}
            {favorites.length > 0 && (
                <section className="mb-20">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-light dark:text-zinc-500">Favorites</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {favorites.map(item => renderCard(item))}
                    </div>
                </section>
            )}

            {/* Recently Tended Section */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-light dark:text-zinc-500">{PAGES.home.recentlyTendedLabel}</h2>
                    <Link href="/posts" className="text-xs font-sans font-medium uppercase tracking-wider text-leaf hover:text-ink transition-colors flex items-center gap-1">
                        {UI_TEXT.buttons.viewArchive} <ArrowRight size={12} />
                    </Link>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {recent.map(item => renderCard(item))}
                </div>
            </section>
        </div>
    );
}

