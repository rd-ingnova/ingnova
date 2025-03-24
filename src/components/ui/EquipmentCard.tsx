"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { createSlug } from "@/lib/slug";

export interface EquipmentProps {
  title: string;
  image: string;
  description: string;
}

interface EquipmentCardProps {
  equipment: EquipmentProps;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid md:grid-cols-2 gap-6 items-center"
    >
      <div className="relative h-64 w-full">
        <Image
          src={equipment.image}
          alt={equipment.title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-primary-800">
          {equipment.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {equipment.description?.substring(0, 200)}...
        </p>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={`/equipment/${createSlug(equipment.title)}`}
            className="text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center"
          >
            Más información
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

export default EquipmentCard;
