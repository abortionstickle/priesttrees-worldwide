import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Priest Trees Worldwide | Forgotten Classics. Non-Native. Texas.",
    template: "%s | Priest Trees Worldwide",
  },
  description:
    "Rare and unusual trees for discerning homeowners. Monkey puzzle, baobab, desert willow, and more — matched to your climate zone. Based in Texas.",
  keywords: ["rare trees", "unusual trees", "non-native trees", "Texas nursery", "monkey puzzle tree", "baobab", "USDA hardiness zones"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
