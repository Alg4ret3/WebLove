"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";
import emailjs from "@emailjs/browser"; // <- Asegúrate de instalarlo: npm install @emailjs/browser

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar email usando EmailJS
    emailjs
      .send(
        "tu_service_id",      // reemplaza con tu Service ID
        "tu_template_id",     // reemplaza con tu Template ID
        {
          from_name: formData.name,
          message: formData.message,
        },
        "tu_public_key"       // reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("Correo enviado!", response.status, response.text);
          setIsSubmitted(true);

          // Reset form después de 3 segundos
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", message: "" });
          }, 3000);
        },
        (err) => {
          console.error("Error al enviar correo:", err);
          alert("Ups, algo salió mal. Intenta de nuevo.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-romantic-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Cuéntame Qué Piensas
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Me encantaría saber qué te pareció esta pequeña sorpresa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-cream-200"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-montserrat font-medium text-gray-800 mb-3 text-lg"
                >
                  Tu nombre (aunque ya lo sé)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-cream-200 rounded-xl focus:border-coral-400 focus:outline-none transition-colors duration-300 font-sans text-lg"
                  placeholder="Alejandra"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-montserrat font-medium text-gray-800 mb-3 text-lg"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-cream-200 rounded-xl focus:border-coral-400 focus:outline-none transition-colors duration-300 font-sans text-lg resize-none"
                  placeholder="Sabes que tu opinión significa mucho para mí, cuéntame qué piensas de todo esto..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-montserrat font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Send size={20} />
                Enviar con amor
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1 }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-coral-500 to-romantic-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="text-white" size={32} fill="currentColor" />
              </motion.div>

              <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-4">
                ¡Mensaje enviado!
              </h3>

              <p className="font-sans text-lg text-gray-600">
                Gracias por escribirme, significa mucho para mí conocer tu opinión.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
