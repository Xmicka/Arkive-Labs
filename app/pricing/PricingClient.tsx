"use client";

import { useEffect, useState } from "react";

type Market = "sl" | "intl";
type Price = {
  sl: string;
  intl: string;
};

const projectServices: Array<{
  category: string;
  name: string;
  description: string;
  price: Price;
  timeline: string;
}> = [
  {
    category: "Web",
    name: "Landing Page",
    description:
      "Strategy-led design, persuasive copywriting, mobile-optimised build, conversion tracking and analytics setup. One full revision round. Built to convert from the first visit.",
    price: { sl: "Rs. 35,000 to 75,000", intl: "$900 to $2,200" },
    timeline: "5 to 10 days",
  },
  {
    category: "Web",
    name: "Business Website",
    description:
      "A bespoke 5 to 8 page experience with SEO architecture built in from the ground up. Fast, responsive, with integrated contact systems, analytics and two full revision rounds.",
    price: { sl: "Rs. 75,000 to 175,000", intl: "$2,200 to $5,500" },
    timeline: "2 to 3 weeks",
  },
  {
    category: "Web",
    name: "E-Commerce Store",
    description:
      "Full product catalogue, payment gateway, mobile-first UX, inventory architecture and delivery logic. SEO-ready from launch. Built to sell from day one.",
    price: { sl: "Rs. 175,000 to 400,000", intl: "$5,000 to $12,000" },
    timeline: "3 to 6 weeks",
  },
  {
    category: "Web",
    name: "Custom Web App",
    description:
      "Booking portals, membership systems, CRM integrations, custom databases and API-connected platforms. Fully scoped after a dedicated discovery session.",
    price: { sl: "Rs. 400,000+", intl: "$12,000+" },
    timeline: "6 to 16 weeks",
  },
  {
    category: "Branding",
    name: "Full Brand Identity",
    description:
      "Logo suite, colour system, typographic hierarchy, tone of voice, brand narrative and a complete asset kit covering every meaningful touchpoint.",
    price: { sl: "Rs. 95,000 to 280,000", intl: "$3,000 to $9,000" },
    timeline: "2 to 4 weeks",
  },
  {
    category: "Branding",
    name: "Brand Refresh",
    description:
      "Strategic modernisation of an existing identity. Updated logo variants, refined visual language and revised guidelines. Recognition preserved, relevance restored.",
    price: { sl: "Rs. 50,000 to 115,000", intl: "$1,500 to $3,800" },
    timeline: "1 to 2 weeks",
  },
  {
    category: "SEO",
    name: "Audit & Roadmap",
    description:
      "Comprehensive technical, on-page and competitor gap analysis, delivered as a prioritised 90-day action plan for your team or ours to execute.",
    price: { sl: "Rs. 30,000 to 65,000", intl: "$800 to $2,000" },
    timeline: "3 to 5 days",
  },
  {
    category: "Paid Media",
    name: "Campaign Setup",
    description:
      "Full-funnel campaign architecture, audience segmentation, ad copy, creative briefing and tracking setup across Google and Meta.",
    price: { sl: "Rs. 40,000 to 90,000", intl: "$1,200 to $3,000" },
    timeline: "3 to 7 days",
  },
  {
    category: "Creative",
    name: "Creative Batch",
    description:
      "10 to 25 ad creatives, social assets or campaign visuals. Brief-driven, on-brand and ready for structured testing from the moment they go live.",
    price: { sl: "Rs. 22,000 to 70,000", intl: "$600 to $2,000" },
    timeline: "4 to 7 days",
  },
  {
    category: "Strategy",
    name: "90-min Deep Dive",
    description:
      "A focused senior strategy session with a prioritised 90-day growth plan, tool-stack recommendation and clarity on the strongest opportunity.",
    price: { sl: "Rs. 18,000 flat", intl: "$500 flat" },
    timeline: "Same week",
  },
];

const retainers: Array<{
  name: string;
  price: Price;
  description: string;
  items: string[];
  featured?: boolean;
}> = [
  {
    name: "Ignite",
    price: { sl: "Rs. 55,000", intl: "$1,800" },
    description:
      "For businesses establishing a consistent, professional market signal from day one.",
    items: [
      "8 premium social creatives per month",
      "Foundational SEO monitoring and on-page optimisation",
      "One paid ad campaign, fully managed",
      "Monthly performance report with clear next steps",
    ],
  },
  {
    name: "Ascend",
    price: { sl: "Rs. 110,000", intl: "$3,800" },
    description:
      "For brands scaling with SEO, paid media and content operating as one connected system.",
    items: [
      "16 static and motion creatives per month",
      "Full technical, on-page and off-page SEO management",
      "Up to 3 paid campaigns across Meta and Google",
      "Landing page copy and continuous optimisation",
      "Monthly senior strategy call",
      "Competitor intelligence and performance benchmarking",
    ],
    featured: true,
  },
  {
    name: "Sovereign",
    price: { sl: "Rs. 220,000", intl: "$7,500" },
    description:
      "A complete marketing operation for brands competing at the top of their category.",
    items: [
      "Unlimited creatives within the agreed brief",
      "Advanced SEO and content clusters",
      "All-platform paid media with continuous optimisation",
      "Monthly web updates and conversion optimisation",
      "Full content calendar and blog production",
      "Bi-weekly strategy sessions",
      "Quarterly brand and performance audit",
    ],
  },
];

const bundles: Array<{
  name: string;
  build: Price;
  monthly: Price;
  description: string;
  items: string[];
  featured?: boolean;
}> = [
  {
    name: "Web + Care",
    build: { sl: "Rs. 75,000", intl: "$2,400" },
    monthly: { sl: "+ Rs. 14,000", intl: "+ $450" },
    description:
      "A considered website followed by dependable ongoing care, security and performance support.",
    items: [
      "5-page bespoke business website",
      "Monthly security patches and backups",
      "One content or design update per month",
      "Uptime and performance monitoring",
      "Annual domain and hosting liaison",
    ],
  },
  {
    name: "Web + SEO",
    build: { sl: "Rs. 95,000", intl: "$2,900" },
    monthly: { sl: "+ Rs. 48,000", intl: "+ $1,600" },
    description:
      "A conversion-focused website on a solid SEO foundation, grown through search optimisation that compounds.",
    items: [
      "8-page website with full SEO architecture",
      "Monthly on-page and technical SEO",
      "Keyword tracking and ranking reports",
      "One long-form blog post per month",
      "Full site maintenance included",
    ],
    featured: true,
  },
  {
    name: "Web + SEO + Ads",
    build: { sl: "Rs. 115,000", intl: "$3,500" },
    monthly: { sl: "+ Rs. 110,000", intl: "+ $3,600" },
    description:
      "A complete growth engine connecting a high-performance website, organic authority and paid reach.",
    items: [
      "Full website build with SEO architecture",
      "Ongoing SEO management",
      "Two paid campaigns across Meta and Google",
      "8 monthly ad creatives",
      "Monthly strategy call",
      "Full site maintenance",
    ],
  },
];

const addOns: Array<{
  name: string;
  description: string;
  price: Price;
}> = [
  {
    name: "Email Marketing Management",
    description:
      "Automated sequences, broadcast campaigns, audience segmentation, testing and deliverability management.",
    price: { sl: "Rs. 28,000", intl: "$900" },
  },
  {
    name: "Additional Creative Volume",
    description:
      "An extra 15 static or animated social and ad creatives produced to your existing brief and standards.",
    price: { sl: "Rs. 18,000", intl: "$600" },
  },
  {
    name: "Short-Form Video Production",
    description:
      "Four scripted, filmed and edited Reels or TikToks built for native platform performance.",
    price: { sl: "Rs. 45,000", intl: "$1,400" },
  },
  {
    name: "Conversion Rate Optimisation",
    description:
      "Heatmap analysis, session recordings, test hypotheses and implementation on high-traffic pages.",
    price: { sl: "Rs. 32,000", intl: "$1,000" },
  },
  {
    name: "Influencer & UGC Sourcing",
    description:
      "Creator identification, brief development, approval and relationship management. Creator fees stay separate.",
    price: { sl: "Rs. 25,000", intl: "$800" },
  },
  {
    name: "Dedicated Account Strategist",
    description:
      "A named senior strategist with weekly alignment, proactive intelligence and same-day escalation support.",
    price: { sl: "Rs. 22,000", intl: "$700" },
  },
];

const hourly: Array<{
  name: string;
  description: string;
  price: Price;
}> = [
  {
    name: "Strategy & Consulting",
    description:
      "MarTech audits, campaign architecture, brand direction and growth roadmaps.",
    price: { sl: "Rs. 8,500", intl: "$55" },
  },
  {
    name: "Web Development",
    description:
      "Front-end builds, WordPress, landing pages, performance work and integrations.",
    price: { sl: "Rs. 5,500", intl: "$38" },
  },
  {
    name: "SEO",
    description:
      "Technical audits, keyword research, on-page optimisation and link strategy.",
    price: { sl: "Rs. 4,500", intl: "$30" },
  },
  {
    name: "Creative Design",
    description:
      "Ad creative, social assets, brand collateral, motion and visual direction.",
    price: { sl: "Rs. 4,000", intl: "$28" },
  },
  {
    name: "Paid Ads Management",
    description:
      "Meta, Google and TikTok setup, audience architecture, bidding and optimisation.",
    price: { sl: "Rs. 5,000", intl: "$35" },
  },
  {
    name: "Copywriting",
    description:
      "Conversion copy, website content, email sequences, blogs and campaign narratives.",
    price: { sl: "Rs. 3,500", intl: "$25" },
  },
];

const navItems = [
  ["projects", "Projects"],
  ["retainers", "Retainers"],
  ["bundles", "Bundles"],
  ["addons", "Add-ons"],
  ["hourly", "Hourly"],
];

const PriceValue = ({
  value,
  market,
  suffix,
}: {
  value: Price;
  market: Market;
  suffix?: string;
}) => (
  <span className="price-value" key={`${market}-${value[market]}`}>
    {value[market]} {suffix && <small>{suffix}</small>}
  </span>
);

const SectionHeader = ({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  description: string;
}) => (
  <div className="pricing-section-heading">
    <div className="section-index">
      <span>{number}</span>
      <p>{label}</p>
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default function PricingClient() {
  const [market, setMarket] = useState<Market>("sl");
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pricing-page">

      <section
        className="pricing-hero"
        id="top"
        data-nav-theme="dark"
        data-hero
      >
        <div className="pricing-grid" aria-hidden="true" />

        <div className="pricing-hero-copy">
          <p className="eyebrow">
            Transparent investment <span>•</span> Measurable returns
          </p>

          <h1>
            Work built to move markets.
            <br />
            <em>Priced with clarity.</em>
          </h1>

          <p className="pricing-hero-lead">
            Every engagement is structured around one principle: the
            investment should create more value than it costs.
          </p>

          <div
            className="market-control"
            role="group"
            aria-label="Select pricing market"
          >
            <button
              className={market === "sl" ? "active" : ""}
              onClick={() => setMarket("sl")}
              aria-pressed={market === "sl"}
            >
              Sri Lanka
            </button>

            <button
              className={market === "intl" ? "active" : ""}
              onClick={() => setMarket("intl")}
              aria-pressed={market === "intl"}
            >
              International
            </button>
          </div>

          <p className="market-label">
            Viewing prices in{" "}
            {market === "sl"
              ? "Sri Lankan Rupees (LKR)"
              : "US Dollars (USD)"}
          </p>
        </div>

        <div className="pricing-orbit" aria-hidden="true">
          <div className="pricing-orbit-ring ring-a" />
          <div className="pricing-orbit-ring ring-b" />

          <div className="pricing-orbit-core">
            <img src="/brand/arkive-mark-black.png" alt="" />
          </div>
        </div>

        <div className="pricing-principles">
          <span>Scope locked</span>
          <span>Price visible</span>
          <span>Outcome first</span>
        </div>
      </section>

      <nav
        className="pricing-jump-nav"
        aria-label="Pricing sections"
      >
        <div>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        className="pricing-section pricing-projects"
        id="projects"
        data-nav-theme="light"
      >
        <SectionHeader
          number="01"
          label="One-off projects"
          title={
            <>
              Start with exactly
              <br />
              <em>what you need.</em>
            </>
          }
          description="No retainer required. Every project starts with focused discovery, a clear scope, an agreed investment and a visible timeline."
        />

        <div
          className="project-table"
          role="table"
          aria-label="One-off project pricing"
        >
          <div
            className="project-row project-table-head"
            role="row"
          >
            <span>Service</span>
            <span>What we deliver</span>
            <span>Investment</span>
            <span>Timeline</span>
          </div>

          {projectServices.map((service, index) => (
            <article
              className="project-row"
              role="row"
              key={service.name}
            >
              <div>
                <span className="row-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="service-category">
                  {service.category}
                </p>

                <h3>{service.name}</h3>
              </div>

              <p>{service.description}</p>

              <strong>
                <PriceValue
                  value={service.price}
                  market={market}
                />
              </strong>

              <span className="timeline">
                {service.timeline}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        className="pricing-section pricing-dark"
        id="retainers"
        data-nav-theme="dark"
      >
        <SectionHeader
          number="02"
          label="Monthly retainers"
          title={
            <>
              Growth is not a campaign.
              <br />
              <em>It is a discipline.</em>
            </>
          }
          description="Ongoing strategy, creative production, media buying and optimisation under one accountable engagement. Ad spend stays in your platform account with zero markup."
        />

        <div className="plan-grid">
          {retainers.map((plan, index) => (
            <article
              className={`plan-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              <div className="plan-top">
                <span>{String(index + 1).padStart(2, "0")}</span>

                {plan.featured && <b>Most retained</b>}
              </div>

              <p className="plan-type">Monthly system</p>

              <h3>{plan.name}</h3>

              <div className="plan-price">
                <PriceValue
                  value={plan.price}
                  market={market}
                  suffix="/ month"
                />
              </div>

              <p className="plan-description">
                {plan.description}
              </p>

              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <i>✦</i>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing-notes">
          <p>
            <strong>Commitment rewards.</strong> Save 10% with a
            6-month commitment or 15% with 12 months. The saving
            applies to our fee, never ad spend.
          </p>

          <p>
            <strong>Ad spend stays yours.</strong> Meta, Google and
            TikTok budgets are paid directly by you. We manage the
            strategy and execution at zero markup.
          </p>
        </div>
      </section>

      <section
        className="pricing-section pricing-bundles"
        id="bundles"
        data-nav-theme="light"
      >
        <SectionHeader
          number="03"
          label="Signature bundles"
          title={
            <>
              Build it properly.
              <br />
              <em>Then grow it.</em>
            </>
          }
          description="A best-in-class website paired with an ongoing growth engine. Build cost is reduced when the work continues as one connected system."
        />

        <div className="bundle-grid">
          {bundles.map((bundle, index) => (
            <article
              className={`bundle-card ${
                bundle.featured ? "featured" : ""
              }`}
              key={bundle.name}
            >
              <div className="bundle-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {bundle.featured && (
                <span className="bundle-badge">
                  Signature pick
                </span>
              )}

              <h3>{bundle.name}</h3>

              <div className="bundle-investment">
                <PriceValue
                  value={bundle.build}
                  market={market}
                />
                <small>one-time build</small>
              </div>

              <div className="bundle-monthly">
                <PriceValue
                  value={bundle.monthly}
                  market={market}
                  suffix="/ month"
                />
              </div>

              <p>{bundle.description}</p>

              <ul>
                {bundle.items.map((item) => (
                  <li key={item}>
                    <i>✦</i>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing-notes pricing-notes-gold">
          <p>
            <strong>Bundle advantage.</strong> Pair a web build
            with a 6-month retainer and remove{" "}
            <PriceValue
              value={{
                sl: "Rs. 12,000",
                intl: "$350",
              }}
              market={market}
            />{" "}
            from the build.
          </p>

          <p>
            <strong>Domain and hosting.</strong> Procured and
            managed at cost, with zero markup. Typical annual
            cost is{" "}
            <PriceValue
              value={{
                sl: "Rs. 13,000 to 25,000",
                intl: "$40 to $80",
              }}
              market={market}
            />
            .
          </p>
        </div>
      </section>

      <section
        className="pricing-section pricing-addons"
        id="addons"
        data-nav-theme="light"
      >
        <SectionHeader
          number="04"
          label="Retainer add-ons"
          title={
            <>
              Extend the system
              <br />
              <em>where it matters.</em>
            </>
          }
          description="Add a targeted specialist to any active retainer when a specific channel needs deeper, dedicated attention."
        />

        <div className="addon-list">
          {addOns.map((addOn, index) => (
            <article className="addon-row" key={addOn.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{addOn.name}</h3>
                <p>{addOn.description}</p>
              </div>

              <strong>
                <PriceValue
                  value={addOn.price}
                  market={market}
                  suffix="/ month"
                />
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section
        className="pricing-section pricing-hourly"
        id="hourly"
        data-nav-theme="dark"
      >
        <SectionHeader
          number="05"
          label="Hourly engagements"
          title={
            <>
              The right specialist.
              <br />
              <em>For the exact task.</em>
            </>
          }
          description="For focused work outside a package, from an audit or consultation to specialist execution alongside your internal team."
        />

        <div className="hourly-grid">
          {hourly.map((role, index) => (
            <article className="hourly-card" key={role.name}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{role.name}</h3>

              <div>
                <PriceValue
                  value={role.price}
                  market={market}
                  suffix="/ hour"
                />
              </div>

              <p>{role.description}</p>
            </article>
          ))}
        </div>

        <div className="pricing-notes">
          <p>
            <strong>Hour blocks.</strong> Buy 10 hours at 5% off
            or 20 hours at 10% off. Blocks roll over and never
            expire.
          </p>

          <p>
            <strong>Minimum engagement.</strong> Two hours per
            session. Consultations are billed in full regardless
            of session length.
          </p>
        </div>
      </section>

      <section className="pricing-cta" data-nav-theme="light">
        <div className="contact-topline">
          <span>Not sure where to start?</span>
          <span>We will find the right shape.</span>
        </div>

        <h2>
          Bring us the challenge.
          <br />
          <em>We will map the route.</em>
        </h2>

        <div className="pricing-cta-bottom">
          <p>
            Every engagement starts with a conversation about the
            business, the constraint and what needs to move next.
          </p>

          <a
            className="contact-button"
            href="/start-a-project"
          >
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer data-nav-theme="dark">
        <a className="brand footer-brand" href="/">
          <img
            className="brand-logo footer-logo"
            src="/brand/arkive-logo-white.png"
            alt="Arkive Labs"
          />
        </a>

        <p>
          Strategy · Creative · Technology · Performance
        </p>

        <div>
          <a href="#top">Back to top ↑</a>
          <span>© 2026 Arkive Labs</span>
        </div>
      </footer>
    </main>
  );
}