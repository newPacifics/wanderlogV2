import React from 'react';
import Link from 'next/link';
import { library } from '../../.velite';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { PAGES, UI_TEXT } from '../../lib/constants';

export default function LibraryPage() {
    const items = library;
    const title = PAGES.library.title;
    const description = PAGES.library.description;
    const accentColor = PAGES.library.accentColor;
    const basePath = PAGES.library.basePath;

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

            <div className="space-y-16">
                {items.length === 0 && (
                    <div className="p-12 text-center bg-paper-50 dark:bg-zinc-800/30 rounded-lg border border-paper-200 dark:border-zinc-800">
                        <p className="text-ink-light italic font-serif text-lg">{UI_TEXT.emptyState}</p>
                    </div>
                )}
                
                {items.map((book) => {
                    // Extract the slug without the 'library/' prefix
                    const bookSlug = book.slug.replace('library/', '');
                    
                    return (
                        <article key={book.slug} className="group relative pl-8 border-l border-paper-200 dark:border-zinc-800 hover:border-leaf/50 dark:hover:border-leaf/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-paper-200 dark:bg-zinc-800 group-hover:bg-leaf transition-colors duration-300" />
                            
                            <div className="flex flex-col gap-3 mb-3">
                                <div className="flex items-center gap-3 text-[10px] font-sans font-bold tracking-widest uppercase text-ink-light dark:text-zinc-500">
                                    <span>{book.date}</span>
                                    {book.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 rounded-sm bg-paper-100 dark:bg-zinc-800/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`${basePath}/${bookSlug}`} className="block">
                                    <h2 className={`text-3xl font-serif font-medium group-hover:${accentColor} transition-colors text-ink dark:text-zinc-100 leading-tight`}>
                                        {book.title}
                                    </h2>
                                </Link>
                            </div>

                            <div className="flex items-center gap-1 text-amber-500/80 mb-3">
                                {Array.from({ length: book.rating }).map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                                <span className="text-sm text-ink-light dark:text-zinc-500 ml-2 font-serif italic">
                                    {UI_TEXT.labels.by} {book.author}
                                </span>
                            </div>

                            <p className="text-ink-light dark:text-zinc-400 font-serif text-lg leading-relaxed line-clamp-3 mb-4">
                                {book.summary?.substring(0, 150) + '...'}
                            </p>

                            <Link 
                                href={`${basePath}/${bookSlug}`}
                                className={`inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider hover:gap-2 transition-all ${accentColor}`}
                            >
                                {UI_TEXT.buttons.readEntry} <ArrowRight size={14} />
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

