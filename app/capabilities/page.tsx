import type { Metadata } from "next";
import Folder from "../FolderClient";
import CapabilityCarousel from "../CapabilityCarousel";
import GhostFibers from "../GhostFibers";

export const metadata: Metadata = {
  title: "Capabilities | Arkive Labs",
  description:
    "Explore Arkive Labs capabilities across strategy, digital experiences, content systems and performance growth.",
  alternates: { canonical: "/capabilities" },
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
        <div className="cap-hero-fibers" aria-hidden="true">
          <GhostFibers
            glowColor="#b8862f"
            lineColor="#f0e2b6"
            speed={0.14}
            scale={2.5}
            rotation={0.6}
            brightness={1.2}
            glow={2}
            vignette={0.92}
            waves={0.018}
            twist={0.14}
          />
        </div>
        <div className="cap-hero-veil" aria-hidden="true" />
        <div className="cap-page-hero-copy">
          <p className="eyebrow">Capabilities <span>•</span> One connected system</p>
          <h1>Built around<br />the movement<br /><em>you need.</em></h1>
          <p>We connect strategy, creative, technology and performance around the business decision that matters next.</p>
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

        <CapabilityCarousel items={disciplines} />
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

      <section className="cap-page-folder" data-nav-theme="light">
        <div className="section-index"><span>05</span><p>Inside an engagement</p></div>
        <div className="cap-folder-wrap">
          <div className="cap-folder-copy">
            <h2>One folder.<br />The <em>whole system.</em></h2>
            <p>Every engagement ships as one connected set of work, not a pile of disconnected deliverables. Hover the folder to open it.</p>
            <ul className="cap-folder-list">
              <li><span>01</span><strong>Positioning</strong><em>The place you own.</em></li>
              <li><span>02</span><strong>Messaging</strong><em>Words that land.</em></li>
              <li><span>03</span><strong>Website</strong><em>The experience.</em></li>
              <li><span>04</span><strong>Content system</strong><em>Signal that compounds.</em></li>
              <li><span>05</span><strong>Performance loop</strong><em>Learning that grows.</em></li>
            </ul>
          </div>
          <div className="cap-folder-stage">
            <Folder
              color="#c79a3b"
              paperColor="#f4f2ec"
              size={1.25}
              openOn="hover"
              theme="light"
              label="Inside an engagement"
              items={[
                { title: "Positioning", description: "The place you own." },
                { title: "Messaging", description: "Words that land." },
                { title: "Website", description: "The experience." },
                { title: "Content system", description: "Signal that compounds." },
                { title: "Performance loop", description: "Learning that grows." },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cap-page-cta" data-nav-theme="light">
        <div className="contact-topline"><span>Know the challenge?</span><span>We will shape the right system.</span></div>
        <h2>Bring us the problem.<br />We will find the <em>leverage.</em></h2>
        <div className="cap-page-cta-bottom">
          <p>Start with the honest version of what is not moving. We will tell you what the challenge genuinely needs.</p>
          <div><a className="button button-outline-dark" href="/packages">View packages <Arrow /></a><a className="contact-button" href="/start-a-project">Start a project <Arrow /></a></div>
        </div>
      </section>
    </main>
  );
}
