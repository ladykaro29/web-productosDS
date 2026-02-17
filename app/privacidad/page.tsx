
import React from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-ds-dark text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-display font-black mb-4">Política de Privacidad</h1>
                    <p className="text-gray-300 text-lg max-w-2xl">
                        En Productos DS, nos tomamos muy en serio la protección de tus datos personales.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-ds-dark prose-p:text-gray-600 prose-a:text-ds-green">
                <p className="text-sm text-gray-500 mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

                <h3>1. Responsable del Tratamiento</h3>
                <p>
                    El responsable del tratamiento de sus datos es <strong>Inversiones Productos DS, C.A.</strong> (en adelante, "Productos DS"), con RIF J-40387371-2 y domicilio en Venezuela.
                </p>

                <h3>2. Información que Recopilamos</h3>
                <p>Podemos recopilar la siguiente información cuando interactúa con nuestro sitio web:</p>
                <ul>
                    <li>Información de contacto (nombre, correo electrónico, número de teléfono) a través de nuestros formularios.</li>
                    <li>Datos de navegación y uso del sitio web mediante cookies.</li>
                </ul>

                <h3>3. Finalidad del Tratamiento</h3>
                <p>Utilizamos sus datos para las siguientes finalidades:</p>
                <ul>
                    <li>Responder a sus consultas y solicitudes.</li>
                    <li>Gestionar pedidos o solicitudes de distribución.</li>
                    <li>Mejorar nuestra página web y servicios.</li>
                    <li>Enviar comunicaciones comerciales, si ha dado su consentimiento.</li>
                </ul>

                <h3>4. Protección de Datos</h3>
                <p>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                </p>

                <h3>5. Compartir Información</h3>
                <p>
                    No vendemos, comercializamos ni transferimos sus datos personales a terceros, excepto cuando sea necesario para prestar nuestros servicios (ej. empresas de logística) o cumplir con la ley.
                </p>

                <h3>6. Sus Derechos</h3>
                <p>
                    Usted tiene derecho a acceder, rectificar o eliminar sus datos personales. Para ejercer estos derechos, puede contactarnos a través de nuestra página de contacto o enviando un correo electrónico a info@productosds.com.
                </p>

                <h3>7. Cambios en esta Política</h3>
                <p>
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones serán publicadas en esta página.
                </p>
            </div>
            <Footer />
        </main>
    );
}
