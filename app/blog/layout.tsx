import type { Metadata } from "next";
import Script from "next/script";
import { AD_CLIENT } from "../../lib/ads";

/*
  Ads run only on the blog, where the publisher content lives. The agency
  pages (home, capabilities, packages, contact) stay ad-free.
*/
export const metadata: Metadata = {
  other: { "google-adsense-account": AD_CLIENT },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="adsense"
        async
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
      />
    </>
  );
}
