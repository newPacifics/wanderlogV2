'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Menu } from 'lucide-react';
import { SITE_NAME, SITE_COPYRIGHT } from '../lib/constants';

interface LayoutClientProps {
    children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Initialize theme from system preference
    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    // Update DOM when theme changes
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen flex bg-paper-100 dark:bg-zinc-900 transition-colors duration-500 text-ink dark:text-ink-dark">
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-paper-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-paper-200 dark:border-zinc-800 z-30 flex items-center px-6 justify-between transition-all">
                <span className="text-xl font-serif font-bold text-ink dark:text-white">{SITE_NAME}</span>
                <button onClick={() => setSidebarOpen(true)} className="p-2 -mr-2 text-ink-light hover:text-ink transition-colors">
                    <Menu size={24} />
                </button>
            </header>

            <Sidebar 
                isOpen={sidebarOpen} 
                setIsOpen={setSidebarOpen} 
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main className="flex-1 w-full md:ml-0 pt-16 md:pt-0 min-h-screen transition-all duration-300 relative overflow-x-hidden">
                {children}
                
                <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <div className="w-12 h-0.5 bg-paper-300 dark:bg-zinc-800 mx-auto mb-8"></div>
                    <p className="text-xs text-ink-light dark:text-zinc-600 font-sans tracking-widest uppercase">
                         &copy; {new Date().getFullYear()} {SITE_COPYRIGHT}
                    </p>
                </footer>
            </main>
        </div>
    );
}

