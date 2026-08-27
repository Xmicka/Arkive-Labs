import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arkive Labs | The standard for the bold",
  description:
    "Arkive Labs is a founder-led strategy, creative, technology and performance partner for businesses with real substance.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/brand/arkive-mark-black.png",
    shortcut: "/brand/arkive-mark-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
