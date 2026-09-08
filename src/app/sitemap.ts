import type { MetadataRoute } from "next";
import { games } from "@/data/games";

// Fecha real de última revisión editorial — no "now" artificial.
// Actualizar solo cuando haya cambio de contenido/precio/metodología.
// Evita que cada deploy marque todo como modificado.
const LAST_MOD = new Date("2026-09-08T12:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lamesacuadrada.vercel.app";
  const pages = [
    "",
    "/metodologia",
    "/catan-vs-ticket-to-ride",
    "/mejores-2-jugadores",
    "/juegos-fiesta",
    "/mejores-familiares",
    "/azul-vs-splendor",
    "/mejores-baratos",
    "/mejores-ninos",
    "/juegos-cooperativos",
    "/mejores-cartas",
    ...games.map((g) => `/juegos/${g.slug}`),
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: LAST_MOD,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p.startsWith("/juegos/") ? 0.9 : 0.8,
  }));
}
