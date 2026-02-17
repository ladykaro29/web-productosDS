
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { ShoppingCart } from 'lucide-react'; // Removed for promo site
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* Top Banner - Collapses on scroll */}
            <div className={`bg-ds-red text-white text-xs sm:text-sm font-bold text-center overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2 opacity-100'}`}>
                <p>¡Sabor que explota en tu boca! 💥 Envíos gratis en tu primer pedido mayor a $500</p>
            </div>

            <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-ds-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className={`relative transition-all duration-300 ${isScrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-12 h-12 md:w-16 md:h-16'}`}>
                            <Image
                                src="/logo.png"
                                alt="Productos DS Logo"
                                fill
                                className="object-contain filter drop-shadow-md"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-display font-black text-white hidden sm:block drop-shadow-md">
                            Productos <span className="text-ds-yellow">DS</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Inicio', 'Productos', 'Galería', 'Nosotros', 'Contacto'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Inicio' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                className="text-white font-semibold hover:text-ds-yellow transition-colors drop-shadow-sm"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contacto"
                            className={`bg-ds-yellow text-ds-dark rounded-full font-bold shadow-lg hover:bg-white transition-all ${isScrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2'}`}
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
