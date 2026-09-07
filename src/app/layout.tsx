import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lamesacuadrada.vercel.app"),
  title: "La Mesa Cuadrada - Mejores Juegos de Mesa 2026 | Comparativas y Ofertas Amazon",
  description: "Comparativas honestas de juegos de mesa 2026: Catan, Ticket to Ride, Carcassonne y más. Filtra por jugadores, edad y duración. Precios Amazon Sep 2026 orientativos y enlaces afiliados transparentes.",
  keywords: ["mejores juegos de mesa", "juegos de mesa 2 jugadores", "juegos familiares", "catan vs ticket to ride", "juegos de mesa amazon", "la mesa cuadrada"],
  verification: { google: "6yfZaTPJGnEE54GkhDnsWBf_qB5-2ov3Mdeuqs2G5ec" },
  openGraph: {
    title: "La Mesa Cuadrada - Mejores Juegos de Mesa 2026",
    description: "Comparativas reales sin humo: jugadores, duración, edad y precio. Con enlaces afiliados Amazon transparentes.",
    locale: "es_ES",
    type: "website",
    url: "https://lamesacuadrada.vercel.app",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "La Mesa Cuadrada — Mejores juegos de mesa 2026: comparativa real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Mesa Cuadrada - Mejores Juegos de Mesa 2026",
    description: "Comparativas reales sin humo: jugadores, duración, edad y precio.",
    images: ["/og-home.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
