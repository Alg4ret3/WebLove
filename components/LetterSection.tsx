"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

export default function LetterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letterText = `Querida María Fernanda,

Negrita, gracias por todos estos momentos compartidos,  
por hacerme entender que el amor y el interés verdadero aún existen.  
Gracias por hacerme creer de nuevo en el amor. Contigo comprendí que las cosas pasan por algo,  
y que después de tanta tormenta siempre llega la calma.

Gracias por impulsarme a ser una mejor persona y, sobre todo, un mejor profesional.  
Sé que estamos un poco lejos, pero créeme: en mi corazón y en mis pensamientos estás presente cada día.  
Sé que esta distancia es solo momentánea; poco a poco iremos cumpliendo nuestros objetivos personales y como equipo.  
Apenas estamos comenzando, y el camino que nos queda por recorrer es largo, pero hermoso.

Cada día a tu lado es un regalo que atesoro.  
Desde el momento en que te conocí, supe que eras alguien especial.  
Tu sonrisa ilumina mis días, tu risa es la melodía más hermosa que conozco,  
y tu forma de ver el mundo me inspira constantemente.
.`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra Carta
          </h2>
          <p className="text-xl text-gray-600">Palabras del corazón</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white rounded-3xl blur-2xl opacity-50" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100 paper-texture">
            <div className="absolute top-8 right-8 opacity-10">
              <Heart className="w-32 h-32 text-blue-600 fill-blue-600" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 0.6 }}
              className="relative"
            >
              {letterText.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="text-gray-700 leading-relaxed mb-6 italic text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-12 flex items-center gap-3"
              >
                <Heart className="w-6 h-6 text-blue-600 fill-blue-600" />
                <p className="font-serif text-2xl text-gray-900">
                  Con todo mi amor
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
