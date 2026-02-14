
import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ds-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0 flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <Image src="/logo.png" alt="Productos DS" fill className="object-contain" />
                        </div>
                        <h2 className="text-3xl font-display font-black tracking-tighter">Productos <span className="text-ds-red">DS</span></h2>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-ds-yellow transition-colors"><Facebook className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-ds-yellow transition-colors"><Instagram className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-ds-yellow transition-colors"><Twitter className="w-6 h-6" /></a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="flex flex-col">
                        <p>&copy; {new Date().getFullYear()} Productos DS. Todos los derechos reservados.</p>
                        <p className="text-xs mt-1 opacity-70">RIF: J-40387371-2</p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                        <a href="#" className="hover:text-white transition-colors">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
