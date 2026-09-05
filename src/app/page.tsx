import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export default function Home() {
  const featured = games.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      {/* Header - madera clara */}
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm shadow-sm border border-amber-700/20">◧</div>
            <span className="font-black tracking-tight text-stone-900">lamesacuadrada</span>
            <span className="text-xs font-bold bg-stone-900 text-amber-100 px-2.5 py-1 rounded-full">2026</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-bold">
            <a href="#comparativa" className="text-stone-600 hover:text-amber-700">Comparativa</a>
            <a href="#guias" className="text-stone-600 hover:text-amber-700">Guías</a>
            <span className="text-stone-400 font-medium">Afiliados Amazon</span>
          </nav>
        </div>
      </header>

      {/* Hero - mesa cálida */}
      <section className="bg-gradient-to-b from-amber-100 via-orange-50 to-[#FFFBEB] border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-amber-600 text-white px-3 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-2 h-2 bg-amber-200 rounded-full animate-pulse" /> Comparativas honestas — Actualizado Sep 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] max-w-3xl text-stone-900">
            Mejores juegos de mesa
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">2026: comparativa real</span>
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-stone-600 max-w-2xl font-medium">
            Mismos criterios para todos: jugadores, duración, edad, dificultad BGG y precio Amazon. Sin patrocinios ocultos. Hecho por jugones.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#comparativa" className="bg-amber-600 text-white px-7 py-3.5 rounded-xl text-sm font-black hover:bg-amber-700 shadow-lg shadow-amber-200 transition">
              Ver comparativa →
            </a>
            <a href="#guias" className="bg-white border-2 border-amber-200 text-stone-900 px-7 py-3.5 rounded-xl text-sm font-black hover:bg-amber-50 transition">
              ¿Cuál me conviene?
            </a>
          </div>
          <p className="mt-4 text-xs font-medium text-stone-500">* Enlaces afiliados Amazon: ganamos comisión sin coste extra para ti. 3-5% aprox.</p>
        </div>
      </section>

      {/* Filtro rápido - fichas */}
      <section className="max-w-6xl mx-auto px-6 pt-8 w-full">
        <div className="flex flex-wrap gap-2 text-sm font-bold">
          <Link href="/mejores-2-jugadores" className="bg-stone-900 text-amber-50 px-4 py-2 rounded-full hover:bg-stone-800 transition shadow-sm">◐ 2 jugadores →</Link>
          <Link href="/catan-vs-ticket-to-ride" className="bg-white border-2 border-amber-200 px-4 py-2 rounded-full hover:bg-amber-50 transition">Catan vs Ticket to Ride →</Link>
          <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full border border-amber-200">Familiar</span>
          <span className="bg-orange-100 text-orange-900 px-4 py-2 rounded-full border border-orange-200">Fiesta 6+</span>
          <span className="bg-teal-100 text-teal-900 px-4 py-2 rounded-full border border-teal-200">Cooperativo</span>
        </div>
      </section>

      {/* Grid */}
      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-black tracking-tight text-stone-900">Comparativa rápida</h2>
        <p className="text-sm font-medium text-stone-600 mt-1 mb-6">8 juegos esenciales. Filtra por lo que importa: jugadores, tiempo y dificultad.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>

        <div className="mt-6 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
          <p className="font-black text-stone-900">◈ Veredicto rápido</p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">
            <span className="font-black text-stone-900">Para empezar:</span> Catan. <span className="font-black text-stone-900">Para pareja:</span> 7 Wonders Duel o Azul.{" "}
            <span className="font-black text-stone-900">Fiesta 6+:</span> Dixit. <span className="font-black text-stone-900">Cooperativo:</span> Pandemic.
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
                className={`bg-white border-2 rounded-2xl p-5 shadow-sm block ${isLive ? "hover:shadow-md hover:border-amber-300 border-amber-100 transition" : "opacity-70 border-amber-100"}`}
              >
                <span className={`text-xs font-black tracking-wide px-2.5 py-1 rounded-full ${isLive ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-800"}`}>{c.badge}</span>
                <div className="font-black mt-3 text-stone-900">{c.title} {isLive && "→"}</div>
                <div className="text-sm font-medium text-stone-600">{c.desc}</div>
                <div className="text-xs font-mono text-stone-400 mt-2">{c.slug}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quiz - mesa oscura */}
      <section className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-stone-900 rounded-2xl p-8 relative overflow-hidden border border-stone-800">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="text-xl font-black tracking-tight text-amber-50">¿Cuál te conviene?</h3>
            <p className="text-amber-100/70 mt-1.5 text-sm font-medium">2 preguntas y te decimos el juego ideal. Como elegir en la tienda.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
              <span className="bg-amber-50 text-stone-900 px-4 py-2 rounded-full">1. ¿Cuántos sois? 2 / 4 / 6+</span>
              <span className="bg-white/90 text-stone-900 px-4 py-2 rounded-full">2. ¿30 min o 90 min?</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-black text-lg tracking-tight text-stone-900 mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué juego de mesa comprar primero?", a: "Catan si sois 3-4, Azul o Ticket to Ride si sois 2. Los 3 se explican en 10 minutos." },
            { q: "¿Por qué los precios cambian?", a: "Amazon ajusta precios a diario. Mostramos precio orientativo; el final es el de Amazon al comprar." },
            { q: "¿Ganáis comisión?", a: "Sí, afiliado Amazon (3-5%). A ti no te cuesta más y nos permite mantener comparativas sin patrocinios." },
          ].map((f) => (
            <div key={f.q} className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <div className="font-black text-sm text-stone-900">{f.q}</div>
              <div className="text-sm font-medium leading-6 text-stone-600 mt-1.5">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-amber-100 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 lamesacuadrada — Independiente. No patrocinado. Hecho alrededor de una mesa.</span>
          <span>Afiliados Amazon • Precios orientativos Amazon.es</span>
        </div>
      </footer>
    </div>
  );
}
