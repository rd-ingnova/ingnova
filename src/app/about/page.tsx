import { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import Image from "next/image";
import { getMarkup } from "@/lib/utils";
import MarkdownRaw from "@/components/ui/MarkdownRaw";

export const metadata: Metadata = {
  title: "Sobre Nosotros | INGNOVA",
  description:
    "Conoce la historia, equipo y visión de INGNOVA - Ingeniería Especializada. Empresa líder en servicios de ingeniería y consultoría.",
};

export default function AboutPage() {
  const about_md = getMarkup("/content", "about.md");

  if (!about_md) return null;
  const { data } = about_md;

  const values = data.valueItems.map(
    (filename: string) => getMarkup("/content/values", `${filename}.md`)?.data
  );

  const team = data.teamMembers.map(
    (filename: string) => getMarkup("/content/team", `${filename}.md`)?.data
  );

  return (
    <>
      <AboutHero data={data} />

      {/* Historia de la empresa */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                {data.historyTitle}
              </h2>
              <MarkdownRaw className="text-gray-700">
                {data.historyContent}
              </MarkdownRaw>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={data.historyImage}
                alt="Historia de INGNOVA"
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
              {data.valuesTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {data.valuesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="select-none text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Clave */}
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

          <div className="space-y-12">
            {team.map((member: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative mx-8 md:mx-0 aspect-square rounded-xl overflow-hidden group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6"></div>
                  </div>
                </div>
                <div className="px-8 w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2 text-primary-700">
                    {member.name}
                  </h3>
                  <p className="text-lg text-primary-600 mb-4">
                    {member.position}
                  </p>
                  <MarkdownRaw className="text-gray-700">
                    {member.bio}
                  </MarkdownRaw>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
