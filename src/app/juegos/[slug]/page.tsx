import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/data/games";
import { gameDetails } from "@/data/gameDetails";

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  const detail = gameDetails[slug];
  return {
    title: `${game.name} — Reseña, cómo jugar y oferta Amazon 2026 | La Mesa Cuadrada`,
    description: detail ? `${detail.intro.slice(0, 150)} Jugadores ${game.players}, ${game.duration}, ${game.age}. Precio ${game.price} Amazon.` : `Reseña ${game.name} ${game.year} — ${game.players} jugadores, ${game.duration}. Precio Amazon.`,
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  const detail = gameDetails[slug];
  if (!detail) notFound();

  const related = games.filter((g) => g.slug !== slug && g.category.some((c) => game.category.includes(c))).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm">◧</div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 py-8 w-full">
        <nav className="text-xs font-medium text-stone-500 mb-4">
          <Link href="/" className="hover:text-amber-700">Inicio</Link> <span>›</span> <Link href="/#comparativa" className="hover:text-amber-700">Juegos</Link> <span>›</span> <span className="font-bold text-stone-700">{game.name}</span>
        </nav>

        <div className="grid md:grid-cols-[380px_1fr] gap-8">
          <div className="bg-white rounded-2xl border-2 border-amber-100 p-4 shadow-sm">
            <div className="aspect-square rounded-xl overflow-hidden bg-amber-50 border border-amber-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={game.imageUrl} alt={`Portada ${game.name}`} className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-stone-500 font-medium">BGG</span><span className="font-black">★ {game.bggRating}/10</span></div>
              <div className="flex justify-between"><span className="text-stone-500 font-medium">Año</span><span className="font-bold">{game.year} · {game.publisher}</span></div>
              <div className="flex justify-between"><span className="text-stone-500 font-medium">Jugadores</span><span className="font-bold">{game.players}</span></div>
              <div className="flex justify-between"><span className="text-stone-500 font-medium">Duración</span><span className="font-bold">{game.duration}</span></div>
              <div className="flex justify-between"><span className="text-stone-500 font-medium">Edad</span><span className="font-bold">{game.age}</span></div>
              <div className="flex justify-between"><span className="text-stone-500 font-medium">Dificultad</span><span className="font-bold">{game.complexity}/5</span></div>
            </div>
            <a href={game.amazonUrl} target="_blank" rel="nofollow sponsored" className="mt-5 block text-center w-full py-3.5 rounded-xl bg-amber-600 text-white text-sm font-black hover:bg-amber-700 shadow-md">
              Ver en Amazon — {game.price} →
            </a>
            <p className="text-xs font-medium text-stone-400 text-center mt-2">Afiliado · precio sin coste extra · {game.badge || "Top"}</p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-amber-600 text-white px-3 py-1.5 rounded-full shadow-sm">
              ● {game.category.join(" · ")} • {game.age}
            </div>
            <h1 className="text-4xl font-black tracking-tight leading-none mt-3 text-stone-900">{game.name}</h1>
            <p className="text-lg leading-7 text-stone-600 mt-3 font-medium">{detail.intro}</p>
            <p className="text-stone-700 leading-7 mt-4">{detail.description}</p>

            <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
              <p className="font-black text-stone-900">◈ Para quién es</p>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-medium text-stone-700">
                {detail.idealFor.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="font-black text-stone-900 mt-4">No es para ti si</p>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-medium text-stone-600">
                {detail.notIdealFor.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <h2 className="text-xl font-black tracking-tight mt-8 text-stone-900">Cómo se juega en 3 pasos</h2>
            <ol className="mt-3 space-y-2">
              {detail.howToPlay.map((step, i) => (
                <li key={i} className="flex gap-3 bg-white border-2 border-amber-100 rounded-xl p-4 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-stone-900 text-amber-50 flex items-center justify-center font-black text-xs shrink-0">{i + 1}</span>
                  <span className="text-sm font-medium text-stone-700 leading-6">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-emerald-100 rounded-2xl p-5">
                <p className="font-black text-emerald-800">✓ Pros</p>
                <ul className="mt-2 text-sm space-y-1 font-medium text-stone-700 list-disc pl-5">
                  {game.pros.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div className="bg-white border-2 border-red-100 rounded-2xl p-5">
                <p className="font-black text-red-800">✗ Contras</p>
                <ul className="mt-2 text-sm space-y-1 font-medium text-stone-600 list-disc pl-5">
                  {game.cons.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-black tracking-wide uppercase text-stone-500">Trivia</p>
              <p className="text-sm font-medium text-stone-700 mt-1">{detail.trivia}</p>
              <p className="text-xs font-medium text-stone-500 mt-2">BGG ID {game.bggId} · ★ {game.bggRating} · {game.complexity}/5 dificultad</p>
            </div>

            <a href={game.amazonUrl} target="_blank" rel="nofollow sponsored" className="mt-6 block text-center w-full py-3.5 rounded-xl bg-stone-900 text-amber-50 text-sm font-black hover:bg-stone-800">
              Comprar {game.name} en Amazon →
            </a>

            <h3 className="font-black text-stone-900 mt-8">Preguntas frecuentes</h3>
            <div className="mt-3 space-y-3">
              {detail.faq.map((f) => (
                <div key={f.q} className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
                  <div className="font-black text-sm text-stone-900">{f.q}</div>
                  <div className="text-sm font-medium leading-6 text-stone-600 mt-1">{f.a}</div>
                </div>
              ))}
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <h3 className="font-black text-stone-900">También te puede interesar</h3>
                <div className="mt-3 grid sm:grid-cols-3 gap-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/juegos/${r.slug}`} className="bg-white border-2 border-amber-100 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition">
                      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-amber-50 border border-amber-100 mb-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.imageUrl} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="font-black text-sm text-stone-900 truncate">{r.name}</div>
                      <div className="text-xs font-medium text-stone-500">{r.players} · {r.duration} · ★ {r.bggRating}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <Link href="/" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">← Comparativa</Link>
              <Link href="/mejores-2-jugadores" className="bg-amber-600 text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-700">Mejores 2p →</Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t-2 border-amber-100 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-6 py-6 text-xs font-medium text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · <Link href={`/juegos/${game.slug}`} className="underline">{game.name}</Link></span>
          <span>Afiliado Amazon · BGG {game.bggRating}/10</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: game.name, brand: game.publisher, image: game.imageUrl, description: detail.description, aggregateRating: { "@type": "AggregateRating", ratingValue: game.bggRating, bestRating: 10, ratingCount: 1000 }, offers: { "@type": "Offer", price: game.price.replace("€","").replace(",","."), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: game.amazonUrl } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: detail.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </div>
  );
}
