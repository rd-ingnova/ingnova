import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import ContactForm from "@/components/ui/ContactForm";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contacto | RD INGNOVA",
  description:
    "Ponte en contacto con RD INGNOVA. Consulta nuestros servicios de ingeniería y consultoría. Estamos aquí para ayudarte.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contacto"
        subtitle="Estamos aquí para ayudarte con tu próximo proyecto"
        imageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786"
        alignment="center"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">
                Ponte en Contacto
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nuestro equipo se pondrá en contacto
                contigo a la mayor brevedad. También puedes contactarnos
                directamente a través de los siguientes medios:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Dirección
                    </h3>
                    <p className="text-gray-600">
                      Carrera 17B # 81 - 71
                      <br />
                      Soledad - Atlántico, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-gray-600">
                      +57 321 301 8486
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      rdingnova@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Horario
                    </h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados y Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">
                Formulario de Contacto
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600 font-medium">
            Aquí se mostraría un mapa de Google Maps
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Aquí encontrarás respuestas a las preguntas más comunes sobre
              nuestros servicios y proceso de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Cómo puedo solicitar un presupuesto?",
                answer:
                  "Puede contactarnos a través del formulario de esta página, por teléfono o por email. Nuestro equipo evaluará sus necesidades y le proporcionará un presupuesto detallado sin compromiso.",
              },
              {
                question: "¿En qué áreas geográficas operan?",
                answer:
                  "Actualmente desarrollamos proyectos en toda España y contamos con experiencia en proyectos internacionales en Europa y Latinoamérica.",
              },
              {
                question: "¿Cuánto tiempo tardan en desarrollar un proyecto?",
                answer:
                  "Los plazos varían según la complejidad y alcance de cada proyecto. Durante la evaluación inicial, estableceremos un cronograma detallado con hitos y entregas.",
              },
              {
                question: "¿Trabajan con administraciones públicas?",
                answer:
                  "Sí, tenemos amplia experiencia en licitaciones y proyectos con administraciones públicas a nivel local, regional y nacional.",
              },
              {
                question: "¿Ofrecen servicios de mantenimiento posterior?",
                answer:
                  "Sí, ofrecemos servicios de seguimiento y mantenimiento para garantizar el correcto funcionamiento a largo plazo de nuestros proyectos.",
              },
              {
                question: "¿Tienen certificaciones de calidad?",
                answer:
                  "Disponemos de certificaciones ISO 9001, ISO 14001 y OHSAS 18001, que garantizan nuestro compromiso con la calidad, el medio ambiente y la seguridad laboral.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
