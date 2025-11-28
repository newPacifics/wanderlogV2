import React from 'react';

export enum ContentType {
    POST = 'post',
    WORD = 'word',
    BOOK = 'book',
    DEMO = 'demo'
}

export interface BaseContent {
    id: string;
    title: string;
    date: string;
    type: ContentType;
    tags: string[];
    description?: string;
}

export interface PostContent extends BaseContent {
    type: ContentType.POST;
    content: string; // Markdown
    readingTime: string;
}

export interface WordContent extends BaseContent {
    type: ContentType.WORD;
    definition: string;
    etymology: string;
    usage: string;
}

export interface BookContent extends BaseContent {
    type: ContentType.BOOK;
    author: string;
    rating: number; // 1-5
    summary: string; // Markdown
    quotes: string[];
}

export interface DemoContent extends BaseContent {
    type: ContentType.DEMO;
    componentKey: string; // Key to map to actual React component
    instructions: string;
}

export type ContentItem = PostContent | WordContent | BookContent | DemoContent;

export interface NavItem {
    label: string;
    path: string;
    icon: React.ReactNode;
    type?: ContentType;
}

