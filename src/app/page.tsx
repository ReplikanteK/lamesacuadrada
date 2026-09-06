import type { Metadata } from "next";
import Link from "next/link";
import { games, parseDurationMinutes } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export async function generateMetadata({ searchParams }: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
  const params = await searchParams;
  const hasFilters = !!(params.jugadores || params.duracion || params.categoria || params.q || params.ver);
  if (hasFilters) {
    return {
      alternates: { canonical: "https://lamesacuadrada.vercel.app/" },
      robots: { index: false, follow: true },
    };
  }
  return {};
}

type SearchParams = { jugadores?: string; duracion?: string; categoria?: string; q?: string; ver?: string };

function buildUrl(params: SearchParams, overrides: Partial<SearchParams> & { remove?: (keyof SearchParams)[] }) {
  const next: SearchParams = { ...params, ...overrides };
  if (overrides.remove) overrides.remove.forEach((k) => delete next[k]);
  // cleanup undefined
  Object.keys(next).forEach((k) => {
    const v = next[k as keyof SearchParams];
    if (!v || v === "") delete next[k as keyof SearchParams];
    if (k === "remove") delete (next as Record<string, unknown>)[k];
  });
  const qs = new URLSearchParams(next as Record<string, string>).toString();
  return qs ? `/?${qs}#comparativa` : "/#comparativa";
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const jugadores = params.jugadores ? parseInt(params.jugadores, 10) : undefined;
  const duracion = params.duracion ? parseInt(params.duracion, 10) : undefined;
  const categoria = params.categoria as SearchParams["categoria"];

  let filtered = [...games];
  if (jugadores) {
    filtered = filtered.filter((g) => g.minPlayers <= jugadores && jugadores <= g.maxPlayers);
  }
  if (duracion) {
    filtered = filtered.filter((g) => parseDurationMinutes(g.duration) <= duracion);
  }
  if (categoria) {
    filtered = filtered.filter((g) => g.category.includes(categoria as never));
  }
  if (params.q) {
    const q = params.q.toLowerCase();
    filtered = filtered.filter((g) => g.name.toLowerCase().includes(q) || g.bestFor.toLowerCase().includes(q));
  }

  const verTodos = params.ver === "todos";
  const hasFilters = !!(jugadores || duracion || categoria || params.q);
  const showing = hasFilters ? filtered : verTodos ? filtered : games.slice(0, 9);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
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

      {/* Filtros funcionales */}
      <section className="max-w-6xl mx-auto px-6 pt-8 w-full">
        <div className="bg-white border-2 border-amber-100 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <span className="text-stone-700 mr-1">Filtros:</span>
            <Link href={buildUrl(params, { jugadores: "2" })} className={`px-4 py-2 rounded-full border-2 transition ${jugadores === 2 ? "bg-stone-900 text-amber-50 border-stone-900" : "bg-white border-amber-200 hover:bg-amber-50"}`}>◐ 2 jugadores</Link>
            <Link href={buildUrl(params, { jugadores: "4" })} className={`px-4 py-2 rounded-full border-2 transition ${jugadores === 4 ? "bg-stone-900 text-amber-50 border-stone-900" : "bg-white border-amber-200 hover:bg-amber-50"}`}>4 jugadores</Link>
            <Link href={buildUrl(params, { jugadores: "6" })} className={`px-4 py-2 rounded-full border-2 transition ${jugadores === 6 ? "bg-stone-900 text-amber-50 border-stone-900" : "bg-white border-amber-200 hover:bg-amber-50"}`}>6+</Link>
            <span className="w-px h-6 bg-amber-200 mx-1 hidden sm:block" />
            <Link href={buildUrl(params, { duracion: "30" })} className={`px-4 py-2 rounded-full border-2 transition ${duracion === 30 ? "bg-amber-600 text-white border-amber-600" : "bg-white border-amber-200 hover:bg-amber-50"}`}>≤30 min</Link>
            <Link href={buildUrl(params, { duracion: "60" })} className={`px-4 py-2 rounded-full border-2 transition ${duracion === 60 ? "bg-amber-600 text-white border-amber-600" : "bg-white border-amber-200 hover:bg-amber-50"}`}>≤60 min</Link>
            <Link href={buildUrl(params, { categoria: "fiesta" })} className={`px-4 py-2 rounded-full border-2 transition ${categoria === "fiesta" ? "bg-orange-600 text-white border-orange-600" : "bg-orange-50 text-orange-900 border-orange-200 hover:bg-orange-100"}`}>Fiesta</Link>
            <Link href={buildUrl(params, { categoria: "familiar" })} className={`px-4 py-2 rounded-full border-2 transition ${categoria === "familiar" ? "bg-amber-600 text-white border-amber-600" : "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100"}`}>Familiar</Link>
            <Link href={buildUrl(params, { categoria: "estrategia" })} className={`px-4 py-2 rounded-full border-2 transition ${categoria === "estrategia" ? "bg-teal-700 text-white border-teal-700" : "bg-teal-50 text-teal-900 border-teal-200 hover:bg-teal-100"}`}>Estrategia</Link>
            <Link href={buildUrl(params, { categoria: "cooperativo" })} className={`px-4 py-2 rounded-full border-2 transition ${categoria === "cooperativo" ? "bg-emerald-700 text-white border-emerald-700" : "bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100"}`}>Cooperativo</Link>
            {hasFilters && (
              <Link href="/" className="ml-auto text-xs font-black bg-stone-100 text-stone-700 px-4 py-2 rounded-full hover:bg-stone-200 border border-stone-200">✕ Limpiar</Link>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <Link href="/mejores-2-jugadores" className="text-amber-700 font-bold underline underline-offset-4 hover:text-amber-800">Ranking 2 jugadores →</Link>
            <span className="text-stone-300">·</span>
            <Link href="/catan-vs-ticket-to-ride" className="text-amber-700 font-bold underline underline-offset-4 hover:text-amber-800">Catan vs TTR →</Link>
            <span className="text-stone-300">·</span>
            <Link href="/juegos-fiesta" className="text-amber-700 font-bold underline underline-offset-4 hover:text-amber-800">Fiesta 6+ →</Link>
          </div>
        </div>
      </section>

      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900">{hasFilters ? `Resultados (${filtered.length})` : "Comparativa rápida"}</h2>
            <p className="text-sm font-medium text-stone-600 mt-1">{hasFilters ? "Filtros aplicados — comparte la URL con tus filtros" : `${games.length} juegos esenciales. Filtra por jugadores, tiempo y categoría.`}</p>
          </div>
          {hasFilters && filtered.length === 0 && <span className="text-sm font-bold text-red-600">Sin resultados</span>}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {showing.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
        {hasFilters && filtered.length === 0 && (
          <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-8 text-center">
            <p className="font-black text-stone-900">No hay juegos con esos filtros</p>
            <p className="text-sm text-stone-600 mt-1">Prueba con menos filtros o <Link href="/" className="text-amber-700 underline font-bold">limpiar</Link></p>
          </div>
        )}

        {!hasFilters && !verTodos && filtered.length > showing.length && (
          <div className="mt-6 text-center">
            <Link href="/?ver=todos#comparativa" className="inline-block bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Ver los 20 juegos →</Link>
          </div>
        )}
        {verTodos && !hasFilters && (
          <div className="mt-6 text-center">
            <Link href="/#comparativa" className="inline-block bg-white border-2 border-stone-200 text-stone-700 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-50">Ver solo 9 destacados ←</Link>
          </div>
        )}

        <div className="mt-6 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
          <p className="font-black text-stone-900">◈ Veredicto rápido</p>
          <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">
            <span className="font-black text-stone-900">Para empezar:</span> Catan. <span className="font-black text-stone-900">Para pareja:</span> 7 Wonders Duel o Azul.{" "}
            <span className="font-black text-stone-900">Fiesta 6+:</span> Dixit / Codenames. <span className="font-black text-stone-900">Cooperativo:</span> Pandemic / Just One.
          </p>
        </div>
      </section>

      <section id="guias" className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Catan vs Ticket to Ride", desc: "Duelo de clásicos familiares", slug: "/catan-vs-ticket-to-ride", badge: "¡Nuevo!" },
            { title: "Mejores para 2 jugadores", desc: "Ranking pareja 2026", slug: "/mejores-2-jugadores", badge: "¡Nuevo!" },
            { title: "Juegos fiesta 6+ personas", desc: "Para grupos grandes", slug: "/juegos-fiesta", badge: "¡Nuevo!" },
          ].map((c) => {
            const isLive = true;
            return (
              <Link
                key={c.slug}
                href={c.slug}
                className="bg-white border-2 rounded-2xl p-5 shadow-sm block hover:shadow-md hover:border-amber-300 border-amber-100 transition"
              >
                <span className="text-xs font-black tracking-wide px-2.5 py-1 rounded-full bg-amber-600 text-white">{c.badge}</span>
                <div className="font-black mt-3 text-stone-900">{c.title} →</div>
                <div className="text-sm font-medium text-stone-600">{c.desc}</div>
                <div className="text-xs font-mono text-stone-400 mt-2">{c.slug}</div>
              </Link>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Mejores familiares", desc: "Para toda la familia 8+", slug: "/mejores-familiares", badge: "¡Nuevo!" },
            { title: "Azul vs Splendor", desc: "Duelo abstractos elegantes", slug: "/azul-vs-splendor", badge: "¡Nuevo!" },
            { title: "Cooperativos Top", desc: "Todos vs el juego", slug: "/juegos-cooperativos", badge: "Próximo" },
          ].map((c) => {
            const isLive = c.slug !== "/juegos-cooperativos";
            return (
              <Link
                key={c.slug}
                href={isLive ? c.slug : "#"}
                className={`bg-white border-2 rounded-2xl p-5 shadow-sm block ${isLive ? "hover:shadow-md hover:border-amber-300 border-amber-100 transition" : "opacity-70 border-amber-100"}`}
              >
                <span className={`text-xs font-black tracking-wide px-2.5 py-1 rounded-full ${isLive ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-600"}`}>{c.badge}</span>
                <div className="font-black mt-3 text-stone-900">{c.title} {isLive && "→"}</div>
                <div className="text-sm font-medium text-stone-600">{c.desc}</div>
                <div className="text-xs font-mono text-stone-400 mt-2">{c.slug}</div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-stone-900 rounded-2xl p-8 relative overflow-hidden border border-stone-800">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="text-xl font-black tracking-tight text-amber-50">¿Cuál te conviene?</h3>
            <p className="text-amber-100/70 mt-1.5 text-sm font-medium">Prueba filtros arriba: 2 jugadores + ≤30 min + cooperativo</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
              <Link href="/?jugadores=2&duracion=30#comparativa" className="bg-amber-50 text-stone-900 px-4 py-2 rounded-full hover:bg-white">2p + 30 min →</Link>
              <Link href="/?categoria=fiesta&jugadores=6#comparativa" className="bg-white/90 text-stone-900 px-4 py-2 rounded-full hover:bg-white">Fiesta 6+ →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-black text-lg tracking-tight text-stone-900 mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué juego de mesa comprar primero?", a: "Catan si sois 3-4, Azul o Ticket to Ride si sois 2. Los 3 se explican en 10 minutos." },
            { q: "¿Cómo funcionan filtros jugadores/duración?", a: "Usa /?jugadores=2&duracion=30 — la URL es compartible y filtra en servidor sin JS." },
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
          <span>© 2026 lamesacuadrada — Independiente. No patrocinado. Hecho alrededor de una mesa. · <Link href="/metodologia" className="underline hover:text-amber-700">Metodología</Link></span>
          <span>Afiliados Amazon · Precios Sep 2026 orientativos · {games.length} juegos</span>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué juego de mesa comprar primero?", acceptedAnswer: { "@type": "Answer", text: "Catan si sois 3-4, Azul o Ticket to Ride si sois 2. Los 3 se explican en 10 minutos." } },
              { "@type": "Question", name: "¿Cómo funcionan filtros jugadores/duración?", acceptedAnswer: { "@type": "Answer", text: "Usa /?jugadores=2&duracion=30 — la URL es compartible y filtra en servidor sin JS." } },
              { "@type": "Question", name: "¿Ganáis comisión?", acceptedAnswer: { "@type": "Answer", text: "Sí, afiliado Amazon (3-5%). A ti no te cuesta más y nos permite mantener comparativas sin patrocinios." } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Mejores juegos de mesa 2026",
            itemListElement: games.slice(0, 9).map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Product", name: g.name, url: `https://lamesacuadrada.vercel.app/?q=${g.slug}` },
            })),
          }),
        }}
      />
    </div>
  );
}
