import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";

export const metadata: Metadata = {
  title: "Azul vs Splendor 2026: ¿Cuál es mejor abstracto? | La Mesa Cuadrada",
  description: "Azul vs Splendor 2026: dos abstractos elegantes 30 min, 1.8 complejidad. Comparativa real por precio, rejugabilidad y mejor para pareja/familia.",
};

export default function AzulVsSplendor() {
  const azul = games.find((g) => g.slug === "azul")!;
  const splendor = games.find((g) => g.slug === "splendor")!;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm"></div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>
      <article className="max-w-4xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-amber-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm"><span className="w-1.5 h-1.5 bg-white rounded-full inline-block mr-1.5 align-middle"></span>Duelo abstractos • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none text-stone-900">Azul vs Splendor: ¿cuál comprar?</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 font-medium">Los dos euros ligeros más elegantes: Azul (mosaicos) vs Splendor (gemas). Mismo peso 1.8, 30 min, 2-4 jugadores. Diferencia: tensión vs motor.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[azul, splendor].map((g) => (
            <div key={g.slug} className="bg-white rounded-2xl border-2 border-amber-100 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-xl flex items-center justify-center font-black">{g.image}</div>
                <div className="font-black">{g.name}</div>
              </div>
              <div className="text-2xl font-black">{g.price}<span className="text-sm font-semibold text-stone-500">/ Amazon</span></div>
              <p className="text-xs font-medium text-stone-500">{g.players} · {g.duration} · ★ {g.bggRating}</p>
              <ul className="mt-4 text-sm space-y-1.5">
                <li className="flex justify-between"><span className="text-stone-500">Complejidad</span><span className="font-bold">{g.complexity}/5</span></li>
                <li className="flex justify-between"><span className="text-stone-500">Edad</span><span className="font-bold">{g.age}</span></li>
                <li className="flex justify-between"><span className="text-stone-500">Ideal</span><span className="font-bold text-xs text-right">{g.bestFor}</span></li>
              </ul>
              <a href={g.amazonUrl} target="_blank" rel="nofollow sponsored" className="mt-5 block text-center w-full py-3 rounded-xl bg-amber-600 text-white text-sm font-black hover:bg-amber-700">Ver en Amazon →</a>
            </div>
          ))}
        </div>
        <div className="mt-8 prose prose-stone max-w-none">
          <h2 className="text-xl font-black tracking-tight mt-8 text-stone-900">Veredicto rápido</h2>
          <p className="text-stone-700 leading-7 font-medium"><strong>Elige Azul</strong> si quieres belleza en mesa + pique por tomar azulejos (más interactivo y tenso).<br /><strong>Elige Splendor</strong> si prefieres motor de gemas solitario y elegante, más relajado y menos confrontación.</p>
          <h2 className="text-xl font-black tracking-tight mt-8 text-stone-900">Diferencia clave</h2>
          <p className="text-stone-700 leading-7">Azul castiga si te dejan fichas sueltas (-puntos); Splendor premia construir motor eficiente. Azul escala mejor a 2, Splendor a 3-4. Ambos 30 min y se explican en 5 min.</p>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mt-6">
            <p className="text-sm font-black text-stone-900">Transparencia Amazon</p>
            <p className="text-sm text-stone-700 mt-1">Ganáis 3-5% sin coste extra. Precio final Amazon.es al pagar.</p>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a comparativa</Link>
          <Link href="/juegos-fiesta" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Fiesta 6+ →</Link>
        </div>
      </article>
      <footer className="border-t-2 border-amber-100 bg-white mt-auto"><div className="max-w-4xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link></div></footer>
    </div>
  );
}
