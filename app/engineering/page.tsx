import React from 'react';
import Link from 'next/link';
import { engineering } from '../../.velite';
import { ArrowRight } from 'lucide-react';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import EmptyState from '../../components/EmptyState';

export default function EngineeringPage() {
    const items = engineering;
    const title = PAGES.engineering.title;
    const description = PAGES.engineering.description;
    const accentColor = PAGES.engineering.accentColor;
    const basePath = PAGES.engineering.basePath;

    return (
        <CollectionPageContainer>
            <CollectionPageHeader 
                title={title}
                description={description}
                itemCount={items.length}
            />

            <div className="space-y-16">
                {items.length === 0 && <EmptyState />}
                
                {items.map((demo) => {
                    // Extract the slug without the 'engineering/' prefix
                    const demoSlug = demo.slug.replace('engineering/', '');
                    
                    return (
                        <article key={demo.slug} className="group relative pl-8 border-l border-paper-200 dark:border-zinc-800 hover:border-leaf/50 dark:hover:border-leaf/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-paper-200 dark:bg-zinc-800 group-hover:bg-leaf transition-colors duration-300" />
                            
                            <div className="flex flex-col gap-3 mb-3">
                                 <div className="flex items-center gap-3 text-[10px] font-sans font-bold tracking-widest uppercase text-ink-light dark:text-zinc-500">
                                    <span>{demo.date}</span>
                                    {demo.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 rounded-sm bg-paper-100 dark:bg-zinc-800/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`${basePath}/${demoSlug}`} className="block">
                                    <h2 className={`text-3xl font-serif font-medium group-hover:${accentColor} transition-colors text-ink dark:text-zinc-100 leading-tight`}>
                                        {demo.title}
                                    </h2>
                                </Link>
                            </div>

                            <p className="text-ink-light dark:text-zinc-400 font-serif text-lg leading-relaxed line-clamp-3 mb-4">
                                {demo.description}
                            </p>

                            <Link 
                                href={`${basePath}/${demoSlug}`}
                                className={`inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider hover:gap-2 transition-all ${accentColor}`}
                            >
                                {UI_TEXT.buttons.viewDemo} <ArrowRight size={14} />
                            </Link>
                        </article>
                    );
                })}
            </div>
        </CollectionPageContainer>
    );
}

