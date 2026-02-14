
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    '/gallery/gallery-1.jpg',
    '/products/platanos-ajo.png', // Reusing product images for demo if needed
    '/products/platanos-picante.png',
    '/gallery/gallery-1.jpg', // Duplicating for grid effect
    '/gallery/gallery-1.jpg',
    '/products/platanos-ajo.png',
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-20 bg-ds-light overflow-hidden">
            <div className="container mx-auto px-4">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:z-10 hover:shadow-2xl"
                        >
                            <Image
                                src={src}
                                alt={`Galería DS ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-bold text-lg">#MomentosDS</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
