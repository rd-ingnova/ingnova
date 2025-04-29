import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import { getArrayMarkups, getMarkup } from '@/lib/utils';
import MarkdownRaw from '@/components/ui/MarkdownRaw';

export const metadata: Metadata = {
  title: 'Proyectos | INGNOVA',
  description:
    'Descubre nuestros proyectos más destacados en ingeniería, consultoría y construcción. Soluciones reales para desafíos complejos.',
};

export default function ProjectsPage() {
  const markdown = getMarkup('/content', 'projects.md');
  if (!markdown) return null;

  const { data } = markdown;
  const projects = getArrayMarkups('/content/projects');

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
            <h2 className="text-3xl font-bold mb-4 text-primary-800">{data.projectsTitle}</h2>
            <div className="max-w-3xl mx-auto">
              <MarkdownRaw className="text-gray-600">{data.projectsContent}</MarkdownRaw>
            </div>
          </div>

          <ProjectsGrid data={projects} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Tiene un proyecto en mente?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Nuestro equipo está preparado para afrontar nuevos retos y ayudarle a materializar su
              proyecto con las soluciones de ingeniería más avanzadas.
            </p>
            <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Hablemos de su Proyecto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
