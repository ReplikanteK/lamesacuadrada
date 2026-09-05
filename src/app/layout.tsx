import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ComparaHosting - Mejor Hosting WordPress España 2026 | Comparativa Real",
  description: "Comparativa independiente de hosting WordPress en España 2026: Hostinger vs Raiola vs LucusHost vs Webempresa. Precios reales con IVA, test de velocidad y soporte.",
  keywords: ["mejor hosting wordpress españa", "hosting wordpress barato", "hostinger vs raiola", "hosting woocommerce"],
  openGraph: {
    title: "ComparaHosting - Mejor Hosting WordPress España 2026",
    description: "Comparativa real sin humo: precios, rendimiento y soporte.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">{children}</body>
    </html>
  );
}
