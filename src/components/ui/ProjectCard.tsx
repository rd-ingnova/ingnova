"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
}

interface ProjectCardProps {
  project: Project;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="relative h-60 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-secondary-800 text-xs px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-primary-800">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {project.location}
          </span>
        </p>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="pt-4 border-t border-gray-100">
          <a
            href={`/projects/${project.id}`}
            className="text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center"
          >
            Ver detalles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
