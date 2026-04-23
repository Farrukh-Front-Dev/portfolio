import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@context/ThemeContext";
import VisitorInput from "@components/common/VisitorInput";
import MagnifierCursor from "@components/ui/MagnifierCursor";
import ErrorBoundary from "../_components/ErrorBoundary";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Farrukh's Portfolio - Full-Stack Developer",
  description: "Experienced full-stack developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: "portfolio, developer, full-stack, react, next.js",
  authors: [{ name: "Farrukh" }],
  openGraph: {
    title: "Farrukh's Portfolio - Full-Stack Developer",
    description: "Experienced full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/PortfolioLogo.png"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Sitemap and RSS */}
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          <ThemeProvider>
            <VisitorInput />
            <div className="hidden md:block">
              <MagnifierCursor />
            </div>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
