import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { ALL_CONTENT } from '../../../lib/data';
import { ContentType, PostContent } from '../../../lib/types';

export default function PostDetailPage({ params }: { params: { id: string } }) {
    const item = ALL_CONTENT.find(i => i.id === params.id && i.type === ContentType.POST);

    if (!item) {
        notFound();
    }

    const post = item as PostContent;
    const accentColorText = 'text-blue-600 dark:text-blue-400';

    return (
        <article className="max-w-3xl mx-auto py-16 px-6 md:px-12 animate-fade-in">
             <Link 
                href="/posts"
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
                    <span>{post.readingTime}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink dark:text-white mb-4 leading-[1.1]">
                    {item.title}
                </h1>
            </header>

            <div className="prose prose-lg dark:prose-invert font-serif prose-blue max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:leading-loose prose-a:no-underline prose-a:border-b prose-a:border-current hover:prose-a:opacity-70 transition-all">
                <ReactMarkdown>{post.content}</ReactMarkdown>
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

