import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metodología — Cómo elaboramos nuestros rankings | La Mesa Cuadrada",
  description: "Cómo elaboramos nuestros rankings: criterio BGG como base objetiva, filtros por jugadores/duración/edad, desempate editorial, precio no influye, precios orientativos Sep 2026 y afiliación Amazon transparente.",
};

export default function Metodologia() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-stone-900 antialiased">
      <header className="sticky top-0 z-10 bg-[#FFFBEB]/90 backdrop-blur-xl border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center rounded-lg font-black text-sm">◧</div>
            <span className="font-black tracking-tight">lamesacuadrada</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-stone-600 hover:text-amber-700">← Volver</Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase bg-stone-900 text-amber-50 px-3 py-1.5 rounded-full mb-4">● Método auditable • Sep 2026</div>
        <h1 className="text-4xl font-black tracking-tight leading-none">Cómo elaboramos nuestros rankings</h1>
        <p className="mt-4 text-lg leading-7 text-stone-600 font-medium">Comparativas reales significa método transparente y replicable. No hay patrocinios, no hay posiciones vendidas. El precio no mueve el ranking.</p>

        <div className="mt-8 grid gap-4">
          <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-sm">1</div>
            <h2 className="font-black mt-3">BGG como criterio objetivo principal</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">Ordenamos por <strong>nota media BoardGameGeek (★ BGG)</strong> — la valoración agregada de miles de jugadores. Es el único criterio numérico externo y verificable. Cada ficha enlaza a su página BGG: <span className="font-mono text-xs bg-amber-50 px-1.5 py-0.5 rounded">boardgamegeek.com/boardgame/{`{id}`}</span>.</p>
          </div>
          <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-sm">2</div>
            <h2 className="font-black mt-3">Filtrado por situación de juego</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">Aplicamos filtros duros: <strong>jugadores (min/max)</strong>, <strong>duración (min)</strong> y <strong>edad</strong> según editorial. Ej. <Link href="/?jugadores=2&duracion=30#comparativa" className="text-amber-700 underline font-bold">/?jugadores=2&duracion=30</Link> deja solo juegos que realmente funcionan a 2 en ≤30 min.</p>
          </div>
          <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-sm">3</div>
            <h2 className="font-black mt-3">Desempate editorial cuando hay empate técnico</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">Si dos juegos tienen BGG casi idéntico (ej. 7.4 vs 7.5) y ambos pasan filtros, usamos criterio editorial: mejor escalado a 2, mejor rejugabilidad o mejor puerta de entrada. Nunca por precio o comisión. Nuestro veredicto explica el porqué en cada ficha.</p>
          </div>
          <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-sm">4</div>
            <h2 className="font-black mt-3">El precio no determina la posición</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium"><strong>El precio no influye en el ranking.</strong> Un juego de 69,90€ puede estar #1 BGG y uno de 14,90€ estar top 5. Ganamos comisión Amazon 3-5% sea cual sea el precio — no tenemos incentivo para subir caros.</p>
          </div>
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-stone-800 text-amber-50 rounded-full flex items-center justify-center font-black text-sm">5</div>
            <h2 className="font-black mt-3">Precios orientativos, no en tiempo real</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">Precios mostrados <strong>consultados Sep 2026</strong> en Amazon.es. Amazon cambia precios a diario — <strong>el precio final es siempre el de Amazon al pagar</strong>. Actualizamos semanalmente a mano hasta tener Amazon PA-API (requiere 3 ventas validadas). Si ves discrepancia, es normal.</p>
          </div>
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
            <div className="w-8 h-8 bg-stone-900 text-amber-50 rounded-full flex items-center justify-center font-black text-sm">6</div>
            <h2 className="font-black mt-3">Afiliación transparente</h2>
            <p className="text-sm leading-6 text-stone-600 mt-1 font-medium">Enlaces Amazon llevan tag <span className="font-mono text-xs bg-amber-50 px-1.5 py-0.5 rounded">lamesacuadrad-21</span>. Si compras, nos llevamos 3-5% sin coste extra para ti. Lo indicamos en cada card y ficha con <em>“Afiliado · precio sin coste extra”</em> y cumplimos Operating Agreement de Amazon Associates + normativa española de publicidad.</p>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
          <p className="font-black">¿Por qué BGG y no una nota propia 9/10?</p>
          <p className="text-sm leading-6 text-stone-700 mt-1 font-medium">Inventar un 8/10 sin haber jugado 100 partidas es humo y Google lo penaliza (E-E-A-T). BGG es auditable por cualquiera. Nuestra aportación editorial no es una nota, es <strong>para quién / no para quién / veredicto</strong> en cada ficha — eso sí podemos defender.</p>
        </div>

        <div className="mt-6 bg-white border-2 border-amber-100 rounded-2xl p-5">
          <p className="text-xs font-black tracking-wide uppercase text-stone-500">Verificación</p>
          <ul className="mt-2 text-sm space-y-1 font-medium text-stone-700 list-disc pl-5">
            <li>Cada ficha enlaza a BGG: <span className="font-mono text-xs">boardgamegeek.com/boardgame/{`{bggId}`}</span></li>
            <li>Filtros por URL son compartibles y con canonical a <code>/</code> cuando hay parámetros</li>
            <li>Código y dataset en <code>src/data/games.ts</code> — ranking determinista y replicable</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-stone-900 text-amber-50 px-6 py-3 rounded-xl text-sm font-black hover:bg-stone-800">Volver a comparativa</Link>
          <Link href="/mejores-2-jugadores" className="bg-white border-2 border-amber-200 px-6 py-3 rounded-xl text-sm font-black hover:bg-amber-50">Ranking 2 jugadores →</Link>
        </div>
      </article>

      <footer className="border-t-2 border-amber-100 bg-white mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs font-medium text-stone-500">© 2026 lamesacuadrada — <Link href="/" className="underline">Inicio</Link> · Afiliado Amazon · BGG como fuente objetiva</div>
      </footer>
    </div>
  );
}
