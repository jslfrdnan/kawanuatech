import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-src",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} - Jasa Pembuatan Website & Aplikasi di Manado`,
  description:
    "Tim developer dari Manado, Sulawesi Utara. Kami bangun website company profile, toko online, aplikasi web, dan aplikasi mobile untuk usaha Anda.",
  openGraph: {
    title: `${site.brand} — Website & Aplikasi untuk Usaha Anda`,
    description:
      "Tim developer lokal Manado. Website dan aplikasi yang rapi, cepat, dan gampang diurus.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
