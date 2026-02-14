
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Timer } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-ds-red to-red-600 flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-ds-yellow rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white space-y-6"
                >
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                        <Timer className="w-5 h-5 text-ds-yellow" />
                        <span className="text-sm font-semibold">Oferta por tiempo limitado: 00:03:59</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black leading-tight">
                        Sabor que <span className="text-ds-yellow relative">
                            Explota
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ds-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                        <br /> en tu Boca
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 max-w-lg">
                        Descubre la nueva línea de snacks DS. Crujientes, deliciosos y perfectos para cualquier momento. ¡Atrévete a probarlos!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-ds-yellow text-ds-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/30 hover:bg-yellow-300 transition-colors"
                        >
                            Comprar Ahora <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
                        >
                            Ver Productos
                        </motion.button>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] flex items-center justify-center"
                >
                    {/* Placeholder for Product Image */}
                    <div className="relative w-full h-full max-w-md">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-2xl"
                            style={{ backgroundImage: "url('/placeholder-chip-bag.png')" }} // Need a real image here or generate one
                        >
                            {/* Fallback visual if no image */}
                            <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-[3rem] flex items-center justify-center opacity-80 rotate-[-5deg] border-4 border-white/20">
                                <span className="text-6xl font-black text-white/50 transform -rotate-45">SNACKS DS</span>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-60"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator or curved bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
