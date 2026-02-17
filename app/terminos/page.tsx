
import React from 'react';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-ds-dark text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-display font-black mb-4">Términos y Condiciones</h1>
                    <p className="text-gray-300 text-lg max-w-2xl">
                        Por favor, lee estos términos cuidadosamente antes de usar nuestro sitio web.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-ds-dark prose-p:text-gray-600 prose-a:text-ds-green">
                <p className="text-sm text-gray-500 mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

                <h3>1. Aceptación de los Términos</h3>
                <p>
                    Al acceder y utilizar el sitio web de Productos DS, aceptas cumplir con estos Términos y Condiciones y todas las leyes aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
                </p>

                <h3>2. Uso del Sitio</h3>
                <p>
                    Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Productos DS solo para visualización transitoria personal y no comercial.
                </p>
                <p>Esta licencia no permite:</p>
                <ul>
                    <li>Modificar o copiar los materiales.</li>
                    <li>Usar los materiales para cualquier propósito comercial o exhibición pública.</li>
                    <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio.</li>
                    <li>Eliminar cualquier derecho de autor u otra notación de propiedad de los materiales.</li>
                </ul>

                <h3>3. Propiedad Intelectual</h3>
                <p>
                    Todos los contenidos de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, son propiedad de Productos DS o de sus proveedores de contenido y están protegidos por las leyes de propiedad intelectual.
                </p>

                <h3>4. Limitación de Responsabilidad</h3>
                <p>
                    En ningún caso Productos DS o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web, incluso si Productos DS ha sido notificado de la posibilidad de tales daños.
                </p>

                <h3>5. Exactitud de los Materiales</h3>
                <p>
                    Los materiales que aparecen en el sitio web de Productos DS podrían incluir errores técnicos, tipográficos o fotográficos. Productos DS no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. Productos DS puede realizar cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso.
                </p>

                <h3>6. Enlaces</h3>
                <p>
                    Productos DS no ha revisado todos los sitios vinculados a su sitio web y no es responsable de los contenidos de dicho sitio vinculado. La inclusión de cualquier enlace no implica el respaldo por parte de Productos DS del sitio. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.
                </p>

                <h3>7. Modificaciones</h3>
                <p>
                    Productos DS puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, aceptas estar sujeto a la versión actual de estos términos de servicio.
                </p>

                <h3>8. Ley Aplicable</h3>
                <p>
                    Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Venezuela y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o ubicación.
                </p>
            </div>
            <Footer />
        </main>
    );
}
