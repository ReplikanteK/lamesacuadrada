import { put } from "@vercel/blob";

export type ClickEvent = {
  event: "amazon_click";
  timestamp: string;
  slug: string;
  asin: string;
  price: string;
  location: "card" | "ficha" | "vs";
  page: string;
};

export async function saveClick(data: ClickEvent): Promise<void> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.warn("[store] BLOB_READ_WRITE_TOKEN missing — click not persisted", data);
    return;
  }
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const key = `amazon-clicks/${data.timestamp.replace(/[:.]/g, "-")}-${id}.json`;
  await put(key, JSON.stringify(data), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

// Future aggregator — not built now, kept for abstraction boundary
// export async function listClicks() { ... }
