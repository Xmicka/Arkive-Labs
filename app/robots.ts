import type { MetadataRoute } from "next";

// Explicitly welcome search + answer-engine (AI) crawlers. Everything is
// allowed; listing the known AI agents by name makes intent unambiguous.
const AI_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: "https://www.arkivelabs.com/sitemap.xml",
    host: "https://www.arkivelabs.com",
  };
}
