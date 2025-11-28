import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { ALL_CONTENT } from '../../../lib/data';
import { ContentType, DemoContent } from '../../../lib/types';
import SortingVisualizer from '../../../components/demos/SortingVisualizer';
import FractalTree from '../../../components/demos/FractalTree';

export default function DemoDetailPage({ params }: { params: { id: string } }) {
    const item = ALL_CONTENT.find(i => i.id === params.id && i.type === ContentType.DEMO);

    if (!item) {
        notFound();
    }

    const demo = item as DemoContent;

    return (
        <article className="max-w-3xl mx-auto py-16 px-6 md:px-12 animate-fade-in">
             <Link 
                href="/engineering"
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

            <div className="space-y-10 animate-slide-up">
                <p className="font-serif text-xl text-ink dark:text-zinc-300 max-w-2xl leading-relaxed">{demo.description}</p>
                
                <div className="my-12">
                     {demo.componentKey === 'sorting-viz' && <SortingVisualizer isActive={true} />}
                     {demo.componentKey === 'fractal-tree' && <FractalTree />}
                </div>

                <div className="bg-paper-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-paper-200 dark:border-zinc-800 text-sm text-ink-light dark:text-zinc-400 font-mono">
                    <strong className="text-ink dark:text-zinc-200">Instructions:</strong> {demo.instructions}
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

