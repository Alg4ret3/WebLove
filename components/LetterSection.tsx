"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { letterContent } from "@/lib/constants/letter";

export default function LetterSection() {
  return (
    <section className="py-24 px-4 bg-transparent relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {letterContent.title}
          </h2>
          <div className="w-12 h-1 bg-blue-200 mx-auto mb-4 rounded-full" />
          <p className="text-xl text-gray-500 font-light italic">{letterContent.description}</p>
        </motion.div>

        <div
          className="relative group"
        >
          <div className="relative bg-[#fdfdfb] rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-200 mt-10">
            {/* Soft shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {(!letterContent || !letterContent.text) ? (
                <p className="text-gray-500 italic">Cargando carta de amor...</p>
              ) : (
                <>
                  {letterContent.text.split('\n').filter((p: string) => p.trim() !== '').map((paragraph: string, index: number) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="text-slate-800 leading-relaxed mb-6 italic text-lg md:text-2xl font-light"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 flex items-center gap-4 py-6 border-t border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                   <Heart className="w-6 h-6 text-slate-400 fill-slate-400" />
                </div>
                <p className="font-serif text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Con todo mi amor, para siempre.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
