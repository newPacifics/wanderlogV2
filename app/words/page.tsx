import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { words } from '../../.velite';
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
                            className="p-6 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <Link href={`${basePath}/${wordSlug}`} className="block">
                                    <h3 className="text-xl font-serif font-bold text-ink dark:text-chalk group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                        {word.title}
                                    </h3>
                                </Link>
                                {word.tags.length > 0 && (
                                    <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-black/20 px-2 py-1 rounded">
                                        {word.tags[0]}
                                    </span>
                                )}
                            </div>
                            
                            <div className="text-xs font-sans text-slate-400 mb-2">
                                {word.date}
                            </div>
                            
                            {word.subtitle && (
                                <div className="text-sm font-sans text-slate-400 italic mb-4">
                                    {word.subtitle}
                                </div>
                            )}
                            
                            <div className="text-slate-600 dark:text-slate-300 font-serif leading-relaxed line-clamp-4 mb-4">
                                <MDXContent />
                            </div>

                            <Link 
                                href={`${basePath}/${wordSlug}`}
                                className={`inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider hover:gap-2 transition-all ${accentColor}`}
                            >
                                {UI_TEXT.buttons.readEntry} <ArrowRight size={14} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </CollectionPageContainer>
    );
}

