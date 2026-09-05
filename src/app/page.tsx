const hostings = [
  {
    name: "Hostinger",
    logo: "H",
    price: "2,99€",
    renewal: "13,99€",
    storage: "100 GB SSD",
    ram: "—",
    litespeed: true,
    support: "Chat 24/7 (no teléfono)",
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
    support: "Teléfono 24/7 + ticket",
    datacenter: "Galicia (ES)",
    affiliate: "25% recurrente",
    cta: "Ver oferta Raiola",
    href: "#raiola-afiliado",
    highlight: true,
    pros: ["Precio no sube", "Soporte tel. 24/7", "25% cada renovación", "Cookie 90 días"],
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
    affiliate: "30% aprox.",
    cta: "Ver oferta LucusHost",
    href: "#lucushost-afiliado",
    highlight: false,
    pros: ["Equilibrio precio/prestaciones", "Soporte ES"],
    cons: ["Panel cPanel clásico"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded font-bold text-sm">CH</div>
            <span className="font-semibold tracking-tight">comparahosting</span>
            <span className="text-xs bg-zinc-100 px-2 py-0.5 rounded ml-2">ES 2026</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-zinc-600">
            <a href="#comparativa" className="hover:text-black">Comparativa</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
            <span className="text-zinc-400">Afiliados Disclosure</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Comparativa independiente • Actualizado 5 Sep 2026 • Precios con IVA</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none max-w-3xl">
            Mejor hosting WordPress España 2026: <span className="bg-yellow-200 px-1">comparativa real sin humo</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
            Hemos comparado Hostinger, Raiola y LucusHost con los mismos criterios: precio real (primer año y renovación), LiteSpeed, soporte y dónde están los servidores. Sin patrocinios ocultos.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#comparativa" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800">Ver comparativa</a>
            <a href="#calculadora" className="border border-zinc-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50">¿Cuál me conviene?</a>
          </div>
          <p className="mt-3 text-xs text-zinc-500">* Enlaces con afiliación: ganamos comisión sin coste extra para ti. Transparencia total.</p>
        </div>
      </section>

      {/* Tabla */}
      <section id="comparativa" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-bold mb-2">Comparativa rápida</h2>
        <p className="text-sm text-zinc-600 mb-6">Precios del plan básico WordPress. Renovación = lo que pagas el año 2. El truco está ahí.</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {hostings.map((h) => (
            <div key={h.name} className={`bg-white rounded-2xl border-2 p-6 flex flex-col ${h.highlight ? "border-black shadow-lg scale-[1.02]" : "border-zinc-200"}`}>
              {h.highlight && <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded-full self-start mb-3">RECOMENDADO</span>}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold">{h.logo}</div>
                <div>
                  <div className="font-bold leading-none">{h.name}</div>
                  <div className="text-xs text-zinc-500">{h.datacenter}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold">{h.price}<span className="text-sm font-normal text-zinc-500">/mes</span></div>
                <div className="text-xs text-zinc-500">Renovación: <span className="font-medium text-zinc-900">{h.renewal}/mes</span></div>
                <div className="text-xs mt-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded inline-block">Afiliado: {h.affiliate}</div>
              </div>

              <ul className="text-sm space-y-1.5 mb-4 flex-1">
                <li className="flex justify-between"><span className="text-zinc-500">Almacenamiento</span><span className="font-medium">{h.storage}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">LiteSpeed</span><span className={h.litespeed ? "text-emerald-600 font-medium" : ""}>{h.litespeed ? "✓ Sí" : "No"}</span></li>
                <li className="flex justify-between"><span className="text-zinc-500">Soporte</span><span className="font-medium text-xs text-right">{h.support}</span></li>
              </ul>

              <div className="text-xs space-y-1 mb-4">
                <div className="text-emerald-700">+ {h.pros.join(" • ")}</div>
                <div className="text-zinc-500">- {h.cons.join(" • ")}</div>
              </div>

              <a href={h.href} className={`text-center w-full py-3 rounded-full text-sm font-semibold ${h.highlight ? "bg-black text-white hover:bg-zinc-800" : "bg-zinc-900 text-white hover:bg-black"} transition`}>
                {h.cta} →
              </a>
              <p className="text-[11px] text-zinc-400 text-center mt-2">Link afiliado • se abre en nueva pestaña</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border border-zinc-200 rounded-xl p-4 text-sm">
          <p className="font-semibold">Veredicto rápido:</p>
          <p className="text-zinc-600 mt-1"><span className="font-medium text-black">Empiezas y quieres barato:</span> Hostinger. <span className="font-medium text-black">Quieres no llevarte susto al renovar + soporte teléfono:</span> Raiola (25% recurrente para nosotros, mejor a largo plazo). <span className="font-medium text-black">Equilibrio:</span> LucusHost.</p>
        </div>
      </section>

      {/* Páginas que vamos a crear */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Hostinger vs Raiola", desc: "Cara a cara con test de velocidad", slug: "/hostinger-vs-raiola", badge: "PRÓXIMO - más convierte" },
            { title: "Mejor hosting WooCommerce", desc: "Para tiendas 500+ productos", slug: "/hosting-woocommerce", badge: "PRÓXIMO" },
            { title: "Hosting WordPress barato", desc: "Por menos de 4€/mes", slug: "/hosting-barato", badge: "PRÓXIMO" },
          ].map((c) => (
            <div key={c.slug} className="bg-white border border-zinc-200 rounded-xl p-5">
              <span className="text-xs bg-zinc-100 px-2 py-1 rounded">{c.badge}</span>
              <div className="font-semibold mt-2">{c.title}</div>
              <div className="text-sm text-zinc-600">{c.desc}</div>
              <div className="text-xs text-zinc-400 mt-2">{c.slug}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculadora placeholder */}
      <section id="calculadora" className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="bg-black text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold">¿Cuál te conviene? (calculadora próxima)</h3>
          <p className="text-zinc-400 mt-1 text-sm">Responde 2 preguntas y te decimos el hosting ideal. Convierte 3x más que una tabla sola.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="bg-white text-black px-3 py-1.5 rounded-full">1. ¿Visitas/mes? &lt;10k / 10-50k / &gt;50k</span>
            <span className="bg-white text-black px-3 py-1.5 rounded-full">2. ¿Necesitas teléfono 24/7?</span>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section id="faq" className="max-w-6xl mx-auto px-6 pb-10 w-full">
        <h3 className="font-bold text-lg mb-4">Preguntas frecuentes</h3>
        <div className="space-y-3">
          {[
            { q: "¿Qué hosting es mejor para WordPress en España?", a: "Depende de tu prioridad: Hostinger si buscas precio inicial bajo, Raiola si valoras renovación sin subida y soporte telefónico en España." },
            { q: "¿Por qué la renovación es más cara?", a: "Muchos hostings (Hostinger incluido) ponen precio gancho el primer año. Aquí mostramos ambos precios para que no te lleves sorpresa." },
            { q: "¿Ganais comisión?", a: "Sí, enlaces de afiliado (Hostinger 40%, Raiola 25% recurrente). No te cuesta más y nos permite mantener la comparativa actualizada." },
          ].map((f) => (
            <div key={f.q} className="bg-white border border-zinc-200 rounded-xl p-4">
              <div className="font-medium text-sm">{f.q}</div>
              <div className="text-sm text-zinc-600 mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 comparahosting — Proyecto independiente. No patrocinado por ningún hosting.</span>
          <span>Disclosure afiliados • Contacto: hola@comparahosting.vercel.app</span>
        </div>
      </footer>
    </div>
  );
}
