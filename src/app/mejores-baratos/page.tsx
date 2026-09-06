import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa baratos 2026 (<25€) | La Mesa Cuadrada",
  description: "8 juegos baratos 2026 por <25€: Dobble, Codenames, Kingdomino, Just One, Exploding Kittens y más. Comparativa real con BGG, precio Amazon y veredicto.",
};

function parsePrice(price: string): number {
  return parseFloat(price.replace("€", "").replace(",", "."));
}

export default function MejoresBaratos() {
  const baratos = games.filter((g) => parsePrice(g.price) <= 25).sort((a, b) => b.bggRating - a.bggRating);

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
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-emerald-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Baratos &lt;25€ • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900 max-w-3xl">Mejores juegos de mesa baratos 2026</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">8 juegos por menos de 25€ que no parecen baratos en mesa. Todos con reglas en 10 min y veredicto honesto. Ordenados por BGG ★.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {baratos.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="text-sm font-black text-stone-900">Metodología</p>
          <p className="text-sm text-stone-700 mt-1 font-medium">Filtrado por precio orientativo Sep 2026 ≤25€ + orden BGG. El precio no influye en ranking — baratos que rinden como caros. <Link href="/metodologia" className="underline font-bold text-amber-700">Cómo rankeamos</Link> · Tag lamesacuadrad-21.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a inicio</Link>
          <Link href="/mejores-ninos" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Para niños 6+ →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · <Link href="/metodologia" className="underline">Metodología</Link></div></footer>
    </div>
  );
}
