"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";

// Constantes EmailJS (reemplaza con tus propios valores)
const SERVICE_ID = "service_mf8doym";
const TEMPLATE_ID = "template_c0jltjj";
const PUBLIC_KEY = "lFhOY_qZ5EulnaQST";

export const Invitation: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F97316", "#EC4899", "#EF4444", "#F472B6"],
    });

    // Enviar correo de aceptación
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: "Invitado",
          message: "Ha aceptado la invitación ",
        },
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Correo de aceptación enviado!", response.status, response.text);
        },
        (err) => {
          console.error("Error al enviar correo:", err);
          alert("Ups, no se pudo enviar el correo.");
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-romantic-50 to-coral-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Una Invitación Especial
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-cream-200 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-coral-100 to-transparent rounded-bl-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-romantic-100 to-transparent rounded-tr-full opacity-50" />

          <div className="relative z-10">
            {!accepted ? (
              <>
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-coral-600 to-romantic-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Heart
                      className="text-white"
                      size={28}
                      fill="currentColor"
                    />
                  </motion.div>

                  <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    ¿Te animas a nuestra próxima cena este sábado?
                  </h3>

                  <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                    Sería bueno empezar a compartir más tiempo juntos, seguir
                    conociéndonos y disfrutar de esas historias que siempre me
                    cuentas
                  </p>
                </div>

                {/* Información de evento */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl">
                    <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-coral-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Sábado</p>
                      <p className="text-sm text-gray-600">
                        Este fin de semana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl">
                    <div className="w-10 h-10 bg-romantic-100 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-coral-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">8:00 PM</p>
                      <p className="text-sm text-gray-600">Hora perfecta</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl">
                    <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-coral-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Tu elección</p>
                      <p className="text-sm text-gray-600">El que prefieras</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAccept}
                    className="group px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-montserrat font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    <span className="flex items-center gap-2">
                      ¡Acepto con todo el corazón!
                      <Heart
                        size={20}
                        className="group-hover:animate-pulse"
                        fill="currentColor"
                      />
                    </span>
                  </motion.button>

                  <p className="mt-4 text-sm text-gray-500">
                    (Y si no puedes, también está bien, siempre hay otra
                    oportunidad)
                  </p>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-coral-500 to-romantic-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart className="text-white" size={36} fill="currentColor" />
                </motion.div>

                <h3 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
                  ¡Increíble!
                </h3>

                <p className="font-sans text-xl text-gray-600 mb-6">
                  No puedo esperar a verte el sábado. Será una noche perfecta.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-100 to-romantic-100 rounded-full text-coral-700 font-medium">
                  <Heart size={18} fill="currentColor" />
                  <span>¡Ya tengo muchas ganas!</span>
                  <Heart size={18} fill="currentColor" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
