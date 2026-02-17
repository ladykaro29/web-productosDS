
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import RecipesBanner from "@/components/RecipesBanner";
import Gallery from "@/components/Gallery";
import Roulette from "@/components/Roulette";
import DistributorCTA from "@/components/DistributorCTA";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-ds-light overflow-x-hidden">
            <Hero />
            <Features />
            <ProductShowcase isHome={true} />
            <RecipesBanner />
            <Roulette />
            <Gallery />
            <DistributorCTA />
            <Testimonials />
            <CTASection />
            <Footer />
        </main>
    );
}
