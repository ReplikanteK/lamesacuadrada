import { track } from "@vercel/analytics";

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
    // Official Vercel track — queues if script not yet loaded, never blocks navigation
    track("amazon_click", payload);
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
