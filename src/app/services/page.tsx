import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { getArrayMarkups, getMarkup } from '@/lib/utils';
import MarkdownRaw from '@/components/ui/MarkdownRaw';

export const metadata: Metadata = {
  title: 'Servicios | INGNOVA',
  description:
    'Nuestros servicios de ingeniería, consultoría, construcción y rehabilitación. Soluciones integrales para sus proyectos.',
};

export default function ServicesPage() {
  const markdown = getMarkup('/content', 'services.md');
  if (!markdown) return null;

  const { data } = markdown;
  const services = getArrayMarkups(data.servicesItems, '/content/services');
  const equipment = getArrayMarkups(data.equipmentItems, '/content/equipment');

  return (
    <>
      <Hero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        imageUrl={data.heroBg}
        alignment="center"
      />

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">{data.servicesTitle}</h2>
            <div className="max-w-3xl mx-auto">
              <MarkdownRaw className="text-gray-600">{data.servicesContent}</MarkdownRaw>
            </div>
          </div>

          <ServicesGrid data={services} />
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">{data.equipmentTitle}</h2>
            <div className="max-w-3xl mx-auto">
              <MarkdownRaw className="text-gray-600">{data.equipmentContent}</MarkdownRaw>
            </div>
          </div>

          <EquipmentGrid data={equipment} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesita un servicio personalizado?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contacte con nuestro equipo para analizar su proyecto y recibir una propuesta adaptada a
            sus necesidades específicas.
          </p>
          <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  );
}
