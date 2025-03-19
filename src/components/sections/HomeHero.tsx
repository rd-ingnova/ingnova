"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="RD INGNOVA - Ingeniería y Consultoría"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Soluciones de ingeniería para el futuro
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            RD INGNOVA combina más de 20 años de experiencia en ingeniería con
            un enfoque innovador para el desarrollo de proyectos exitosos. Nos
            especializamos en ofrecer soluciones técnicas avanzadas con un alto
            compromiso en calidad, sostenibilidad y eficiencia.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="btn btn-primary bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contact"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <FaChevronDown size={36} className="text-white" />
      </motion.div>
    </section>
  );
};

export default HomeHero;
