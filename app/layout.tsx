import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snapshot-web-teal.vercel.app"),
  title: {
    default: "SnapShot — AI video analysis for grassroots football",
    template: "%s | SnapShot",
  },
  description:
    "Auto-tracked highlights, tactical clips, and coaching insights from a single phone. Built for grassroots coaches. Launching soon.",
  keywords: [
    "football video analysis",
    "grassroots football",
    "match analysis app",
    "auto-tracked highlights",
    "football coaching app",
    "match recording",
    "AI football tracking",
  ],
  authors: [{ name: "Scott Allen" }],
  creator: "Scott Allen",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://snapshot-web-teal.vercel.app",
    siteName: "SnapShot",
    title: "SnapShot — AI video analysis for grassroots football",
    description:
      "Auto-tracked highlights, tactical clips, and coaching insights from a single phone. Built for grassroots coaches.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SnapShot — AI video analysis for grassroots football",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapShot — AI video analysis for grassroots football",
    description:
      "Auto-tracked highlights, tactical clips, and coaching insights from a single phone. Built for grassroots coaches.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}