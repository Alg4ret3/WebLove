"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Utensils, Plane, Camera, Activity, Star } from "lucide-react";

const timelineItems = [
  {
    icon: Utensils,
    title: "Cena especial este sábado",
    description: "Ese lugar que me dijiste que querías probar",
    date: "Este fin de semana",
    color: "from-romantic-600 to-coral-600",

  },
  {
    icon: MapPin,
    title: "Salir a caminar y disfrutar de la ciudad",
    description:
      "Pasar un buen rato observando los detalles y paisajes urbanos",
    date: "Próxima semana",
    color: "from-romantic-600 to-coral-600",

  },

  {
    icon: Camera,
    title: "Sesión de fotos espontánea",
    description: "Para crear más recuerdos como los que ya tenemos",
    date: "Cuando quieras",
    color: "from-romantic-600 to-coral-600",

  },
  {
    icon: Activity, 
    title: "Nuestra primera competencia de CrossFit",
    description: "Poniéndonos a prueba y disfrutando juntos del esfuerzo",
    date: "El mes que viene",
    color: "from-romantic-600 to-coral-600",

  },

  {
    icon: Plane,
    title: "Nuestro primer viaje juntos",
    description: "A donde tú elijas, lo importante es ir contigo",
    date: "Cuando estés lista",
    color: "from-coral-600 to-romantic-600",
  },
  {
    icon: Star,
    title: "Y muchas aventuras más...",
    description: "Por escribir juntos",
    date: "Nuestro futuro",
    color: "from-romantic-600 to-coral-600",
  },
];

const TimelineItem: React.FC<{
  item: (typeof timelineItems)[0];
  index: number;
}> = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: index % 2 === 0 ? -50 : 50 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10`}
      >
        <item.icon size={16} className="text-white" />
      </div>

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className={`ml-16 md:ml-0 ${
          index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"
        } bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md border border-cream-200`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md md:hidden`}
          >
            <item.icon size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="font-sans text-gray-600 mb-3 leading-relaxed">
              {item.description}
            </p>
            <span
              className={`inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r ${item.color} text-white rounded-full`}
            >
              {item.date}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Próximos Momentos
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Ideas de los lugares y experiencias que me gustaría compartir
            contigo
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral-200 via-romantic-300 to-coral-400 transform md:-translate-x-1/2" />

          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
