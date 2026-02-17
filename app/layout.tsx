
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
    metadataBase: new URL('https://productosds.com'),
    title: {
        default: "Productos DS | Sabor que Explota",
        template: "%s | Productos DS"
    },
    description: "Descubre los snacks más crujientes y deliciosos de Venezuela. Platanitos, yuca, papas y más, hechos con pasión en el Sur del Lago.",
    keywords: ["snacks", "platanitos", "tostones", "yuca", "venezuela", "sur del lago", "comida", "frituras"],
    openGraph: {
        title: "Productos DS | Sabor que Explota",
        description: "Snacks vibrantes para cada momento. ¡Pruébalos!",
        url: 'https://productosds.com',
        siteName: 'Productos DS',
        locale: 'es_VE',
        type: 'website',
    },
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
