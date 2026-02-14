
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ana García",
        role: "Amante de los Snacks",
        comment: "¡Simplemente deliciosos! El sabor a queso es increíble, no puedo dejar de comerlos.",
        rating: 5,
        avatar: "/avatars/ana.jpg"
    },
    {
        name: "Carlos Lopez",
        role: "Gamer",
        comment: "Los mejores acompañantes para mis sesiones de juego. Crujientes y sin tanta grasa.",
        rating: 5,
        avatar: "/avatars/carlos.jpg"
    },
    {
        name: "Maria Rodriguez",
        role: "Estudiante",
        comment: "Me encantan para llevar a la universidad. El empaque es súper práctico.",
        rating: 4,
        avatar: "/avatars/maria.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-ds-yellow font-bold uppercase tracking-widest text-sm">Lo dicen ellos</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ds-dark mt-2">
                        Fans de <span className="text-ds-red">Corazón</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-20 h-20 bg-gray-200 rounded-full mb-6 overflow-hidden relative">
                                {/* Avatar Placeholder */}
                                <div className="absolute inset-0 bg-ds-dark/10 flex items-center justify-center text-2xl font-bold text-ds-dark/50">
                                    {testimonial.name[0]}
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-ds-yellow fill-ds-yellow' : 'text-gray-300'}`} />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>

                            <h4 className="font-bold text-ds-dark text-lg">{testimonial.name}</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
