
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 bg-ds-red text-white relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-10 w-64 h-64 bg-ds-yellow rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                        ¿Listo para el <br />
                        <span className="text-ds-yellow">Crujido?</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-red-100">
                        Únete a la revolución del sabor. Compra ahora y obtén un 20% de descuento en tu primera orden.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-ds-yellow text-ds-dark px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-lg hover:bg-yellow-300 transition-colors"
                        >
                            Quiero mi Descuento <ArrowRight className="w-6 h-6" />
                        </motion.button>
                        <span className="text-sm text-white/70 font-mono mt-4 sm:mt-0">Código: DSNACK20</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
