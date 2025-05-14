'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactFormProps {
  email: string;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [formData, setFormData] = useState({ nombre: '', asunto: '', mensaje: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Create email subject and body with form data
    const emailSubject = formData.asunto
      ? formData.asunto
      : 'Consulta desde formulario de contacto';

    const emailBody = `
      Nombre: ${formData.nombre}
      Asunto: ${formData.asunto}
      Mensaje: ${formData.mensaje}
    `.trim();

    // Create mailto URL with encoded parameters
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto
        </label>
        <select
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">Selecciona una opción</option>
          <option value="Consulta General">Consulta General</option>
          <option value="Solicitud de Presupuesto">Solicitud de Presupuesto</option>
          <option value="Información sobre Proyecto">Información sobre Proyecto</option>
          <option value="Propuesta de Colaboración">Propuesta de Colaboración</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
          Abrir Correo
        </button>
      </div>
    </motion.form>
  );
}
