'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  featured?: boolean;
  filename: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-min">
      <div className="relative h-48 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="select-none absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary-800">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <a
            href={`/services/${service.filename}`}
            className="text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center">
            Más información
            <span className="sr-only">sobre {service.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {service.featured && (
            <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full">
              Destacado
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
