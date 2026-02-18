
import React from 'react';
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import DistributorCTA from "@/components/DistributorCTA";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-ds-light overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-ds-dark text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
                    <div style={{ backgroundImage: 'url("/pattern-bg.png")', opacity: 0.3 }} className="w-full h-full"></div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-[-50%] right-[-10%] w-[80vw] h-[80vw] bg-ds-red/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-ds-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div
                        className="inline-block bg-ds-yellow text-ds-dark px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in-up"
                    >
                        CALIDAD PREMIUM
                    </div>
                    <h1
                        className="text-5xl md:text-7xl font-display font-black mb-6 animate-fade-in-up delay-100"
                    >
                        Nuestros <span className="text-ds-red">Sabores</span>
                    </h1>
                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200"
                    >
                        Desde lo clásico hasta lo atrevido. Explora nuestra variedad de snacks hechos con pasión y los mejores ingredientes del campo.
                    </p>
                </div>
            </section>

            <ProductShowcase isHome={false} />
            <DistributorCTA />
            <Footer />
        </main>
    );
}
