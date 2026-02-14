
'use client';

import React from 'react';
import Link from 'next/link';
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
                        <div className="inline-block bg-ds-red text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
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
                        className="md:w-1/2 relative min-h-[400px] w-full flex items-center justify-center"
                    >
                        {/* Abstract visual since we don't have a specific distributor image yet */}
                        <div className="relative w-full h-full min-h-[300px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-ds-red/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-ds-yellow/30 rounded-full blur-3xl" />

                            <div className="text-center">
                                <h3 className="text-3xl font-display font-black mb-2">DS</h3>
                                <p className="text-gray-400">PARTNER PROGRAM</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DistributorCTA;
