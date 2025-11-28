import type { Metadata } from "next";
import { Crimson_Pro, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "./layout-client";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sev@Wanderlog",
  description: "A calm, reading-focused personal website with a paper-like aesthetic, featuring essays, vocabulary, book notes, and engineering demonstrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-paper-100 dark:bg-zinc-900 text-ink dark:text-ink-dark antialiased font-serif selection:bg-leaf selection:text-white dark:selection:bg-leaf dark:selection:text-white">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

