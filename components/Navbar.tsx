
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { ShoppingCart } from 'lucide-react'; // Removed for promo site
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src="/logo.png"
                            alt="Productos DS Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-display font-black text-white hidden sm:block">
                        Productos <span className="text-ds-yellow">DS</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Inicio', 'Productos', 'Galería', 'Nosotros'].map((item) => (
                        <Link key={item} href={`/#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white font-semibold hover:text-ds-yellow transition-colors">
                            {item}
                        </Link>
                    ))}
                    <Link href="/contacto" className="text-white font-semibold hover:text-ds-yellow transition-colors">
                        Contacto
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contacto"
                        className="bg-ds-yellow text-ds-dark px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition-colors hidden sm:block"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
