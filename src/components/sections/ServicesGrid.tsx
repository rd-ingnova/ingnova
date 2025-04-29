'use client';
import ServiceCard, { ServiceProps } from '@/components/ui/ServiceCard';
import { motion } from 'framer-motion';

interface ServicesGridProps {
  showFeaturedOnly?: boolean;
  data: ServiceProps[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesGrid({ showFeaturedOnly = false, data }: ServicesGridProps) {
  const services = data;

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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </motion.div>
  );
}
