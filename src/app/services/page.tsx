import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { getMarkup } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicios | RD INGNOVA",
  description:
    "Nuestros servicios de ingeniería, consultoría, construcción y rehabilitación. Soluciones integrales para sus proyectos.",
};

export default function ServicesPage() {
  const services_md = getMarkup("/content", "services.md");

  if (!services_md) return null;
  const data = services_md.data;

  const services = data.servicesItems.map(
    (filename: string) => getMarkup("/content/services", `${filename}.md`)?.data
  );

  return (
    <>
      <Hero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        imageUrl={data.heroBg}
        alignment="center"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              {data.servicesTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {data.servicesContent}
            </p>
          </div>

          <ServicesGrid data={services} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50 text-primary-900">
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
            className="btn text-white bg-primary-900 hover:bg-primary-950"
          >
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  );
}
