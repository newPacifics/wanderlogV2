import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { words } from '../../../.velite';
import { UI_TEXT } from '../../../lib/constants';

export default async function WordDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const word = words.find(w => w.slug === `words/${id}`);

    if (!word) {
        notFound();
    }
    
    // Create the MDX component from the content string
    const getMDXContent = new Function(word.content);
    const MDXContent = getMDXContent({ React, ...runtime }).default;

    return (
        <article className="max-w-3xl mx-auto py-16 px-6 md:px-12 animate-fade-in">
             <Link 
                href="/words"
                className="group flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-ink-light hover:text-ink dark:text-zinc-500 dark:hover:text-zinc-300 mb-12 transition-colors"
            >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {UI_TEXT.buttons.return}
            </Link>

            <header className="mb-12 border-b border-paper-200 dark:border-zinc-800 pb-12">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-sans tracking-widest uppercase text-ink-light dark:text-zinc-500">
                    <span className={`px-2.5 py-1 rounded-sm bg-paper-200 dark:bg-zinc-800 text-ink dark:text-zinc-300 font-bold`}>
                        {word.type}
                    </span>
                    <span className="flex items-center gap-1"><Calendar size={12}/> {word.date}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink dark:text-white mb-4 leading-[1.1]">
                    {word.title}
                </h1>
                
                {word.subtitle && (
                    <p className="text-xl text-ink-light dark:text-zinc-400 font-serif leading-relaxed">
                        {word.subtitle}
                    </p>
                )}
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:font-serif prose-p:text-ink dark:prose-p:text-zinc-300 animate-slide-up">
                <MDXContent />
            </div>

            {/* Tags Footer */}
            <div className="mt-20 pt-10 border-t border-paper-200 dark:border-zinc-800 flex flex-wrap gap-3">
                {word.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-100 dark:bg-zinc-800/50 text-ink-light dark:text-zinc-400 text-xs rounded-full font-sans hover:bg-paper-200 dark:hover:bg-zinc-800 transition-colors">
                        <Tag size={10} />
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

