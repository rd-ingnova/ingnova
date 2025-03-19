"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      action="#"
      method="POST"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Apellidos
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Asunto
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Selecciona una opción</option>
          <option value="consulta">Consulta General</option>
          <option value="presupuesto">Solicitud de Presupuesto</option>
          <option value="proyecto">Información sobre Proyecto</option>
          <option value="colaboracion">Propuesta de Colaboración</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="privacy" className="text-gray-500">
            He leído y acepto la{" "}
            <a
              href="/privacy-policy"
              className="text-primary-600 hover:text-primary-800"
            >
              política de privacidad
            </a>
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Enviar Mensaje
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
