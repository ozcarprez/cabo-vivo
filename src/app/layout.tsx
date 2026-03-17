import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cabo Vivo — Tu Aventura, a Tu Manera",
  description:
    "Actividades y experiencias en Cabo San Lucas. Tours en barco, pesca deportiva, aventura extrema, gastronomía y renta de yates. Trato directo por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
