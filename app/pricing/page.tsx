import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Services & Pricing | Arkive Labs",
  description:
    "Clear, market-specific pricing for Arkive Labs projects, retainers, bundles and specialist support.",
};

export default function PricingPage() {
  return <PricingClient />;
}