import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { words } from '../../lib/data';
import { ArrowRight } from 'lucide-react';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import EmptyState from '../../components/EmptyState';

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
                        <div 
                            key={word.slug} 
                            className="p-6 rounded-xl bg-paper-50 dark:bg-zinc-800/40 border border-paper-200 dark:border-zinc-800 hover:border-leaf/30 dark:hover:border-leaf/30 hover:shadow-sm transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-leaf bg-leaf/10 px-2 py-1 rounded-sm">
                                    {word.tags[0]}
                                </span>
                                <span className="text-xs font-serif text-ink-light/50">{word.date}</span>
                            </div>
                            
                            <Link href={`${basePath}/${wordSlug}`} className="block mb-3">
                                <h3 className="text-xl font-serif font-medium text-ink dark:text-zinc-200 leading-snug group-hover:text-leaf transition-colors">
                                    {word.title}
                                </h3>
                            </Link>
                            
                            {word.subtitle && (
                                <div className="text-sm font-sans text-ink-light dark:text-zinc-500 italic mb-3">
                                    {word.subtitle}
                                </div>
                            )}
                            
                            <div className="text-sm text-ink-light dark:text-zinc-500 line-clamp-3 leading-relaxed">
                                {word.description || <MDXContent />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </CollectionPageContainer>
    );
}

