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
const ITEM_SIZE = 70; // Slightly larger
const SPAWN_RATE_INITIAL = 60;
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
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu'); // Start at menu directly
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [highScore, setHighScore] = useState(0);

    // Game Loop Refs
    const requestRef = useRef<number>();
    const scoreRef = useRef(0);
    const livesRef = useRef(3);
    const itemsRef = useRef<GameObject[]>([]);
    const playerXRef = useRef(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    const frameCountRef = useRef(0);
    const spawnRateRef = useRef(SPAWN_RATE_INITIAL);
    const gameSpeedRef = useRef(SPEED_INITIAL);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const imagesLoadedRef = useRef(false);

    // Preload Images (Non-blocking)
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = PRODUCTS.length;

        const checkLoaded = () => {
            loadedCount++;
            if (loadedCount >= totalImages) {
                imagesLoadedRef.current = true;
            }
        };

        PRODUCTS.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = checkLoaded;
            img.onerror = checkLoaded; // Count errors too so we don't wait forever
            if (img.complete) checkLoaded();
            imagesRef.current.push(img);
        });

        // Safety timeout
        setTimeout(() => { imagesLoadedRef.current = true; }, 3000);

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
            // Use fallback if images not fully loaded, or just spawn anyway and use rects
            if (frameCountRef.current % spawnRateRef.current === 0) {
                const randomImageIndex = Math.floor(Math.random() * PRODUCTS.length); // Use index to pick image safely
                const randomImage = imagesRef.current[randomImageIndex];

                const newItem: GameObject = {
                    x: Math.random() * (GAME_WIDTH - ITEM_SIZE),
                    y: -ITEM_SIZE,
                    width: ITEM_SIZE,
                    height: ITEM_SIZE,
                    image: randomImage, // Might be incomplete/loading
                    type: 'good',
                    id: Date.now() + Math.random(),
                    speed: gameSpeedRef.current + Math.random() * 2
                };
                itemsRef.current.push(newItem);
            }

            // Increase Difficulty
            if (frameCountRef.current % 600 === 0) {
                gameSpeedRef.current += 0.5;
                spawnRateRef.current = Math.max(20, spawnRateRef.current - 5);
            }

            // Move & Draw Items
            itemsRef.current.forEach((item, index) => {
                item.y += item.speed;

                // Draw Item
                if (item.image && item.image.complete && item.image.naturalWidth !== 0) {
                    ctx.save();
                    ctx.shadowColor = 'rgba(0,0,0,0.2)';
                    ctx.shadowBlur = 10;
                    ctx.drawImage(item.image, item.x, item.y, item.width, item.height);
                    ctx.restore();
                } else {
                    // Fallback Render (Yellow Box) if image fails
                    ctx.fillStyle = '#FCD34D'; // Yellow
                    ctx.beginPath();
                    ctx.roundRect(item.x, item.y, item.width, item.height, 10);
                    ctx.fill();
                    ctx.fillStyle = '#000';
                    ctx.font = '12px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('SNACK', item.x + item.width / 2, item.y + item.height / 2);
                }

                // Collision Detection
                if (
                    item.y + item.height > GAME_HEIGHT - PLAYER_HEIGHT + 20 &&
                    item.y < GAME_HEIGHT &&
                    item.x + item.width > playerXRef.current &&
                    item.x < playerXRef.current + PLAYER_WIDTH
                ) {
                    // CATCH!
                    scoreRef.current += 10;
                    setScore(scoreRef.current);
                    itemsRef.current.splice(index, 1);
                }
                // Missed Item
                else if (item.y > GAME_HEIGHT) {
                    itemsRef.current.splice(index, 1);
                    livesRef.current -= 1;
                    setLives(livesRef.current);
                    if (livesRef.current <= 0) {
                        endGame();
                    }
                }
            });

            // Draw Basket (Player)
            const x = playerXRef.current;
            const y = GAME_HEIGHT - PLAYER_HEIGHT + 20;
            const w = PLAYER_WIDTH;
            const h = PLAYER_HEIGHT - 20;

            // Basket Body
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(x, y, w, h, [0, 0, 30, 30]);
            } else {
                ctx.rect(x, y, w, h);
            }
            ctx.fill();

            // Basket Rim
            ctx.strokeStyle = '#78350f';
            ctx.lineWidth = 4;
            ctx.stroke();

            // Handle
            ctx.fillStyle = '#166534';
            ctx.fillRect(x - 10, y + 10, 20, 10);
            ctx.fillRect(x + w - 10, y + 10, 20, 10);

            // Label
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText("DS", x + w / 2, y + h / 2 + 10);
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
            if (canvasRef.current && gameState === 'playing') {
                const rect = canvasRef.current.getBoundingClientRect();
                const scaleX = GAME_WIDTH / rect.width;

                let clientX = 0;
                if ('touches' in e) {
                    clientX = e.touches[0].clientX;
                } else {
                    clientX = (e as MouseEvent).clientX;
                }

                const relativeX = (clientX - rect.left) * scaleX;
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
    }, [gameState]);

    return (
        <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-sky-200 to-green-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white mx-auto min-h-[300px]">
            <canvas
                ref={canvasRef}
                width={GAME_WIDTH}
                height={GAME_HEIGHT}
                className="w-full h-full touch-none cursor-none block"
            />

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-4 pointer-events-none">
                <div className="bg-white/90 px-4 py-2 rounded-full font-black text-2xl text-ds-green shadow-lg border-2 border-ds-yellow flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    {score}
                </div>
                <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                        <Heart
                            key={i}
                            className={`w-8 h-8 drop-shadow-sm ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Menus */}
            {/* Menus - Reduced Complexity for Stability */}
            {gameState === 'menu' && (
                <div key="menu" className="absolute inset-0 bg-ds-green/90 backdrop-blur-sm flex flex-col items-center justify-center text-white z-50">
                    <h1 className="text-5xl md:text-6xl font-display font-black text-ds-yellow mb-2 drop-shadow-lg text-center leading-none">
                        LLUVIA DE<br />SNACKS
                    </h1>
                    <p className="text-xl mb-8 max-w-sm text-center opacity-90">
                        ¡Mueve la cesta para atrapar los Productos DS!
                    </p>
                    <button
                        onClick={startGame}
                        className="bg-white text-ds-green px-12 py-5 rounded-full font-black text-2xl shadow-[0_10px_0_rgb(0,0,0,0.2)] hover:scale-105 active:scale-95 active:shadow-none transition-all flex items-center gap-3"
                    >
                        <Play className="w-8 h-8 fill-ds-green" />
                        JUGAR
                    </button>
                </div>
            )}

            {gameState === 'gameover' && (
                <div key="gameover" className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white z-50">
                    <div className="text-ds-yellow mb-4 flex flex-col items-center">
                        <Trophy className="w-16 h-16 mb-2" />
                        <p className="text-center font-bold text-xl">RÉCORD: {highScore}</p>
                    </div>
                    <h2 className="text-5xl font-black mb-2">¡SE ACABÓ!</h2>
                    <p className="text-4xl font-bold mb-10 text-white">Puntos: {score}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => window.location.reload()} // Force reload to exit safely
                            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            <X className="w-5 h-5" />
                            Salir
                        </button>
                        <button
                            onClick={startGame}
                            className="bg-ds-yellow text-ds-dark px-10 py-4 rounded-full font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-6 h-6" />
                            Intentar de nuevo
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CatchGame;
