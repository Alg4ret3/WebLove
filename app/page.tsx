"use client";

import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import InterestsSection from "@/components/InterestsSection";
import LetterSection from "@/components/LetterSection";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/ui/BackgroundParticles"; // 👈 importa aquí

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-white text-gray-900">
      {/* ✨ Fondo animado para toda la página */}
      <BackgroundParticles />

      {/* 🔹 Contenido */}
      <ScrollProgress />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LetterSection />
      <MusicSection />
      <Footer />
    </main>
  );
}
