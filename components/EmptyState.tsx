import React from 'react';
import { UI_TEXT } from '../lib/constants';

export default function EmptyState() {
    return (
        <div className="p-12 text-center bg-paper-50 dark:bg-zinc-800/30 rounded-lg border border-paper-200 dark:border-zinc-800">
            <p className="text-ink-light italic font-serif text-lg">{UI_TEXT.emptyState}</p>
        </div>
    );
}

