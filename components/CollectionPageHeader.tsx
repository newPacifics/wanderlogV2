import React from 'react';
import { Sparkles } from 'lucide-react';
import { UI_TEXT } from '../lib/constants';

interface CollectionPageHeaderProps {
    title: string;
    description: string;
    itemCount: number;
}

export default function CollectionPageHeader({ title, description, itemCount }: CollectionPageHeaderProps) {
    return (
        <header className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-ink-light dark:text-zinc-500">
                <Sparkles size={16} />
                <span className="text-xs font-sans uppercase tracking-widest">{itemCount} {UI_TEXT.labels.entries}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 text-ink dark:text-white tracking-tight">{title}</h1>
            <p className="text-xl text-ink-light dark:text-zinc-400 font-serif leading-relaxed max-w-2xl border-l-2 border-paper-300 dark:border-zinc-700 pl-6">
                {description}
            </p>
        </header>
    );
}

