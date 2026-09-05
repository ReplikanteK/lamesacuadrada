import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa para 2 jugadores 2026 | La Mesa Cuadrada",
  description: "Ranking real de juegos para 2 jugadores 2026: 7 Wonders Duel, Azul, Carcassonne, Ticket to Ride. Comparativa por duración, complejidad y precio Amazon.",
};

export default function Mejores2Jugadores() {
  const twoP = games.filter((g) => g.category.includes("2-jugadores")).sort((a, b) => b.bggRating - a.bggRating);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl font-bold text-sm">L□</div>
            <span className="font-semibold tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">← Volver</Link>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-indigo-600 text-white px-3 py-1.5 rounded-full mb-4">
          Ranking pareja • Actualizado Sep 2026
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-zinc-900 max-w-3xl">Mejores juegos de mesa para 2 jugadores 2026</h1>
        <p className="mt-4 text-lg leading-7 text-zinc-600 max-w-2xl">
          No todos los juegos rinden a 2. Aquí solo los que funcionan de verdad en pareja, ordenados por nota BGG y filtrados por duración. Todos con enlace Amazon afiliado transparente.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {twoP.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-8 bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-bold text-zinc-900">¿Cuál elijo?</p>
          <p className="text-sm leading-6 text-zinc-600 mt-1">
            <span className="font-bold text-zinc-900">Solo pareja jugona:</span> 7 Wonders Duel (8.1 BGG, solo 2p).{" "}
            <span className="font-bold text-zinc-900">Pareja + ocasional 3-4:</span> Azul o Ticket to Ride.{" "}
            <span className="font-bold text-zinc-900">Rápido 30min:</span> Azul/Splendor. <span className="font-bold text-zinc-900">Cooperativo sin pique:</span> Pandemic.
          </p>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-semibold text-zinc-900">Metodología</p>
          <p className="text-sm text-zinc-700 mt-1">Filtrado por categoría 2-jugadores de nuestro dataset + orden BGG. Precios orientativos Amazon.es con tag afiliado lamesacuadrada-21 (reemplaza por el tuyo en src/data/games.ts:12).</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black">Volver a inicio</Link>
          <Link href="/catan-vs-ticket-to-ride" className="bg-white border border-zinc-200 px-6 py-3 rounded-full text-sm font-bold hover:bg-zinc-50">Catan vs TTR →</Link>
        </div>
      </article>

      <footer className="border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-zinc-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Afiliado Amazon</div>
      </footer>
    </div>
  );
}
