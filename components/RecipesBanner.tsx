
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
                <Link href="/recetas" className="block relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 group">
                    <Image
                        src="/images/banner-recetas-v2.png"
                        alt="Nuevo Recetario DS - Desata tu Creatividad"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </Link>
            </div>
        </section>
    );
};

export default RecipesBanner;
