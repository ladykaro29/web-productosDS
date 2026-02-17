
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

const images = [
    '/images/galeria/degustaiones-clientes-felices (1).jpg',
    '/images/galeria/degustaiones-clientes-felices (2).jpg',
    '/images/galeria/degustaiones-clientes-felices (3).jpg',
    '/images/galeria/degustaiones-clientes-felices (4).jpg',
    '/images/galeria/degustaiones-clientes-felices (5).jpg',
    '/images/galeria/degustaiones-clientes-felices (6).jpg',
    '/images/galeria/degustaiones-clientes-felices (7).jpg',
    '/images/galeria/degustaiones-clientes-felices (8).jpg',
    '/images/galeria/degustaiones-clientes-felices (9).jpg',
    '/images/galeria/degustaiones-clientes-felices (10).jpg',
    '/images/galeria/degustaiones-clientes-felices (11).jpg',
    '/images/galeria/degustaiones-clientes-felices (12).jpg',
    '/images/galeria/degustaiones-clientes-felices (13).jpg',
    '/images/galeria/degustaiones-clientes-felices (14).jpg',
    '/images/galeria/degustaiones-clientes-felices (15).jpg',
    '/images/galeria/degustaiones-clientes-felices (16).jpg',
    '/images/galeria/degustaiones-clientes-felices (17).jpg',
    '/images/galeria/degustaiones-clientes-felices (18).jpg',
    '/images/galeria/degustaiones-clientes-felices (19).jpg',
];

// Cycling Typewriter Component
const Typewriter = ({ text, phrases, delay = 100, waitTime = 2000 }: { text?: string, phrases?: string[], delay?: number, waitTime?: number }) => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(delay);

    useEffect(() => {
        // If single text mode
        if (text) {
            if (currentText.length < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(text.slice(0, currentText.length + 1));
                }, delay);
                return () => clearTimeout(timeout);
            }
            return;
        }

        // If phrases mode (cycling)
        if (phrases) {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            const handleTyping = () => {
                setCurrentText(isDeleting
                    ? fullText.substring(0, currentText.length - 1)
                    : fullText.substring(0, currentText.length + 1)
                );

                setTypingSpeed(isDeleting ? delay / 2 : delay);

                if (!isDeleting && currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), waitTime);
                } else if (isDeleting && currentText === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            };

            const timer = setTimeout(handleTyping, typingSpeed);
            return () => clearTimeout(timer);
        }
    }, [currentText, isDeleting, loopNum, phrases, text, delay, waitTime, typingSpeed]);

    return <span>{currentText}</span>;
};

// Masonry Grid Logic
const MasonryGallery = () => {
    // Split images into columns for masonry effect
    const col1 = images.filter((_, i) => i % 3 === 0);
    const col2 = images.filter((_, i) => i % 3 === 1);
    const col3 = images.filter((_, i) => i % 3 === 2);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {[col1, col2, col3].map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6">
                    {col.map((src, idx) => (
                        <motion.div
                            key={`${colIndex}-${idx}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                            className="relative group bg-white p-3 pb-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform rotate-1 hover:rotate-0"
                            style={{
                                transform: `rotate(${Math.random() * 2 - 1}deg)`
                            }}
                        >
                            {/* Tape effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-[-2deg] shadow-sm z-10 backdrop-blur-sm"></div>

                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={src}
                                    alt="Momento DS"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 w-full text-center">
                                <span className={`font-handwriting text-gray-500 text-lg transform -rotate-1 inline-block`}>
                                    #MomentoDS
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#f8f5f2] overflow-x-hidden relative">
            {/* Background Texture */}
            <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* Header */}
            <section className="relative pt-32 pb-12 px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-ds-yellow text-ds-dark px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-sm"
                >
                    📸 NUESTRA COMUNIDAD
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-display font-black text-ds-dark mb-6 min-h-[1.5em] flex flex-col md:block items-center justify-center">
                    <span className="text-ds-red">
                        Momentos
                    </span>{' '}
                    <span className="text-ds-dark inline-flex items-center">
                        <Typewriter
                            phrases={[
                                "Inolvidables",
                                "Crujientes",
                                "Explosivos",
                                "Divertidos",
                                "Para Compartir",
                                "Con Sabor"
                            ]}
                            delay={100}
                            waitTime={1500}
                        />
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-1 h-10 md:h-16 bg-ds-dark ml-1 align-bottom"
                        ></motion.span>
                    </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    Así se disfruta el sabor que explota. ¡Etiquétanos para aparecer aquí!
                </p>
            </section>

            {/* Gallery Grid */}
            <div className="container mx-auto pb-24 relative z-10">
                <MasonryGallery />
            </div>

            <Footer />
        </main>
    );
}
