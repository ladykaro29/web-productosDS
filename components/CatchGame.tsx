'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Heart, RotateCcw, Play } from 'lucide-react';
import Link from 'next/link';

// Game Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;
const ITEM_SIZE = 60;
const SPAWN_RATE_INITIAL = 60; // Frames per spawn
const SPEED_INITIAL = 3;

interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    type: 'good' | 'bad';
    id: number;
    speed: number;
}

const PRODUCTS = [
    '/products/platanos-sal-v2.png',
    '/products/platanos-ajo-final.png',
    '/products/platanos-picante-final.png',
    '/products/yuca-sal-final.png',
    '/products/yuca-limon.png',
    '/products/trozitos.png',
];

const CatchGame = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [highScore, setHighScore] = useState(0);

    // Game Loop Refs (to avoid stale closures)
    const requestRef = useRef<number>();
    const scoreRef = useRef(0);
    const livesRef = useRef(3);
    const itemsRef = useRef<GameObject[]>([]);
    const playerXRef = useRef(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    const frameCountRef = useRef(0);
    const spawnRateRef = useRef(SPAWN_RATE_INITIAL);
    const gameSpeedRef = useRef(SPEED_INITIAL);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const basketImageRef = useRef<HTMLImageElement | null>(null);

    // Preload Images
    useEffect(() => {
        // Load Product Images
        PRODUCTS.forEach(src => {
            const img = new Image();
            img.src = src;
            imagesRef.current.push(img);
        });

        // Load Basket Image (using a simple basket fallback for now or one of the assets if available)
        // For now, drawing a simple shape if image fails, or use a specific asset if I had one.
        // Let's try to use the logo or just a shape in render.

        // Load High Score
        const saved = localStorage.getItem('ds_game_highscore');
        if (saved) setHighScore(parseInt(saved));
    }, []);

    // Game Loop
    const animate = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        // Clear Canvas
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        // Update Game State
        if (gameState === 'playing') {
            frameCountRef.current++;

            // Spawn Items
            if (frameCountRef.current % spawnRateRef.current === 0) {
                const randomImage = imagesRef.current[Math.floor(Math.random() * imagesRef.current.length)];
                if (randomImage) { // Check if loaded
                    const newItem: GameObject = {
                        x: Math.random() * (GAME_WIDTH - ITEM_SIZE),
                        y: -ITEM_SIZE,
                        width: ITEM_SIZE,
                        height: ITEM_SIZE,
                        image: randomImage,
                        type: 'good', // All products are good for now. Could add "bombs" later.
                        id: Date.now() + Math.random(),
                        speed: gameSpeedRef.current + Math.random() * 2 // Var speed
                    };
                    itemsRef.current.push(newItem);
                }
            }

            // Increase Difficulty
            if (frameCountRef.current % 600 === 0) { // Every ~10 seconds
                gameSpeedRef.current += 0.5;
                spawnRateRef.current = Math.max(20, spawnRateRef.current - 5);
            }

            // Move & Draw Items
            itemsRef.current.forEach((item, index) => {
                item.y += item.speed;

                // Draw Item
                ctx.drawImage(item.image, item.x, item.y, item.width, item.height);

                // Collision Detection with Player
                if (
                    item.y + item.height > GAME_HEIGHT - PLAYER_HEIGHT &&
                    item.y < GAME_HEIGHT &&
                    item.x + item.width > playerXRef.current &&
                    item.x < playerXRef.current + PLAYER_WIDTH
                ) {
                    // CATCH!
                    scoreRef.current += 10;
                    setScore(scoreRef.current);
                    itemsRef.current.splice(index, 1);
                    // Visual pop effect/particle could be added here
                }
                // Missed Item (Bottom of screen)
                else if (item.y > GAME_HEIGHT) {
                    itemsRef.current.splice(index, 1);
                    livesRef.current -= 1;
                    setLives(livesRef.current);
                    if (livesRef.current <= 0) {
                        endGame();
                    }
                }
            });

            // Draw Player (Basket)
            ctx.fillStyle = '#FFC107'; // DS Yellow
            // Simple Basket Shape
            ctx.beginPath();
            ctx.roundRect(playerXRef.current, GAME_HEIGHT - PLAYER_HEIGHT + 20, PLAYER_WIDTH, PLAYER_HEIGHT - 20, [0, 0, 20, 20]);
            ctx.fill();
            // Handle decoration
            ctx.fillStyle = '#1B3D2F'; // DS Green handle
            ctx.fillRect(playerXRef.current - 10, GAME_HEIGHT - PLAYER_HEIGHT + 30, 20, 10);
            ctx.fillRect(playerXRef.current + PLAYER_WIDTH - 10, GAME_HEIGHT - PLAYER_HEIGHT + 30, 20, 10);

            // Text for "Cesta"
            ctx.fillStyle = '#1B3D2F';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText("DS", playerXRef.current + PLAYER_WIDTH / 2, GAME_HEIGHT - PLAYER_HEIGHT + 60);

        }

        requestRef.current = requestAnimationFrame(animate);
    };

    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setLives(3);
        scoreRef.current = 0;
        livesRef.current = 3;
        itemsRef.current = [];
        frameCountRef.current = 0;
        gameSpeedRef.current = SPEED_INITIAL;
        spawnRateRef.current = SPAWN_RATE_INITIAL;

        requestRef.current = requestAnimationFrame(animate);
    };

    const endGame = () => {
        setGameState('gameover');
        if (requestRef.current) cancelAnimationFrame(requestRef.current);

        if (scoreRef.current > highScore) {
            setHighScore(scoreRef.current);
            localStorage.setItem('ds_game_highscore', scoreRef.current.toString());
        }
    };

    // Input Handling
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                let clientX = 0;
                if ('touches' in e) {
                    clientX = e.touches[0].clientX;
                } else {
                    clientX = (e as MouseEvent).clientX;
                }

                const relativeX = clientX - rect.left;
                // Center player on mouse/touch
                playerXRef.current = Math.max(0, Math.min(GAME_WIDTH - PLAYER_WIDTH, relativeX - PLAYER_WIDTH / 2));
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-gradient-to-b from-blue-200 to-green-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <canvas
                ref={canvasRef}
                width={GAME_WIDTH}
                height={GAME_HEIGHT}
                className="w-full h-full touch-none cursor-none"
            />

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-4">
                <div className="bg-white/90 px-4 py-2 rounded-full font-black text-2xl text-ds-green shadow-lg border-2 border-ds-yellow flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    {score}
                </div>
                <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                        <Heart
                            key={i}
                            className={`w-8 h-8 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Menus */}
            <AnimatePresence>
                {gameState === 'menu' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-ds-green/90 backdrop-blur-sm flex flex-col items-center justify-center text-white"
                    >
                        <h1 className="text-6xl font-display font-black text-ds-yellow mb-2 drop-shadow-lg text-center">
                            LLUVIA DE SNACKS
                        </h1>
                        <p className="text-xl mb-8 max-w-md text-center">
                            ¡Mueve la cesta para atrapar todos los Productos DS! No dejes que caigan al suelo.
                        </p>
                        <button
                            onClick={startGame}
                            className="bg-white text-ds-green px-12 py-6 rounded-full font-black text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                        >
                            <Play className="w-8 h-8 fill-ds-green" />
                            JUGAR AHORA
                        </button>
                    </motion.div>
                )}

                {gameState === 'gameover' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white"
                    >
                        <div className="text-ds-yellow mb-4">
                            <Trophy className="w-20 h-20 mx-auto mb-2" />
                            <p className="text-center font-bold">MEJOR PUNTUACIÓN: {highScore}</p>
                        </div>
                        <h2 className="text-5xl font-black mb-2">¡JUEGO TERMINADO!</h2>
                        <p className="text-3xl font-bold mb-8">Puntuación: {score}</p>

                        <div className="flex gap-4">
                            <Link href="/">
                                <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                                    <X className="w-5 h-5" />
                                    Salir
                                </button>
                            </Link>
                            <button
                                onClick={startGame}
                                className="bg-ds-yellow text-ds-dark px-12 py-4 rounded-full font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                            >
                                <RotateCcw className="w-6 h-6" />
                                Intentar de nuevo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CatchGame;
