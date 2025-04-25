"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {Shield, ChevronLeft} from "lucide-react";

const TasasveTermsPage = () => {
  const lastUpdated = "25 de Abril de 2025";

  return (
    <div className="flex flex-col min-h-screen bg-[#FEF3E2] dark:bg-slate-900/80 transition-colors duration-1000">
      <Header />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center mb-8 text-[#FA812F] hover:text-[#FA4032] transition-colors"
            tabIndex={0}
            aria-label="Volver a la página principal"
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            <span>Volver al Inicio</span>
          </Link>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-[#FA812F]" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Términos y Condiciones de Tasasve
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
              Última actualización: {lastUpdated}
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  1. Aceptación de Términos
                </h2>
                <p>
                  Al descargar, instalar o utilizar la aplicación Tasasve, usted
                  acepta estar sujeto a estos Términos y Condiciones. Si no está
                  de acuerdo con estos términos, no debe utilizar la aplicación.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  2. Descripción del Servicio
                </h2>
                <p>
                  Tasasve es una aplicación que proporciona información sobre
                  las diferentes tasas de compra para el bolívar en Venezuela.
                  La aplicación recopila y muestra información de diversas
                  fuentes públicas con fines informativos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  3. Precisión de la Información
                </h2>
                <p>
                  Si bien nos esforzamos por proporcionar información precisa y
                  actualizada, no garantizamos la exactitud, integridad o
                  actualidad de la información proporcionada en la aplicación.
                  Las tasas de cambio pueden fluctuar rápidamente y la
                  información puede no reflejar las tasas más recientes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  4. Exención de Responsabilidad
                </h2>
                <p>
                  Tasasve no está afiliada a ninguna institución financiera,
                  banco central o entidad gubernamental. La aplicación no ofrece
                  servicios financieros ni recomendaciones de inversión. El
                  usuario acepta que cualquier decisión financiera tomada
                  basándose en la información proporcionada por la aplicación es
                  de su exclusiva responsabilidad.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  5. Uso de Datos y Privacidad
                </h2>
                <p>
                  La aplicación puede recopilar ciertos datos de uso anónimos
                  para mejorar la experiencia del usuario. No compartimos
                  información personal identificable con terceros sin su
                  consentimiento. Para obtener más información, consulte nuestra
                  Política de Privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  6. Limitación de Responsabilidad
                </h2>
                <p>
                  En ningún caso los desarrolladores, propietarios o afiliados
                  de Tasasve serán responsables por cualquier daño directo,
                  indirecto, incidental, especial, ejemplar o consecuente que
                  resulte del uso o la imposibilidad de uso de la aplicación.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  7. Modificaciones a los Términos
                </h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en
                  cualquier momento. Los cambios entrarán en vigor
                  inmediatamente después de su publicación en la aplicación. El
                  uso continuado de la aplicación después de dichos cambios
                  constituye su aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  8. Ley Aplicable
                </h2>
                <p>
                  Estos términos y condiciones se regirán e interpretarán de
                  acuerdo con las leyes de Venezuela, sin tener en cuenta sus
                  disposiciones sobre conflictos de leyes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  9. Contacto
                </h2>
                <p>
                  Si tiene alguna pregunta o inquietud sobre estos Términos y
                  Condiciones, por favor contáctenos a través de:{" "}
                  <span className="text-[#FA812F]">
                    rafael@molina-aquino.com
                  </span>
                </p>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="px-6 py-3 bg-[#FA812F] hover:bg-[#FA4032] text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FAB12F] focus:ring-opacity-50"
                tabIndex={0}
                aria-label="Volver a la página principal"
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
              >
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TasasveTermsPage;
