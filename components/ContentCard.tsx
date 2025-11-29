import React from 'react';
import Link from 'next/link';

interface ContentCardProps {
    label: string;
    date: string;
    title: string;
    preview: React.ReactNode;
    href: string;
    linkWrapsCard: boolean;
    author?: string;
}

export default function ContentCard({ 
    label, 
    date, 
    title, 
    preview, 
    href, 
    linkWrapsCard,
    author
}: ContentCardProps) {
    const titleSection = (
        <h3 className="text-xl font-serif font-medium text-ink dark:text-zinc-200 leading-snug group-hover:text-leaf transition-colors">
            {title}
            {author && (
                <span className="text-sm text-ink-light/70 dark:text-zinc-500/70 italic font-normal ml-2">
                    by {author}
                </span>
            )}
        </h3>
    );

    const cardContent = (
        <div className="flex-1 bg-paper-50 dark:bg-zinc-800/40 p-6 rounded-xl border border-paper-200 dark:border-zinc-800 group-hover:border-leaf/30 dark:group-hover:border-leaf/30 group-hover:shadow-sm transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-leaf bg-leaf/10 px-2 py-1 rounded-sm">
                    {label}
                </span>
                <span className="text-xs font-serif text-ink-light/50">{date}</span>
            </div>
            
            {linkWrapsCard ? (
                <div className="mb-3">
                    {titleSection}
                </div>
            ) : (
                <Link href={href} className="block mb-3">
                    {titleSection}
                </Link>
            )}
            
            <div className="text-sm text-ink-light dark:text-zinc-500 line-clamp-3 leading-relaxed">
                {preview}
            </div>
        </div>
    );

    if (linkWrapsCard) {
        return (
            <Link href={href} className="group flex flex-col h-full">
                {cardContent}
            </Link>
        );
    }

    return (
        <div className="group">
            {cardContent}
        </div>
    );
}

