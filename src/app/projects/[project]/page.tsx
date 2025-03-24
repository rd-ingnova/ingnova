import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import { getMarkup } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type ProjectParams = {
  params: Promise<{
    project: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const resolvedParams = await params;
  const projectData = getMarkup(
    "/content/projects",
    `${resolvedParams.project}.md`
  )?.data;

  if (!projectData) {
    return {
      title: "Proyecto no encontrado | INGNOVA",
      description:
        "El proyecto solicitado no existe o no está disponible actualmente.",
    };
  }

  return {
    title: `${projectData.title} | INGNOVA`,
    description: projectData.description,
  };
}

export default async function ProjectPage({ params }: ProjectParams) {
  const resolvedParams = await params;
  const project_md = getMarkup(
    "/content/projects",
    `${resolvedParams.project}.md`
  );

  if (!project_md) return null;
  const { data, content } = project_md;

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                Detalles del Proyecto
              </h2>

              {/* Render project content */}
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
                    p: ({ node, ...props }) => (
                      <p className="text-lg mb-4" {...props} />
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

            <div>
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  Información del Proyecto
                </h3>

                <div className="space-y-4">
                  {data.category && (
                    <div>
                      <p className="font-medium text-gray-700">Categoría:</p>
                      <p className="text-primary-600">{data.category}</p>
                    </div>
                  )}

                  {data.location && (
                    <div>
                      <p className="font-medium text-gray-700">Ubicación:</p>
                      <p>{data.location}</p>
                    </div>
                  )}

                  {/* You can add more fields here as they become available in your data */}

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <a
                      href="/contact"
                      className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition"
                    >
                      Consultar sobre este proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-800 text-center">
            Proyectos Relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRelatedProjects(resolvedParams.project).map(
              (project: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-primary-600 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-primary-600 font-medium hover:text-primary-800"
                    >
                      Ver detalles →
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
            ¿Necesita un proyecto similar?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contamos con la experiencia y capacidad para desarrollar proyectos
            adaptados a sus necesidades específicas. Nuestro equipo está listo
            para asesorarle.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-primary-900 hover:bg-gray-100"
          >
            Solicitar Consulta
          </a>
        </div>
      </section>
    </>
  );
}

// Helper function to get related projects
function getRelatedProjects(currentProjectSlug: string, limit: number = 3) {
  const projects_md = getMarkup("/content", "projects.md");
  if (!projects_md) return [];

  const projectsItems = projects_md.data.projectsItems || [];

  // Get project data for all projects except the current one
  const allProjects = projectsItems
    .map((filename: string) => {
      const projectData = getMarkup(
        "/content/projects",
        `${filename}.md`
      )?.data;
      if (projectData) {
        return {
          ...projectData,
          slug: filename,
        };
      }
      return null;
    })
    .filter((project: any) => project && project.slug !== currentProjectSlug);

  // Return a limited number of other projects
  return allProjects.sort(() => 0.5 - Math.random()).slice(0, limit);
}
