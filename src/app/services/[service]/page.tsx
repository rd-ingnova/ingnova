import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import { getMarkup, getRelatedContent } from '@/lib/utils';
import MarkdownRaw from '@/components/ui/MarkdownRaw';

type ServiceParams = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceData = getMarkup('/content/services', `${resolvedParams.service}.md`)?.data;

  if (!serviceData) {
    return {
      title: 'Servicio no encontrado | INGNOVA',
      description: 'El servicio solicitado no existe o no está disponible actualmente.',
    };
  }

  return {
    title: `${serviceData.title} | INGNOVA`,
    description: serviceData.excerpt,
  };
}

export default async function ServicePage({ params }: ServiceParams) {
  const resolvedParams = await params;
  const markdown = getMarkup('/content/services', `${resolvedParams.service}.md`);
  if (!markdown) return null;

  const { data, content } = markdown;

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
              <h2 className="text-3xl font-bold mb-6 text-primary-800">Descripción del Servicio</h2>

              <MarkdownRaw className="lg:text-lg">{content}</MarkdownRaw>
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
            {getRelatedContent(resolvedParams.service, '/content/services').map(
              (service: any, index: any) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {service.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.coverImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-bold mb-2 text-primary-700">{service.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.excerpt}</p>
                    <a
                      href={`/services/${service.filename}`}
                      className="text-primary-600 font-medium hover:text-primary-800 flex items-center">
                      Ver más
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
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
            Nuestro equipo está listo para responder todas sus preguntas y proporcionarle una
            solución adaptada a sus necesidades.
          </p>
          <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
            Contactar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
