'use client';
import ProjectCard, { ProjectProps } from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

interface ProjectsGridProps {
  data: ProjectProps[];
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

export default function ProjectsGrid({ data }: ProjectsGridProps) {
  const projects = data;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
}
