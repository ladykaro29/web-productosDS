
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChefHat, Clock, Users, ArrowRight, Star, Flame, Utensils } from 'lucide-react';
import Footer from '@/components/Footer';

const recipes = [
    {
        id: 1,
        title: "Nachos Playeros DS",
        description: "El toque picante perfecto para tus reuniones. ¡Irresistibles!",
        image: "/products/platanos-picante-final.png",
        color: "bg-red-600",
        lightColor: "bg-red-100",
        textColor: "text-red-600",
        prepTime: "10 min",
        servings: "4 pax",
        difficulty: "Fácil",
        ingredients: [
            "1 bolsa de Platanitos Picantes DS",
            "200g Queso cheddar derretido",
            "Pico de gallo fresco",
            "Jalapeños en rodajas",
            "Guacamole casero"
        ],
        steps: [
            "Sirve los Platanitos Picantes en un plato amplio.",
            "Baña generosamente con el queso cheddar.",
            "Distribuye el pico de gallo y los jalapeños.",
            "Acompaña con el guacamole en el centro."
        ]
    },
    {
        id: 2,
        title: "Dip de Ajo Supremo",
        description: "Crema suave con el crujido intenso del plátano al ajo.",
        image: "/products/platanos-ajo-final.png",
        color: "bg-orange-500",
        lightColor: "bg-orange-100",
        textColor: "text-orange-600",
        prepTime: "5 min",
        servings: "6 pax",
        difficulty: "Fácil",
        ingredients: [
            "1 bolsa de Platanitos con Ajo DS",
            "200g Queso crema tipo philadelphia",
            "Cebollín finamente picado",
            "1 cdita de jugo de limón",
            "Pizca de sal y pimienta"
        ],
        steps: [
            "Suaviza el queso crema y mezcla con el cebollín.",
            "Agrega el limón, sal y pimienta.",
            "Sirve en un bol decorativo.",
            "Usa los Platanitos con Ajo como cuchara comestible."
        ]
    },
    {
        id: 3,
        title: "Ceviche de Yuca",
        description: "Frescura cítrica combinada con el crunch de la yuca.",
        image: "/products/yuca-limon.png",
        color: "bg-lime-600",
        lightColor: "bg-lime-100",
        textColor: "text-lime-700",
        prepTime: "15 min",
        servings: "3 pax",
        difficulty: "Media",
        ingredients: [
            "1 bolsa de Yucas DS Limón",
            "200g Camarones cocidos (opcional)",
            "Cebolla morada en julianas",
            "Cilantro fresco picado",
            "Salsa rosada o mayonesa de limón"
        ],
        steps: [
            "Marina la cebolla y camarones con limón.",
            "Mezcla con el cilantro fresco.",
            "Sirve la mezcla sobre una cama de Yucas DS.",
            "Decora con puntos de salsa rosada."
        ]
    },
    {
        id: 4,
        title: "Tostones Playeros",
        description: "El clásico sabor playero, ahora en version snack rápido.",
        image: "/products/platanos-sal-v2.png",
        color: "bg-green-600",
        lightColor: "bg-green-100",
        textColor: "text-green-700",
        prepTime: "8 min",
        servings: "4 pax",
        difficulty: "Fácil",
        ingredients: [
            "1 bolsa de Platanitos con Sal DS",
            "Queso blanco rallado (duro o semiduro)",
            "Salsa rosada (Ketchup + Mayonesa)",
            "Repollo rallado (opcional)",
            "Jamón picadito (opcional)"
        ],
        steps: [
            "Coloca una base de Platanitos con Sal.",
            "Agrega un poco de repollo si gustas.",
            "Cubre con abundante queso blanco rallado.",
            "Finaliza con salsa rosada al estilo callejero."
        ]
    },
    {
        id: 5,
        title: "Yucas Bravas",
        description: "Una versión latina de las patatas bravas españolas.",
        image: "/products/yuca-sal-final.png",
        color: "bg-yellow-500",
        lightColor: "bg-yellow-100",
        textColor: "text-yellow-700",
        prepTime: "12 min",
        servings: "4 pax",
        difficulty: "Media",
        ingredients: [
            "1 bolsa de Yuca con Sal DS",
            "Salsa de tomate picante o salsa brava",
            "Mayonesa de ajo (Alioli)",
            "Pimentón dulce en polvo (Paprika)",
            "Perejil picado para decorar"
        ],
        steps: [
            "Sirve las Yucas en un plato hondo.",
            "Salsea con la salsa brava caliente.",
            "Añade puntos de alioli.",
            "Espolvorea paprika y perejil fresco."
        ]
    },
    {
        id: 6,
        title: "Ensalada Tropical",
        description: "Añade textura y dulzura a tus ensaladas verdes.",
        image: "/products/trozitos.png",
        color: "bg-amber-700",
        lightColor: "bg-amber-100",
        textColor: "text-amber-800",
        prepTime: "10 min",
        servings: "2 pax",
        difficulty: "Fácil",
        ingredients: [
            "1 bolsa de Trozitos DS",
            "Mix de lechugas frescas",
            "Aguacate en cubos",
            "Maíz dulce",
            "Aderezo de miel y mostaza"
        ],
        steps: [
            "Mezcla las lechugas, aguacate y maíz.",
            "Adeereza con la miel mostaza.",
            "Justo antes de servir, agrega los Trozitos.",
            "¡Mantendrán su crujencia hasta el final!"
        ]
    }
];

export default function RecipesPage() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 overflow-x-hidden">

            {/* Hero Section (Adapted from About Us) */}
            <section className="relative pt-32 pb-24 px-4 bg-ds-green text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
                    <div style={{ backgroundImage: 'url("/pattern-bg.png")', opacity: 0.3 }} className="w-full h-full"></div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-ds-yellow/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-sm font-bold mb-6"
                        >
                            <ChefHat className="w-4 h-4 text-ds-yellow" />
                            COCINA CREATIVA
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight"
                        >
                            Recetas <br /> <span className="text-ds-yellow relative">Explosivas
                                <svg className="absolute w-full h-4 -bottom-2 left-0 text-ds-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-green-50 max-w-lg mx-auto md:mx-0 leading-relaxed"
                        >
                            ¿Crees que son solo snacks? Piénsalo dos veces. Descubre cómo elevar tus comidas con el toque crujiente de DS.
                        </motion.p>
                    </div>

                    <div className="md:w-1/2 relative h-[400px] w-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative w-80 h-80 md:w-96 md:h-96"
                        >
                            <div className="absolute inset-0 bg-ds-yellow rounded-full animate-pulse opacity-50 blur-2xl"></div>
                            <div className="absolute inset-4 bg-ds-yellow rounded-full shadow-2xl overflow-hidden border-8 border-white/20">
                                <Image
                                    src="/images/girl-pop.png"
                                    alt="Cocinando con DS"
                                    fill
                                    className="object-cover object-top hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl text-ds-red"
                            >
                                <Flame className="w-8 h-8" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl text-ds-green"
                            >
                                <Utensils className="w-8 h-8" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recipes Grid */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recipes.map((recipe, index) => (
                            <motion.div
                                key={recipe.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[550px]"
                                onMouseEnter={() => setActiveId(recipe.id)}
                                onMouseLeave={() => setActiveId(null)}
                                onClick={() => setActiveId(activeId === recipe.id ? null : recipe.id)}
                            >
                                {/* Card Container for Flip Effect */}
                                <div className={`relative w-full h-full transition-all duration-700 preserve-3d cursor-pointer ${activeId === recipe.id ? 'rotate-y-180' : ''}`}>

                                    {/* Front Side */}
                                    <div className={`absolute inset-0 w-full h-full backface-hidden bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col`}>
                                        {/* Color Header */}
                                        <div className={`h-2/5 ${recipe.color} relative p-6 flex flex-col justify-between overflow-visible`}>
                                            <div className="flex justify-between items-start text-white/90 font-medium z-10">
                                                <div className="flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    <Clock className="w-4 h-4" /> {recipe.prepTime}
                                                </div>
                                                <div className="flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    <Users className="w-4 h-4" /> {recipe.servings}
                                                </div>
                                            </div>

                                            {/* Product Image Pop-out logic */}
                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 drop-shadow-2xl z-20 group-hover:scale-110 transition-transform duration-500">
                                                <Image
                                                    src={recipe.image}
                                                    alt={recipe.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Abstract Pattern overlay */}
                                            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
                                        </div>

                                        {/* Bottom Content */}
                                        <div className="h-3/5 pt-20 pb-8 px-8 flex flex-col items-center text-center">
                                            <div className={`${recipe.lightColor} ${recipe.textColor} text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider`}>
                                                {recipe.difficulty}
                                            </div>
                                            <h3 className="text-3xl font-display font-black text-gray-900 mb-3 leading-none">
                                                {recipe.title}
                                            </h3>
                                            <p className="text-gray-500 mb-6 line-clamp-3">
                                                {recipe.description}
                                            </p>

                                            <div className="mt-auto">
                                                <button className={`flex items-center gap-2 ${recipe.textColor} font-bold group-hover:gap-3 transition-all`}>
                                                    Ver Preparación <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-[2.5rem] shadow-2xl border-2 border-gray-100 p-8 flex flex-col overflow-y-auto custom-scrollbar">
                                        <div className="text-center mb-6">
                                            <h3 className={`text-2xl font-display font-black ${recipe.textColor} mb-1`}>{recipe.title}</h3>
                                            <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 uppercase text-sm tracking-wider">
                                                <span className={`w-2 h-6 rounded-full ${recipe.color}`}></span>
                                                Ingredientes
                                            </h4>
                                            <ul className="text-gray-600 space-y-2 text-sm font-medium">
                                                {recipe.ingredients.map((ing, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
                                                        {ing}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 uppercase text-sm tracking-wider">
                                                <span className={`w-2 h-6 rounded-full ${recipe.color}`}></span>
                                                Preparación
                                            </h4>
                                            <ol className="text-gray-600 space-y-3 text-sm">
                                                {recipe.steps.map((step, i) => (
                                                    <li key={i} className="flex gap-3">
                                                        <span className={`flex items-center justify-center w-6 h-6 rounded-full ${recipe.lightColor} ${recipe.textColor} font-bold text-xs shrink-0`}>
                                                            {i + 1}
                                                        </span>
                                                        <span className="pt-0.5">{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div className="mt-auto pt-6 text-center">
                                            <p className="text-xs text-gray-400 italic">
                                                ¡Comparte tu resultado en @productosds! 📸
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
