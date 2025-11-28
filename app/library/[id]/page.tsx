import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, Quote } from 'lucide-react';
import { ALL_CONTENT } from '../../../lib/data';
import { ContentType, BookContent } from '../../../lib/types';

export default function BookDetailPage({ params }: { params: { id: string } }) {
    const item = ALL_CONTENT.find(i => i.id === params.id && i.type === ContentType.BOOK);

    if (!item) {
        notFound();
    }

    const book = item as BookContent;

    return (
        <article className="max-w-3xl mx-auto py-16 px-6 md:px-12 animate-fade-in">
             <Link 
                href="/library"
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
                
                <p className="text-2xl font-serif italic text-amber-700/80 dark:text-amber-400/80 mt-4">
                    by {book.author}
                </p>
            </header>

            <div className="space-y-12 animate-slide-up">
                <div className="flex flex-col gap-6">
                     <div className="prose prose-lg dark:prose-invert font-serif prose-amber max-w-none">
                        <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light dark:text-zinc-500 mb-4">Summary</h3>
                        <p className="lead">{book.summary}</p>
                    </div>
                </div>
                
                {book.quotes.length > 0 && (
                    <div className="space-y-8">
                        <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light dark:text-zinc-500 border-b border-paper-200 dark:border-zinc-800 pb-4">
                            Marginalia & Quotes
                        </h3>
                        <div className="grid gap-6">
                        {book.quotes.map((quote, idx) => (
                            <blockquote key={idx} className="relative p-8 bg-amber-50/30 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                                <Quote className="absolute top-6 left-6 text-amber-200 dark:text-amber-800/50" size={48} />
                                <p className="relative z-10 font-serif text-xl italic text-ink-light dark:text-zinc-300 pl-4">{quote}</p>
                            </blockquote>
                        ))}
                        </div>
                    </div>
                )}
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

