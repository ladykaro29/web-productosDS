
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Truck, TrendingUp, Users } from 'lucide-react';

const DistributorCTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-ds-dark to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="inline-block bg-ds-green text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                            OPORTUNIDAD DE NEGOCIO
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
                            ¡Crece con <span className="text-ds-yellow">Nosotros!</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Únete a nuestra red de distribuidores y lleva el sabor auténtico de Productos DS a cada rincón. Ofrecemos márgenes competitivos y productos de alta rotación.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col items-start gap-2">
                                <div className="p-3 bg-white/10 rounded-lg text-ds-yellow">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <span className="font-bold">Logística Ágil</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="p-3 bg-white/10 rounded-lg text-ds-yellow">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <span className="font-bold">Alta Rentabilidad</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="p-3 bg-white/10 rounded-lg text-ds-yellow">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="font-bold">Soporte Dedicado</span>
                            </div>
                        </div>

                        <Link
                            href="https://distribuidores-app.vercel.app/"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-ds-yellow text-ds-dark font-black text-lg py-4 px-8 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all w-full md:w-auto justify-center"
                        >
                            QUIERO SER DISTRIBUIDOR
                            <TrendingUp className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 w-full flex items-center justify-center"
                    >
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                            <Image
                                src="/images/distribuidor-v2.png"
                                alt="Sé un Distribuidor DS"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DistributorCTA;
