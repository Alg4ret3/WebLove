import { Sparkles, Coffee, Star, Heart, LucideIcon } from "lucide-react";

export interface TimelineEvent {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Fin de semana en Buesaco",
    description: "Ese viaje donde el tiempo parecía detenerse, solo tú, yo y la calma de aquel lugar.",
    icon: Sparkles,
    color: "from-blue-400 to-blue-600",
    image: "https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/momentos/4.webp",
  },
  {
    title: "Primera comida en el pueblo",
    description: "Aquel cena en ese restaurante, lleno de risas y miradas que decían más que las palabras.",
    icon: Coffee,
    color: "from-blue-500 to-blue-700",
    image: "https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/momentos/3.webp",
  },
  {
    title: "Atardecer con helado",
    description: "Cuando contemplamos el atardecer juntos, con un helado en mano y el corazón lleno.",
    icon: Star,
    color: "from-blue-600 to-blue-800",
    image: "https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/momentos/2.webp",
  },
  {
    title: "Cena en  Pollo Peruano",
    description: "Esa noche que guardo en el alma, la cena que compartimos con sonrisas y cariño.",
    icon: Heart,
    color: "from-blue-700 to-blue-900",
    image: "https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/momentos/1.webp",
  },
  {
    title: "Me hiciste Conocer dos restaurantes",
    description: "Ese dia pasaron tantas cosas, que aun las recuerdo con una sonrisa.",
    icon: Heart,
    color: "from-blue-700 to-blue-900",
    image: "https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/momentos/5.jpg",
  },
];
