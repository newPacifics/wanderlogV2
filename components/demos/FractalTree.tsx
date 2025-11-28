'use client';

import React, { useRef, useEffect, useState } from 'react';

const FractalTree: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [angle, setAngle] = useState(25);
    const [length, setLength] = useState(100);
    const [depth, setDepth] = useState(10);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        
        // Reset canvas
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Styling
        ctx.strokeStyle = document.documentElement.classList.contains('dark') ? '#A5A58D' : '#5c5a53';
        ctx.lineWidth = 1;

        const drawTree = (startX: number, startY: number, len: number, ang: number, branchWidth: number, currentDepth: number) => {
            ctx.beginPath();
            ctx.save();
            ctx.translate(startX, startY);
            ctx.rotate(ang * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.lineWidth = branchWidth;
            ctx.stroke();

            if (len < 5 || currentDepth <= 0) {
                ctx.restore();
                return;
            }

            // Draw branches
            drawTree(0, -len, len * 0.75, angle, branchWidth * 0.7, currentDepth - 1);
            drawTree(0, -len, len * 0.75, -angle, branchWidth * 0.7, currentDepth - 1);
            
            ctx.restore();
        };

        // Start drawing from bottom center
        drawTree(rect.width / 2, rect.height, length, 0, depth, 10);

    }, [angle, length, depth]);

    return (
        <div className="w-full bg-paper-50 dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-paper-200 dark:border-zinc-800">
            <div className="flex flex-wrap gap-8 mb-8 text-sm border-b border-paper-200 dark:border-zinc-800 pb-6">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-ink-light dark:text-zinc-500">Branch Angle: {angle}°</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="90" 
                        value={angle} 
                        onChange={(e) => setAngle(Number(e.target.value))}
                        className="accent-leaf cursor-pointer h-1 bg-paper-300 dark:bg-zinc-700 rounded-full appearance-none" 
                    />
                </div>
                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-ink-light dark:text-zinc-500">Trunk Growth</label>
                    <input 
                        type="range" 
                        min="50" 
                        max="150" 
                        value={length} 
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="accent-leaf cursor-pointer h-1 bg-paper-300 dark:bg-zinc-700 rounded-full appearance-none" 
                    />
                </div>
            </div>
            <div className="w-full h-80 relative flex justify-center">
                <canvas ref={canvasRef} className="w-full h-full max-w-lg" />
            </div>
        </div>
    );
};

export default FractalTree;

