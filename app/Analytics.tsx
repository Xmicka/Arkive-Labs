"use client";

import { useEffect } from "react";

type GtagParams = Record<string, string | number | boolean>;

function track(name: string, params: GtagParams = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

/**
 * Fires GA4 conversion-style events for the actions that indicate a lead,
 * using delegated listeners so it covers server-rendered links/buttons too.
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest("a");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (href.startsWith("mailto:")) {
        track("email_click", { email: href.replace("mailto:", "") });
      } else if (href.includes("/start-a-project")) {
        track("start_project_click", { location: el.className || "link" });
      } else if (href.includes("blog.arkivelabs.com")) {
        track("blog_click");
      }
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLElement | null;
      if (form && form.tagName === "FORM") {
        track("generate_lead", { form: form.getAttribute("id") || "contact" });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
