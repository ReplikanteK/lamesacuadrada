import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa para 1 jugador (solitario) 2026 | La Mesa Cuadrada",
  description: "Ranking solitario 2026: Ark Nova, Terraforming Mars, Wingspan, Harmonies, Heat, Cascadia, Zombicide, Sagrada. 8 juegos con modo solo oficial, ordenados por BGG y con precios Amazon.",
  alternates: { canonical: "https://lamesacuadrada.vercel.app/mejores-1-jugador" },
  openGraph: {
    title: "Mejores juegos de mesa para 1 jugador (solitario) 2026 | La Mesa Cuadrada",
    description: "Ranking solitario 2026: Ark Nova, Terraforming Mars, Wingspan, Harmonies, Heat, Cascadia, Zombicide, Sagrada. 8 juegos con modo solo oficial.",
    url: "https://lamesacuadrada.vercel.app/mejores-1-jugador",
  },
};

export default function Mejores1Jugador() {
  const solo = games.filter((g) => g.minPlayers === 1).sort((a, b) => b.bggRating - a.bggRating);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm shadow-sm"></div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-stone-900 text-amber-50 px-3 py-1.5 rounded-full mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full inline-block mr-1.5 align-middle"></span>Solitario · 1 jugador • Actualizado Sep 2026
        </div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa para 1 jugador 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">
          Solo los que tienen modo solitario oficial — no dummy ni variante casera. De 30 a 150 min, de puzzle relajante a euro duro. Ordenados por nota BGG y con criterio editorial para quién.
        </p>

        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="font-black text-stone-900">Elige según lo que buscas</p>
          <p className="text-xs font-bold tracking-wide uppercase text-amber-700 mt-1">Estas recomendaciones son criterio editorial; no sustituyen el ranking BGG</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm font-medium">
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🧠 Más profundo 90-150′</span> — <Link href="/juegos/ark-nova" className="underline text-amber-700">Ark Nova</Link> / <Link href="/juegos/terraforming-mars" className="underline text-amber-700">Terraforming Mars</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🐦 Motor relajante</span> — <Link href="/juegos/wingspan" className="underline text-amber-700">Wingspan</Link> / <Link href="/juegos/cascadia" className="underline text-amber-700">Cascadia</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🧩 Puzzle bonito 30-45′</span> — <Link href="/juegos/harmonies" className="underline text-amber-700">Harmonies</Link> / <Link href="/juegos/sagrada" className="underline text-amber-700">Sagrada</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🏎️ Carrera + campeonato</span> — <Link href="/juegos/heat" className="underline text-amber-700">Heat</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🧟 Zombis 1-6</span> — <Link href="/juegos/zombicide" className="underline text-amber-700">Zombicide</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">⏱️ Filtra rápido</span> — <Link href="/?jugadores=1&duracion=60#comparativa" className="underline text-amber-700">Solo ≤60 min</Link></div>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-3">Debajo: ranking por valoración BGG. Solo 8/36 del catálogo tienen solitario real con reglas dedicadas.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {solo.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-black text-stone-900">◈ ¿Cuál elijo? <span className="text-xs font-bold text-stone-500">— resumen rápido</span></p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">
            <span className="font-black text-stone-900">Primero en solitario:</span> Cascadia o Harmonies (30-45′, reglas solo sencillas).{" "}
            <span className="font-black text-stone-900">Euro que pide mesa:</span> Ark Nova / Terraforming Mars (2h+ con automa/automa no_dummy).{" "}
            <span className="font-black text-stone-900">Puzzle vs carrera:</span> Sagrada (dados + objetivo Solo) vs Heat (campeonato con bots).
          </p>
        </div>

        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado por <code className="bg-white px-1.5 py-0.5 rounded border border-amber-100">minPlayers === 1</code> (modo solo oficial verificado, no variante casera) + orden BGG. Precios orientativos Amazon.es Sep 2026 con tag lamesacuadrad-21. También disponible como filtro <Link href="/?jugadores=1#comparativa" className="underline text-amber-700">Solo · 1</Link> en la home.</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-2-jugadores" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Ranking 2 jugadores →</Link>
        </div>
      </article>

      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Solitario 1 jugador</div></footer>
    </div>
  );
}
