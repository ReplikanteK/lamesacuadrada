import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lamesacuadrada.vercel.app";
  const now = new Date();
  const pages = [
    "",
    "/catan-vs-ticket-to-ride",
    "/mejores-2-jugadores",
    "/juegos-fiesta",
    "/mejores-familiares",
    "/azul-vs-splendor",
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
}
