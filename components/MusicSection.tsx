"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Music, PauseCircle, PlayCircle } from "lucide-react";

// ✅ Agregamos una interfaz para tipar correctamente las canciones
interface Song {
  title: string;
  artist: string;
  color: string;
  url: string;
}

const songs: Song[] = [
  {
    title: "Piel Canela",
    artist: "Andrés Cepeda",
    color: "from-blue-400 to-blue-600",
    url: "/songs/PielCanela.mp3",
  },
  {
    title: "Porque Tengo Ganas",
    artist: "Adalberto Santiago",
    color: "from-pink-400 to-pink-600",
    url: "/songs/PorqueTengoGanas.mp3",
  },
  {
    title: "Agua",
    artist: "Jarabe de Palo",
    color: "from-indigo-400 to-indigo-600",
    url: "/songs/Agua.mp3",
  },
];

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // ✅ Se tipa correctamente el parámetro song
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

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* 💫 Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tus Canciones Favoritas 
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cada melodía guarda un pedacito de nuestra historia,  
            esos momentos que suenan mejor cuando estamos juntos.
          </p>
        </motion.div>

        {/* 🎶 Tarjetas de canciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {songs.map((song, index) => {
            const isPlaying = currentSong === song.title;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
                onClick={() => handlePlay(song)}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${song.color} ${
                      isPlaying ? "opacity-100" : "opacity-90"
                    } transition-opacity`}
                  />
                  <div className="relative p-8 h-52 flex flex-col items-center justify-center text-center">
                    <motion.div
                      animate={
                        isPlaying ? { rotate: [0, 360] } : { rotate: 0 }
                      }
                      transition={
                        isPlaying
                          ? { duration: 3, repeat: Infinity, ease: "linear" }
                          : { duration: 0 }
                      }
                      className="mb-4"
                    >
                      {isPlaying ? (
                        <PauseCircle className="w-12 h-12 text-white drop-shadow-md" />
                      ) : (
                        <PlayCircle className="w-12 h-12 text-white drop-shadow-md" />
                      )}
                    </motion.div>

                    <h3 className="font-serif text-xl font-bold text-white mb-1">
                      {song.title}
                    </h3>
                    <p className="text-blue-100 text-sm">{song.artist}</p>
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
          className="text-center text-gray-600 mt-12 italic"
        >
          “Porque cada nota me recuerda a ti,  
          y cada canción tiene tu nombre.” 
        </motion.p>
      </div>
    </section>
  );
}
