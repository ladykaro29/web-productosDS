'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, User, Bomb } from 'lucide-react';

const HOLES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const WhackGame = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeHole, setActiveHole] = useState<number | null>(null);
    const [isBomb, setIsBomb] = useState(false);

    // Refs for intervals
    const timerRef = useRef<NodeJS.Timeout>();
    const moleRef = useRef<NodeJS.Timeout>();

    const startGame = () => {
        setIsPlaying(true);
        setScore(0);
        setTimeLeft(30);

        // Timer
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        moveMole();
    };

    const endGame = () => {
        setIsPlaying(false);
        setActiveHole(null);
        clearInterval(timerRef.current);
        clearTimeout(moleRef.current);
    };

    const moveMole = () => {
        const randomTime = Math.floor(Math.random() * 800) + 400; // 400ms - 1200ms
        const randomHole = Math.floor(Math.random() * HOLES.length);
        const randomIsBomb = Math.random() > 0.8; // 20% chance of bomb

        setActiveHole(randomHole);
        setIsBomb(randomIsBomb);

        moleRef.current = setTimeout(() => {
            if (isPlaying) moveMole(); // Only continue if playing (wait - logic flaw here, fixing below)
        }, randomTime);
    };

    // Fix loop logic: call moveMole recursively via timeout
    useEffect(() => {
        if (isPlaying) {
            const loop = () => {
                if (!isPlaying) return; // double check
                const randomTime = Math.floor(Math.random() * 700) + 500;
                const randomHole = Math.floor(Math.random() * HOLES.length);
                const randomIsBomb = Math.random() > 0.8;

                setActiveHole(randomHole);
                setIsBomb(randomIsBomb);

                moleRef.current = setTimeout(loop, randomTime);
            };
            loop();
        }
        return () => clearTimeout(moleRef.current);
    }, [isPlaying]);


    const whack = (index: number) => {
        if (!isPlaying || index !== activeHole) return;

        if (isBomb) {
            setScore(s => Math.max(0, s - 50));
            // Sound effect fail
        } else {
            setScore(s => s + 10);
            // Sound effect success
        }

        setActiveHole(null); // Hide immediately on hit
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-amber-100 rounded-3xl p-8 border-8 border-amber-800 shadow-2xl relative overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center mb-8 bg-amber-900/10 p-4 rounded-2xl">
                <div className="text-3xl font-black text-amber-900">
                    Puntos: {score}
                </div>
                <div className="text-3xl font-black text-red-600">
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
                {HOLES.map((index) => (
                    <div
                        key={index}
                        className="aspect-square bg-amber-900 rounded-full relative overflow-hidden shadow-inner border-b-8 border-amber-950 cursor-pointer"
                        onClick={() => whack(index)}
                    >
                        {/* Dirt Background */}
                        <div className="absolute bottom-0 w-full h-1/3 bg-amber-800 rounded-b-full"></div>

                        {/* Mole / Item */}
                        <AnimatePresence>
                            {activeHole === index && (
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "10%" }}
                                    exit={{ y: "100%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    {isBomb ? (
                                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-white relative">
                                            <Bomb className="w-12 h-12" />
                                            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 relative">
                                            <Image
                                                src="/products/trozitos.png" // Using a product as the "mole"
                                                alt="Target"
                                                fill
                                                className="object-contain drop-shadow-lg"
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Start Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="text-center text-white">
                        {timeLeft === 0 && (
                            <div className="mb-6">
                                <h2 className="text-4xl font-black text-yellow-500 mb-2">¡TIEMPO!</h2>
                                <p className="text-2xl">Tu puntuación final: {score}</p>
                            </div>
                        )}
                        <button
                            onClick={startGame}
                            className="bg-ds-yellow text-ds-dark px-12 py-6 rounded-full font-black text-3xl shadow-xl hover:scale-105 transition-transform flex items-center gap-4 mx-auto"
                        >
                            <Play className="w-10 h-10 fill-current" />
                            {timeLeft === 0 ? 'JUGAR OTRA VEZ' : 'EMPEZAR JUEGO'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhackGame;
