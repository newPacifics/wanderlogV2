import React from 'react';
import Link from 'next/link';
import { ALL_CONTENT } from '../../lib/data';
import { ContentType, WordContent } from '../../lib/types';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WordsPage() {
    const items = ALL_CONTENT.filter(item => item.type === ContentType.WORD);
    const title = 'Lexicon';
    const description = 'A collection of beautiful, specific, or untranslatable words.';
    const accentColor = 'text-emerald-700 dark:text-emerald-300';
    const basePath = '/words';

    return (
        <div className="max-w-3xl mx-auto py-20 px-6 animate-fade-in">
            <header className="mb-20">
                <div className="flex items-center gap-2 mb-4 text-ink-light dark:text-zinc-500">
                    <Sparkles size={16} />
                    <span className="text-xs font-sans uppercase tracking-widest">{items.length} Entries</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 text-ink dark:text-white tracking-tight">{title}</h1>
                <p className="text-xl text-ink-light dark:text-zinc-400 font-serif leading-relaxed max-w-2xl border-l-2 border-paper-300 dark:border-zinc-700 pl-6">
                    {description}
                </p>
            </header>

            <div className="space-y-16">
                {items.length === 0 && (
                    <div className="p-12 text-center bg-paper-50 dark:bg-zinc-800/30 rounded-lg border border-paper-200 dark:border-zinc-800">
                        <p className="text-ink-light italic font-serif text-lg">The garden bed is prepared, but seeds have not yet been planted.</p>
                    </div>
                )}
                
                {items.map((item) => {
                    const word = item as WordContent;
                    return (
                        <article key={item.id} className="group relative pl-8 border-l border-paper-200 dark:border-zinc-800 hover:border-leaf/50 dark:hover:border-leaf/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-paper-200 dark:bg-zinc-800 group-hover:bg-leaf transition-colors duration-300" />
                            
                            <div className="flex flex-col gap-3 mb-3">
                                <div className="flex items-center gap-3 text-[10px] font-sans font-bold tracking-widest uppercase text-ink-light dark:text-zinc-500">
                                    <span>{item.date}</span>
                                    {item.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 rounded-sm bg-paper-100 dark:bg-zinc-800/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`${basePath}/${item.id}`} className="block">
                                    <h2 className={`text-3xl font-serif font-medium group-hover:${accentColor} transition-colors text-ink dark:text-zinc-100 leading-tight`}>
                                        {item.title}
                                    </h2>
                                </Link>
                            </div>

                            <div className="mb-3">
                                <span className="font-serif italic text-lg text-emerald-700/70 dark:text-emerald-400/70">
                                    {word.etymology}
                                </span>
                            </div>

                            <p className="text-ink-light dark:text-zinc-400 font-serif text-lg leading-relaxed line-clamp-3 mb-4">
                                {word.definition}
                            </p>

                            <Link 
                                href={`${basePath}/${item.id}`}
                                className={`inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider hover:gap-2 transition-all ${accentColor}`}
                            >
                                Read Entry <ArrowRight size={14} />
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

