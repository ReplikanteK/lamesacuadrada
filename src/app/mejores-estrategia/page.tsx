import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa de estrategia 2026 | La Mesa Cuadrada",
  description: "Ranking estrategia 2026: Brass Birmingham #1 BGG, Ark Nova, Terraforming Mars, Wingspan, Harmonies, Heat, Cascadia, Azul y 14 más. De euro ligero a duro, con duración, complejidad y precios Amazon.",
  alternates: { canonical: "https://lamesacuadrada.vercel.app/mejores-estrategia" },
  openGraph: {
    title: "Mejores juegos de mesa de estrategia 2026 | La Mesa Cuadrada",
    description: "Ranking estrategia 2026: Brass #1 BGG, Ark Nova, Terraforming Mars, Wingspan, Harmonies, Heat, Cascadia, Azul y 14 más. Comparativa por complejidad y duración.",
    url: "https://lamesacuadrada.vercel.app/mejores-estrategia",
  },
};

export default function MejoresEstrategia() {
  const strat = games.filter((g) => g.category.includes("estrategia")).sort((a, b) => b.bggRating - a.bggRating);

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
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-teal-700 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Estrategia • Actualizado Sep 2026
        </div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa de estrategia 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">
          De euro ligero 20 min a épica 150 min. Solo los que premian planificar, no tirar dados. Ordenados por nota BGG ★ y con atajos para dureza y jugadores.
        </p>

        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="font-black text-stone-900">Elige según lo que buscas</p>
          <p className="text-xs font-bold tracking-wide uppercase text-amber-700 mt-1">Estas recomendaciones son criterio editorial; no sustituyen el ranking BGG</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm font-medium">
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🏆 Top BGG dureza alta</span> — <Link href="/juegos/brass-birmingham" className="underline text-amber-700">Brass: Birmingham</Link> (3.9) / <Link href="/juegos/ark-nova" className="underline text-amber-700">Ark Nova</Link> (3.7)</div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🌱 Entrada 30-45′</span> — <Link href="/juegos/cascadia" className="underline text-amber-700">Cascadia</Link> / <Link href="/juegos/harmonies" className="underline text-amber-700">Harmonies</Link> / <Link href="/juegos/azul" className="underline text-amber-700">Azul</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">⚡ Ligero 20 min</span> — <Link href="/juegos/kingdomino" className="underline text-amber-700">Kingdomino</Link> / <Link href="/juegos/cities" className="underline text-amber-700">Cities</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">👥 2 jugadores duro</span> — <Link href="/juegos/7-wonders-duel" className="underline text-amber-700">7 Wonders Duel</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🧩 Puzzle / combos</span> — <Link href="/juegos/forest-shuffle" className="underline text-amber-700">Forest Shuffle</Link> / <Link href="/juegos/sagrada" className="underline text-amber-700">Sagrada</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">⏱️ Filtra rápido</span> — <Link href="/?categoria=estrategia&duracion=60#comparativa" className="underline text-amber-700">Estrategia ≤60 min</Link></div>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-3">Debajo: ranking por valoración BGG. 22/36 del catálogo son estrategia, de complejidad 1.8 a 3.9.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {strat.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-black text-stone-900">◈ ¿Cuál elijo? <span className="text-xs font-bold text-stone-500">— resumen rápido</span></p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">
            <span className="font-black text-stone-900">Primera estrategia:</span> Cascadia/Harmonies/Azul (reglas 10 min, ranking BGG 7.8-8.0).{" "}
            <span className="font-black text-stone-900">Siguiente nivel:</span> Wingspan → Terraforming Mars → Ark Nova (motor a euro duro).{" "}
            <span className="font-black text-stone-900">Duelo puro:</span> 7 Wonders Duel. <span className="font-black text-stone-900">Épica #1 BGG:</span> Brass: Birmingham solo si tu mesa quiere 2h+.
          </p>
        </div>

        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado por categoría estrategia + orden BGG. Complejidad BGG 1.8–3.9, precios orientativos Amazon.es Sep 2026 con tag lamesacuadrad-21. Atajo filtro <Link href="/?categoria=estrategia#comparativa" className="underline text-amber-700">Estrategia</Link> en la home.</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-1-jugador" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Solitario 1 jugador →</Link>
        </div>
      </article>

      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Estrategia</div></footer>
    </div>
  );
}
