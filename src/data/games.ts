export type Game = {
  slug: string;
  name: string;
  publisher: string;
  year: number;
  players: string; // "2-4"
  minPlayers: number;
  maxPlayers: number;
  duration: string; // "60-90 min"
  age: string; // "10+"
  complexity: number; // 1-5 (peso BGG)
  bggRating: number;
  price: string;
  amazonUrl: string; // placeholder tag - reemplazar por ID real
  image: string; // placeholder
  badge?: string;
  highlight?: boolean;
  pros: string[];
  cons: string[];
  bestFor: string;
  category: ("familiar" | "2-jugadores" | "fiesta" | "estrategia" | "cooperativo")[];
};

// IMPORTANTE: Reemplaza TU_TAG_AMAZON por tu tag real de Amazon Afiliados ES
// Ej: https://www.amazon.es/dp/B00U26TMYG?tag=tutag-21
const TAG = "lamesacuadrada-21";

export const games: Game[] = [
  {
    slug: "catan",
    name: "Catan",
    publisher: "Devir",
    year: 1995,
    players: "3-4",
    minPlayers: 3,
    maxPlayers: 4,
    duration: "60-90 min",
    age: "10+",
    complexity: 2.3,
    bggRating: 7.2,
    price: "32,90€",
    amazonUrl: `https://www.amazon.es/dp/B00U26TMYG?tag=${TAG}`,
    image: "C",
    badge: "Clásico",
    highlight: true,
    pros: ["Reglas en 10 min", "Rejugabilidad alta", "Ideal puerta de entrada"],
    cons: ["Menos de 3 jugadores flojea", "Factor azar dados"],
    bestFor: "Familias y grupos que empiezan",
    category: ["familiar", "estrategia"],
  },
  {
    slug: "ticket-to-ride",
    name: "Ticket to Ride Europa",
    publisher: "Days of Wonder",
    year: 2005,
    players: "2-5",
    minPlayers: 2,
    maxPlayers: 5,
    duration: "45-60 min",
    age: "8+",
    complexity: 1.9,
    bggRating: 7.5,
    price: "39,99€",
    amazonUrl: `https://www.amazon.es/dp/B0009HLCVK?tag=${TAG}`,
    image: "T",
    badge: "Más vendido",
    pros: ["Escala perfecto a 2 jugadores", "Visual muy atractivo", "Pocas reglas"],
    cons: ["Estrategia limitada para jugones"],
    bestFor: "Parejas y familias",
    category: ["familiar", "2-jugadores"],
  },
  {
    slug: "carcassonne",
    name: "Carcassonne",
    publisher: "Devir",
    year: 2000,
    players: "2-5",
    minPlayers: 2,
    maxPlayers: 5,
    duration: "35-45 min",
    age: "7+",
    complexity: 1.9,
    bggRating: 7.4,
    price: "27,50€",
    amazonUrl: `https://www.amazon.es/dp/B000QJAN1O?tag=${TAG}`,
    image: "Ca",
    pros: ["Partidas rápidas", "Expansiones infinitas", "Muy táctico"],
    cons: ["Puede alargarse con expansiones"],
    bestFor: "2 jugadores y familias rápidas",
    category: ["familiar", "2-jugadores", "estrategia"],
  },
  {
    slug: "azul",
    name: "Azul",
    publisher: "Next Move",
    year: 2017,
    players: "2-4",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "30-45 min",
    age: "8+",
    complexity: 1.8,
    bggRating: 7.8,
    price: "34,90€",
    amazonUrl: `https://www.amazon.es/dp/B077MZ3K6R?tag=${TAG}`,
    image: "A",
    badge: "Premiado",
    highlight: true,
    pros: ["Precioso en mesa", "Tensión constante", "Fácil de enseñar"],
    cons: ["Poco temático"],
    bestFor: "Parejas que quieren algo bonito y pique sano",
    category: ["2-jugadores", "familiar", "estrategia"],
  },
  {
    slug: "7-wonders-duel",
    name: "7 Wonders Duel",
    publisher: "Repos",
    year: 2015,
    players: "2",
    minPlayers: 2,
    maxPlayers: 2,
    duration: "30 min",
    age: "10+",
    complexity: 2.2,
    bggRating: 8.1,
    price: "22,99€",
    amazonUrl: `https://www.amazon.es/dp/B014E6O1L8?tag=${TAG}`,
    image: "7",
    badge: "Solo 2",
    pros: ["Diseñado solo para 2", "Mucha profundidad", "3 formas de ganar"],
    cons: ["Solo 2 jugadores"],
    bestFor: "Parejas jugonas — el mejor 2p",
    category: ["2-jugadores", "estrategia"],
  },
  {
    slug: "pandemic",
    name: "Pandemic",
    publisher: "Z-Man",
    year: 2008,
    players: "2-4",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "45 min",
    age: "8+",
    complexity: 2.4,
    bggRating: 7.6,
    price: "29,99€",
    amazonUrl: `https://www.amazon.es/dp/B00A2HD40E?tag=${TAG}`,
    image: "P",
    badge: "Cooperativo",
    pros: ["Todos contra el juego", "Tensión narrativa", "Muchas expansiones"],
    cons: ["Un jugador puede liderar demasiado"],
    bestFor: "Grupo que odia competir entre sí",
    category: ["cooperativo", "familiar", "2-jugadores"],
  },
  {
    slug: "dixit",
    name: "Dixit",
    publisher: "Libellud",
    year: 2008,
    players: "3-8",
    minPlayers: 3,
    maxPlayers: 8,
    duration: "30 min",
    age: "8+",
    complexity: 1.2,
    bggRating: 7.2,
    price: "28,90€",
    amazonUrl: `https://www.amazon.es/dp/B001AQY75O?tag=${TAG}`,
    image: "D",
    badge: "Fiesta",
    pros: ["Hasta 8 jugadores", "Creativo y risas", "Cero curva aprendizaje"],
    cons: ["No es táctico"],
    bestFor: "Fiestas y grupos grandes",
    category: ["fiesta", "familiar"],
  },
  {
    slug: "splendor",
    name: "Splendor",
    publisher: "Space Cowboys",
    year: 2014,
    players: "2-4",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "30 min",
    age: "10+",
    complexity: 1.8,
    bggRating: 7.4,
    price: "31,50€",
    amazonUrl: `https://www.amazon.es/dp/B00IZEUFIA?tag=${TAG}`,
    image: "S",
    pros: ["Elegante y rápido", "Motor de gemas adictivo", "Muy rejugable"],
    cons: ["Tema poco pegado"],
    bestFor: "Familias que quieren Euro ligero",
    category: ["familiar", "2-jugadores", "estrategia"],
  },
];

export function getGameBySlug(slug: string) {
  return games.find((g) => g.slug === slug);
}
