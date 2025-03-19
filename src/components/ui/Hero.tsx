"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  alignment?: "left" | "center" | "right";
  ctaButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  alignment = "left",
  ctaButton,
  secondaryButton,
}) => {
  // Alineación del contenido
  const contentAlignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div
          className={`flex flex-col ${contentAlignment[alignment]} max-w-3xl mx-auto`}
        >
          <motion.h1
            className="text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaButton || secondaryButton) && (
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {ctaButton && (
                <a
                  href={ctaButton.url}
                  className="btn bg-primary-600 hover:bg-primary-700 text-white"
                >
                  {ctaButton.text}
                </a>
              )}

              {secondaryButton && (
                <a
                  href={secondaryButton.url}
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  {secondaryButton.text}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
