import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EmptyState from './EmptyState';

interface TimelineItem {
    slug: string;
    date: string;
    title: string;
    tags: string[];
    description?: string;
    summary?: string;
    [key: string]: any;
}

interface TimelineListProps {
    items: TimelineItem[];
    basePath: string;
    accentColor: string;
    buttonText: string;
    slugPrefix: string;
    renderCustomContent?: (item: TimelineItem) => React.ReactNode;
    renderDescription?: (item: TimelineItem) => React.ReactNode;
}

export default function TimelineList({
    items,
    basePath,
    accentColor,
    buttonText,
    slugPrefix,
    renderCustomContent,
    renderDescription,
}: TimelineListProps) {
    return (
        <div className="space-y-20">
            {items.length === 0 && <EmptyState />}
            
            {items.map((item) => {
                // Extract the slug without the prefix
                const itemSlug = item.slug.replace(`${slugPrefix}/`, '');
                
                return (
                    <article key={item.slug} className="group relative pl-8 border-l-2 border-paper-200 dark:border-zinc-800 hover:border-leaf/50 dark:hover:border-leaf/50 transition-all duration-300 -ml-px">
                        <div className="absolute -left-[7px] top-0 w-[13px] h-[13px] rounded-full bg-paper-200 dark:bg-zinc-800 group-hover:bg-leaf group-hover:scale-110 transition-all duration-300 ring-4 ring-paper-100 dark:ring-zinc-900" />
                        
                        <div className="group-hover:bg-paper-50/50 dark:group-hover:bg-zinc-800/20 -ml-4 pl-4 -mr-4 pr-4 py-2 rounded-lg transition-colors duration-300">
                            <div className="flex flex-col gap-3 mb-3">
                            <div className="flex items-center gap-3 text-[10px] font-sans font-bold tracking-widest uppercase text-ink-light dark:text-zinc-500">
                                <span>{item.date}</span>
                                {item.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-1.5 py-0.5 rounded-sm bg-paper-100/50 dark:bg-zinc-800/30 text-ink-light/40 dark:text-zinc-500/40">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link href={`${basePath}/${itemSlug}`} className="block">
                                <h2 className={`text-3xl font-serif font-medium group-hover:${accentColor} transition-colors text-ink dark:text-zinc-100 leading-tight`}>
                                    {item.title}
                                </h2>
                            </Link>
                        </div>

                        {renderCustomContent && renderCustomContent(item)}

                        {renderDescription ? (
                            renderDescription(item)
                        ) : (
                            <p className="text-ink-light dark:text-zinc-400 font-serif text-lg leading-relaxed line-clamp-3 mb-4">
                                {item.description || (item.summary ? item.summary.substring(0, 150) + '...' : '')}
                            </p>
                        )}

                        <Link 
                            href={`${basePath}/${itemSlug}`}
                            className={`inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider hover:gap-2 transition-all ${accentColor}`}
                        >
                            {buttonText} <ArrowRight size={14} />
                        </Link>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

