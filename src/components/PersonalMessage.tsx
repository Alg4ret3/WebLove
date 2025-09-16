"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Download, Music } from "lucide-react";

export const PersonalMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const downloadPDF = () => {
    alert(
      "Función de descarga del PDF - aquí iría el enlace a tu carta romántica"
    );
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Una Carta para Ti
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-cream-200 relative overflow-hidden"
        >
          {/* Decorative quote marks */}
          <div className="absolute top-8 left-8 text-6xl text-coral-200 font-serif opacity-50">
            "
          </div>
          <div className="absolute bottom-8 right-8 text-6xl text-coral-600 font-serif opacity-50 rotate-180">
            "
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 mx-auto mb-8 bg-gradient-to-br from-coral-600 to-romantic-500 rounded-full flex items-center justify-center shadow-md"
            >
              <Heart className="text-white" size={24} fill="currentColor" />
            </motion.div>

            {/* Carta Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-6">
                <span className="font-montserrat font-larg text-coral-600">
                  Hola !!
                </span>
              </p>
              <p className="mb-6">
                Sé que apenas estamos empezando, pero contigo me siento en
                calma. Cada conversación tuya me hace sonreír sin darme cuenta,
                y estar a tu lado me da una paz que no sabía que existía.
              </p>

              <p className="mb-6">
                Gracias por tu risa que me alegra el día, por tu forma de ser
                que me hace sentir tranquilo y en confianza,  me encanta cómo
                eres, natural, auténtica, simplemente TU.
              </p>


              <p className="mb-6">
                Cada momento contigo, aunque sea pequeño, se siente especial,
                desde caminar juntos hasta simplemente hablar, todo contigo me
                hace sentir que el tiempo pasa de la mejor manera posible.
              </p>

              <p className="text-center mb-8">
                <span className="font-montserrat font-medium text-coral-600">
                  ¿Aceptas seguir escribiendo esta historia conmigo?
                </span>
              </p>


              <div className="text-right">
                <p className="font-montserrat text-xl font-medium">
                  Con cariño,
                </p>
                <p className="font-montserrat text-2xl font-bold text-coral-600 mt-2">
                  Sergio
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-cream-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadPDF}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-montserrat font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={20} />
                Descargar carta completa
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleMusic}
                className={`flex items-center gap-3 px-6 py-3 border-2 font-montserrat font-medium rounded-full transition-all duration-300 ${
                  isPlaying
                    ? "border-coral-500 text-coral-600 bg-coral-50"
                    : "border-gray-300 text-gray-700 hover:border-coral-300 hover:text-coral-600"
                }`}
              >
                <Music size={20} className={isPlaying ? "animate-pulse" : ""} />
                {isPlaying ? "Pausar música" : "Escuchar nuestra canción"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/audio/fuego.flac" />
    </section>
  );
};
