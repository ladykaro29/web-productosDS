
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-ds-light overflow-x-hidden">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
