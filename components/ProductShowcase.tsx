
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'Platanitos con Ajo',
        description: 'El crujido perfecto con un toque irresistible de ajo natural.',
        image: '/products/platanos-ajo-final.png',
        color: 'bg-green-600',
        textColor: 'text-white',
        price: '$1.50'
    },
    {
        id: 2,
        name: 'Platanitos Picantes',
        description: 'Para los atrevidos, un estallido de sabor con el picante justo.',
        image: '/products/platanos-picante-final.png',
        color: 'bg-ds-red',
        textColor: 'text-white',
        price: '$1.50'
    },
    {
        id: 3,
        name: 'Platanitos con Sal',
        description: 'El clásico sabor natural, crujiente y saladito. ¡Nunca falla!',
        image: '/products/platanos-sal-v2.png',
        color: 'bg-ds-yellow',
        textColor: 'text-ds-dark',
        price: '$1.50'
    },
    {
        id: 4,
        name: 'Yuca con Limón',
        description: 'Chips de yuca seleccionada con un toque cítrico refrescante.',
        image: '/products/yuca-limon.png',
        color: 'bg-lime-500',
        textColor: 'text-ds-dark',
        price: '$1.80'
    },
    {
        id: 5,
        name: 'Yuca con Sal',
        description: 'El sabor auténtico de la yuca, crujiente y con el punto exacto de sal.',
        image: '/products/yuca-sal-final.png',
        color: 'bg-[#E6BE8A]', // Color crema/yuca
        textColor: 'text-ds-dark',
        price: '$1.80'
    },
    {
        id: 6,
        name: 'Trozitos',
        description: 'Pedacitos de tostón llenos de sabor, ideales para compartir.',
        image: '/products/trozitos.png',
        color: 'bg-ds-orange',
        textColor: 'text-white',
        price: '$3.00'
    },
];

const ProductShowcase = ({ isHome = false }: { isHome?: boolean }) => {
    // Filter for homepage: 1 Toston (Classic/Sal), 1 Yuca (Sal), 1 Trozitos
    const displayProducts = isHome
        ? products.filter(p => [3, 5, 6].includes(p.id))
        : products;

    return (
        <section id="productos" className={`py-20 bg-[#FAFAFA] relative overflow-hidden ${isHome ? '' : 'pt-32'}`}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-2">
                            {isHome ? (
                                <>Nuestros <span className="text-ds-red">Favoritos.</span></>
                            ) : (
                                <>Todos Nuestros <span className="text-ds-green">Sabores.</span></>
                            )}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            {isHome ? 'Explora lo mejor de DS.' : 'Descubre la variedad completa de snacks para cada momento.'}
                        </p>
                    </div>
                    {isHome && (
                        <Link href="/productos" className="hidden md:flex items-center gap-2 text-ds-red font-bold hover:underline mt-4 md:mt-0">
                            Ver todo <span className="text-xl">›</span>
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Card Background */}
                            <div className={`${product.color} rounded-[2rem] p-6 h-full transition-transform duration-300 group-hover:-translate-y-2 relative overflow-hidden shadow-xl`}>

                                {/* Background Decorative Circle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

                                {/* "Más Vendido" Badge */}
                                {product.id === 1 && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-white text-ds-red text-xs font-black px-3 py-1 rounded-full shadow-lg border-2 border-ds-red transform rotate-3">
                                            ★ FAVORITO
                                        </span>
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative w-full aspect-[4/4] mb-4 flex items-center justify-center">
                                    <motion.div
                                        className="relative w-full h-full"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className={`relative z-10 flex flex-col justify-between items-start ${product.textColor}`}>
                                    <div>
                                        <h3 className="text-2xl font-display font-black leading-none mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="opacity-90 font-medium text-sm leading-relaxed mb-4">
                                            {product.description}
                                        </p>
                                    </div>

                                    <Link href="/productos" className="w-full">
                                        <button className={`w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all shadow-lg
                                            ${product.textColor === 'text-white'
                                                ? 'bg-white text-ds-dark hover:bg-white/90'
                                                : 'bg-ds-dark text-white hover:bg-black/80'
                                            }`}
                                        >
                                            Ver Detalles
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
