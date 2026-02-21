"use client";

import { motion } from "framer-motion";
import { Heart, Stars, Quote } from "lucide-react";
import Image from "next/image";
import { loveContent } from "@/lib/constants/love";

export default function LoveSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#fdfdfb]">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="inline-block p-4 rounded-full bg-blue-50 mb-6">
            <Heart className="w-12 h-12 text-blue-400 fill-blue-400 animate-pulse" />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {loveContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <Quote className="w-10 h-10 text-blue-200 mb-4" />
            <p className="font-serif text-2xl md:text-3xl text-slate-700 leading-relaxed italic mb-6">
              &quot;{loveContent.quote}&quot;
            </p>
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm">— {loveContent.author}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
               <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-700 z-10" />
               <Image 
                 src={loveContent.image} 
                 alt="Amor" 
                 fill
                 className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute bottom-6 right-6 z-20">
                  <Stars className="w-8 h-8 text-white animate-spin-slow" />
               </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-50 rounded-[2rem] p-10 border border-blue-100/50 shadow-inner"
        >
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
            {loveContent.mainText}
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/5 blur-[100px] rounded-full" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-slate-400/5 blur-[100px] rounded-full" />
    </section>
  );
}
