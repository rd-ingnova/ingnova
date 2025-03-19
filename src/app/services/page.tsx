import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Servicios | RD INGNOVA",
  description:
    "Nuestros servicios de ingeniería, consultoría, construcción y rehabilitación. Soluciones integrales para sus proyectos.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nuestros Servicios"
        subtitle="Soluciones integrales de ingeniería para cada etapa de su proyecto"
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        alignment="center"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Servicios Especializados
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En RD INGNOVA ofrecemos una amplia gama de servicios de ingeniería
              y consultoría, adaptados a las necesidades específicas de cada
              cliente y sector.
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Sección de Metodología */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                Nuestra Metodología
              </h2>
              <p className="mb-4 text-gray-700">
                En cada proyecto seguimos un proceso estructurado que garantiza
                resultados excepcionales y la satisfacción de nuestros clientes:
              </p>

              <div className="space-y-4 mt-6">
                {[
                  {
                    number: "01",
                    title: "Análisis y Diagnóstico",
                    description:
                      "Estudiamos a fondo las necesidades y condiciones del proyecto para establecer una base sólida.",
                  },
                  {
                    number: "02",
                    title: "Planificación Estratégica",
                    description:
                      "Desarrollamos un plan detallado, considerando recursos, plazos y objetivos específicos.",
                  },
                  {
                    number: "03",
                    title: "Ejecución Controlada",
                    description:
                      "Implementamos soluciones con un riguroso control de calidad y seguimiento continuo.",
                  },
                  {
                    number: "04",
                    title: "Evaluación y Mejora",
                    description:
                      "Analizamos resultados y aplicamos mejoras continuas durante todo el ciclo del proyecto.",
                  },
                ].map((paso, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {paso.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-700">
                        {paso.title}
                      </h3>
                      <p className="text-gray-600">{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569134352118-4f49a283f9c4"
                  alt="Metodología RD INGNOVA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1588878848598-5f9d388106e5"
                  alt="Metodología RD INGNOVA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                  alt="Metodología RD INGNOVA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
                  alt="Metodología RD INGNOVA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita un servicio personalizado?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contacte con nuestro equipo para analizar su proyecto y recibir una
            propuesta adaptada a sus necesidades específicas.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-primary-900 hover:bg-gray-100"
          >
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  );
}
