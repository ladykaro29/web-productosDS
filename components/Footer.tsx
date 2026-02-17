import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ds-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0 flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <Image src="/logo.png" alt="Productos DS" fill className="object-contain" />
                        </div>
                        <h2 className="text-3xl font-display font-black tracking-tighter">Productos <span className="text-ds-green">DS</span></h2>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/productosdsca/" target="_blank" rel="noopener noreferrer" className="hover:text-ds-yellow transition-colors"><Facebook className="w-6 h-6" /></a>
                        <a href="https://www.instagram.com/productosdsca/" target="_blank" rel="noopener noreferrer" className="hover:text-ds-yellow transition-colors"><Instagram className="w-6 h-6" /></a>
                        <a href="https://www.tiktok.com/@productosds" target="_blank" rel="noopener noreferrer" className="hover:text-ds-yellow transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="flex flex-col">
                        <p>&copy; {new Date().getFullYear()} Productos DS. Todos los derechos reservados.</p>
                        <p className="text-xs mt-1 opacity-70">RIF: J-40387371-2</p>
                        <p className="text-xs mt-2 opacity-60 hover:opacity-100 transition-opacity">
                            Página web desarrollada por <a href="https://kickoffdevelopment.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ds-yellow transition-colors font-bold">Kick-Off Development</a>
                        </p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                        <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
