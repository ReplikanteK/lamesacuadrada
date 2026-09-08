import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de cartas 2026 | La Mesa Cuadrada",
  description: "Ranking juegos de cartas 2026: Trio As d'Or, 7 Wonders Duel, Jaipur, The Crew, Sushi Go Party, Wingspan, Ark Nova, Terraforming Mars y más. 15-120 min, comparativa BGG y precio Amazon.",
  alternates: { canonical: "https://lamesacuadrada.vercel.app/mejores-cartas" },
  openGraph: {
    title: "Mejores juegos de cartas 2026 | La Mesa Cuadrada",
    description: "Ranking juegos de cartas 2026: Trio, 7 Wonders Duel, Jaipur, The Crew, Sushi Go Party, Wingspan y más. 15-120 min.",
    url: "https://lamesacuadrada.vercel.app/mejores-cartas",
  },
};

export default function MejoresCartas() {
  const cartas = games.filter((g) => g.category.includes("cartas")).sort((a, b) => b.bggRating - a.bggRating);

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
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-violet-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Cartas • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de cartas 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Para quien quiere caja pequeña y mucha rejugabilidad. Draft, bazas, combos y farol en 15-120 min. Incluye Trio As d'Or 2024, 7 Wonders Duel, Jaipur y The Crew. Ordenados por BGG ★.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {cartas.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm max-w-4xl">
          <p className="font-black text-stone-900">◈ ¿Cuál elijo?</p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium"><span className="font-black text-stone-900">Solo 2:</span> 7 Wonders Duel / Jaipur. <span className="font-black">Fiesta 15′:</span> Trio / Dobble / Exploding Kittens. <span className="font-black">Draft:</span> Sushi Go Party. <span className="font-black">Bazas coop:</span> The Crew. <span className="font-black">Motor:</span> Wingspan / Ark Nova / Terraforming Mars.</p>
        </div>
        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado categoría cartas + orden BGG. Todos Prime ES con tag lamesacuadrad-21. Precios orientativos Sep 2026.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/juegos-fiesta" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Fiesta 6+ →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Cartas</div></footer>
    </div>
  );
}
