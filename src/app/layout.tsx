import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import { AmbientBackground } from "@/components/ambient-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LiveTicker } from "@/components/live-ticker";
import { StickyDemoBar } from "@/components/sticky-demo-bar";
import { OrbisAssistant } from "@/components/orbis-assistant";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orbis FactoryOS | Orbis AI Technologies",
    template: "%s | Orbis FactoryOS",
  },
  description:
    "Orbis FactoryOS is the AI-native operating system for manufacturing — connected modules and a Factory AI Copilot on one plant model.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <AmbientBackground />
        <SiteHeader />
        <LiveTicker />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <StickyDemoBar />
        <OrbisAssistant />
      </body>
    </html>
  );
}
