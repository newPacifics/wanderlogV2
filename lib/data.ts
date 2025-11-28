import { ContentItem, ContentType } from './types';

export const ALL_CONTENT: ContentItem[] = [
    {
        id: 'p1',
        type: ContentType.POST,
        title: 'The Architecture of Silence',
        date: '2023-10-14',
        tags: ['philosophy', 'design'],
        readingTime: '4 min',
        description: 'Exploring how empty space defines structure in both software and architecture.',
        content: `
In the frantic noise of modern web development, we often forget that silence—or whitespace—is not merely the absence of content, but a structural element in its own right.

### The Negative Space

Just as a pause in music gives weight to the note that follows, margins in design allow the eye to breathe. When we crowd our interfaces with signals, we deafen the user. A layout that embraces silence is one that respects the user's attention.

> "Music is the silence between the notes." — Claude Debussy

In software architecture, this translates to *separation of concerns*. It is the code we *don't* write that often defines the maintainability of the system. The decoupled module, the pure function, the stateless component—these are artifacts of silence. They do not shout; they simply exist, self-contained and quiet.

### Cognitive Load

Every pixel on a screen requires a micro-joule of cognitive energy to process. By reducing visual noise, we aren't just making things "pretty"; we are actively conserving the user's mental battery. This is an act of empathy.
        `
    },
    {
        id: 'p2',
        type: ContentType.POST,
        title: 'Digital Gardens vs. Blogs',
        date: '2023-11-02',
        tags: ['meta', 'web'],
        readingTime: '3 min',
        description: 'Why I prefer the metaphor of a garden over a stream of consciousness.',
        content: `
A blog is a river: chronologically sorting ideas that float by, never to return. A digital garden is a landscape: ideas are planted, they grow, they are pruned, and sometimes they die.

### The Problem with Time

Chronology is a poor sorting mechanism for knowledge. The fact that I wrote something in 2018 doesn't mean it's less relevant than what I wrote today. In fact, if the idea was foundational, it might be *more* relevant.

Digital gardens break the tyranny of the timestamp. They use **topology** instead of **chronology**. Concepts are linked by relevance, forming a graph of thought rather than a timeline of production.
        `
    },
    {
        id: 'w1',
        type: ContentType.WORD,
        title: 'Komorebi',
        date: '2023-09-01',
        tags: ['japanese', 'nature'],
        definition: 'Sunlight filtering through the leaves of trees.',
        etymology: 'Japanese (木漏れ日)',
        usage: 'The afternoon walk was defined by the komorebi dancing on the forest path, creating a mosaic of light and shadow.'
    },
    {
        id: 'w2',
        type: ContentType.WORD,
        title: 'Petrichor',
        date: '2023-09-15',
        tags: ['english', 'nature', 'scent'],
        definition: 'The pleasant, earthy smell after rain falls on dry soil.',
        etymology: 'Greek: petra (stone) + ichor (fluid that flows in the veins of the gods).',
        usage: 'He stepped onto the porch, inhaling the deep petrichor rising from the asphalt after the summer storm.'
    },
    {
        id: 'b1',
        type: ContentType.BOOK,
        title: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        date: '2023-08-10',
        tags: ['architecture', 'systems'],
        rating: 5,
        summary: `A profound treatise on architecture, design, and the nature of quality. Alexander argues that the best way to build is not through rigid planning, but through a "pattern language" that emerges from the life within the structure.`,
        quotes: [
            "There is a central quality which is the root criterion of life and spirit in a man, a town, a building, or a wilderness. This quality is objective and precise, but it cannot be named.",
            "To be wild is not to be crazy or psychotic. It is to be natural."
        ]
    },
    {
        id: 'b2',
        type: ContentType.BOOK,
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        date: '2023-07-22',
        tags: ['psychology', 'behavior'],
        rating: 4,
        summary: `Kahneman explores the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.`,
        quotes: [
            "Nothing in life is as important as you think it is, while you are thinking about it.",
            "We focus on what we know and ignore what we do not know, which makes us overly confident in our beliefs."
        ]
    },
    {
        id: 'd1',
        type: ContentType.DEMO,
        title: 'Algorithmic Harmony',
        date: '2024-01-20',
        tags: ['visualization', 'sorting', 'canvas'],
        componentKey: 'sorting-viz',
        description: 'A visual exploration of sorting algorithms, demonstrating how order emerges from chaos through simple rules.',
        instructions: 'Select an algorithm and watch the data organize itself.'
    },
    {
        id: 'd2',
        type: ContentType.DEMO,
        title: 'Recursive Tree',
        date: '2024-02-15',
        tags: ['fractal', 'geometry'],
        componentKey: 'fractal-tree',
        description: 'An interactive fractal tree generator showing self-similarity in nature.',
        instructions: 'Adjust the angle and length to see how small changes in initial conditions lead to vastly different organic structures.'
    }
];

