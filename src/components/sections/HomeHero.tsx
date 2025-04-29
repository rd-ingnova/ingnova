'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { MarkupData } from '@/lib/utils';

export default function HomeHero({ data }: MarkupData) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.heroBg}
          alt="INGNOVA - Ingeniería Especializada"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 pt-8">
        <div className="flex flex-col max-w-3xl">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            {data.heroTitle}
          </motion.h1>

          <motion.p
            className="text-sm md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            {data.heroSubtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}>
            <Link
              href="/services"
              className="btn btn-primary bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Ver Servicios
            </Link>
            <Link
              href="/contact"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
              Contáctanos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}>
        <FaChevronDown size={30} className="text-white" />
      </motion.div>
    </section>
  );
}
