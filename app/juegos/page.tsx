'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CatchGame from '@/components/CatchGame';
import MemoryGame from '@/components/MemoryGame';
import WhackGame from '@/components/WhackGame';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Brain, Zap } from 'lucide-react';

export default function GamePage() {
    const [selectedGame, setSelectedGame] = useState<string | null>(null);

    return (
        <main className="bg-ds-green min-h-screen flex flex-col font-sans">
            <Navbar />

            <div className="flex-grow container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">

                <AnimatePresence mode='wait'>
                    {!selectedGame ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="w-full max-w-5xl"
                        >
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4 drop-shadow-lg">
                                    ¡Zona de Juegos! <span className="text-ds-yellow">DS</span> 🎮
                                </h1>
                                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                    Elige tu desafío favorito y compite por la puntuación más alta.
                                    ¡Diversión y sabor en cada partida!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Game Card 1 */}
                                <GameCard
                                    title="Lluvia de Snacks"
                                    description="Atrapa todos los paquetes antes de que caigan al suelo."
                                    icon={<span className="text-5xl">🍌</span>}
                                    color="bg-blue-500"
                                    onClick={() => setSelectedGame('catch')}
                                    difficulty="Fácil"
                                />

                                {/* Game Card 2 */}
                                <GameCard
                                    title="Memoria DS"
                                    description="Encuentra las parejas de tus productos favoritos."
                                    icon={<Brain className="w-16 h-16 text-white" />}
                                    color="bg-purple-500"
                                    onClick={() => setSelectedGame('memory')}
                                    difficulty="Media"
                                />

                                {/* Game Card 3 */}
                                <GameCard
                                    title="Aplasta al Snack"
                                    description="¡Sé rápido! Toca los snacks antes de que se escondan."
                                    icon={<Zap className="w-16 h-16 text-white" />}
                                    color="bg-red-500"
                                    onClick={() => setSelectedGame('whack')}
                                    difficulty="Difícil"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="w-full max-w-4xl"
                        >
                            <button
                                onClick={() => setSelectedGame(null)}
                                className="mb-6 flex items-center gap-2 text-white font-bold hover:text-ds-yellow transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6" /> Volver al Menú
                            </button>

                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl">
                                {selectedGame === 'catch' && <CatchGame />}
                                {selectedGame === 'memory' && <MemoryGame />}
                                {selectedGame === 'whack' && <WhackGame />}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </main>
    );
}

const GameCard = ({ title, description, icon, color, onClick, difficulty }: any) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${color} rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl cursor-pointer border-4 border-white/20 group`}
        onClick={onClick}
    >
        <div className="absolute top-0 right-0 p-3 bg-white/20 rounded-bl-2xl font-bold text-sm backdrop-blur-sm">
            {difficulty}
        </div>

        <div className="mb-6 bg-white/20 w-24 h-24 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>

        <h3 className="text-2xl font-black font-display mb-2">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed min-h-[3rem]">{description}</p>

        <button
            type="button"
            className="w-full bg-white text-gray-900 py-3 rounded-xl font-black flex items-center justify-center gap-2 group-hover:bg-ds-yellow transition-colors shadow-lg"
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            <Play className="w-5 h-5 fill-current" /> JUGAR
        </button>
    </motion.div>
);
