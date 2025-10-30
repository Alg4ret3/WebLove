"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Star, Coffee } from "lucide-react";

const timelineEvents = [
  {
    title: "Fin de semana en Buesaco",
    description: "Ese viaje donde el tiempo parecía detenerse, solo tú, yo y la calma de aquel lugar.",
    icon: Sparkles,
    color: "from-blue-400 to-blue-600",
    image: "/images/momentos/4.webp",
  },
  {
    title: "Primera comida en el pueblo",
    description: "Aquel ccena en ese restaurante , lleno de risas y miradas que decían más que las palabras.",
    icon: Coffee,
    color: "from-blue-500 to-blue-700",
    image: "/images/momentos/3.webp",

  },
  {
    title: "Atardecer con helado",
    description: "Cuando contemplamos el atardecer juntos, con un helado en mano y el corazón lleno. ",
    icon: Star,
    color: "from-blue-600 to-blue-800",
    image: "/images/momentos/2.webp",

  },
  {
    title: "Última cena juntos",
    description: "Esa noche que guardo en el alma, la última cena que compartimos con sonrisas y cariño.",
    icon: Heart,
    color: "from-blue-700 to-blue-900",
    image: "/images/momentos/1.webp",

  },
];


export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Nuestra Historia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600"
        >
          El camino que hemos recorrido juntos 
        </motion.p>
      </div>

      {/* 🌸 Timeline versión móvil: scroll horizontal */}
      <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-6 custom-scroll">
        {timelineEvents.map((event, i) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[80%] snap-center bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center relative border border-blue-100"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg mb-4 animate-pulse`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{event.description}</p>
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 💫 Versión desktop */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 transform -translate-x-1/2" />

        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex items-center gap-8 mb-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 text-lg mb-4">{event.description}</p>
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-xl shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>

              <div className="flex-1" />
            </motion.div>
          );
        })}
      </div>

      {/* 🎨 Scrollbar azul personalizada */}
      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #3b82f6, #2563eb);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #60a5fa, #3b82f6);
        }
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #e5e7eb;
        }
      `}</style>
    </section>
  );
}
