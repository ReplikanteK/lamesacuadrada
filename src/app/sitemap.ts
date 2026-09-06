import type { MetadataRoute } from "next";
import { games } from "@/data/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lamesacuadrada.vercel.app";
  const now = new Date();
  const pages = [
    "",
    "/metodologia",
    "/catan-vs-ticket-to-ride",
    "/mejores-2-jugadores",
    "/juegos-fiesta",
    "/mejores-familiares",
    "/azul-vs-splendor",
    ...games.map((g) => `/juegos/${g.slug}`),
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p.startsWith("/juegos/") ? 0.9 : 0.8,
  }));
}
