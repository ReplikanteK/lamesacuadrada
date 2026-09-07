import { NextRequest, NextResponse } from "next/server";
import { saveClick, type ClickEvent } from "@/lib/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
    }
    const { slug, asin, price, location, page, event, timestamp } = body as Partial<ClickEvent> & { event?: string };

    // Minimal validation — only persist amazon_click
    if (event !== "amazon_click") {
      return NextResponse.json({ ok: false, error: "invalid event" }, { status: 400 });
    }
    if (!slug || typeof slug !== "string" || !location || !["card", "ficha", "vs"].includes(location as string)) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    const data: ClickEvent = {
      event: "amazon_click",
      timestamp: typeof timestamp === "string" ? timestamp : new Date().toISOString(),
      slug: String(slug),
      asin: typeof asin === "string" ? asin : "",
      price: typeof price === "string" ? price : "",
      location: location as ClickEvent["location"],
      page: typeof page === "string" ? page : "",
    };

    try {
      await saveClick(data);
    } catch (e) {
      console.error("[api/track] saveClick failed", e);
      // Fail safe: still return 200 so sendBeacon never retries / blocks
      return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
    }

    return NextResponse.json({ ok: true, persisted: true }, { status: 200 });
  } catch (e) {
    console.error("[api/track] unexpected", e);
    return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
  }
}

// No GET aggregator yet — will be added with auth when needed
export async function GET() {
  return NextResponse.json({ ok: false, error: "use POST" }, { status: 405 });
}
