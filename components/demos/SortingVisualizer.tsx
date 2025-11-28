'use client';

import React, { useState, useEffect } from 'react';

const ARRAY_SIZE = 50;
const DELAY = 30;

interface SortingVisualizerProps {
    isActive: boolean;
}

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({ isActive }) => {
    const [array, setArray] = useState<number[]>([]);
    const [sorting, setSorting] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        if (sorting) return;
        const newArray = Array.from({ length: ARRAY_SIZE }, () => Math.floor(Math.random() * 100) + 5);
        setArray(newArray);
        setCompleted(false);
        setActiveIndices([]);
    };

    const bubbleSort = async () => {
        setSorting(true);
        setCompleted(false);
        const arr = [...array];
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setActiveIndices([j, j + 1]);
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, DELAY));
                }
            }
        }
        setActiveIndices([]);
        setSorting(false);
        setCompleted(true);
    };

    const insertionSort = async () => {
        setSorting(true);
        setCompleted(false);
        const arr = [...array];

        for (let i = 1; i < arr.length; i++) {
            const current = arr[i];
            let j = i - 1;
            setActiveIndices([i]);
            
            while (j > -1 && current < arr[j]) {
                setActiveIndices([j, j + 1]);
                arr[j + 1] = arr[j];
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, DELAY));
                j--;
            }
            arr[j + 1] = current;
            setArray([...arr]);
        }

        setActiveIndices([]);
        setSorting(false);
        setCompleted(true);
    };

    return (
        <div className="w-full bg-paper-50 dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-paper-200 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div className="space-x-2">
                    <button 
                        onClick={resetArray} 
                        disabled={sorting}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-800 rounded border border-paper-300 dark:border-zinc-700 hover:bg-paper-50 dark:hover:bg-zinc-700 disabled:opacity-50 transition-colors"
                    >
                        Shuffle
                    </button>
                    <button 
                        onClick={bubbleSort} 
                        disabled={sorting || completed}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-leaf text-white rounded shadow-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                        Bubble Sort
                    </button>
                    <button 
                        onClick={insertionSort} 
                        disabled={sorting || completed}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-ocean text-white rounded shadow-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                        Insertion Sort
                    </button>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink-light dark:text-zinc-500">
                   {sorting ? 'Processing...' : completed ? 'Sorted' : 'Ready'}
                </div>
            </div>

            <div className="flex items-end justify-center h-64 w-full gap-[2px]">
                {array.map((value, idx) => {
                    const isActive = activeIndices.includes(idx);
                    return (
                        <div
                            key={idx}
                            style={{ height: `${value}%` }}
                            className={`w-full transition-all duration-100 ease-in-out rounded-t-[1px]
                                ${isActive ? 'bg-clay dark:bg-clay' : completed ? 'bg-leaf dark:bg-leaf' : 'bg-slate-300 dark:bg-zinc-600'}
                            `}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SortingVisualizer;

