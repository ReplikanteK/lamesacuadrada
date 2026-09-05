import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hostinger vs Raiola 2026: Comparativa Real (Precio, Velocidad y Soporte)",
  description: "Hostinger vs Raiola Networks 2026: precio real con renovación, LiteSpeed, soporte teléfono 24/7 y servidores en España vs extranjero. ¿Cuál es mejor para WordPress?",
};

export default function HostingerVsRaiola() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl font-bold text-sm">CH</div>
            <span className="font-semibold tracking-tight">comparahosting</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">← Volver comparativa</Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-10 w-full">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-indigo-600 text-white px-3 py-1.5 rounded-full mb-4">
          Comparativa cara a cara • Actualizado 5 Sep 2026
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-zinc-900">
          Hostinger vs Raiola: ¿cuál es mejor para WordPress en España?
        </h1>
        <p className="mt-4 text-lg leading-7 text-zinc-600">
          Los dos más recomendados en España, pero con filosofías opuestas: Hostinger apuesta por precio de entrada bajo y panel propio; Raiola por precio fijo sin sorpresas y soporte telefónico en Galicia. Aquí sin patrocinios.
        </p>

        {/* Tabla cara a cara */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl border-t-4 border-t-orange-500 border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold">H</div>
              <div className="font-bold">Hostinger</div>
            </div>
            <div className="text-2xl font-extrabold">2,99€ → 13,99€<span className="text-sm font-semibold text-zinc-500">/mes</span></div>
            <p className="text-xs font-medium text-zinc-500">Precio gancho año 1, luego sube 4.6x</p>
            <ul className="mt-4 text-sm space-y-1.5">
              <li className="flex justify-between"><span className="text-zinc-500">Almacenamiento</span><span className="font-semibold">100 GB SSD</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">Servidores</span><span className="font-semibold">Francia/Países Bajos</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">Soporte</span><span className="font-semibold">Chat 24/7</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">LiteSpeed</span><span className="font-bold text-emerald-600">✓ Sí</span></li>
            </ul>
            <a href="#hostinger-afiliado" className="mt-5 block text-center w-full py-3 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-black">Ver oferta Hostinger →</a>
          </div>

          <div className="bg-white rounded-3xl border-t-4 border-t-indigo-600 border border-zinc-200 p-6 shadow-xl ring-1 ring-indigo-100">
            <span className="text-xs font-bold bg-indigo-600 text-white px-3 py-1 rounded-full">RECOMENDADO SI BUSCAS ESTABILIDAD</span>
            <div className="flex items-center gap-3 mt-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold">R</div>
              <div className="font-bold">Raiola Networks</div>
            </div>
            <div className="text-2xl font-extrabold">4,95€ → 4,95€<span className="text-sm font-semibold text-zinc-500">/mes</span></div>
            <p className="text-xs font-medium text-emerald-700">Precio no sube al renovar</p>
            <ul className="mt-4 text-sm space-y-1.5">
              <li className="flex justify-between"><span className="text-zinc-500">Almacenamiento</span><span className="font-semibold">10 GB NVMe</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">Servidores</span><span className="font-semibold">Galicia, España</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">Soporte</span><span className="font-semibold">Teléfono 24/7</span></li>
              <li className="flex justify-between"><span className="text-zinc-500">LiteSpeed</span><span className="font-bold text-emerald-600">✓ Sí</span></li>
            </ul>
            <a href="#raiola-afiliado" className="mt-5 block text-center w-full py-3 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-md">Ver oferta Raiola →</a>
          </div>
        </div>

        <div className="mt-8 prose prose-zinc max-w-none">
          <h2 className="text-xl font-bold tracking-tight mt-8">Veredicto rápido</h2>
          <p className="text-zinc-700 leading-7">
            <strong>Elige Hostinger</strong> si empiezas, necesitas mucho espacio por poco dinero y te apañas con chat. <br />
            <strong>Elige Raiola</strong> si valoras que el precio no se multiplique el año 2, quieres descolgar el teléfono a las 3am y prefieres datos en España (RGPD/latencia).
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-8">Truco de la renovación</h2>
          <p className="text-zinc-700 leading-7">
            Hostinger: 2,99€ x 12 = 35,88€ el primer año, luego 167,88€/año. En 3 años pagas 371€.<br />
            Raiola: 59,40€/año siempre. En 3 años pagas 178€. La diferencia es 193€ a favor de Raiola a largo plazo.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
            <p className="text-sm font-semibold text-zinc-900">Transparencia afiliados</p>
            <p className="text-sm text-zinc-700 mt-1">Si contratas desde aquí ganamos comisión (Hostinger 40% solo primera compra, Raiola 25% recurrente). A ti no te cuesta más y nos permite mantener esta comparativa actualizada sin patrocinios.</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black">Volver a comparativa</Link>
          <Link href="/hosting-woocommerce" className="bg-white border border-zinc-200 px-6 py-3 rounded-full text-sm font-bold hover:bg-zinc-50">Siguiente: WooCommerce →</Link>
        </div>
      </article>

      <footer className="border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs font-medium text-zinc-500">
          © 2026 comparahosting — Independiente • <Link href="/" className="underline">Inicio</Link>
        </div>
      </footer>
    </div>
  );
}
