export interface Song {
  title: string;
  artist: string;
  color: string;
  url: string;
}

export const songs: Song[] = [
  {
    title: "  Me Das La Libertad",
    artist: "Wichy Camacho",
    color: "from-blue-400 to-blue-600",
    url: "/songs/MedasLibertad.mp3",
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
   {
    title: "Piel Canela",
    artist: "Andrés Cepeda",
    color: "from-blue-400 to-blue-600",
    url: "/songs/PielCanela.mp3",
  },
];
