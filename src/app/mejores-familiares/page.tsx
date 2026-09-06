import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos familiares 2026 (8+ años) | La Mesa Cuadrada",
  description: "Ranking juegos familiares 2026 para 8+ años: Catan, Azul, Kingdomino, Cascadia, Ticket to Ride. De 15 a 45 min, reglas en 10 min. Precios Amazon.",
};

export default function MejoresFamiliares() {
  const fam = games.filter((g) => g.category.includes("familiar")).sort((a, b) => b.bggRating - a.bggRating);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm">◧</div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>
      <article className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-amber-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm">● Familiar 8+ • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa familiares 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Para jugar con niños 8+ y adultos sin que nadie se aburra. 20-45 min, se explican en 10 min, bonitos en mesa. Ordenados por BGG ★.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {fam.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado categoría familiar + orden BGG. Todos probados para 8+ con reglas en ≤10 min. Precios Amazon.es tag lamesacuadrad-21.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/azul-vs-splendor" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Azul vs Splendor →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link></div></footer>
    </div>
  );
}
