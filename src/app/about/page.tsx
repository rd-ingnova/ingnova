import { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Sobre Nosotros | RD INGNOVA",
  description:
    "Conoce la historia, equipo y visión de RD INGNOVA. Empresa líder en servicios de ingeniería y consultoría.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Historia de la empresa */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                Nuestra Historia
              </h2>
              <p className="mb-4 text-gray-700">
                Fundada en 2010, RD INGNOVA nació con la visión de transformar
                el sector de la ingeniería en la región, apostando por la
                innovación y la excelencia técnica como pilares fundamentales.
              </p>
              <p className="mb-4 text-gray-700">
                Lo que comenzó como un pequeño equipo de ingenieros apasionados,
                se ha convertido hoy en una empresa reconocida a nivel nacional
                por la calidad de sus servicios y su compromiso con la
                sostenibilidad y la mejora continua.
              </p>
              <p className="text-gray-700">
                Tras más de una década de crecimiento constante, hemos expandido
                nuestros servicios y áreas de especialización, manteniéndonos
                siempre fieles a nuestra filosofía: soluciones de ingeniería que
                combinan innovación, calidad y responsabilidad.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553697388-94e804e2f0f6"
                alt="Historia de RD INGNOVA"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada proyecto y cada decisión que
              tomamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excelencia Técnica",
                description:
                  "Buscamos la perfección en cada detalle técnico, superando los estándares de la industria.",
                icon: "🔍",
              },
              {
                title: "Innovación Constante",
                description:
                  "Exploramos continuamente nuevas metodologías y tecnologías para ofrecer soluciones de vanguardia.",
                icon: "💡",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Diseñamos pensando en el futuro, minimizando el impacto ambiental de nuestros proyectos.",
                icon: "🌱",
              },
              {
                title: "Integridad",
                description:
                  "Actuamos con transparencia y honestidad en todas nuestras relaciones profesionales.",
                icon: "🤝",
              },
              {
                title: "Compromiso",
                description:
                  "Nos involucramos completamente en cada proyecto, asumiendo la responsabilidad de su éxito.",
                icon: "✓",
              },
              {
                title: "Trabajo en Equipo",
                description:
                  "Fomentamos la colaboración y el intercambio de conocimientos para alcanzar resultados superiores.",
                icon: "👥",
              },
            ].map((valor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary-700">
                  {valor.title}
                </h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Contamos con profesionales altamente cualificados en diversas
              áreas de la ingeniería.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alejandro Ramírez",
                position: "Director General",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a",
              },
              {
                name: "María Fernández",
                position: "Directora de Proyectos",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
              },
              {
                name: "Carlos Mendoza",
                position: "Jefe de Ingeniería Estructural",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              },
              {
                name: "Laura González",
                position: "Coordinadora de Consultoría",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956",
              },
              {
                name: "Daniel Torres",
                position: "Responsable de Innovación",
                image:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
              },
              {
                name: "Sofía Ruiz",
                position: "Especialista en Sostenibilidad",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
            ].map((miembro, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={miembro.image}
                    alt={miembro.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      {miembro.name}
                    </h3>
                    <p className="text-white/80">{miembro.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
