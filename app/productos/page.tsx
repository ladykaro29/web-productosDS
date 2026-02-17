
import React from 'react';
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import DistributorCTA from "@/components/DistributorCTA";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-ds-light">
            <ProductShowcase isHome={false} />
            <DistributorCTA />
            <Footer />
        </main>
    );
}
