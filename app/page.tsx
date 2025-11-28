import React from 'react';
import Link from 'next/link';
import { ALL_CONTENT } from '../lib/data';
import { ArrowRight } from 'lucide-react';
import { PostContent, WordContent, BookContent, DemoContent } from '../lib/types';

export default function HomePage() {
    const recent = ALL_CONTENT.slice(0, 3);

    return (
        <div className="max-w-4xl mx-auto py-20 px-6 md:px-12 animate-fade-in">
            <section className="mb-24">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-ink dark:text-white mb-8 tracking-tight leading-[1.1]">
                    A quiet place for<br className="hidden md:block" /> loud ideas.
                </h1>
                <div className="prose prose-xl dark:prose-invert font-serif text-ink-light dark:text-zinc-400 max-w-2xl leading-relaxed">
                    <p>
                        Welcome to my digital garden. This is a space for slow thinking, curated words, and engineered artifacts.
                    </p>
                    <p>
                        Unlike a traditional blog, the goal here isn&apos;t volume, but clarity. I write to understand, code to visualize, and collect words that capture the ineffable.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-paper-200 dark:border-zinc-800">
                    <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-light dark:text-zinc-500">Recently Tended</h2>
                    <Link href="/posts" className="text-xs font-sans font-medium uppercase tracking-wider text-leaf hover:text-ink transition-colors flex items-center gap-1">
                        View Archive <ArrowRight size={12} />
                    </Link>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {recent.map(item => {
                         // Extract the slug without the collection prefix
                         const slugWithoutPrefix = item.slug.split('/')[1];
                         const path = `/${item.type === 'book' ? 'library' : item.type === 'demo' ? 'engineering' : item.type + 's'}/${slugWithoutPrefix}`;
                         
                         // Get description based on content type
                         let description = item.description;
                         if (!description && item.type === 'book') {
                             description = (item as BookContent).summary;
                         } else if (!description && item.type === 'word') {
                             description = (item as WordContent).definition;
                         }
                         
                         return (
                            <Link 
                                key={item.slug} 
                                href={path}
                                className="group flex flex-col h-full"
                            >
                                <div className="flex-1 bg-paper-50 dark:bg-zinc-800/40 p-6 rounded-xl border border-paper-200 dark:border-zinc-800 group-hover:border-leaf/30 dark:group-hover:border-leaf/30 group-hover:shadow-sm transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-leaf bg-leaf/10 px-2 py-1 rounded-sm">
                                            {item.type}
                                        </span>
                                        <span className="text-xs font-serif text-ink-light/50">{item.date}</span>
                                    </div>
                                    
                                    <h3 className="font-serif text-xl font-medium text-ink dark:text-zinc-200 mb-3 leading-snug group-hover:text-leaf transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-sm text-ink-light dark:text-zinc-500 line-clamp-3 leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

