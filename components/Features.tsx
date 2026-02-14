
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, ShieldCheck, Flame } from 'lucide-react';

const features = [
    {
        icon: <Flame className="w-8 h-8 text-white" />,
        title: "Sabor Intenso",
        description: "Cada bocado es una explosión de sabor que despertará tus sentidos.",
        color: "bg-red-500"
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Energía Pura",
        description: "El snack perfecto para recargar energías en cualquier momento del día.",
        color: "bg-ds-yellow"
    },
    {
        icon: <Heart className="w-8 h-8 text-white" />,
        title: "Hecho con Amor",
        description: "Ingredientes seleccionados para garantizar la mejor calidad.",
        color: "bg-orange-500"
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "Calidad Garantizada",
        description: "Procesos de producción con los más altos estándares.",
        color: "bg-green-500"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ds-dark mb-4">
                        ¿Por qué elegir <span className="text-ds-red">DS?</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        No somos solo un snack, somos una experiencia. Descubre lo que nos hace únicos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md transform rotate-3`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-ds-dark mb-3 font-display">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-ds-yellow opacity-5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-ds-red opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </section>
    );
};

export default Features;
