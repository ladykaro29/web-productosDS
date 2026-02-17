
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Target, Eye, Users, Heart, CheckCircle } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-ds-dark text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
                    <Image
                        src="/images/galeria/degustaiones-clientes-felices (8).jpg" // Using a gallery image as fallback/background
                        alt="Fábrica Productos DS"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-[-50%] right-[-10%] w-[80vw] h-[80vw] bg-ds-red/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-ds-yellow text-ds-dark px-4 py-1 rounded-full text-sm font-bold mb-6"
                    >
                        DESDE 2015
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-display font-black mb-6"
                    >
                        Nuestra <span className="text-ds-red">Historia</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Desde el corazón del Zulia para toda Venezuela y Latinoamérica. Descubre la pasión detrás de cada crujido.
                    </motion.p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 relative min-h-[400px]">
                            {/* Placeholder for history image 1 */}
                            <div className="absolute inset-4 bg-ds-yellow rounded-3xl transform rotate-3"></div>
                            <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-xl transform -rotate-2">
                                <Image
                                    src="/images/galeria/degustaiones-clientes-felices (2).jpg"
                                    alt="Inicios Productos DS"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-display font-black text-ds-dark">
                                El Sabor que Nace en el <br /> <span className="text-ds-green">Sur del Lago</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                <strong>Productos D's, C.A.</strong> nace oficialmente el 14 de septiembre de 2015, con la activación de nuestra planta industrial ubicada en el Sector El Caracolí, Estado Zulia.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Lo que comenzó como un sueño de llevar el mejor sabor del plátano zuliano a cada hogar, hoy es una realidad que genera empleos y bienestar en nuestra región. Nos especializamos en la transformación del plátano, yuca y papa en snacks deliciosos y crujientes, bajo los más altos estándares de calidad.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="bg-ds-red/10 p-3 rounded-full text-ds-red">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-ds-dark">Calidad Garantizada</h4>
                                    <p className="text-sm text-gray-500">Materia prima seleccionada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-ds-light relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-ds-yellow/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mision */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <div className="bg-ds-red w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-display font-black text-ds-dark mb-4">Misión</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Posicionar todos nuestros productos en el mercado venezolano y latinoamericano. Queremos que reconozcas la diferencia de un producto natural de alta calidad, generando consciencia de consumo y elevando el estándar de la industria alimenticia.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <div className="bg-ds-yellow w-16 h-16 rounded-2xl flex items-center justify-center text-ds-dark mb-6 shadow-md">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-display font-black text-ds-dark mb-4">Visión</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Ser la empresa líder de Venezuela y Latinoamérica en nuestra categoría. Nuestros productos se elaboran bajo premisas de ingeniería alimenticia de vanguardia para asegurar placer, salud y satisfacción plena en cada bocado.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social Impact & Process */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4">
                            Más que <span className="text-ds-red">Snacks</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Estamos comprometidos con nuestra gente y con la excelencia en cada paso del proceso.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-ds-dark mb-3">Impacto Social</h3>
                            <p className="text-gray-600">
                                Generamos empleo digno en la Zona Sur del Lago. Nuestro equipo crece día a día, apoyando a docenas de familias directa e indirectamente.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <Heart className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-ds-dark mb-3">Amor por lo Natural</h3>
                            <p className="text-gray-600">
                                Procesamos plátano, yuca y papa natural. Seleccionamos cuidadosamente la materia prima con los grados brix perfectos para garantizar sabor y textura.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-6">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-ds-dark mb-3">Tecnología de Punta</h3>
                            <p className="text-gray-600">
                                Nuestra planta cuenta con freidoras industriales automatizadas y sistemas de control de calidad para asegurar que cada empaque esté perfecto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team and Facilities Gallery */}
            <section className="py-20 bg-ds-light overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4">
                            Nuestra <span className="text-ds-green">Casa</span> y <span className="text-ds-red">Gente</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conoce las instalaciones donde ocurre la magia y el equipo que lo hace posible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Placeholder 1: Team */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <Image
                                src="/images/galeria/degustaiones-clientes-felices (8).jpg" // Placeholder
                                alt="Equipo de Trabajo"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Nuestro Equipo</h3>
                            </div>
                        </motion.div>

                        {/* Placeholder 2: Facilities */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group lg:col-span-2"
                        >
                            <Image
                                src="/images/galeria/degustaiones-clientes-felices (5).jpg" // Placeholder
                                alt="Instalaciones de Producción"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Planta de Producción</h3>
                            </div>
                        </motion.div>

                        {/* Placeholder 3: Process */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <Image
                                src="/images/galeria/degustaiones-clientes-felices (3).jpg" // Placeholder
                                alt="Control de Calidad"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Calidad</h3>
                            </div>
                        </motion.div>

                        {/* Placeholder 4: Offices */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group lg:col-span-2"
                        >
                            <Image
                                src="/images/galeria/degustaiones-clientes-felices (12).jpg" // Placeholder
                                alt="Áreas Administrativas"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Oficinas</h3>
                            </div>
                        </motion.div>

                        {/* Placeholder 5: More Team */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group lg:col-span-2"
                        >
                            <Image
                                src="/images/galeria/degustaiones-clientes-felices (15).jpg" // Placeholder
                                alt="Familia Productos DS"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Familia DS</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Map Placeholder / Call to Action */}
            <section className="py-20 bg-ds-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-display font-bold mb-8">¿Quieres formar parte de nuestra historia?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contacto"
                            className="bg-ds-yellow text-ds-dark font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
                        >
                            Contáctanos
                        </a>
                        <a
                            href="/productos"
                            className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-ds-dark transition-colors"
                        >
                            Ver Productos
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
