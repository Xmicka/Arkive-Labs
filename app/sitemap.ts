import type { MetadataRoute } from "next";
import { getPosts } from "../lib/blog";

const BASE = "https://www.arkivelabs.com";

// Regenerate hourly so scheduled posts join the sitemap on their publish day.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/start-a-project", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];
  const pages = routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
  const posts = getPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
