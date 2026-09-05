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
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm shadow-sm">◧</div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-amber-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm">
          ● Ranking pareja • Actualizado Sep 2026
        </div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa para 2 jugadores 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">
          No todos los juegos rinden a 2. Aquí solo los que funcionan de verdad en pareja, ordenados por nota BGG y filtrados por duración. Todos con enlace Amazon afiliado transparente.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {twoP.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-black text-stone-900">◈ ¿Cuál elijo?</p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">
            <span className="font-black text-stone-900">Solo pareja jugona:</span> 7 Wonders Duel (8.1 BGG, solo 2p).{" "}
            <span className="font-black text-stone-900">Pareja + ocasional 3-4:</span> Azul o Ticket to Ride.{" "}
            <span className="font-black text-stone-900">Rápido 30min:</span> Azul/Splendor. <span className="font-black text-stone-900">Cooperativo sin pique:</span> Pandemic.
          </p>
        </div>

        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado por categoría 2-jugadores de nuestro dataset + orden BGG. Precios orientativos Amazon.es con tag afiliado lamesacuadrada-21 (reemplaza por el tuyo en src/data/games.ts:12).</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/catan-vs-ticket-to-ride" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Catan vs TTR →</Link>
        </div>
      </article>

      <footer className="border-t-2 border-amber-100 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Afiliado Amazon</div>
      </footer>
    </div>
  );
}
