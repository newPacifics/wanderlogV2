import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { ALL_CONTENT } from '../../../lib/data';
import { ContentType, WordContent } from '../../../lib/types';

export default function WordDetailPage({ params }: { params: { id: string } }) {
    const item = ALL_CONTENT.find(i => i.id === params.id && i.type === ContentType.WORD);

    if (!item) {
        notFound();
    }

    const word = item as WordContent;

    return (
        <article className="max-w-3xl mx-auto py-16 px-6 md:px-12 animate-fade-in">
             <Link 
                href="/words"
                className="group flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-ink-light hover:text-ink dark:text-zinc-500 dark:hover:text-zinc-300 mb-12 transition-colors"
            >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Return
            </Link>

            <header className="mb-12 border-b border-paper-200 dark:border-zinc-800 pb-12">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-sans tracking-widest uppercase text-ink-light dark:text-zinc-500">
                    <span className={`px-2.5 py-1 rounded-sm bg-paper-200 dark:bg-zinc-800 text-ink dark:text-zinc-300 font-bold`}>
                        {item.type}
                    </span>
                    <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink dark:text-white mb-4 leading-[1.1]">
                    {item.title}
                </h1>
            </header>

            <div className="space-y-12 animate-slide-up">
                <div className="bg-paper-50 dark:bg-zinc-800/40 p-10 rounded-xl border border-paper-200 dark:border-zinc-800 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 opacity-50"></div>
                    <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-6">Definition</h3>
                    <p className="text-3xl md:text-4xl font-serif text-ink dark:text-white leading-relaxed font-medium">
                        {word.definition}
                    </p>
                </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white dark:bg-zinc-900 rounded-lg border border-paper-100 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-ink-light dark:text-zinc-500 mb-4 flex items-center gap-2">
                            Etymology
                        </h3>
                        <p className="font-serif italic text-xl text-ink dark:text-zinc-300">{word.etymology}</p>
                    </div>
                    <div className="p-8 bg-white dark:bg-zinc-900 rounded-lg border border-paper-100 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-ink-light dark:text-zinc-500 mb-4">
                            Usage
                        </h3>
                        <p className="font-serif text-xl text-ink dark:text-zinc-300">&quot;{word.usage}&quot;</p>
                    </div>
                </div>
            </div>

            {/* Tags Footer */}
            <div className="mt-20 pt-10 border-t border-paper-200 dark:border-zinc-800 flex flex-wrap gap-3">
                {item.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-100 dark:bg-zinc-800/50 text-ink-light dark:text-zinc-400 text-xs rounded-full font-sans hover:bg-paper-200 dark:hover:bg-zinc-800 transition-colors">
                        <Tag size={10} />
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

