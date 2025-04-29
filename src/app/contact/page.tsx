import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ContactForm from '@/components/ui/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhoneAlt } from 'react-icons/fa';
import { getArrayMarkups, getMarkup } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contacto | INGNOVA',
  description:
    'Ponte en contacto con INGNOVA Ingeniería Especializada SAS. Consulta nuestros servicios de ingeniería y consultoría. Estamos aquí para ayudarte.',
};

export default function ContactPage() {
  const markdown = getMarkup('/content', 'contact.md');
  if (!markdown) return null;

  const { data } = markdown;
  const faqs = getArrayMarkups('/content/faqs');

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">Ponte en Contacto</h2>
              <p className="text-gray-600 mb-8">{data.description}</p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FaMapMarkerAlt size={20} />,
                    title: 'Dirección',
                    content: data.address,
                  },
                  {
                    icon: <FaPhoneAlt size={20} />,
                    title: 'Teléfono',
                    content: data.phone,
                  },
                  {
                    icon: <FaEnvelope size={20} />,
                    title: 'Email',
                    content: data.email,
                  },
                  {
                    icon: <FaClock size={20} />,
                    title: 'Horario',
                    content: data.schedule,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="self-center flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">Formulario de Contacto</h3>
              <ContactForm email={data.email} />
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="w-full">
            {data.address ? (
              <iframe
                width="100%"
                height="300"
                src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(
                  data.address
                )}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                aria-hidden="false"
                tabIndex={0}
              />
            ) : (
              <p>No address available</p>
            )}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y
              proceso de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqs.map((faq: any, index: number) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
