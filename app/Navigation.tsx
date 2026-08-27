"use client";

import { useEffect, useState } from "react";

type NavTheme = "dark" | "light" | "gold";

const Arrow = () => <span aria-hidden="true">↗</span>;
const pricingSite = "https://arkive-pricing.foggy-melon-9291.chatgpt.site";

export default function Navigation({ page = "home" }: { page?: "home" | "start" | "studio" | "capabilities" }) {
  const [theme, setTheme] = useState<NavTheme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
    );

    let frame = 0;
    const updateTheme = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const probeY = 96;
        const active = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom > probeY;
        });

        if (active) {
          setTheme((active.dataset.navTheme as NavTheme) || "dark");
        }
      });
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const logo = theme === "dark"
    ? "/brand/arkive-logo-white.png"
    : "/brand/arkive-logo-black.png";

  return (
    <>
      <header className={`site-header nav-${theme}${menuOpen ? " menu-open" : ""}`}>
        <a className="brand" href={page === "home" ? "#top" : "/"} aria-label="Arkive Labs home">
          <img className="brand-logo" src={logo} alt="Arkive Labs" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={page === "home" ? "#work" : "/#work"}>Work</a>
          <a href="/capabilities" aria-current={page === "capabilities" ? "page" : undefined}>Capabilities</a>
          <a href="/studio" aria-current={page === "studio" ? "page" : undefined}>Studio</a>
          <a href={pricingSite}>Pricing</a>
        </nav>
        <a className="header-cta" href="/start-a-project" aria-current={page === "start" ? "page" : undefined}>
          Start a project <Arrow />
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Return" : "Explore"}</span>
          <i aria-hidden="true"><b /><b /></i>
        </button>
      </header>
      <nav
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-kicker">
          <span>Inside Arkive</span>
          <p>Follow the thinking behind the work.</p>
        </div>
        <div className="mobile-navigation-links">
          <a href={page === "home" ? "#work" : "/#work"} onClick={() => setMenuOpen(false)}><span>01</span>Work</a>
          <a href="/capabilities" aria-current={page === "capabilities" ? "page" : undefined} onClick={() => setMenuOpen(false)}><span>02</span>Capabilities</a>
          <a href="/studio" aria-current={page === "studio" ? "page" : undefined} onClick={() => setMenuOpen(false)}><span>03</span>Studio</a>
          <a href={pricingSite} onClick={() => setMenuOpen(false)}><span>04</span>Pricing</a>
        </div>
        <div className="mobile-navigation-footer">
          <p>Strategy · Creative · Technology · Performance</p>
          <a href="/start-a-project" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </div>
      </nav>
    </>
  );
}
