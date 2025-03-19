"use client";

import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

interface ServicesGridProps {
  showFeaturedOnly?: boolean;
}

const services = [
  {
    id: 1,
    title: "Consultoría Técnica",
    description:
      "Asesoramiento especializado para optimizar sus proyectos, desde la fase inicial hasta la ejecución final.",
    icon: "🔍",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
    featured: true,
  },
  {
    id: 2,
    title: "Proyectos de Construcción",
    description:
      "Desarrollo integral de proyectos constructivos, con énfasis en la innovación y la sostenibilidad.",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    featured: true,
  },
  {
    id: 3,
    title: "Rehabilitación de Estructuras",
    description:
      "Renovación y refuerzo de estructuras existentes, preservando su valor mientras mejoramos su funcionalidad.",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9",
    featured: true,
  },
  {
    id: 4,
    title: "Pruebas de Carga",
    description:
      "Evaluación del comportamiento estructural mediante pruebas estáticas y dinámicas con tecnología avanzada.",
    icon: "⚖️",
    image: "https://images.unsplash.com/photo-1504937551116-cb8097e6f02a",
    featured: false,
  },
  {
    id: 5,
    title: "Eficiencia Energética",
    description:
      "Soluciones para optimizar el consumo energético en edificaciones nuevas y existentes.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    featured: false,
  },
  {
    id: 6,
    title: "Estudios Geotécnicos",
    description:
      "Análisis detallado del terreno para garantizar la estabilidad y seguridad de sus construcciones.",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114",
    featured: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesGrid: React.FC<ServicesGridProps> = ({
  showFeaturedOnly = false,
}) => {
  // Filtrar servicios según la prop
  const displayedServices = showFeaturedOnly
    ? services.filter((service) => service.featured)
    : services;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {displayedServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
