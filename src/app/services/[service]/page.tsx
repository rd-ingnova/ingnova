import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import { getMarkup } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type ServiceParams = {
  params: Promise<{
    service: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServiceParams): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceData = getMarkup(
    "/content/services",
    `${resolvedParams.service}.md`
  )?.data;

  if (!serviceData) {
    return {
      title: "Servicio no encontrado | RD INGNOVA",
      description:
        "El servicio solicitado no existe o no está disponible actualmente.",
    };
  }

  return {
    title: `${serviceData.title} | RD INGNOVA`,
    description: serviceData.excerpt,
  };
}

export default async function ServicePage({ params }: ServiceParams) {
  const resolvedParams = await params;
  const service_md = getMarkup(
    "/content/services",
    `${resolvedParams.service}.md`
  );

  if (!service_md) return null;
  const { data, content } = service_md;

  return (
    <>
      <Hero
        title={data.title}
        subtitle={data.description}
        imageUrl={data.image}
        alignment="center"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                Descripción del Servicio
              </h2>

              {/* Render service description */}
              <div className="prose prose-lg max-w-none">
                <Markdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-2xl text-primary-800 my-4"
                        {...props}
                      />
                    ),
                    iframe: ({ node, ...props }) => (
                      <iframe
                        className="aspect-video rounded-lg overflow-hidden mt-8"
                        {...props}
                      />
                    ),
                  }}
                >
                  {content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-800 text-center">
            Servicios Relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We'll fetch and display related services here */}
            {getRelatedServices(resolvedParams.service).map(
              (service: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {service.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.coverImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-700">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.excerpt}
                    </p>
                    <a
                      href={`/services/${service.slug}`}
                      className="text-primary-600 font-medium hover:text-primary-800"
                    >
                      Ver más →
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita más información sobre este servicio?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Nuestro equipo está listo para responder todas sus preguntas y
            proporcionarle una solución adaptada a sus necesidades.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-primary-900 hover:bg-gray-100"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </>
  );
}

// Helper function to get related services
function getRelatedServices(currentServiceSlug: string, limit: number = 3) {
  const services_md = getMarkup("/content", "services.md");
  if (!services_md) return [];

  const servicesItems = services_md.data.servicesItems || [];

  // Get service data for all services except the current one
  const allServices = servicesItems
    .map((filename: string) => {
      const serviceData = getMarkup(
        "/content/services",
        `${filename}.md`
      )?.data;
      if (serviceData) {
        return {
          ...serviceData,
          slug: filename,
        };
      }
      return null;
    })
    .filter((service: any) => service && service.slug !== currentServiceSlug);

  // Return a limited number of related services
  return allServices.slice(0, limit);
}
