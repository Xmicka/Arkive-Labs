"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavTheme = "dark" | "light" | "gold";
type Page = "home" | "start" | "about" | "capabilities" | "packages" | "faq";

const Arrow = () => <span aria-hidden="true">↗</span>;

function pageFromPath(pathname: string): Page {
  if (pathname.startsWith("/capabilities")) return "capabilities";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/faq")) return "faq";
  if (pathname.startsWith("/packages")) return "packages";
  if (pathname.startsWith("/start-a-project")) return "start";
  return "home";
}

/**
 * Persistent, always-fixed header. Rendered once in the root layout -
 * OUTSIDE the page-transition wrapper - so it never gets captured by a
 * transform/filter containing block and stays put while scrolling and
 * across route changes. Theme adapts to the section under it; a subtle
 * scrim appears once the page is scrolled.
 */
export default function Navigation() {
  const pathname = usePathname();
  const page = pageFromPath(pathname);

  const [theme, setTheme] = useState<NavTheme>("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Adapt header theme to the section beneath it; re-scans per route.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
        );
        const probeY = 74;
        const active = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom > probeY;
        });
        setTheme((active?.dataset.navTheme as NavTheme) || "dark");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

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

  const logo =
    theme === "dark"
      ? "/brand/arkive-logo-white.png"
      : "/brand/arkive-logo-black.png";

  return (
    <>
      <header
        className={`site-header nav-${theme}${scrolled ? " is-scrolled" : ""}${
          menuOpen ? " menu-open" : ""
        }`}
      >
        <a
          className="brand"
          href={page === "home" ? "#top" : "/"}
          aria-label="Arkive Labs home"
        >
          <img className="brand-logo" src={logo} alt="Arkive Labs" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={page === "home" ? "#work" : "/#work"}>Work</a>
          <a
            href="/capabilities"
            aria-current={page === "capabilities" ? "page" : undefined}
          >
            Capabilities
          </a>
          <a
            href="/about"
            aria-current={page === "about" ? "page" : undefined}
          >
            About
          </a>
          <a
            href="/packages"
            aria-current={page === "packages" ? "page" : undefined}
          >
            Packages
          </a>
          <a
            href="/faq"
            aria-current={page === "faq" ? "page" : undefined}
          >
            FAQ
          </a>
          <a href="https://blog.arkivelabs.com">Blog</a>
        </nav>

        <a
          className="header-cta"
          href="/start-a-project"
          aria-current={page === "start" ? "page" : undefined}
        >
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
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true">
            <b />
            <b />
          </i>
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
          <a
            href={page === "home" ? "#work" : "/#work"}
            onClick={() => setMenuOpen(false)}
          >
            <span>01</span>
            Work
          </a>
          <a
            href="/capabilities"
            aria-current={page === "capabilities" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>02</span>
            Capabilities
          </a>
          <a
            href="/about"
            aria-current={page === "about" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>03</span>
            About
          </a>
          <a
            href="/packages"
            aria-current={page === "packages" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>04</span>
            Packages
          </a>
          <a
            href="/faq"
            aria-current={page === "faq" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>05</span>
            FAQ
          </a>
          <a href="https://blog.arkivelabs.com" onClick={() => setMenuOpen(false)}>
            <span>06</span>
            Blog
          </a>
        </div>

        <div className="mobile-navigation-footer">
          <p>Strategy · Creative · Technology · Performance</p>
          <a href="/start-a-project" onClick={() => setMenuOpen(false)}>
            Start a project <Arrow />
          </a>
        </div>
      </nav>
    </>
  );
}
