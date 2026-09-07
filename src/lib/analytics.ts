type AmazonClickPayload = {
  slug: string;
  asin: string;
  price: string;
  location: "card" | "ficha" | "vs";
  page: string;
};

function getAsinFromUrl(url: string): string {
  const m = url.match(/\/dp\/([A-Z0-9]{10})/);
  return m ? m[1] : "";
}

export function trackAmazonClick({
  slug,
  price,
  asin,
  location,
  page,
}: AmazonClickPayload) {
  const payload = { slug, asin: asin || "", price, location, page };
  try {
    // Vercel Web Analytics (cookieless) if present
    const va = (window as unknown as { va?: (event: string, data: unknown) => void }).va;
    if (typeof va === "function") {
      // va track is non-blocking
      va("event", { name: "amazon_click", data: payload });
    }
    // GA4 fallback if present (also non-blocking via gtag)
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "amazon_click", payload);
    }
    // Beacon fallback for future custom endpoint — never blocks navigation
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify({ ...payload, ts: Date.now() })], { type: "application/json" });
      // fire-and-forget, ignore result
      navigator.sendBeacon("/api/track", blob);
    }
  } catch {
    // never throw — navigation must not be blocked
  }
}

export function amazonClickHandler(
  game: { slug: string; price: string; amazonUrl: string },
  location: AmazonClickPayload["location"],
  page: string
) {
  return () => {
    trackAmazonClick({
      slug: game.slug,
      price: game.price,
      asin: getAsinFromUrl(game.amazonUrl),
      location,
      page,
    });
  };
}
