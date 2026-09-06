import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa para niños 2026 (6-8+) | La Mesa Cuadrada",
  description: "Juegos para niños 6-8+ años 2026: Dobble, Kingdomino, Dixit, Codenames, Carcassonne y más. 15-30 min, reglas en 5 min. Comparativa con veredicto y precio Amazon.",
};

export default function MejoresNinos() {
  const ninos = games
    .filter((g) => ["6+", "7+", "8+"].includes(g.age) && g.category.includes("familiar"))
    .sort((a, b) => b.bggRating - a.bggRating);

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
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-teal-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm">● Niños 6-8+ • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa para niños 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Para 6-8+ sin que los adultos se aburran. 15-30 min, se explican en 5 min, bonitos en mesa. Con veredicto para quién / no para quién.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {ninos.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado edad 6+/7+/8+ + familiar + orden BGG. Valoramos que el adulto no sufra y el niño entienda en 5 min. <Link href="/metodologia" className="underline font-bold text-amber-700">Cómo rankeamos</Link> · Tag lamesacuadrad-21.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-baratos" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Baratos &lt;25€ →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · <Link href="/metodologia" className="underline">Metodología</Link></div></footer>
    </div>
  );
}
