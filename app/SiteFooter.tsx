const Arrow = () => <span aria-hidden="true">↗</span>;

/**
 * Editorial site footer. Rendered once in the root layout, outside the
 * page-transition wrapper and the reveal system — so it is always present
 * and consistent on every page.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer" data-nav-theme="dark">
      <div className="footer-inner">
        <div className="footer-lead">
          <a className="footer-brand" href="/" aria-label="Arkive Labs home">
            <img src="/brand/arkive-logo-white.png" alt="Arkive Labs" />
          </a>
          <p>
            Real business substance, turned into clear market authority —
            strategy, creative, technology and performance moving as one.
          </p>
          <a className="footer-cta" href="/start-a-project">
            Start a project <Arrow />
          </a>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-col-head">Explore</span>
            <a href="/#work">Work</a>
            <a href="/capabilities">Capabilities</a>
            <a href="/studio">Studio</a>
            <a href="/pricing">Pricing</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-head">Studio</span>
            <a href="mailto:admin.arkivelabs@gmail.com">
              admin.arkivelabs@gmail.com
            </a>
            <span>Colombo, Sri Lanka</span>
            <span>Working worldwide</span>
          </div>
          <div className="footer-col">
            <span className="footer-col-head">Follow</span>
            <a
              href="https://www.instagram.com/arkive_labs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/117614171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-base">
        <span>© 2026 Arkive Labs</span>
        <span className="footer-base-tag">One team. Every channel. No limits.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
