
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Using Poppins for display
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Poppins is great for vibrant/fun headers
const poppins = Poppins({
    weight: ['400', '600', '700', '900'],
    subsets: ["latin"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "Productos DS",
    description: "Snacks vibrantes para cada momento",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${poppins.variable} font-sans`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
