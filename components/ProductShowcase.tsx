
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'Platanitos con Ajo',
        description: 'El crujido perfecto con un toque irresistible de ajo natural.',
        image: '/products/platanos-ajo.png',
        color: 'bg-green-600',
        accent: 'border-green-500',
    },
    {
        id: 2,
        name: 'Platanitos Picantes',
        description: 'Para los atrevidos, un estallido de sabor con el picante justo.',
        image: '/products/platanos-picante.png',
        color: 'bg-red-600',
        accent: 'border-red-500',
    },
    {
        id: 3,
        name: 'Platanitos con Sal',
        description: 'El clásico sabor natural, crujiente y saladito. ¡Nunca falla!',
        image: '/products/platanos-sal.png',
        color: 'bg-yellow-500',
        accent: 'border-yellow-400',
    },
    {
        id: 4,
        name: 'Yuca con Limón',
        description: 'Chips de yuca seleccionada con un toque cítrico refrescante.',
        image: '/products/yuca-limon.png',
        color: 'bg-lime-600',
        accent: 'border-lime-400',
    },
    {
        id: 5,
        name: 'Trozitos',
        description: 'Pedacitos de tostón llenos de sabor, ideales para compartir.',
        image: '/products/trozitos.png',
        color: 'bg-orange-600',
        accent: 'border-orange-400',
    },
];

const ProductShowcase = () => {
    return (
        <section id="productos" className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ds-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ds-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4 transform -rotate-2 inline-block">
                        Nuestros <span className="text-ds-red">Sabores</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explora nuestra variedad de snacks hechos con pasión y los mejores ingredientes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image Section */}
                            <div className={`relative h-64 w-full rounded-t-3xl overflow-hidden ${product.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                                <motion.div
                                    className="relative w-full h-full p-6"
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-grow flex flex-col items-center text-center">
                                <h3 className="text-2xl font-display font-bold text-ds-dark mb-3 group-hover:text-ds-red transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
