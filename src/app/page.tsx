const hostings = [
  {
    name: "Hostinger",
    logo: "H",
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
    pros: ["Precio no sube al renovar", "Soporte teléfono 24/7", "25% cada renovación", "Cookie 90 días"],
    cons: ["Menos almacenamiento"],
  },
  {
    name: "LucusHost",
    logo: "L",
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
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg font-bold text-sm tracking-tight">CH</div>
            <span className="font-semibold tracking-tight text-zinc-900">comparahosting</span>
            <span className="text-xs font-medium bg-zinc-900 text-white px-2 py-1 rounded-full">ES 2026</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#comparativa" className="text-zinc-700 hover:text-zinc-900">Comparativa</a>
            <a href="#faq" className="text-zinc-700 hover:text-zinc-900">FAQ</a>
            <span className="text-zinc-500">Afiliados Disclosure</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide uppercase text-zinc-700 mb-3">Comparativa independiente • Actualizado 5 Sep 2026 • Precios con IVA</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[0.95] max-w-3xl text-zinc-900">
            Mejor hosting WordPress<br />
            España 2026: <span className="underline decoration-zinc-300 decoration-8 underline-offset-4">comparativa real sin humo</span>
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-zinc-700 max-w-2xl">
            Mismos criterios para todos: precio real (primer año y renovación), LiteSpeed, soporte y ubicación de servidores. Sin patrocinios ocultos.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#comparativa" className="bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition">Ver comparativa</a>
            <a href="#calculadora" className="bg-white border border-zinc-300 text-zinc-900 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-50 transition">¿Cuál me conviene?</a>
          </div>
          <p className="mt-4 text-xs font-medium text-zinc-600">* Enlaces de afiliado: ganamos comisión sin coste extra para ti. Transparencia total.</p>
        </div>
      </section>

      {/* Tabla */}
      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Comparativa rápida</h2>
        <p className="text-sm font-medium text-zinc-700 mt-1 mb-6">Precios del plan básico WordPress. Renovación = lo que pagas el año 2. El truco está ahí.</p>
        
        <div className="grid md:grid-cols-3 gap-5">
          {hostings.map((h) => (
            <div key={h.name} className={`bg-white rounded-2xl border p-6 flex flex-col ${h.highlight ? "border-zinc-900 shadow-xl ring-1 ring-zinc-900" : "border-zinc-200 shadow-sm"}`}>
              {h.highlight && <span className="text-xs font-bold tracking-wide bg-zinc-900 text-white px-3 py-1 rounded-full self-start mb-4">RECOMENDADO</span>}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-sm">{h.logo}</div>
                <div>
                  <div className="font-bold leading-none text-zinc-900">{h.name}</div>
                  <div className="text-xs font-medium text-zinc-600">{h.datacenter}</div>
                </div>
              </div>

              <div className="mb-5">
                <div className="text-3xl font-extrabold tracking-tight text-zinc-900">{h.price}<span className="text-sm font-semibold text-zinc-600">/mes</span></div>
                <div className="text-sm text-zinc-700 mt-1">Renovación: <span className="font-bold text-zinc-900">{h.renewal}/mes</span></div>
                <div className="text-xs font-semibold mt-2 bg-zinc-900 text-white px-2.5 py-1 rounded-full inline-block">Afiliado: {h.affiliate}</div>
              </div>

              <ul className="text-sm space-y-2 mb-5 flex-1 border-t border-zinc-100 pt-4">
                <li className="flex justify-between"><span className="text-zinc-600 font-medium">Almacenamiento</span><span className="font-semibold text-zinc-900">{h.storage}</span></li>
                <li className="flex justify-between"><span className="text-zinc-600 font-medium">LiteSpeed</span><span className="font-bold text-emerald-700">{h.litespeed ? "✓ Sí" : "No"}</span></li>
                <li className="flex justify-between"><span className="text-zinc-600 font-medium">Soporte</span><span className="font-semibold text-zinc-900 text-xs text-right">{h.support}</span></li>
              </ul>

              <div className="text-xs leading-relaxed space-y-1.5 mb-5">
                <div className="font-medium text-zinc-900">+ {h.pros.join(" • ")}</div>
                <div className="font-medium text-zinc-600">- {h.cons.join(" • ")}</div>
              </div>

              <a href={h.href} className={`text-center w-full py-3.5 rounded-full text-sm font-bold transition ${h.highlight ? "bg-zinc-900 text-white hover:bg-black" : "bg-white border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-50"}`}>
                {h.cta} →
              </a>
              <p className="text-xs font-medium text-zinc-500 text-center mt-2.5">Link afiliado</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-zinc-50 border border-zinc-200 rounded-xl p-5">
          <p className="font-bold text-zinc-900">Veredicto rápido:</p>
          <p className="text-sm leading-6 text-zinc-700 mt-1"><span className="font-bold text-zinc-900">Empiezas y quieres barato:</span> Hostinger. <span className="font-bold text-zinc-900">Quieres sin susto al renovar + teléfono:</span> Raiola (25% recurrente, mejor a largo plazo). <span className="font-bold text-zinc-900">Equilibrio:</span> LucusHost.</p>
        </div>
      </section>

      {/* Páginas futuras */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Hostinger vs Raiola", desc: "Cara a cara con test de velocidad", slug: "/hostinger-vs-raiola", badge: "PRÓXIMO" },
            { title: "Mejor hosting WooCommerce", desc: "Para tiendas 500+ productos", slug: "/hosting-woocommerce", badge: "PRÓXIMO" },
            { title: "Hosting WordPress barato", desc: "Por menos de 4€/mes", slug: "/hosting-barato", badge: "PRÓXIMO" },
          ].map((c) => (
            <div key={c.slug} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <span className="text-xs font-bold tracking-wide bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full">{c.badge}</span>
              <div className="font-bold mt-3 text-zinc-900">{c.title}</div>
              <div className="text-sm font-medium text-zinc-700">{c.desc}</div>
              <div className="text-xs font-mono text-zinc-500 mt-2">{c.slug}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-zinc-900 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold tracking-tight">¿Cuál te conviene?</h3>
          <p className="text-zinc-300 mt-1.5 text-sm font-medium">Responde 2 preguntas y te decimos el hosting ideal. Convierte 3x más que una tabla sola.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="bg-white text-zinc-900 px-4 py-2 rounded-full">1. ¿Visitas/mes? &lt;10k / 10-50k / &gt;50k</span>
            <span className="bg-white text-zinc-900 px-4 py-2 rounded-full">2. ¿Necesitas teléfono 24/7?</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-bold text-lg tracking-tight text-zinc-900 mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué hosting es mejor para WordPress en España?", a: "Depende de tu prioridad: Hostinger si buscas precio inicial bajo, Raiola si valoras renovación sin subida y soporte telefónico en España." },
            { q: "¿Por qué la renovación es más cara?", a: "Muchos hostings ponen precio gancho el primer año. Aquí mostramos ambos precios para que no te lleves sorpresa." },
            { q: "¿Ganáis comisión?", a: "Sí, enlaces de afiliado (Hostinger 40%, Raiola 25% recurrente). No te cuesta más y nos permite mantener la comparativa actualizada. Disclosure total." },
          ].map((f) => (
            <div key={f.q} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="font-bold text-sm text-zinc-900">{f.q}</div>
              <div className="text-sm font-medium leading-6 text-zinc-700 mt-1.5">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-50 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs font-medium text-zinc-600 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 comparahosting — Proyecto independiente. No patrocinado por ningún hosting.</span>
          <span>Afiliados disclosure • hola@comparahosting.vercel.app</span>
        </div>
      </footer>
    </div>
  );
}
