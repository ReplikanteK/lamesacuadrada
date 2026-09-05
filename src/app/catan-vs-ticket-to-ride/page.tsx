import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";

export const metadata: Metadata = {
  title: "Catan vs Ticket to Ride 2026: ¿Cuál comprar primero? | La Mesa Cuadrada",
  description: "Catan vs Ticket to Ride Europa 2026: jugadores, duración, complejidad y precio Amazon. Comparativa real para familias y parejas. ¿Cuál es mejor puerta de entrada?",
};

export default function CatanVsTicket() {
  const catan = games.find((g) => g.slug === "catan")!;
  const ttr = games.find((g) => g.slug === "ticket-to-ride")!;

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl font-bold text-sm">L□</div>
            <span className="font-semibold tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">← Volver comparativa</Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-indigo-600 text-white px-3 py-1.5 rounded-full mb-4">
          Cara a cara • Actualizado Sep 2026
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-zinc-900">Catan vs Ticket to Ride: ¿cuál comprar primero?</h1>
        <p className="mt-4 text-lg leading-7 text-zinc-600">
          Los dos clásicos familiares para iniciarse. Catan es negociación y colonización; Ticket to Ride es rutas y colección. Aquí sin patrocinios, con datos BGG y precio Amazon.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[catan, ttr].map((g) => (
            <div key={g.slug} className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl flex items-center justify-center font-bold">{g.image}</div>
                <div className="font-bold">{g.name}</div>
              </div>
              <div className="text-2xl font-extrabold">{g.price}<span className="text-sm font-semibold text-zinc-500">/ Amazon</span></div>
              <p className="text-xs font-medium text-zinc-500">{g.players} jugadores · {g.duration} · {g.age}</p>
              <ul className="mt-4 text-sm space-y-1.5">
                <li className="flex justify-between"><span className="text-zinc-500">Complejidad</span><span className="font-semibold">{g.complexity}/5</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">BGG</span><span className="font-semibold">{g.bggRating}/10</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Ideal</span><span className="font-semibold text-xs text-right">{g.bestFor}</span></li>
              </ul>
              <a href={g.amazonUrl} target="_blank" rel="nofollow sponsored" className="mt-5 block text-center w-full py-3 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-black">Ver en Amazon →</a>
              <p className="text-xs text-zinc-400 text-center mt-2">Afiliado · {g.pros[0]}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 prose prose-zinc max-w-none">
          <h2 className="text-xl font-bold tracking-tight mt-8">Veredicto rápido</h2>
          <p className="text-zinc-700 leading-7">
            <strong>Elige Catan</strong> si sois 3-4 y os gusta negociar/interactuar mucho.<br />
            <strong>Elige Ticket to Ride Europa</strong> si sois 2-5, buscáis algo más visual y que escale mejor a 2 jugadores. Es más fácil de enseñar (1.9 vs 2.3 complejidad).
          </p>
          <h2 className="text-xl font-bold tracking-tight mt-8">Diferencia clave</h2>
          <p className="text-zinc-700 leading-7">
            Catan dura 60-90 min y puede alargarse; TTR 45-60 min y es más contenido. Si tienes poco tiempo o juegas en pareja, TTR gana. Si quieres interacción y rejugabilidad con grupo fijo, Catan.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
            <p className="text-sm font-semibold text-zinc-900">Transparencia afiliados Amazon</p>
            <p className="text-sm text-zinc-700 mt-1">Si compras desde aquí ganamos 3-5% sin coste extra. Nos permite mantener comparativas independientes sin patrocinios. Precio final siempre el de Amazon.es al pagar.</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black">Volver a comparativa</Link>
          <Link href="/mejores-2-jugadores" className="bg-white border border-zinc-200 px-6 py-3 rounded-full text-sm font-bold hover:bg-zinc-50">Siguiente: 2 jugadores →</Link>
        </div>
      </article>

      <footer className="border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs font-medium text-zinc-500">© 2026 lamesacuadrada — Independiente • <Link href="/" className="underline">Inicio</Link></div>
      </footer>
    </div>
  );
}
