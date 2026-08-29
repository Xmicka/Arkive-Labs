import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities | Arkive Labs",
  description:
    "Explore Arkive Labs capabilities across strategy, digital experiences, content systems and performance growth.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const disciplines = [
  {
    number: "01",
    name: "Strategy & positioning",
    statement: "Find the position worth owning.",
    description:
      "We turn business substance, buyer reality and category context into a position the market can understand and believe.",
    includes: ["Research & insight", "Category mapping", "Positioning", "Messaging architecture", "Go-to-market direction", "Brand strategy"],
    outcome: "A sharper reason to choose you.",
    visual: "position",
  },
  {
    number: "02",
    name: "Digital experiences",
    statement: "Make the next decision obvious.",
    description:
      "We translate the position into digital journeys that clarify the offer, carry the proof and move the right people forward.",
    includes: ["Web strategy", "Information architecture", "UX direction", "Interface design", "Web development", "Conversion design"],
    outcome: "A digital presence that earns action.",
    visual: "experience",
  },
  {
    number: "03",
    name: "Content systems",
    statement: "Make expertise visible, repeatedly.",
    description:
      "We build the creative logic, formats and operating rhythm that turn knowledge into a recognisable market signal.",
    includes: ["Creative direction", "Campaign concepts", "Social systems", "SEO content", "Thought leadership", "Content operations"],
    outcome: "A presence that compounds recognition.",
    visual: "content",
  },
  {
    number: "04",
    name: "Performance & growth",
    statement: "Build the learning loop.",
    description:
      "We connect creative judgement to distribution, measurement and iteration so investment gets more intelligent over time.",
    includes: ["Paid media", "Landing experiences", "Analytics", "Experimentation", "Automation", "Optimisation"],
    outcome: "Growth informed by real response.",
    visual: "growth",
  },
];

const pathways = [
  ["01", "Find the position", "For businesses with real substance but an unclear story, category position or route to market.", "Strategy & positioning"],
  ["02", "Build the presence", "For teams ready to turn a strong position into a credible digital experience and market signal.", "Strategy · Digital · Content"],
  ["03", "Create momentum", "For businesses that need creative, distribution and measurement to work as one learning system.", "Content · Performance · Growth"],
];

export default function CapabilitiesPage() {
  return (
    <main className="capabilities-page">

      <section className="cap-page-hero" id="top" data-nav-theme="dark" data-hero>
        <div className="cap-page-hero-grid" aria-hidden="true" />
        <div className="cap-page-hero-copy">
          <p className="eyebrow">Capabilities <span>•</span> One connected system</p>
          <h1>Built around<br />the movement<br /><em>you need.</em></h1>
          <p>We connect strategy, creative, technology and performance around the business decision that matters next.</p>
        </div>
        <div className="cap-page-system" aria-hidden="true">
          <div className="cap-system-ring cap-system-ring-one" />
          <div className="cap-system-ring cap-system-ring-two" />
          <div className="cap-system-axis axis-horizontal" />
          <div className="cap-system-axis axis-vertical" />
          <span className="cap-node node-strategy">Strategy</span>
          <span className="cap-node node-digital">Digital</span>
          <span className="cap-node node-content">Content</span>
          <span className="cap-node node-growth">Growth</span>
          <div className="cap-system-core"><img src="/brand/arkive-mark-black.png" alt="" /></div>
        </div>
        <div className="cap-page-principles"><span>Position before promotion</span><span>Systems over fragments</span><span>Learning over guessing</span></div>
      </section>

      <section className="cap-page-model" data-nav-theme="light">
        <div className="section-index"><span>01</span><p>The model</p></div>
        <div className="cap-model-intro">
          <h2>Not four departments.<br /><em>One line of sight.</em></h2>
          <div>
            <p className="cap-model-lead">The disciplines only create leverage when they share the same understanding of the business.</p>
            <p>Positioning shapes the experience. The experience gives content somewhere credible to land. Content creates the signal. Performance shows us what the market is telling us back.</p>
          </div>
        </div>
        <div className="cap-model-flow" aria-label="How Arkive capabilities connect">
          <article><span>01</span><strong>Understand</strong><p>Business, buyer and category.</p></article>
          <article><span>02</span><strong>Position</strong><p>The clearest place to stand.</p></article>
          <article><span>03</span><strong>Express</strong><p>Experience, story and signal.</p></article>
          <article><span>04</span><strong>Learn</strong><p>Response, evidence and movement.</p></article>
        </div>
      </section>

      <section className="cap-page-disciplines" data-nav-theme="dark">
        <div className="cap-disciplines-heading">
          <div className="section-index"><span>02</span><p>The disciplines</p></div>
          <h2>Four capabilities.<br /><em>Built to connect.</em></h2>
          <p>Each can solve a focused problem. Together, they create a system that carries the strategy all the way into market response.</p>
        </div>

        <div className="cap-discipline-list">
          {disciplines.map((discipline) => (
            <article className="cap-discipline" key={discipline.number}>
              <div className="cap-discipline-top">
                <span>{discipline.number}</span>
                <p>{discipline.name}</p>
              </div>
              <div className={`cap-discipline-visual cap-visual-${discipline.visual}`} aria-hidden="true">
                <i /><i /><i /><i /><b>{discipline.number}</b>
              </div>
              <div className="cap-discipline-copy">
                <h3>{discipline.statement}</h3>
                <p>{discipline.description}</p>
                <div className="cap-includes">
                  {discipline.includes.map((item) => <span key={item}>{item}</span>)}
                </div>
                <strong><small>Designed outcome</small>{discipline.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cap-page-pathways" data-nav-theme="light">
        <div className="section-index"><span>03</span><p>Ways in</p></div>
        <div className="cap-pathways-intro">
          <h2>Start with the problem.<br />Not the <em>shopping list.</em></h2>
          <p>Not every business needs every capability. We assemble the smallest connected system that can create the movement you are after.</p>
        </div>
        <div className="cap-pathway-grid">
          {pathways.map(([number, title, description, mix]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong>{mix}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cap-page-fit" data-nav-theme="dark">
        <div className="section-index"><span>04</span><p>Good fit</p></div>
        <div className="cap-fit-grid">
          <h2>The work is strongest when something real needs to <em>move.</em></h2>
          <div className="cap-fit-list">
            <p><span>01</span>Your offer is stronger than the way the market currently understands it.</p>
            <p><span>02</span>Your website, content and campaigns are telling different stories.</p>
            <p><span>03</span>You are entering a market, changing direction or preparing for a meaningful launch.</p>
            <p><span>04</span>You need senior thinking close to execution, not hidden behind layers.</p>
          </div>
        </div>
      </section>

      <section className="cap-page-cta" data-nav-theme="light">
        <div className="contact-topline"><span>Know the challenge?</span><span>We will shape the right system.</span></div>
        <h2>Bring us the problem.<br />We will find the <em>leverage.</em></h2>
        <div className="cap-page-cta-bottom">
          <p>Start with the honest version of what is not moving. We will tell you what the challenge genuinely needs.</p>
          <div><a className="button button-outline-dark" href="/pricing">View pricing <Arrow /></a><a className="contact-button" href="/start-a-project">Start a project <Arrow /></a></div>
        </div>
      </section>
    </main>
  );
}
