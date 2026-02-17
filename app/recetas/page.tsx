
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChefHat, Clock, Users, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const recipes = [
    {
        id: 1,
        title: "Nachos Playeros DS",
        description: "Transforma tus Platanitos Picantes en unos nachos irresistibles.",
        image: "/products/platanos-picante-final.png",
        color: "bg-ds-red",
        prepTime: "10 min",
        servings: "4 personas",
        ingredients: [
            "1 bolsa de Platanitos Picantes DS",
            "Queso cheddar derretido",
            "Pico de gallo fresco",
            "Jalapeños en rodajas (opcional)",
            "Guacamole casero"
        ],
        steps: [
            "Coloca los Platanitos en un plato grande.",
            "Baña con el queso cheddar caliente.",
            "Agrega el pico de gallo y jalapeños.",
            "¡Sirve con guacamole y disfruta!"
        ]
    },
    {
        id: 2,
        title: "Dip de Ajo Supremo",
        description: "El acompañante perfecto para tus Platanitos con Ajo.",
        image: "/products/platanos-ajo-final.png",
        color: "bg-ds-green",
        prepTime: "5 min",
        servings: "6 personas",
        ingredients: [
            "1 bolsa de Platanitos con Ajo DS",
            "Queso crema",
            "Cebollín picado",
            "Un toque de limón",
            "Pizca de sal y pimienta"
        ],
        steps: [
            "Mezcla el queso crema con el cebollín.",
            "Añade limón, sal y pimienta al gusto.",
            "Sirve en un bol pequeño.",
            "¡Usa los Platanitos con Ajo para dipear!"
        ]
    },
    {
        id: 3,
        title: "Ceviche de Yuca",
        description: "Un toque gourmet y refrescante usando nuestras Yucas DS.",
        image: "/products/yuca-limon.png",
        color: "bg-ds-yellow",
        prepTime: "15 min",
        servings: "3 personas",
        ingredients: [
            "1 bolsa de Yucas DS Limón",
            "Camarones cocidos (opcional)",
            "Cebolla morada en julianas",
            "Cilantro fresco",
            "Salsa rosada"
        ],
        steps: [
            "Mezcla cebolla, cilantro y camarones.",
            "Sirve sobre una cama de Yucas DS.",
            "Decora con salsa rosada.",
            "¡Un aperitivo elegante y rápido!"
        ]
    }
];

export default function RecipesPage() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-ds-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-ds-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block bg-ds-yellow text-ds-dark font-bold px-4 py-1 rounded-full mb-4 shadow-sm"
                        >
                            <ChefHat className="w-4 h-4 inline-block mr-2" />
                            Cocina con DS
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-display font-black text-ds-dark mb-4">
                            Recetas <span className="text-ds-red">Explosivas</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Descubre formas creativas y deliciosas de disfrutar tus snacks favoritos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recipes.map((recipe, index) => (
                            <motion.div
                                key={recipe.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group h-[500px] perspective-1000"
                                onMouseEnter={() => setActiveId(recipe.id)}
                                onMouseLeave={() => setActiveId(null)}
                                onClick={() => setActiveId(activeId === recipe.id ? null : recipe.id)}
                            >
                                <div className={`relative w-full h-full transition-all duration-700 preserve-3d ${activeId === recipe.id ? 'rotate-y-180' : ''}`}>
                                    {/* Front Card */}
                                    <div className={`absolute inset-0 w-full h-full backface-hidden rounded-[2rem] overflow-hidden shadow-xl ${recipe.color} p-8 flex flex-col justify-between text-white`}>
                                        <div>
                                            <div className="flex gap-4 mb-4 text-white/80 text-sm font-medium">
                                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipe.prepTime}</span>
                                                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {recipe.servings}</span>
                                            </div>
                                            <h3 className="text-3xl font-display font-black leading-tight mb-2">{recipe.title}</h3>
                                            <p className="text-white/90 font-medium">{recipe.description}</p>
                                        </div>
                                        <div className="relative w-full aspect-square mt-4">
                                            <Image
                                                src={recipe.image}
                                                alt={recipe.title}
                                                fill
                                                className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <span className="inline-flex items-center gap-2 font-bold bg-white/20 px-4 py-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                                                Ver Receta <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Back Card */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden shadow-xl bg-white border-2 border-gray-100 p-8 flex flex-col text-ds-dark">
                                        <h3 className={`text-2xl font-display font-black mb-6 ${recipe.color.replace('bg-', 'text-')}`}>{recipe.title}</h3>
                                        <div className="mb-6">
                                            <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ds-yellow"></span> Ingredientes:</h4>
                                            <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                                                {recipe.ingredients.map((ing, i) => (
                                                    <li key={i}>{ing}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ds-red"></span> Pasos:</h4>
                                            <ol className="text-sm text-gray-600 space-y-2 pl-4 list-decimal">
                                                {recipe.steps.map((step, i) => (
                                                    <li key={i}>{step}</li>
                                                ))}
                                            </ol>
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
