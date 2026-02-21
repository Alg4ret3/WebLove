"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Music, PauseCircle, PlayCircle, Heart } from "lucide-react";
import NextImage from "next/image";
import { songs, Song } from "@/lib/constants/songs";

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlay = (song: Song) => {
    if (currentSong === song.title) {
      audio?.pause();
      setCurrentSong(null);
      return;
    }

    audio?.pause();
    const newAudio = new Audio(song.url);
    newAudio.play();
    setAudio(newAudio);
    setCurrentSong(song.title);
  };

  const featuredSong = songs[0]; // Asumimos que la primera es la especial / Assuming first is the special one
  const otherSongs = songs.slice(1);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-transparent">
      {/* Torn Paper Edge Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#f0ede9] paper-edge-bottom z-20" />

      <div className="max-w-5xl mx-auto relative z-10 pt-10">
        {/* 💫 Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
             <div className="h-px w-12 bg-blue-200" />
             <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900">
               Nuestra Banda Sonora
             </h2>
             <div className="h-px w-12 bg-blue-200" />
          </div>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Canciones que cuentan nuestra historia, notas que guardan momentos que llevo en el alma.
          </p>
        </motion.div>

        {/* 🌟 Canción Destacada (La que le dedico con todo mi corazón) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div 
            className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden cursor-pointer group"
            onClick={() => handlePlay(featuredSong)}
          >
            {/* Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-10">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                <motion.div 
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                  animate={currentSong === featuredSong.title ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <NextImage src="/images/momentos/5.jpg" alt="Especial" fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      {currentSong === featuredSong.title ? (
                        <PauseCircle className="w-8 h-8 text-white" />
                      ) : (
                        <PlayCircle className="w-8 h-8 text-white ml-1" />
                      )}
                   </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-400/20 text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-blue-400/30">
                  <Heart className="w-3 h-3 fill-current" /> La canción de mi corazón
                </div>
                <h3 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
                  {featuredSong.title}
                </h3>
                <p className="text-blue-200 text-xl md:text-2xl font-light mb-8 italic">
                  {featuredSong.artist}
                </p>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                  Esta cancion me hace recordarte cada segundo lo  que siento por ti, hoy y siempre.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🎶 Otras canciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {otherSongs.map((song, index) => {
            const isPlaying = currentSong === song.title;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handlePlay(song)}
              >
                <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <Music className="w-8 h-8 text-blue-400 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors">
                      {isPlaying ? (
                        <PauseCircle className="w-8 h-8 text-blue-900" />
                      ) : (
                        <PlayCircle className="w-8 h-8 text-blue-900/0 group-hover:text-blue-900/80 transition-all scale-75 group-hover:scale-100" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-xl font-bold text-slate-800">{song.title}</h4>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">{song.artist}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 💭 Frase final */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-slate-400 mt-20 italic font-light text-xl"
        >
          “Porque cada nota me recuerda a ti, y cada silencio es una invitación a volverte a escuchar.” 
        </motion.p>
      </div>
    </section>
  );
}
