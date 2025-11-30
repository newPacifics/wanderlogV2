'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, PenTool, Hash, Cpu, Home, X, Sun, Moon } from 'lucide-react';
import { ContentType, NavItem } from '../lib/types';
import { SITE_NAME, SITE_TAGLINE, NAV_LABELS, UI_TEXT } from '../lib/constants';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const NAV_ITEMS: NavItem[] = [
    { label: NAV_LABELS.overview, path: '/', icon: <Home size={18} /> },
    { label: NAV_LABELS.essays, path: '/posts', icon: <PenTool size={18} />, type: ContentType.POST },
    { label: NAV_LABELS.words, path: '/words', icon: <Hash size={18} />, type: ContentType.WORD },
    { label: NAV_LABELS.library, path: '/library', icon: <BookOpen size={18} />, type: ContentType.BOOK },
    { label: NAV_LABELS.lab, path: '/engineering', icon: <Cpu size={18} />, type: ContentType.DEMO },
];

export function Sidebar({ isOpen, setIsOpen, theme, toggleTheme }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-ink/10 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside 
                className={`
                    fixed md:sticky top-0 h-screen w-72 bg-paper-50 dark:bg-zinc-950 border-r border-paper-200 dark:border-zinc-800
                    transform transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    flex flex-col
                `}
            >
                {/* Header */}
                <div className="p-8 pb-4 flex justify-between items-center">
                    <img 
                        src="/logo.svg" 
                        alt="Wanderlog logo" 
                        className="absolute -ml-[5px] opacity-20 dark:opacity-15 group-hover:opacity-25 dark:group-hover:opacity-20 transition-opacity duration-300 w-[235px] h-[64px] object-cover"
                    />
                    <Link href="/" className="group relative block">
                        <div className="relative flex items-center h-12">
                            <h1 className="relative text-3xl font-serif font-bold tracking-tight text-ink dark:text-white group-hover:opacity-80 transition-all duration-300 z-10">
                                {SITE_NAME}
                            </h1>
                        </div>
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="md:hidden text-ink-light hover:text-ink transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Subtitle */}
                <div className="px-8 pb-10">
                     <p className="text-sm text-ink-light dark:text-zinc-500 italic font-serif leading-relaxed">
                        {SITE_TAGLINE}
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        let activeColorClass = 'bg-paper-200 text-ink dark:bg-zinc-800 dark:text-white';
                        let iconColorClass = 'text-ink-light dark:text-zinc-400';
                        
                        if (item.type === ContentType.POST) {
                            activeColorClass = 'bg-blue-50 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100';
                            iconColorClass = 'text-blue-600 dark:text-blue-400';
                        }
                        if (item.type === ContentType.WORD) {
                            activeColorClass = 'bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100';
                            iconColorClass = 'text-emerald-600 dark:text-emerald-400';
                        }
                        if (item.type === ContentType.BOOK) {
                            activeColorClass = 'bg-amber-50 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100';
                            iconColorClass = 'text-amber-600 dark:text-amber-400';
                        }
                        if (item.type === ContentType.DEMO) {
                            activeColorClass = 'bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-100';
                            iconColorClass = 'text-red-600 dark:text-red-400';
                        }

                        const isActive = pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path));

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200
                                    ${isActive
                                        ? `${activeColorClass} font-medium shadow-sm` 
                                        : 'text-ink-light hover:bg-paper-100 dark:text-zinc-400 dark:hover:bg-zinc-900 hover:text-ink'
                                    }
                                `}
                            >
                                <span className={`${iconColorClass} ${isActive ? 'scale-110' : 'opacity-80'} transition-transform duration-200`}>{item.icon}</span>
                                <span className="font-sans tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer / Theme Toggle */}
                <div className="p-6 border-t border-paper-200 dark:border-zinc-800">
                    <button
                        onClick={toggleTheme}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-paper-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-sans font-medium uppercase tracking-wider text-ink-light hover:border-paper-300 dark:hover:border-zinc-700 transition-all shadow-sm"
                    >
                        <span>{theme === 'light' ? UI_TEXT.theme.light : UI_TEXT.theme.dark}</span>
                        {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
                    </button>
                </div>
            </aside>
        </>
    );
}

