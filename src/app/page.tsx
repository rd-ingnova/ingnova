import { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { getMarkup } from "@/lib/utils";

export const metadata: Metadata = {
  title: "RD INGNOVA | Ingeniería y Consultoría",
  description:
    "Empresa líder en servicios de ingeniería, consultoría y construcción. Soluciones innovadoras para proyectos de infraestructura.",
};

export default function Home() {
  const home_md = getMarkup("/content", "home.md"),
    services_md = getMarkup("/content", "services.md");

  if (!home_md || !services_md) return null;
  const data = home_md.data;

  const services = services_md.data.servicesItems.map(
    (filename: string) => getMarkup("/content/services", `${filename}.md`)?.data
  );

  const stats = data.statsItems.map(
    (filename: string) => getMarkup("/content/stats", `${filename}.md`)?.data
  );

  return (
    <>
      <HomeHero data={data} />

      {/* Sección de servicios destacados */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary-800">{data.servicesTitle}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {data.servicesDescription}
            </p>
          </div>

          <ServicesGrid showFeaturedOnly={true} data={services} />

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl mb-4 text-primary-800">
                {data.ctaTitle}
              </h2>
              <p className="text-gray-600">{data.ctaDescription}</p>
            </div>
            <div>
              <a href="/contact" className="btn btn-primary">
                {data.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
