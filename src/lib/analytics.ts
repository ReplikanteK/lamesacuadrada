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
  const payload = {
    event: "amazon_click" as const,
    timestamp: new Date().toISOString(),
    slug,
    asin: asin || "",
    price,
    location,
    page,
  };
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    // Fire-and-forget, never blocks navigation (target=_blank already)
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", blob);
    } else {
      // Fallback keepalive fetch — also non-blocking
      fetch("/api/track", { method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
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
