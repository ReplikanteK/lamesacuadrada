# La Mesa Cuadrada — Juegos de Mesa 2026

Comparativas honestas de juegos de mesa con afiliación Amazon transparente. Next.js 16 + Tailwind 4, desplegado en Vercel.

## Stack
- Next.js 16.3.4 / React 19 / Tailwind 4
- `src/data/games.ts` — dataset único (8 juegos, BGG + Amazon)
- `src/components/GameCard.tsx` — card reutilizable
- Rutas: `/` + `/catan-vs-ticket-to-ride` + `/mejores-2-jugadores`

## Setup
```bash
npm install
npm run dev # http://localhost:3000
npm run build
```

## Afiliados Amazon
- Tag placeholder: `lamesacuadrada-21` en `src/data/games.ts:12` → reemplazar por tu tag real `tu-tag-21`
- Disclosure obligatorio en cada card/página (ya incluido)
- Precios orientativos, final es Amazon.es

## TODO afiliado
- [ ] Cambiar TAG en `src/data/games.ts`
- [ ] Verificar ASINs Amazon.es (links actuales son ejemplo)
- [ ] Añadir `vercel.json` si necesitas redirects antiguos `/hostinger-vs-raiola` → `/`

## Deploy
Vercel auto-deploy desde `main` (ReplikanteK/comparahosting). Renombrar proyecto Vercel a `lamesacuadrada` cuando toque. Dominio ideal: `lamesacuadrada.es` / `lamesacuadrada.vercel.app`
