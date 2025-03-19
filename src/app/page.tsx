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
              Brindamos servicios especializados en consultoría, construcción y
              rehabilitación de infraestructuras, respaldados por tecnología de
              vanguardia y un equipo con amplia experiencia en el sector.
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
              <h3 className="text-4xl font-bold text-white mb-2">+5</h3>
              <p className="text-primary-100">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">+20</h3>
              <p className="text-primary-100">Años de Experiencia de Personal</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">+5</h3>
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
                Estamos listos para asesorarte en tu próximo proyecto.
                Escríbenos y nuestro equipo de expertos te brindará soluciones
                adaptadas a tus necesidades.
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
