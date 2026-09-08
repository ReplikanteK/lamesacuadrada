import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa cooperativos 2026 | La Mesa Cuadrada",
  description: "Ranking cooperativos 2026: Pandemic, Paleo, The Crew, Mysterium, Zombicide, La Isla Prohibida, Just One. Todos vs el juego, sin competir entre vosotros. Precios Amazon.",
  alternates: { canonical: "https://lamesacuadrada.vercel.app/juegos-cooperativos" },
  openGraph: {
    title: "Mejores juegos de mesa cooperativos 2026 | La Mesa Cuadrada",
    description: "Ranking cooperativos 2026: Pandemic, Paleo, The Crew, Mysterium, Zombicide, La Isla Prohibida, Just One.",
    url: "https://lamesacuadrada.vercel.app/juegos-cooperativos",
  },
};

export default function Cooperativos() {
  const coop = games.filter((g) => g.category.includes("cooperativo")).sort((a, b) => b.bggRating - a.bggRating);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm"></div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>
      <article className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-emerald-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Cooperativos • Actualizado Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa cooperativos 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Todos contra el juego, no entre vosotros. De 20 a 180 min, de iniciación a experto. Ordenados por BGG ★ y con criterio para quién.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {coop.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="font-black text-stone-900">Elige según lo que buscas</p>
          <p className="text-xs font-bold tracking-wide uppercase text-amber-700 mt-1">Estas recomendaciones son criterio editorial; no sustituyen el ranking BGG</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm font-medium">
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🌱 Iniciación 30′</span> — <Link href="/juegos/isla-prohibida" className="underline text-amber-700">Isla Prohibida</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🎒 Bolsillo 20′</span> — <Link href="/juegos/the-crew-deep" className="underline text-amber-700">The Crew</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🔮 Hasta 7</span> — <Link href="/juegos/mysterium" className="underline text-amber-700">Mysterium</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🧟 Zombis 1-6</span> — <Link href="/juegos/zombicide" className="underline text-amber-700">Zombicide</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🦣 Supervivencia</span> — <Link href="/juegos/paleo" className="underline text-amber-700">Paleo</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🦠 Clásico 45′</span> — <Link href="/juegos/pandemic" className="underline text-amber-700">Pandemic</Link></div>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-3">Debajo: ranking por valoración BGG. Las etiquetas usan jugadores/duración/categoría + criterio editorial.</p>
        </div>
        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado categoría cooperativo + orden BGG. Prime ES verificado Sep 2026 con tag lamesacuadrad-21. Precios orientativos Sep 2026.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-2-jugadores" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Ranking 2 jugadores →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Cooperativos</div></footer>
    </div>
  );
}
