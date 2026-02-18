
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: 1,
        image: '/products/platanos-picante-final.png',
        gradient: 'from-yellow-400 to-yellow-600',
        name: 'Platanitos Picantes'
    },
    {
        id: 2,
        image: '/products/platanos-sal-v2.png',
        gradient: 'from-ds-red to-red-700',
        name: 'Platanitos con Sal'
    },
    {
        id: 3,
        image: '/products/yuca-limon.png',
        gradient: 'from-lime-500 to-green-700',
        name: 'Yuca con Limón'
    },
    {
        id: 4,
        image: '/products/platanos-ajo-final.png',
        gradient: 'from-orange-400 to-red-500',
        name: 'Platanitos con Ajo'
    },
    {
        id: 5,
        image: '/products/yuca-sal-final.png',
        gradient: 'from-amber-200 to-amber-500',
        name: 'Yuca con Sal'
    },
    {
        id: 6,
        image: '/products/trozitos.png',
        gradient: 'from-amber-700 to-orange-900',
        name: 'Trozitos'
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const currentProduct = products[currentIndex];

    const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { hours: 3, minutes: 59, seconds: 59 }; // Reset for demo loop
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-ds-green to-emerald-900 flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-ds-yellow rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-ds-lime rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white space-y-6 pt-32 md:pt-36"
                >
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                        <Timer className="w-5 h-5 text-ds-yellow" />
                        <span className="text-sm font-semibold tabular-nums">
                            Oferta por tiempo limitado: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black leading-snug">
                        Sabor que <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="text-ds-yellow relative inline-block"
                        >
                            Explota
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ds-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </motion.span>
                        <br /> en tu Boca
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 max-w-lg">
                        Descubre la nueva línea de snacks DS. Crujientes, deliciosos y perfectos para cualquier momento. ¡Atrévete a probarlos!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="https://wa.me/584247540609?text=Hola,%20quisiera%20hacer%20un%20pedido%20de%20Productos%20DS!" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-ds-yellow text-ds-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/30 hover:bg-yellow-300 transition-colors"
                            >
                                Comprar Ahora <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <Link href="/productos">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
                            >
                                Ver Productos
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image Carousel */}
                <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                    <div className="relative w-full h-full max-w-md flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProduct.id}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.5 }}
                                className={`absolute w-[280px] h-[380px] md:w-[320px] md:h-[420px] bg-gradient-to-tr ${currentProduct.gradient} rounded-[2.5rem] shadow-2xl flex items-center justify-center border-4 border-white/20`}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="absolute text-4xl md:text-5xl font-black text-white/20 transform -rotate-90 whitespace-nowrap select-none"
                                >
                                    SNACKS DS
                                </motion.span>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="relative w-full h-full p-2 md:p-4"
                                >
                                    <Image
                                        src={currentProduct.image}
                                        alt={currentProduct.name}
                                        fill
                                        className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Decoration */}
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                            className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-50 z-[-1]"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator or curved bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[50px] md:h-[100px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
