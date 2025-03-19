import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Proyectos | RD INGNOVA",
  description:
    "Descubre nuestros proyectos más destacados en ingeniería, consultoría y construcción. Soluciones reales para desafíos complejos.",
};

const projects = [
  {
    id: 1,
    title: "Edificio Corporativo Sustentable",
    category: "Construcción",
    description:
      "Desarrollo de un edificio de oficinas con certificación LEED Gold, implementando soluciones sostenibles y eficientes energéticamente.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    location: "Madrid, España",
  },
  {
    id: 2,
    title: "Rehabilitación Puente Histórico",
    category: "Rehabilitación",
    description:
      "Proyecto de restauración y refuerzo estructural de un puente centenario, preservando su valor histórico mientras se garantiza su seguridad.",
    image: "https://images.unsplash.com/photo-1545043904-61c5f52f1155",
    location: "Valencia, España",
  },
  {
    id: 3,
    title: "Consultoría Técnica para Centro Comercial",
    category: "Consultoría",
    description:
      "Servicios de consultoría técnica completa para la ampliación de un centro comercial, incluyendo estudios de viabilidad y planes de ejecución.",
    image: "https://images.unsplash.com/photo-1519567284-2417367aa9cb",
    location: "Barcelona, España",
  },
  {
    id: 4,
    title: "Pruebas de Carga en Viaducto",
    category: "Pruebas de Carga",
    description:
      "Realización de pruebas de carga estáticas y dinámicas en un viaducto de nueva construcción para verificar su comportamiento estructural.",
    image: "https://images.unsplash.com/photo-1513204342-152d441d73a3",
    location: "Sevilla, España",
  },
  {
    id: 5,
    title: "Diseño de Complejo Residencial",
    category: "Diseño",
    description:
      "Desarrollo del proyecto arquitectónico y estructural de un complejo residencial de 120 viviendas con criterios bioclimáticos.",
    image: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24",
    location: "Málaga, España",
  },
  {
    id: 6,
    title: "Estudio Hidrológico para Presa",
    category: "Consultoría",
    description:
      "Estudio hidrológico completo para el dimensionamiento y diseño de una presa de regulación, incluyendo evaluación de impacto ambiental.",
    image: "https://images.unsplash.com/photo-1566386547713-a13952fe0a1c",
    location: "Zaragoza, España",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Nuestros Proyectos"
        subtitle="Conoce nuestras obras más destacadas y soluciones de ingeniería"
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
        alignment="center"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Proyectos Destacados
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En RD INGNOVA transformamos ideas en realidades. Conozca nuestros
              proyectos más representativos y el impacto que han generado.
            </p>
          </div>

          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Categorías de proyectos */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Áreas de Especialización
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestros proyectos abarcan diversas áreas de especialización en el
              sector de la ingeniería.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Edificación",
                count: "45 proyectos",
                image:
                  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              },
              {
                title: "Infraestructuras",
                count: "32 proyectos",
                image:
                  "https://images.unsplash.com/photo-1545043904-61c5f52f1155",
              },
              {
                title: "Sostenibilidad",
                count: "28 proyectos",
                image:
                  "https://images.unsplash.com/photo-1473646590311-c48e1bc77b44",
              },
              {
                title: "Rehabilitación",
                count: "37 proyectos",
                image:
                  "https://images.unsplash.com/photo-1618174168358-4a26b5f8625c",
              },
              {
                title: "Industrial",
                count: "19 proyectos",
                image:
                  "https://images.unsplash.com/photo-1581093458791-9a03e65dad8a",
              },
              {
                title: "Energía",
                count: "23 proyectos",
                image:
                  "https://images.unsplash.com/photo-1473646590311-c48e1bc77b44",
              },
            ].map((categoria, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="relative h-64 w-full">
                  <img
                    src={categoria.image}
                    alt={categoria.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {categoria.title}
                    </h3>
                    <p className="text-white/80">{categoria.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
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
