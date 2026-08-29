import type { Metadata } from "next";
import "./globals.css";
import Craft from "./Craft";
import ScrollFX from "./ScrollFX";
import Navigation from "./Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkivelabs.com"),
  title: "Arkive Labs | The standard for the bold",
  description:
    "Arkive Labs turns real business substance into clear market authority — strategy, creative, technology and performance that move as one. Founder-led, research-first.",
  keywords: [
    "Arkive Labs",
    "brand strategy",
    "creative studio",
    "web development",
    "AI automation",
    "performance marketing",
    "Sri Lanka",
  ],
  authors: [
    { name: "Yohan Wickramasinghe" },
    { name: "Akesh Chandrasiri" },
  ],
  openGraph: {
    title: "Arkive Labs | The standard for the bold",
    description:
      "Strategy, creative, technology and performance that move as one. Founder-led. Research-first. Outcome-obsessed.",
    url: "https://arkivelabs.com",
    siteName: "Arkive Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkive Labs | The standard for the bold",
    description:
      "Strategy, creative, technology and performance that move as one.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arkive Labs",
  url: "https://arkivelabs.com",
  description:
    "Founder-led strategy, creative, technology and performance studio.",
  foundingDate: "2025",
  founders: [
    { "@type": "Person", name: "Yohan Wickramasinghe" },
    { "@type": "Person", name: "Akesh Chandrasiri" },
  ],
  address: { "@type": "PostalAddress", addressCountry: "LK" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Craft />
        <ScrollFX />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
