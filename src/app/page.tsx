import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export default function Home() {
  const featured = games.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl font-bold text-sm">L□</div>
            <span className="font-semibold tracking-tight text-zinc-900">lamesacuadrada</span>
            <span className="text-xs font-semibold bg-zinc-900 text-white px-2.5 py-1 rounded-full">2026</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#comparativa" className="text-zinc-600 hover:text-zinc-900">Comparativa</a>
            <a href="#guias" className="text-zinc-600 hover:text-zinc-900">Guías</a>
            <span className="text-zinc-400">Afiliados Amazon</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-indigo-600 text-white px-3 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> Comparativas honestas — Actualizado Sep 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[0.95] max-w-3xl text-zinc-900">
            Mejores juegos de mesa
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">2026: comparativa real</span>
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-zinc-600 max-w-2xl">
            Mismos criterios para todos: jugadores, duración, edad, complejidad BGG y precio Amazon. Sin patrocinios ocultos. Afiliado transparente.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#comparativa" className="bg-indigo-600 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition">
              Ver comparativa →
            </a>
            <a href="#guias" className="bg-white border border-zinc-200 text-zinc-900 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-zinc-50 transition">
              ¿Cuál me conviene?
            </a>
          </div>
          <p className="mt-4 text-xs font-medium text-zinc-500">* Enlaces afiliados Amazon: ganamos comisión sin coste extra para ti. Comisión 3-5% aprox.</p>
        </div>
      </section>

      {/* Filtro rápido */}
      <section className="max-w-6xl mx-auto px-6 pt-8 w-full">
        <div className="flex flex-wrap gap-2 text-sm font-semibold">
          <Link href="/mejores-2-jugadores" className="bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-black transition">2 jugadores →</Link>
          <Link href="/catan-vs-ticket-to-ride" className="bg-white border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-50 transition">Catan vs Ticket to Ride →</Link>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full">Familiar</span>
          <span className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full">Fiesta 6+</span>
          <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full">Cooperativo</span>
        </div>
      </section>

      {/* Grid */}
      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Comparativa rápida</h2>
        <p className="text-sm font-medium text-zinc-600 mt-1 mb-6">8 juegos esenciales. Filtra por lo que importa: jugadores, tiempo y complejidad.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-6 bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="font-bold text-zinc-900">Veredicto rápido</p>
          <p className="text-sm leading-6 text-zinc-600 mt-1">
            <span className="font-bold text-zinc-900">Para empezar:</span> Catan. <span className="font-bold text-zinc-900">Para pareja:</span> 7 Wonders Duel o Azul.{" "}
            <span className="font-bold text-zinc-900">Fiesta 6+:</span> Dixit. <span className="font-bold text-zinc-900">Cooperativo:</span> Pandemic.
          </p>
        </div>
      </section>

      {/* Guías futuras */}
      <section id="guias" className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Catan vs Ticket to Ride", desc: "Duelo de clásicos familiares", slug: "/catan-vs-ticket-to-ride", badge: "¡Nuevo!" },
            { title: "Mejores para 2 jugadores", desc: "Ranking pareja 2026", slug: "/mejores-2-jugadores", badge: "¡Nuevo!" },
            { title: "Juegos fiesta 6+ personas", desc: "Para grupos grandes", slug: "/juegos-fiesta", badge: "Próximo" },
          ].map((c) => {
            const isLive = c.slug !== "/juegos-fiesta";
            return (
              <Link
                key={c.slug}
                href={isLive ? c.slug : "#"}
                className={`bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm block ${isLive ? "hover:shadow-md hover:border-indigo-200 transition" : "opacity-70"}`}
              >
                <span className={`text-xs font-bold tracking-wide px-2.5 py-1 rounded-full ${isLive ? "bg-emerald-500 text-white" : "bg-indigo-50 text-indigo-700"}`}>{c.badge}</span>
                <div className="font-bold mt-3 text-zinc-900">{c.title} {isLive && "→"}</div>
                <div className="text-sm font-medium text-zinc-600">{c.desc}</div>
                <div className="text-xs font-mono text-zinc-400 mt-2">{c.slug}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quiz */}
      <section className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-zinc-900 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-violet-600/20" />
          <div className="relative">
            <h3 className="text-xl font-bold tracking-tight text-white">¿Cuál te conviene?</h3>
            <p className="text-zinc-300 mt-1.5 text-sm font-medium">2 preguntas y te decimos el juego ideal. Filtra por jugadores y tiempo.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="bg-white text-zinc-900 px-4 py-2 rounded-full">1. ¿Cuántos sois? 2 / 4 / 6+</span>
              <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full">2. ¿30 min o 90 min?</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-bold text-lg tracking-tight text-zinc-900 mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué juego de mesa comprar primero?", a: "Catan si sois 3-4, Azul o Ticket to Ride si sois 2. Los 3 se explican en 10 minutos." },
            { q: "¿Por qué los precios cambian?", a: "Amazon ajusta precios a diario. Mostramos precio orientativo; el final es el de Amazon al comprar." },
            { q: "¿Ganáis comisión?", a: "Sí, afiliado Amazon (3-5%). A ti no te cuesta más y nos permite mantener comparativas sin patrocinios." },
          ].map((f) => (
            <div key={f.q} className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
              <div className="font-bold text-sm text-zinc-900">{f.q}</div>
              <div className="text-sm font-medium leading-6 text-zinc-600 mt-1.5">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-zinc-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 lamesacuadrada — Independiente. No patrocinado.</span>
          <span>Afiliados Amazon disclosure • Precios orientativos Amazon.es</span>
        </div>
      </footer>
    </div>
  );
}
