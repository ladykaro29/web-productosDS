
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
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
        <main className="min-h-screen bg-ds-dark overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
                    <div style={{ backgroundImage: 'url("/pattern-bg.png")', opacity: 0.3 }} className="w-full h-full"></div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-[-50%] left-[-10%] w-[80vw] h-[80vw] bg-ds-green/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-ds-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-6"
                    >
                        <Camera className="w-4 h-4 inline-block mr-2" />
                        MOMENTOS DS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-black text-white mb-6"
                    >
                        Nuestra <span className="text-ds-yellow">Galería</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Un recorrido visual por nuestra planta, nuestra gente y la alegría de compartir el mejor sabor.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-20">
                <MasonryGallery />
            </div>

            <Footer />
        </main>
    );
}
