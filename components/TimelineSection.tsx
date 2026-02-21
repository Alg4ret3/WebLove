"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NextImage from "next/image";
import { timelineEvents } from "@/lib/constants/timeline";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Torn Paper Edge Top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[#f0ede9] paper-edge-top z-20" />

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10 pt-16">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          Nuestra Historia
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "80px" } : { width: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-300 to-blue-900 mx-auto mb-6 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 font-light"
        >
          El camino que hemos recorrido juntos, paso a paso, con el corazón en la mano.
        </motion.p>
      </div>

      {/* 📱 Timeline móvil: Mejorado con snap y mejor visualización */}
      <div className="md:hidden">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-12 custom-scroll no-scrollbar">
          {timelineEvents.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="min-w-[85%] snap-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center relative border border-blue-100/50"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center shadow-lg mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 text-center">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                  &quot;{event.description}&quot;
                </p>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner group">
                  <NextImage
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Indicador de scroll para móvil */}
        <div className="flex justify-center gap-1.5 mt-2 overflow-hidden">
            {timelineEvents.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-200" />
            ))}
        </div>
      </div>

      {/* 💻 Versión Desktop: Más elegante y romántica */}
      <div className="hidden md:block relative max-w-5xl mx-auto px-4">
        {/* Línea central con gradiente y efecto de pulso */}
        <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 transform -translate-x-1/2 overflow-hidden">
             <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
             />
        </div>

        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative mb-24 last:mb-0">
              <div className={`flex items-center gap-12 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                {/* Contenido */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex-1 ${isEven ? "text-right" : "text-left"}`}
                >
                  <div className={`inline-block p-2 rounded-xl mb-4 ${isEven ? "ml-auto" : "mr-auto"}`}>
                     <h3 className="font-serif text-3xl font-bold text-gray-900">
                        {event.title}
                     </h3>
                  </div>
                  <p className="text-blue-600/80 text-lg mb-6 font-medium italic">
                    {event.description}
                  </p>
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white inline-block w-full max-w-md aspect-video"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <NextImage
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                  </motion.div>
                </motion.div>

                {/* Icono central */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-slate-900 to-[#1e3a8a] flex items-center justify-center shadow-xl group cursor-pointer`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-20 group-hover:opacity-40" />
                  <Icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>

                {/* Espacio vacío para el otro lado */}
                <div className="flex-1" />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
