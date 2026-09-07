import { NextRequest, NextResponse } from "next/server";
import { saveClick, type ClickEvent } from "@/lib/store";
import { games } from "@/data/games";

// --- Validación estricta ---
const VALID_SLUGS = new Set(games.map((g) => g.slug));
const SLUG_RE = /^[a-z0-9-]{2,40}$/;
const ASIN_RE = /^[A-Z0-9]{10}$/;
// page debe empezar por / , máx 200, sin protocolo ni caracteres peligrosos
const PAGE_RE = /^\/[a-zA-Z0-9/_\-?=&%#\.]*$/;
const MAX_BODY_BYTES = 2048;
const MAX_PAGE_LEN = 200;
const MAX_SLUG_LEN = 40;
const MAX_ASIN_LEN = 10;
const MAX_PRICE_LEN = 20;
const PRICE_MAX = 500;
const PRICE_MIN = 0;

// Rate-limit best-effort en memoria (sin infra extra) — solo mitigación básica
// Nota: en serverless cada instancia tiene su propio Map, no es distribuido.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 20;
const rateMap = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = rateMap.get(ip) || [];
  const recent = arr.filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateMap.set(ip, recent);
  // limpieza ocasional
  if (rateMap.size > 500) {
    for (const [k, v] of rateMap) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) rateMap.delete(k);
    }
  }
  return false;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function parsePriceToNumber(price: string): number | null {
  // price viene como "32,90€" — extrae número
  const cleaned = price.replace(",", ".").match(/[\d.]+/)?.[0];
  if (!cleaned) return null;
  const n = parseFloat(cleaned);
  if (!Number.isFinite(n)) return null;
  return n;
}

function jsonResponse(body: object, status: number) {
  const res = NextResponse.json(body, { status });
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export async function POST(req: NextRequest) {
  // Tamaño body — rechaza grande antes de parsear
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "payload too large" }, 413);
  }

  // Rate-limit best-effort
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return jsonResponse({ ok: false, error: "rate limited" }, 429);
  }

  let rawText: string;
  try {
    rawText = await req.text();
  } catch {
    return jsonResponse({ ok: false, error: "invalid body" }, 400);
  }
  if (rawText.length > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "payload too large" }, 413);
  }
  if (!rawText || rawText.trim().length === 0) {
    return jsonResponse({ ok: false, error: "empty body" }, 400);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawText);
  } catch {
    return jsonResponse({ ok: false, error: "invalid json" }, 400);
  }

  if (!body || typeof body !== "object") {
    return jsonResponse({ ok: false, error: "invalid json" }, 400);
  }

  const { slug, asin, price, location, page, event } = body as Record<string, unknown>;

  // event whitelist
  if (event !== "amazon_click") {
    return jsonResponse({ ok: false, error: "invalid event" }, 400);
  }

  // slug: regex + longitud + whitelist real
  if (typeof slug !== "string" || slug.length < 2 || slug.length > MAX_SLUG_LEN || !SLUG_RE.test(slug)) {
    return jsonResponse({ ok: false, error: "invalid slug" }, 400);
  }
  // whitelist contra juegos reales — si no existe, no persiste pero devuelve 200 fail-safe (no leak de válidos)
  if (!VALID_SLUGS.has(slug)) {
    return jsonResponse({ ok: true, persisted: false }, 200);
  }

  // location whitelist
  if (typeof location !== "string" || !["card", "ficha", "vs"].includes(location)) {
    return jsonResponse({ ok: false, error: "invalid location" }, 400);
  }

  // asin: opcional pero si viene debe ser formato Amazon. Vacío permitido (fallback parse).
  let asinStr = "";
  if (asin !== undefined && asin !== null && asin !== "") {
    if (typeof asin !== "string" || asin.length > MAX_ASIN_LEN || (asin.length !== 0 && !ASIN_RE.test(asin))) {
      return jsonResponse({ ok: false, error: "invalid asin" }, 400);
    }
    asinStr = asin;
  }

  // price: string corta, numérico en rango razonable si se puede parsear
  let priceStr = "";
  if (price !== undefined && price !== null && price !== "") {
    if (typeof price !== "string" || price.length > MAX_PRICE_LEN) {
      return jsonResponse({ ok: false, error: "invalid price length" }, 400);
    }
    // bloquea caracteres peligrosos en price (solo dígitos, coma, punto, €, espacio, $)
    if (/[<>"'`\\]/.test(price)) {
      return jsonResponse({ ok: false, error: "invalid price" }, 400);
    }
    const num = parsePriceToNumber(price);
    if (num !== null && (num < PRICE_MIN || num > PRICE_MAX)) {
      return jsonResponse({ ok: false, error: "price out of range" }, 400);
    }
    priceStr = price;
  }

  // page: opcional pero si viene validación estricta
  let pageStr = "";
  if (page !== undefined && page !== null && page !== "") {
    if (typeof page !== "string" || page.length > MAX_PAGE_LEN) {
      return jsonResponse({ ok: false, error: "invalid page length" }, 400);
    }
    if (!page.startsWith("/")) {
      return jsonResponse({ ok: false, error: "invalid page" }, 400);
    }
    if (page.includes("://") || page.toLowerCase().includes("http") || page.includes("\\") || /[<>"'`]/.test(page)) {
      return jsonResponse({ ok: false, error: "invalid page" }, 400);
    }
    if (!PAGE_RE.test(page)) {
      return jsonResponse({ ok: false, error: "invalid page format" }, 400);
    }
    pageStr = page;
  }

  // Timestamp: siempre generado en servidor, cliente ignorado por construcción
  const serverTimestamp = new Date().toISOString();

  const data: ClickEvent = {
    event: "amazon_click",
    timestamp: serverTimestamp,
    slug: String(slug),
    asin: asinStr,
    price: priceStr,
    location: location as ClickEvent["location"],
    page: pageStr,
  };

  try {
    await saveClick(data);
  } catch (e) {
    console.error("[api/track] saveClick failed", e);
    return jsonResponse({ ok: true, persisted: false }, 200);
  }

  return jsonResponse({ ok: true, persisted: true }, 200);
}

export async function GET() {
  const res = NextResponse.json({ ok: false, error: "use POST" }, { status: 405 });
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Allow", "POST");
  return res;
}
