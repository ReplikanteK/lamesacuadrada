import Link from "next/link";

const hostings = [
  {
    name: "Hostinger",
    logo: "H",
    accent: "border-t-orange-500",
    badge: "bg-orange-500",
    price: "2,99€",
    renewal: "13,99€",
    storage: "100 GB SSD",
    ram: "—",
    litespeed: true,
    support: "Chat 24/7",
    datacenter: "París / Ámsterdam",
    affiliate: "40% por venta",
    cta: "Ver oferta Hostinger",
    href: "#hostinger-afiliado",
    highlight: false,
    pros: ["Más barato inicio", "hPanel muy fácil", "LiteSpeed"],
    cons: ["Renovación cara", "Sin teléfono"],
  },
  {
    name: "Raiola Networks",
    logo: "R",
    accent: "border-t-indigo-600",
    badge: "bg-indigo-600",
    price: "4,95€",
    renewal: "4,95€",
    storage: "10 GB NVMe",
    ram: "2 GB",
    litespeed: true,
    support: "Teléfono 24/7",
    datacenter: "Galicia (ES)",
    affiliate: "25% recurrente",
    cta: "Ver oferta Raiola",
    href: "#raiola-afiliado",
    highlight: true,
    pros: ["Precio no sube al renovar", "Soporte teléfono 24/7", "Servidores en Galicia"],
    cons: ["Menos almacenamiento"],
  },
  {
    name: "LucusHost",
    logo: "L",
    accent: "border-t-emerald-500",
    badge: "bg-emerald-600",
    price: "3,45€",
    renewal: "3,45€",
    storage: "20 GB NVMe",
    ram: "2 GB",
    litespeed: true,
    support: "Ticket + teléfono",
    datacenter: "España",
    affiliate: "~30%",
    cta: "Ver oferta LucusHost",
    href: "#lucushost-afiliado",
    highlight: false,
    pros: ["Equilibrio precio/prestaciones", "Soporte en España"],
    cons: ["Panel cPanel clásico"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl font-bold text-sm">CH</div>
            <span className="font-semibold tracking-tight text-zinc-900">comparahosting</span>
            <span className="text-xs font-semibold bg-zinc-900 text-white px-2.5 py-1 rounded-full">ES 2026</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#comparativa" className="text-zinc-600 hover:text-zinc-900">Comparativa</a>
            <a href="#faq" className="text-zinc-600 hover:text-zinc-900">FAQ</a>
            <span className="text-zinc-400">Afiliados</span>
          </nav>
        </div>
      </header>

      {/* Hero - tech con gradiente sutil */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-indigo-600 text-white px-3 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> Comparativa independiente — 5 Sep 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[0.95] max-w-3xl text-zinc-900">
            Mejor hosting WordPress<br />
            España 2026: <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">comparativa real</span>
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-zinc-600 max-w-2xl">
            Mismos criterios para todos: precio real (primer año y renovación), LiteSpeed, soporte y ubicación de servidores. Sin patrocinios ocultos.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#comparativa" className="bg-indigo-600 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition">Ver comparativa →</a>
            <a href="#calculadora" className="bg-white border border-zinc-200 text-zinc-900 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-zinc-50 transition">¿Cuál me conviene?</a>
          </div>
          <p className="mt-4 text-xs font-medium text-zinc-500">* Enlaces de afiliado: ganamos comisión sin coste extra para ti.</p>
        </div>
      </section>

      {/* Tabla */}
      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Comparativa rápida</h2>
        <p className="text-sm font-medium text-zinc-600 mt-1 mb-6">Precios del plan básico WordPress. Renovación = lo que pagas el año 2.</p>
        
        <div className="grid md:grid-cols-3 gap-5">
          {hostings.map((h) => (
            <div key={h.name} className={`bg-white rounded-3xl border p-6 flex flex-col border-t-4 ${h.accent} ${h.highlight ? "border-zinc-200 shadow-xl ring-1 ring-indigo-100 scale-[1.02]" : "border-zinc-200 shadow-sm"}`}>
              {h.highlight && <span className="text-xs font-bold tracking-wide bg-indigo-600 text-white px-3 py-1 rounded-full self-start mb-4 shadow-sm">✦ RECOMENDADO</span>}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${h.badge} text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm`}>{h.logo}</div>
                <div>
                  <div className="font-bold leading-none text-zinc-900">{h.name}</div>
                  <div className="text-xs font-medium text-zinc-500">{h.datacenter}</div>
                </div>
              </div>

              <div className="mb-5">
                <div className="text-3xl font-extrabold tracking-tight text-zinc-900">{h.price}<span className="text-sm font-semibold text-zinc-500">/mes</span></div>
                <div className="text-sm text-zinc-600 mt-1">Renovación: <span className="font-bold text-zinc-900">{h.renewal}/mes</span></div>
                <div className="text-xs font-bold mt-2 bg-zinc-900 text-white px-2.5 py-1 rounded-full inline-block">{h.affiliate}</div>
              </div>

              <ul className="text-sm space-y-2 mb-5 flex-1 border-t border-zinc-100 pt-4">
                <li className="flex justify-between"><span className="text-zinc-500 font-medium">Almacenamiento</span><span className="font-semibold text-zinc-900">{h.storage}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500 font-medium">LiteSpeed</span><span className="font-bold text-emerald-600">{h.litespeed ? "✓ Sí" : "No"}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500 font-medium">Soporte</span><span className="font-semibold text-zinc-900 text-xs text-right">{h.support}</span></li>
              </ul>

              <div className="text-xs leading-relaxed space-y-1.5 mb-5">
                <div className="font-medium text-zinc-900">+ {h.pros.join(" • ")}</div>
                <div className="font-medium text-zinc-500">- {h.cons.join(" • ")}</div>
              </div>

              <a href={h.href} className={`text-center w-full py-3.5 rounded-full text-sm font-bold transition ${h.highlight ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100" : "bg-zinc-900 text-white hover:bg-black"}`}>
                {h.cta} →
              </a>
              <p className="text-xs font-medium text-zinc-400 text-center mt-2.5">Link afiliado</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="font-bold text-zinc-900">Veredicto rápido</p>
          <p className="text-sm leading-6 text-zinc-600 mt-1"><span className="font-bold text-zinc-900">Barato inicio:</span> Hostinger. <span className="font-bold text-zinc-900">Sin susto al renovar + teléfono:</span> Raiola. <span className="font-bold text-zinc-900">Equilibrio:</span> LucusHost.</p>
        </div>
      </section>

      {/* Páginas futuras */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Hostinger vs Raiola", desc: "Cara a cara con test de velocidad", slug: "/hostinger-vs-raiola", badge: "¡Nuevo!" },
            { title: "Mejor hosting WooCommerce", desc: "Para tiendas 500+ productos", slug: "/hosting-woocommerce", badge: "Próximo" },
            { title: "Hosting WordPress barato", desc: "Por menos de 4€/mes", slug: "/hosting-barato", badge: "Próximo" },
          ].map((c) => {
            const isLive = c.slug === "/hostinger-vs-raiola";
            return (
              <Link key={c.slug} href={isLive ? c.slug : "#"} className={`bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm block ${isLive ? "hover:shadow-md hover:border-indigo-200 transition" : "opacity-70"}`}>
                <span className={`text-xs font-bold tracking-wide px-2.5 py-1 rounded-full ${isLive ? "bg-emerald-500 text-white" : "bg-indigo-50 text-indigo-700"}`}>{c.badge}</span>
                <div className="font-bold mt-3 text-zinc-900">{c.title} {isLive && "→"}</div>
                <div className="text-sm font-medium text-zinc-600">{c.desc}</div>
                <div className="text-xs font-mono text-zinc-400 mt-2">{c.slug}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-zinc-900 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-violet-600/20" />
          <div className="relative">
            <h3 className="text-xl font-bold tracking-tight text-white">¿Cuál te conviene?</h3>
            <p className="text-zinc-300 mt-1.5 text-sm font-medium">2 preguntas y te decimos el hosting ideal. Convierte 3x más que una tabla sola.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="bg-white text-zinc-900 px-4 py-2 rounded-full">1. ¿Visitas/mes? &lt;10k / 10-50k / &gt;50k</span>
              <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full">2. ¿Necesitas teléfono 24/7?</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-bold text-lg tracking-tight text-zinc-900 mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué hosting es mejor para WordPress en España?", a: "Hostinger si buscas precio inicial bajo, Raiola si valoras renovación sin subida y soporte telefónico." },
            { q: "¿Por qué la renovación es más cara?", a: "Muchos hostings ponen precio gancho el primer año. Aquí mostramos ambos." },
            { q: "¿Ganáis comisión?", a: "Sí, afiliado (Hostinger 40%, Raiola 25% recurrente). No te cuesta más." },
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
          <span>© 2026 comparahosting — Independiente. No patrocinado.</span>
          <span>Afiliados disclosure • hola@comparahosting.vercel.app</span>
        </div>
      </footer>
    </div>
  );
}
