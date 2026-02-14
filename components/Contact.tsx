
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4">
                        ¡Contáctanos!
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes alguna duda o quieres hacer un pedido? Estamos aquí para atenderte.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-ds-light p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold font-display text-ds-dark mb-6">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-ds-red/10 p-3 rounded-full text-ds-red flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Teléfonos / WhatsApp</h4>
                                        <p className="text-gray-600">0424-7540609</p>
                                        <p className="text-gray-600">0275-5164503</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-ds-yellow/20 p-3 rounded-full text-ds-dark flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Correo Electrónico</h4>
                                        <p className="text-gray-600">productosdsca@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Ubicación</h4>
                                        <p className="text-gray-600">
                                            Carretera Km 35, Antigua Línea Férrea<br />
                                            Local N° S/N, Sector Caracolí<br />
                                            Estado Zulia, Venezuela
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200 text-sm text-gray-500 space-y-1">
                                    <p><span className="font-bold">RIF:</span> J-40387371-2</p>
                                    <p><span className="font-bold">Registro Sanitario:</span> A-122.839</p>
                                    <p><span className="font-bold">CPE:</span> 0216384500</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.676644485574!2d-72.22170669999999!3d7.768136699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666ca060f64c45%3A0xe533475968253a6!2sSan%20Crist%C3%B3bal%2C%20T%C3%A1chira!5e0!3m2!1ses!2sve!4v1707830000000!5m2!1ses!2sve"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold font-display text-ds-dark mb-6">Envíanos un Mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-ds-yellow focus:ring-2 focus:ring-ds-yellow/50 outline-none transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-ds-yellow focus:ring-2 focus:ring-ds-yellow/50 outline-none transition-all"
                                        placeholder="0414-1234567"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-ds-yellow focus:ring-2 focus:ring-ds-yellow/50 outline-none transition-all"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-ds-yellow focus:ring-2 focus:ring-ds-yellow/50 outline-none transition-all resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-ds-red text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>ENVIAR MENSAJE</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
