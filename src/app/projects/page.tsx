import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { motion } from "framer-motion";
import { getMarkup } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Proyectos | RD INGNOVA",
  description:
    "Descubre nuestros proyectos más destacados en ingeniería, consultoría y construcción. Soluciones reales para desafíos complejos.",
};

export default function ProjectsPage() {
  const projects_md = getMarkup("/content", "projects.md");

  if (!projects_md) return null;
  const data = projects_md.data;

  const projects = data.projectsItems.map(
    (filename: string) => getMarkup("/content/projects", `${filename}.md`)?.data
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
              {data.projectsTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {data.projectsContent}
            </p>
          </div>

          <ProjectsGrid data={projects} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tiene un proyecto en mente?
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Nuestro equipo está preparado para afrontar nuevos retos y
              ayudarle a materializar su proyecto con las soluciones de
              ingeniería más avanzadas.
            </p>
            <a
              href="/contact"
              className="btn bg-white text-primary-900 hover:bg-gray-100"
            >
              Hablemos de su Proyecto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
