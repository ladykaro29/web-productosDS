'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trophy, RefreshCw } from 'lucide-react';

const CARDS_DATA = [
    { id: 1, src: '/products/platanos-sal-v2.png', name: 'Platanitos Sal' },
    { id: 2, src: '/products/platanos-ajo-final.png', name: 'Platanitos Ajo' },
    { id: 3, src: '/products/platanos-picante-final.png', name: 'Platanitos Picante' },
    { id: 4, src: '/products/yuca-sal-final.png', name: 'Yuca Sal' },
    { id: 5, src: '/products/yuca-limon.png', name: 'Yuca Limón' },
    { id: 6, src: '/products/trozitos.png', name: 'Trozitos' },
];

// Duplicate and shuffle
const generateCards = () => {
    const pairs = [...CARDS_DATA, ...CARDS_DATA];
    return pairs
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ ...card, uniqueId: index, isFlipped: false, isMatched: false }));
};

const MemoryGame = () => {
    const [cards, setCards] = useState<any[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]); // Store uniqueIds
    const [matches, setMatches] = useState(0);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        setCards(generateCards());
    }, []);

    const handleCardClick = (uniqueId: number) => {
        // Prevent clicking if 2 cards already flipped or card is already matched/flipped
        if (flippedCards.length >= 2 || cards.find(c => c.uniqueId === uniqueId).isFlipped || cards.find(c => c.uniqueId === uniqueId).isMatched) return;

        // Flip card
        const newCards = cards.map(c =>
            c.uniqueId === uniqueId ? { ...c, isFlipped: true } : c
        );
        setCards(newCards);

        const newFlipped = [...flippedCards, uniqueId];
        setFlippedCards(newFlipped);

        // Check Match
        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const card1 = newCards.find(c => c.uniqueId === newFlipped[0]);
            const card2 = newCards.find(c => c.uniqueId === newFlipped[1]);

            if (card1.id === card2.id) {
                // Match!
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.uniqueId === newFlipped[0] || c.uniqueId === newFlipped[1]
                            ? { ...c, isMatched: true, isFlipped: true }
                            : c
                    ));
                    setFlippedCards([]);
                    setMatches(m => {
                        const newM = m + 1;
                        if (newM === CARDS_DATA.length) setGameWon(true);
                        return newM;
                    });
                }, 500);
            } else {
                // No Match
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.uniqueId === newFlipped[0] || c.uniqueId === newFlipped[1]
                            ? { ...c, isFlipped: false }
                            : c
                    ));
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        setCards(generateCards());
        setFlippedCards([]);
        setMatches(0);
        setMoves(0);
        setGameWon(false);
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/90 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
                <div className="flex gap-6 text-lg font-bold text-gray-700">
                    <p>Movimientos: <span className="text-ds-green">{moves}</span></p>
                    <p>Parejas: <span className="text-ds-green">{matches} / {CARDS_DATA.length}</span></p>
                </div>
                <button
                    onClick={resetGame}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    title="Reiniciar"
                >
                    <RefreshCw className="w-6 h-6" />
                </button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 aspect-square md:aspect-video">
                {cards.map((card) => (
                    <div
                        key={card.uniqueId}
                        className="relative cursor-pointer group"
                        style={{ perspective: '1000px' }}
                        onClick={() => handleCardClick(card.uniqueId)}
                    >
                        <motion.div
                            className="w-full h-full relative transition-all duration-500 aspect-[3/4]"
                            initial={false}
                            animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Front (Hidden state - Shows Logo - 0 deg) */}
                            <div
                                className="absolute inset-0 bg-ds-yellow rounded-xl flex items-center justify-center border-4 border-white shadow-md overflow-hidden p-4"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/logo.png"
                                        alt="DS Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Back (Revealed state - Shows Product - 180 deg) */}
                            <div
                                className="absolute inset-0 bg-white rounded-xl flex items-center justify-center border-4 border-ds-yellow shadow-inner p-2"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)'
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={card.src}
                                        alt={card.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {gameWon && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 z-50 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="bg-white p-12 rounded-[3rem] text-center shadow-2xl border-8 border-ds-yellow">
                            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-bounce" />
                            <h2 className="text-4xl font-black text-ds-green mb-4">¡Memoria Increíble!</h2>
                            <p className="text-xl text-gray-600 mb-8">Lo hiciste en {moves} movimientos.</p>
                            <button
                                onClick={resetGame}
                                className="bg-ds-green text-white px-8 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform"
                            >
                                Jugar de Nuevo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MemoryGame;
