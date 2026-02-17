
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    '/images/galeria/degustaiones-clientes-felices (1).jpg',
    '/images/galeria/degustaiones-clientes-felices (2).jpg',
    '/images/galeria/degustaiones-clientes-felices (3).jpg',
    '/images/galeria/degustaiones-clientes-felices (4).jpg',
    '/images/galeria/degustaiones-clientes-felices (5).jpg',
    '/images/galeria/degustaiones-clientes-felices (6).jpg',
];

// Fun shapes array to cycle through
const shapes = [
    'rounded-[2rem]',                         // Soft square
    'rounded-tr-[5rem] rounded-bl-[5rem]',   // Leaf A
    'rounded-[50px_20px_50px_20px]',          // Organic A
    'rounded-tl-[5rem] rounded-br-[5rem]',    // Leaf B
    'rounded-[3rem]',                         // Circle-ish
    'rounded-[20px_50px_20px_50px]',          // Organic B
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-20 bg-ds-light overflow-hidden relative">
            {/* Background blobs for extra fun */}
            <div className="absolute top-10 left-0 w-64 h-64 bg-ds-yellow/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-ds-red/10 rounded-full blur-3xl -z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4">
                        Momentos <span className="text-ds-red">DS</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Más que un snack, somos parte de tus mejores momentos. ¡Compártenos el tuyo!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                    {images.map((src, index) => {
                        const shapeClass = shapes[index % shapes.length];
                        const rotateValue = index % 2 === 0 ? 3 : -3;
                        const floatDuration = 3 + Math.random() * 2; // Random float speed

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [rotateValue, rotateValue - 2, rotateValue]
                                }}
                                // Floating animation
                                // @ts-ignore
                                transition={{
                                    y: {
                                        duration: floatDuration,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotate: {
                                        duration: floatDuration * 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                                className={`relative aspect-square overflow-hidden shadow-2xl border-4 border-white ${shapeClass} transform transition-all duration-300 hover:shadow-ds-yellow/50`}
                            >
                                <Image
                                    src={src}
                                    alt={`Galería DS ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ds-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <motion.a
                        href="/galeria"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-ds-red text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-red-700 transition-all"
                    >
                        VER GALERÍA COMPLETA
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
