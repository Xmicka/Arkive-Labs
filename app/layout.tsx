import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Analytics from "./Analytics";
import Craft from "./Craft";
import ScrollFX from "./ScrollFX";
import Navigation from "./Navigation";
import SiteFooter from "./SiteFooter";

const SITE = "https://www.arkivelabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Arkive Labs | The standard for the bold",
  description:
    "Arkive Labs turns real business substance into clear market authority: strategy, creative, technology and performance that move as one. Founder-led, research-first.",
  alternates: { canonical: "/" },
  keywords: [
    "Arkive Labs",
    "marketing agency Sri Lanka",
    "brand strategy",
    "creative studio",
    "web development",
    "AI automation",
    "performance marketing",
    "SEO",
    "founder-led marketing studio",
    "Sri Lanka",
  ],
  authors: [
    { name: "Akesh Chandrasiri" },
    { name: "Yohan Wickramasinghe" },
  ],
  openGraph: {
    title: "Arkive Labs | The standard for the bold",
    description:
      "Strategy, creative, technology and performance that move as one. Founder-led. Research-first. Outcome-obsessed.",
    url: SITE,
    siteName: "Arkive Labs",
    locale: "en_US",
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
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE}/#organization`,
  name: "Arkive Labs",
  alternateName: "Arkive",
  url: SITE,
  logo: `${SITE}/brand/arkive-logo-white.png`,
  image: `${SITE}/brand/arkive-logo-white.png`,
  slogan: "The standard for the bold.",
  description:
    "Founder-led marketing and technology studio. Strategy, creative, technology and performance that move as one.",
  foundingDate: "2025",
  email: "info@arkivelabs.com",
  founders: [
    {
      "@type": "Person",
      name: "Akesh Chandrasiri",
      jobTitle: "Co-Founder, AI, Engineering & Development",
    },
    {
      "@type": "Person",
      name: "Yohan Wickramasinghe",
      jobTitle: "Co-Founder, Strategy & Creative",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: [
    "Brand strategy",
    "Positioning",
    "Web design and development",
    "AI automation",
    "Performance marketing",
    "Search engine optimization",
    "Content systems",
    "Creative direction",
  ],
  sameAs: [
    "https://www.linkedin.com/company/117614171/",
    "https://www.instagram.com/arkive_labs/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@arkivelabs.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategy and positioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital experiences and web development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content systems and creative" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance and growth marketing" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Arkive Labs",
  inLanguage: "en",
  publisher: { "@id": `${SITE}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — ownership verification + ad serving */}
        <meta name="google-adsense-account" content="ca-pub-6711834888023238" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6711834888023238"
          crossOrigin="anonymous"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Mark JS on before paint so the hero entrance has no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <Craft />
        <ScrollFX />
        <Navigation />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-EWTVMEY1RL" />
    </html>
  );
}
