"use client";

import React from "react";
import EquipmentCard, { EquipmentProps } from "@/components/ui/EquipmentCard";
import { motion } from "framer-motion";

interface EquipmentGridProps {
  data: EquipmentProps[];
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

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ data }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-8"
    >
      {data.map((equipment, index) => (
        <EquipmentCard key={index} equipment={equipment} />
      ))}
    </motion.div>
  );
};

export default EquipmentGrid;
