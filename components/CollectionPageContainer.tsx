import React from 'react';

interface CollectionPageContainerProps {
    children: React.ReactNode;
}

export default function CollectionPageContainer({ children }: CollectionPageContainerProps) {
    return (
        <div className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
            {children}
        </div>
    );
}

