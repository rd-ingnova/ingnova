"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import clsx from "clsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar el scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={clsx("fixed w-full z-50 transition-all duration-300", {
        "bg-white shadow-md py-2": isScrolled,
        "bg-white lg:bg-transparent shadow-md py-2": isMenuOpen && !isScrolled,
        "bg-transparent py-4": !isScrolled && !isMenuOpen,
      })}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              height={61}
              width={180}
              src={
                isScrolled || isMenuOpen
                  ? "/logo_primary.png"
                  : "/logo_secondary.png"
              }
              className="lg:hidden"
              alt="Logo de RD INGNOVA"
            />
            <Image
              height={61}
              width={180}
              src={isScrolled ? "/logo_primary.png" : "/logo_secondary.png"}
              className="hidden lg:block"
              alt="Logo de RD INGNOVA"
            />
          </Link>

          {/* Navegación escritorio */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition-colors duration-300 font-medium
                  ${
                    pathname === link.href
                      ? isScrolled
                        ? "text-primary-600"
                        : "text-white font-bold"
                      : isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`
                btn ${
                  isScrolled
                    ? "btn-primary"
                    : "bg-white text-primary-700 hover:bg-gray-100"
                }
              `}
            >
              Solicitar Presupuesto
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-gray-800" />
            ) : (
              <FaBars className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-4 font-medium rounded-lg transition-colors duration-300
                    ${
                      pathname === link.href
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block text-center btn btn-primary mt-4"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
