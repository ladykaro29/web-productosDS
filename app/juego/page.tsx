import React from 'react';
import CatchGame from '@/components/CatchGame';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GamePage() {
    return (
        <main className="bg-green-50 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center py-24 md:py-32 px-4">
                <div className="w-full max-w-4xl mx-auto mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-black text-ds-green mb-4">
                        ¡Zona de Juegos! 🎮
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diviértete atrapando tus snacks favoritos. ¿Qué tan alto puedes llegar?
                    </p>
                </div>

                <CatchGame />
            </div>

            <Footer />
        </main>
    );
}
