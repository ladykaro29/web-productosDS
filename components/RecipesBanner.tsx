
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat } from 'lucide-react';

const RecipesBanner = () => {
    return (
        <section className="py-20 bg-ds-green relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'email-pattern' }}> {/* Simplified pattern placeholder */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden relative">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                        {/* Content */}
                        <div className="md:w-5/12 text-white z-10 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 bg-ds-yellow text-ds-dark font-black px-4 py-1 rounded-full text-sm mb-6 shadow-lg mx-auto md:mx-0">
                                    <ChefHat className="w-4 h-4" />
                                    NUEVO RECETARIO
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-none mb-6">
                                    ¡Desata tu <br />
                                    <span className="text-ds-yellow relative">
                                        Creatividad!
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-ds-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </svg>
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-green-50 mb-8 max-w-md mx-auto md:mx-0">
                                    Descubre cómo transformar tus snacks favoritos en platos increíbles. ¿Probaste el <strong>Nanobanana Split</strong>?
                                </p>
                                <Link href="/recetas">
                                    <button className="bg-white text-ds-green px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:bg-green-50 transition-all hover:scale-105 active:scale-95 mx-auto md:mx-0">
                                        Ver Todas las Recetas <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Image Composition */}
                        <div className="md:w-6/12 relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-3 gap-4 md:gap-6 relative z-10 w-full max-w-lg"
                            >
                                {[
                                    { src: "/products/platanos-sal-v2.png", alt: "Platanitos Sal" },
                                    { src: "/products/platanos-ajo-final.png", alt: "Platanitos Ajo" },
                                    { src: "/products/platanos-picante-final.png", alt: "Platanitos Picante" },
                                    { src: "/products/yuca-sal-final.png", alt: "Yuca Sal" },
                                    { src: "/products/yuca-limon.png", alt: "Yuca Limón" },
                                    { src: "/products/trozitos.png", alt: "Trozitos" },
                                ].map((product, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -10, rotate: index % 2 === 0 ? 3 : -3, scale: 1.1 }}
                                        className="relative aspect-[3/4] w-full"
                                    >
                                        <Image
                                            src={product.src}
                                            alt={product.alt}
                                            fill
                                            className="object-contain drop-shadow-xl"
                                            sizes="(max-width: 768px) 33vw, 150px"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Decorative background circle behind products */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipesBanner;
