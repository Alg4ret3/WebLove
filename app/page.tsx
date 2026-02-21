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

import BookLayout from "@/components/BookLayout";
import LoveSection from "@/components/LoveSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#f0ede9] text-gray-900 font-sans">
      {/* ✨ Fondo animado */}
      <BackgroundParticles />

      <BookLayout>
        <ScrollProgress />
        <HeroSection />
        <TimelineSection />
        <GallerySection />
        <LoveSection />
        <LetterSection />
        <MusicSection />
        <Footer />
      </BookLayout>
    </main>
  );
}
