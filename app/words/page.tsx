import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { words } from '../../.velite';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PAGES, UI_TEXT } from '../../lib/constants';

export default function WordsPage() {
    const items = words;
    const title = PAGES.words.title;
    const description = PAGES.words.description;
    const accentColor = PAGES.words.accentColor;
    const basePath = PAGES.words.basePath;

    return (
        <div className="max-w-3xl mx-auto py-20 px-6 animate-fade-in">
            <header className="mb-20">
                <div className="flex items-center gap-2 mb-4 text-ink-light dark:text-zinc-500">
                    <Sparkles size={16} />
                    <span className="text-xs font-sans uppercase tracking-widest">{items.length} {UI_TEXT.labels.entries}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 text-ink dark:text-white tracking-tight">{title}</h1>
                <p className="text-xl text-ink-light dark:text-zinc-400 font-serif leading-relaxed max-w-2xl border-l-2 border-paper-300 dark:border-zinc-700 pl-6">
                    {description}
                </p>
            </header>

            {items.length === 0 && (
                <div className="p-12 text-center bg-paper-50 dark:bg-zinc-800/30 rounded-lg border border-paper-200 dark:border-zinc-800">
                    <p className="text-ink-light italic font-serif text-lg">{UI_TEXT.emptyState}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            
                            <div className="text-slate-600 dark:text-slate-300 font-serif leading-relaxed line-clamp-3 mb-4">
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
        </div>
    );
}

