import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import { getMarkup } from '@/lib/utils';
import MarkdownRaw from '@/components/ui/MarkdownRaw';

type EquipmentParams = {
  params: Promise<{ equipment: string }>;
};

export async function generateMetadata({ params }: EquipmentParams): Promise<Metadata> {
  const resolvedParams = await params;
  const equipmentData = getMarkup('/content/equipment', `${resolvedParams.equipment}.md`)?.data;

  if (!equipmentData) {
    return {
      title: 'Equipo no encontrado | INGNOVA',
      description: 'El equipo solicitado no existe o no está disponible actualmente.',
    };
  }

  return {
    title: `${equipmentData.title} | INGNOVA`,
    description: `Detalles sobre el equipo ${equipmentData.title}`,
  };
}

export default async function EquipmentPage({ params }: EquipmentParams) {
  const resolvedParams = await params;
  const markdown = getMarkup('/content/equipment', `${resolvedParams.equipment}.md`);
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
              <h2 className="text-3xl font-bold mb-6 text-primary-800">Descripción del Equipo</h2>
              <MarkdownRaw className="lg:text-lg">{content}</MarkdownRaw>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
