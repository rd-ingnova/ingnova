"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MarkupData } from "@/lib/utils";

const AboutHero: React.FC<MarkupData> = ({ data }) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.heroBg}
          alt="Sobre INGNOVA SAS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.heroTitle}
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.heroSubtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
