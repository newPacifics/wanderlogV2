import React from 'react';
import { Post, Word, Book, Demo } from '../.velite';

export enum ContentType {
    POST = 'post',
    WORD = 'word',
    BOOK = 'book',
    DEMO = 'demo'
}

// Re-export Velite types with base properties
export type PostContent = Post;
export type WordContent = Word;
export type BookContent = Book;
export type DemoContent = Demo;

export type ContentItem = PostContent | WordContent | BookContent | DemoContent;

export interface NavItem {
    label: string;
    path: string;
    icon: React.ReactNode;
    type?: ContentType;
}


