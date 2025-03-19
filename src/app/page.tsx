import { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "RD INGNOVA | Ingeniería y Consultoría",
  description:
    "Empresa líder en servicios de ingeniería, consultoría y construcción. Soluciones innovadoras para proyectos de infraestructura.",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Sección de servicios destacados */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary-800">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en ingeniería y consultoría para
              transformar sus proyectos en realidades exitosas.
            </p>
          </div>

          <ServicesGrid showFeaturedOnly={true} />

          <div className="mt-12 text-center">
            <a href="/services" className="btn btn-primary">
              Ver todos los servicios
            </a>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">+250</h3>
              <p className="text-primary-100">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">15</h3>
              <p className="text-primary-100">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">+100</h3>
              <p className="text-primary-100">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">25</h3>
              <p className="text-primary-100">Profesionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl mb-4 text-primary-800">
                ¿Listo para llevar tu proyecto al siguiente nivel?
              </h2>
              <p className="text-gray-600">
                Contáctanos hoy para recibir asesoramiento personalizado de
                nuestro equipo de expertos.
              </p>
            </div>
            <div>
              <a href="/contact" className="btn btn-primary">
                Contáctanos ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
