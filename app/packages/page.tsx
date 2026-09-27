import type { Metadata } from "next";
import HeroField from "../HeroField";

export const metadata: Metadata = {
  title: "Packages | Arkive Labs",
  description:
    "Ways to work with Arkive Labs — engagements shaped around your ambition, from establishing your first signal to running a category-leading marketing operation.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const packages: Array<{
  name: string;
  tagline: string;
  promise: string;
  items: string[];
  cta: string;
  featured?: boolean;
}> = [
  {
    name: "Ignite",
    tagline: "Establish your signal.",
    promise:
      "For businesses ready to show up with intention. We put a clean, consistent presence into the market and start turning attention into momentum.",
    items: [
      "A steady stream of premium social creative",
      "Foundational SEO, monitored and optimised",
      "One paid campaign, fully managed",
      "Clear monthly reporting with real next steps",
    ],
    cta: "Start with Ignite",
  },
  {
    name: "Ascend",
    tagline: "Build real momentum.",
    promise:
      "For brands ready to scale. Strategy, SEO, paid media and content stop competing and start compounding — one connected system pulling in the same direction.",
    items: [
      "Static and motion creative every month",
      "Full technical, on-page and off-page SEO",
      "Multi-platform paid campaigns across Meta and Google",
      "Landing pages written and continuously optimised",
      "A senior strategy call every month",
      "Competitor intelligence and benchmarking",
    ],
    cta: "Scale with Ascend",
    featured: true,
  },
  {
    name: "Sovereign",
    tagline: "Own your category.",
    promise:
      "A complete marketing operation for brands competing at the very top. Everything moves as one, tuned relentlessly toward the outcomes that actually matter.",
    items: [
      "Creative on demand, within your brief",
      "Advanced SEO and content clusters",
      "All-platform paid media, continuously optimised",
      "Monthly web and conversion improvements",
      "A full content calendar and blog production",
      "Strategy every fortnight",
      "Quarterly brand and performance audits",
    ],
    cta: "Command with Sovereign",
  },
];

const focused = [
  ["Websites & digital experiences", "Presence that makes the first impression carry the weight of the business."],
  ["Brand identity & refresh", "A visual system and voice the market recognises and trusts."],
  ["SEO audits & roadmaps", "A clear, prioritised path to being found by the people who matter."],
  ["Campaign & creative sprints", "Focused bursts of creative, built to test and to move."],
];

export default function Packages() {
  return (
    <main className="packages-page">
      <section
        className="packages-hero"
        id="top"
        data-nav-theme="dark"
        data-hero
      >
        <HeroField />
        <div className="pricing-hero-veil" aria-hidden="true" />
        <div className="pricing-grid" aria-hidden="true" />

        <div className="packages-hero-copy">
          <p className="eyebrow">
            Ways to work together <span>•</span> Built around momentum
          </p>
          <h1>
            Engagements shaped
            <br />
            around your <em>ambition.</em>
          </h1>
          <p className="packages-hero-lead">
            Whether you are finding your first signal or scaling a
            category-leading operation, there is a way in that fits. Each
            package is a starting point — we shape the details around what you
            actually need.
          </p>
          <div className="packages-hero-actions">
            <a className="button button-gold" href="/start-a-project" data-magnetic>
              Start a conversation <Arrow />
            </a>
            <a className="button button-outline" href="#packages" data-magnetic>
              See the ways in <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="pricing-principles">
          <span>No templates</span>
          <span>Founder-led</span>
          <span>Outcome first</span>
        </div>
      </section>

      <section className="package-section" id="packages" data-nav-theme="light">
        <div className="section-heading light-heading">
          <div className="section-index">
            <span>01</span>
            <p>Ongoing partnerships</p>
          </div>
          <h2>Three ways to grow with us.</h2>
          <p className="heading-note">
            Retained engagements for brands that want a partner in the work, not
            a vendor on the sidelines. Pick the one that sounds like where you
            are — we will refine it together.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => (
            <article
              className={`package-card${pkg.featured ? " featured" : ""}`}
              key={pkg.name}
            >
              {pkg.featured && <span className="package-flag">Most chosen</span>}
              <div className="package-head">
                <h3>{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>
              </div>
              <p className="package-promise">{pkg.promise}</p>
              <ul className="package-items">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="package-cta" href="/start-a-project">
                {pkg.cta} <Arrow />
              </a>
            </article>
          ))}
        </div>

        <p className="package-note">
          Investment is shaped to your goals and shared on our first call — no
          rigid tiers, no pressure. Just the right scope for what you are trying
          to move.
        </p>
      </section>

      <section className="focused-section" data-nav-theme="dark">
        <div className="section-heading dark-heading">
          <div className="section-index">
            <span>02</span>
            <p>Focused engagements</p>
          </div>
          <h2>Or start with one clear project.</h2>
          <p className="heading-note">
            Sometimes momentum begins with a single, well-made thing. We take on
            focused projects with the same care as the long game.
          </p>
        </div>
        <div className="focused-grid">
          {focused.map(([title, desc], i) => (
            <article className="focused-item" key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="packages-cta" data-nav-theme="gold">
        <p className="eyebrow">Not sure which fits?</p>
        <h2>
          Tell us where you are headed.
          <br />
          We will point you to the <em>right start.</em>
        </h2>
        <a className="contact-button" href="/start-a-project">
          Start a conversation <Arrow />
        </a>
      </section>
    </main>
  );
}
