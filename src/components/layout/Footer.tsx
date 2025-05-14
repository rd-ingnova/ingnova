'use client';
import { MarkupData } from '@/lib/utils';
import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer({ data }: MarkupData) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Columna 1: Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-6">INGNOVA INGENIERÍA ESPECIALIZADA SAS</h3>
            <p className="text-primary-100 mb-6">
              Empresa líder en servicios de ingeniería y consultoría, ofreciendo soluciones
              innovadoras para proyectos de infraestructura.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, href: data.facebook },
                { icon: <FaLinkedin size={20} />, href: data.linkedin },
                { icon: <FaInstagram size={20} />, href: data.instagram },
                { icon: <FaYoutube size={20} />, href: data.youtube },
              ].map((link: any) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label="Facebook"
                  className="text-primary-100 hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <div className="flex flex-wrap gap-6">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Sobre Nosotros', href: '/about' },
                { name: 'Servicios', href: '/services' },
                { name: 'Proyectos', href: '/projects' },
                { name: 'Contacto', href: '/contact' },
                { name: 'Admin', href: '/admin' },
                { name: 'Política de Datos', href: '/politica-de-datos.pdf' },
              ].map((link) => (
                <div key={link.href} className="flex-shrink-0">
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-100">{data.address}</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-primary-100">{data.phone}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${data.email}`}
                  className="text-primary-100 hover:text-white transition-colors">
                  {data.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-300">
          <p>
            © {currentYear} INGNOVA INGENIERÍA ESPECIALIZADA SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
