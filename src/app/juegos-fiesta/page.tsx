import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa para fiestas 6+ jugadores 2026 | La Mesa Cuadrada",
  description: "Ranking juegos fiesta 6-8 jugadores 2026: Dixit, Codenames, Dobble, Just One, Sushi Go Party. 15 min, sin explicación y risas. Precios Amazon.",
};

export default function JuegosFiesta() {
  const fiesta = games.filter((g) => g.category.includes("fiesta") || g.maxPlayers >= 6).sort((a, b) => b.maxPlayers - a.maxPlayers);

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
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-orange-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Fiesta 6+ • Actualizado Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa para fiestas 6+ jugadores</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Para cuando sois 6-8 y nadie quiere leer reglas 20 min. Todos 15-30 min, se explican en 2 min y funcionan con no jugones. Ordenados por max jugadores.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {fiesta.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-black text-stone-900">◈ ¿Cuál elijo?</p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium"><span className="font-black text-stone-900">6-8 creativo:</span> Dixit. <span className="font-black">Equipos:</span> Codenames. <span className="font-black">Bolsillo:</span> Dobble. <span className="font-black">Cooperativo fiesta:</span> Just One. <span className="font-black">Comer:</span> Sushi Go Party.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-familiares" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Familiares →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link></div></footer>
    </div>
  );
}
