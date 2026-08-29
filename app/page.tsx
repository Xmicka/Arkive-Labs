import Navigation from "./Navigation";
import HeroCanvas from "./HeroCanvas";
import RotatingWord from "./RotatingWord";

const Arrow = () => <span aria-hidden="true">↗</span>;

const capabilities = [
  {
    number: "01",
    title: "Strategy & positioning",
    description:
      "We find the clearest place for the business to stand, the story buyers need to understand and the evidence that makes it believable.",
    tags: ["Research", "Market position", "Messaging", "Go-to-market"],
  },
  {
    number: "02",
    title: "Digital experiences",
    description:
      "We turn complex offers into digital experiences that feel considered, move quickly and make the next decision obvious.",
    tags: ["Web strategy", "UX direction", "Web development", "Conversion"],
  },
  {
    number: "03",
    title: "Content systems",
    description:
      "We build repeatable systems that turn expertise, proof and perspective into content the market can recognise and trust.",
    tags: ["Creative direction", "Social", "SEO", "Campaigns"],
  },
  {
    number: "04",
    title: "Performance & growth",
    description:
      "We connect creative to measurement, test the right variables and compound what creates genuine commercial movement.",
    tags: ["Paid media", "Analytics", "Automation", "Optimisation"],
  },
];

const process = [
  ["01", "Discover", "We study the business, buyer, category and current signal before prescribing output."],
  ["02", "Define", "We identify the sharpest opportunity and build one clear strategic direction around it."],
  ["03", "Build", "Strategy, creative and technology move together under one accountable founding team."],
  ["04", "Measure", "We learn from real response, improve the system and scale what earns attention."],
];

export default function Home() {
  return (
    <main>
      <Navigation />

      <section className="hero" id="top" data-nav-theme="dark">
        <div className="hero-grid" aria-hidden="true" />
        <HeroCanvas />

        <div className="hero-meta hero-meta-tl" aria-hidden="true">
          <span className="meta-strong">Index — 00</span>
          <span>Colombo · Worldwide</span>
        </div>
        <div className="hero-meta hero-meta-tr" aria-hidden="true">
          <span>arkivelabs.com</span>
          <span>Vol. 2026</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            Strategy <span>•</span> Creative <span>•</span> Technology <span>•</span> Performance
          </p>
          <h1>
            The standard
            <br />
            for the
            <br />
            <RotatingWord />
          </h1>
          <div className="hero-bottom">
            <p>
              Arkive Labs turns real business substance into clear market authority. Through
              strategy, creative, technology and performance that move as one.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="/start-a-project" data-magnetic>
                Start a project <Arrow />
              </a>
              <a className="button button-outline" href="#point-of-view" data-magnetic>
                How we think <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-principles">
          <span>Research-first</span>
          <span>Founder-led</span>
          <span>Outcome-obsessed</span>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="point-of-view" id="point-of-view" data-nav-theme="light">
        <div className="section-index">
          <span>01</span>
          <p>Point of view</p>
        </div>
        <div className="pov-content">
          <h2>
            Most agencies start
            <br />
            with <em>outputs.</em>
            <br />
            We start with the business.
          </h2>
          <div className="pov-detail">
            <p className="pov-lead">
              Because a sharper website cannot rescue a blurry position, and more content cannot
              create authority without something worth saying.
            </p>
            <p>
              We understand the business first, then build the presence around its strongest
              advantage. That is how strategy, creative and performance stop competing for
              attention and start creating momentum together.
            </p>
          </div>
        </div>
        <div className="outcome-line" aria-label="Arkive outcomes">
          <div><span>01</span><strong>Clarity</strong><p>Know what the market needs to understand.</p></div>
          <div><span>02</span><strong>Authority</strong><p>Turn expertise and proof into visible trust.</p></div>
          <div><span>03</span><strong>Momentum</strong><p>Build a system that learns and compounds.</p></div>
        </div>
      </section>

      <section className="metrics" data-nav-theme="dark" aria-label="Arkive at a glance">
        <div className="metrics-row">
          <div className="metric">
            <span className="metric-value">2</span>
            <span className="metric-label">Accountable founders</span>
          </div>
          <div className="metric">
            <span className="metric-value">04</span>
            <span className="metric-label">Disciplines, one team</span>
          </div>
          <div className="metric">
            <span className="metric-value">10<em>×</em></span>
            <span className="metric-label">Output per head</span>
          </div>
          <div className="metric">
            <span className="metric-value">00</span>
            <span className="metric-label">Shortcuts taken</span>
          </div>
        </div>
      </section>

      <section className="capabilities" id="capabilities" data-nav-theme="dark">
        <div className="section-heading dark-heading">
          <div className="section-index">
            <span>02</span>
            <p>Capabilities</p>
          </div>
          <h2>One system. Four disciplines.</h2>
          <p className="heading-note">
            No fragmented agency layers. The thinking and the execution stay connected from the
            first question to the final result.
            <a className="capabilities-page-link" href="/capabilities">Explore capabilities <Arrow /></a>
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="capability-tags">
                {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="engine" data-nav-theme="dark">
        <div className="engine-grid">
          <div className="engine-lead">
            <div className="section-index">
              <span>02.1</span>
              <p>How the work moves</p>
            </div>
            <h2>
              AI is our <em>infrastructure.</em>
              <br />
              Not our angle.
            </h2>
            <p>
              Every deliverable is strategised by a founder, accelerated by proprietary
              tooling, and quality-checked before it leaves the studio. Agency-grade output
              from a team you can actually reach.
            </p>
            <p>
              Human judgement decides what matters. The machine removes the drag between the
              idea and the result — so the thinking stays sharp and the delivery stays fast.
            </p>
          </div>

          <div className="engine-diagram" aria-hidden="true">
            <div className="engine-diagram-head">
              <span>Fig. 02.1 — Studio system</span>
              <span>v2026</span>
            </div>
            <div className="engine-cols">
              <div className="engine-col">
                <span>Input</span>
                <ul>
                  <li>Brief</li>
                  <li>Research</li>
                  <li>Brand context</li>
                </ul>
              </div>
              <div className="engine-col is-core">
                <span>Layer</span>
                <ul>
                  <li>Human strategy</li>
                  <li>AI acceleration</li>
                  <li>Quality review</li>
                </ul>
              </div>
              <div className="engine-col">
                <span>Output</span>
                <ul>
                  <li>Production-ready</li>
                  <li>On brand</li>
                  <li>Documented</li>
                </ul>
              </div>
            </div>
            <div className="engine-diagram-foot">Same two minds, from first question to final result.</div>
          </div>
        </div>
      </section>

      <section className="systems" id="work" data-nav-theme="light">
        <div className="section-heading light-heading">
          <div className="section-index">
            <span>03</span>
            <p>What we build</p>
          </div>
          <h2>Systems designed to create movement.</h2>
          <p className="heading-note">
            Not a menu of isolated deliverables. Each engagement is built around the decision the
            business needs its market to make next.
          </p>
        </div>

        <article className="system-feature system-feature-large">
          <div className="system-copy">
            <p className="system-kicker">Digital Front Door</p>
            <h3>Make the first impression carry the weight of the business.</h3>
            <p>
              Positioning, buyer journeys, proof, design and development shaped into one focused
              digital experience.
            </p>
            <div className="system-sequence">
              <span>Position</span><span>Prove</span><span>Convert</span>
            </div>
          </div>
          <div className="front-door-visual" aria-hidden="true">
            <div className="browser-bar"><i /><i /><i /><span>YOUR BUSINESS / CLEARLY</span></div>
            <div className="browser-body">
              <p>THE CATEGORY</p>
              <h4>Real substance.<br /><em>Finally visible.</em></h4>
              <div className="browser-rule" />
              <div className="browser-proof"><span>01 / VALUE</span><span>02 / PROOF</span><span>03 / ACTION</span></div>
            </div>
          </div>
        </article>

        <div className="system-pair">
          <article className="system-feature market-signal">
            <div className="signal-visual" aria-hidden="true">
              <div className="signal-column column-one"><i /><i /><i /><i /></div>
              <div className="signal-column column-two"><i /><i /><i /></div>
              <div className="signal-column column-three"><i /><i /><i /><i /><i /></div>
              <p>CONSISTENCY BUILDS RECALL</p>
            </div>
            <div className="system-copy">
              <p className="system-kicker">Market Signal</p>
              <h3>Turn expertise into a presence people remember.</h3>
              <p>Position-led content, creative direction and distribution built to compound.</p>
            </div>
          </article>

          <article className="system-feature growth-system">
            <div className="growth-visual" aria-hidden="true">
              <div className="growth-axis axis-y"><span>Learn</span><span>Test</span><span>Scale</span></div>
              <div className="growth-line"><i /><i /><i /><i /><i /></div>
              <strong>THE SIGNAL<br />GETS SHARPER</strong>
            </div>
            <div className="system-copy">
              <p className="system-kicker">Growth System</p>
              <h3>Connect creative judgement to measurable response.</h3>
              <p>Campaigns, landing experiences and analytics working as one learning loop.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="approach" id="approach" data-nav-theme="dark">
        <div className="section-heading dark-heading">
          <div className="section-index">
            <span>04</span>
            <p>Approach</p>
          </div>
          <h2>Clarity before output.</h2>
          <p className="heading-note">
            A visible process keeps the work moving and every decision connected to the outcome.
          </p>
        </div>
        <div className="process-list">
          {process.map(([number, title, description]) => (
            <article className="process-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio" id="studio" data-nav-theme="gold">
        <div className="section-index">
          <span>05</span>
          <p>The studio</p>
        </div>
        <div className="studio-intro">
          <h2>Two founders.<br />One accountable team.</h2>
          <div>
            <p className="studio-lead">
              The people shaping the strategy stay close to the creative, technology and delivery.
            </p>
            <p>No hand-off into a maze of layers. No distance between the promise and the work.</p>
            <a className="studio-page-link" href="/studio">Meet the studio <Arrow /></a>
          </div>
        </div>
        <div className="founders">
          <article className="founder">
            <div className="founder-monogram" aria-hidden="true"><span>YW</span><i>01</i></div>
            <div className="founder-meta">
              <div><h3>Yohan Wickramasinghe</h3><p>Co-Founder, Strategy & Creative</p></div>
              <p>Shapes the position, story and creative system behind how Arkive and its partners show up.</p>
            </div>
          </article>
          <article className="founder">
            <div className="founder-monogram founder-monogram-dark" aria-hidden="true"><span>AC</span><i>02</i></div>
            <div className="founder-meta">
              <div><h3>Akesh Chandrasiri</h3><p>Co-Founder, AI Engineering & Compliance</p></div>
              <p>Connects applied AI, responsible technology and operational thinking to what the work can become.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="accountability" data-nav-theme="dark">
        <p className="eyebrow">Why Arkive</p>
        <h2>Close to the work.<br /><em>Accountable</em> for the outcome.</h2>
        <div className="accountability-grid">
          <p>Senior thinking from the first conversation.</p>
          <p>Strategy, creative and technology in one room.</p>
          <p>Research that sharpens decisions, not decks that gather dust.</p>
          <p>Work judged by what it moves, not only what it ships.</p>
        </div>
      </section>

      <section className="contact" id="contact" data-nav-theme="light">
        <div className="contact-topline"><span>Have a real challenge?</span><span>Let&apos;s make it visible.</span></div>
        <h2>If the business has substance,<br />the market should <em>see it.</em></h2>
        <div className="contact-bottom">
          <div className="contact-prompt">
            <p>Tell us what you are building, what is getting in the way and what needs to move next.</p>
            <a href="/pricing">View services and pricing <span aria-hidden="true">↗</span></a>
          </div>
          <a className="contact-button" href="/start-a-project">
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer data-nav-theme="dark">
        <a className="brand footer-brand" href="#top">
          <img className="brand-logo footer-logo" src="/brand/arkive-logo-white.png" alt="Arkive Labs" />
        </a>
        <p>Strategy · Creative · Technology · Performance</p>
        <div><a href="#top">Back to top ↑</a><span>© 2026 Arkive Labs</span></div>
      </footer>
    </main>
  );
}
