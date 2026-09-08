import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = {
  title: "Mejores juegos de mesa para fiestas 6+ jugadores 2026 | La Mesa Cuadrada",
  description: "Ranking juegos fiesta 6-12 jugadores 2026: Concept 4-12, Trio As d'Or, Dixit, Codenames, Dobble, Just One, Sushi Go Party. 15-40 min, sin explicación y risas. Precios Amazon.",
  alternates: { canonical: "https://lamesacuadrada.vercel.app/juegos-fiesta" },
  openGraph: {
    title: "Mejores juegos de mesa para fiestas 6+ jugadores 2026 | La Mesa Cuadrada",
    description: "Ranking juegos fiesta 6-12 jugadores 2026: Concept 4-12, Trio, Dixit, Codenames, Dobble, Just One, Sushi Go Party.",
    url: "https://lamesacuadrada.vercel.app/juegos-fiesta",
  },
};

export default function JuegosFiesta() {
  const fiesta = games.filter((g) => g.maxPlayers >= 6).sort((a, b) => b.maxPlayers - a.maxPlayers);

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
        <p className="mt-4 text-lg leading-7 text-stone-600 max-w-2xl font-medium">Para cuando sois 6-12 y nadie quiere leer reglas 20 min. Reglas accesibles y partidas de 15–40 min. Incluye novedad Concept 4-12 sin palabras. Ordenados por max jugadores.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {fiesta.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-4xl">
          <p className="font-black text-stone-900">Elige según lo que buscas</p>
          <p className="text-xs font-bold tracking-wide uppercase text-amber-700 mt-1">Estas recomendaciones son criterio editorial; no sustituyen el ranking BGG</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm font-medium">
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🎨 6-8 creativo</span> — <Link href="/juegos/dixit" className="underline text-amber-700">Dixit</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">👥 Equipos</span> — <Link href="/juegos/codenames" className="underline text-amber-700">Codenames</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🤐 Sin palabras 4-12</span> — <Link href="/juegos/concept" className="underline text-amber-700">Concept</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🎒 Bolsillo</span> — <Link href="/juegos/dobble" className="underline text-amber-700">Dobble</Link> / <Link href="/juegos/trio" className="underline text-amber-700">Trio</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🤝 Coop fiesta</span> — <Link href="/juegos/just-one" className="underline text-amber-700">Just One</Link></div>
            <div className="bg-white border border-amber-100 rounded-xl p-3"><span className="font-black">🍣 Comer</span> — <Link href="/juegos/sushi-go-party" className="underline text-amber-700">Sushi Go Party</Link></div>
          </div>
          <p className="text-xs font-medium text-stone-500 mt-3">Debajo: ranking por valoración BGG. Las etiquetas usan jugadores/duración/categoría + criterio editorial.</p>
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
