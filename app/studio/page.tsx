import type { Metadata } from "next";
import Navigation from "../Navigation";

export const metadata: Metadata = {
  title: "Studio | Arkive Labs",
  description:
    "Meet the founders behind Arkive Labs and the principles that keep strategy, creative and technology close to the work.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const operatingPrinciples = [
  ["01", "Direct thinking", "The people shaping the recommendation stay in the conversation and close to the decisions."],
  ["02", "Connected execution", "Strategy, creative and technology move together instead of being handed across disconnected teams."],
  ["03", "Honest scope", "We define what the challenge genuinely needs, including what should not be built, posted or pursued."],
  ["04", "Accountable outcomes", "The work is judged by the clarity, authority or movement it creates for the business."],
];

export default function StudioPage() {
  return (
    <main className="studio-page">
      <Navigation page="studio" />

      <section className="studio-hero" id="top" data-nav-theme="dark">
        <div className="studio-hero-grid" aria-hidden="true" />
        <div className="studio-hero-copy">
          <p className="eyebrow">The studio <span>•</span> Founder-led by design</p>
          <h1>The people making<br />the promise stay<br /><em>in the work.</em></h1>
          <p>Arkive Labs is a focused studio built to keep senior thinking close to strategy, creative, technology and delivery.</p>
        </div>
        <div className="studio-hero-orbit" aria-hidden="true">
          <div className="studio-ring ring-outer" />
          <div className="studio-ring ring-inner" />
          <div className="studio-core studio-core-one"><span>YW</span></div>
          <div className="studio-core studio-core-two"><span>AC</span></div>
        </div>
        <div className="studio-hero-principles"><span>Two founders</span><span>One accountable team</span><span>No agency maze</span></div>
      </section>

      <section className="studio-origin" data-nav-theme="light">
        <div className="section-index"><span>01</span><p>Why Arkive exists</p></div>
        <div className="origin-grid">
          <h2>Too much good work gets lost between <em>thinking</em> and doing.</h2>
          <div>
            <p className="origin-lead">The traditional agency structure often separates the people who understand the problem from the people expected to solve it.</p>
            <p>Strategy becomes a document. Creative loses the commercial context. Technology arrives after the important decisions have already been made.</p>
            <p>Arkive was built to remove that distance. We keep the disciplines connected and the founders accountable from the first question to the final outcome.</p>
          </div>
        </div>
        <div className="origin-statement">
          <span>THE IDEA</span>
          <strong>Keep the thinking close.<br />Make the work stronger.</strong>
          <img src="/brand/arkive-mark-black.png" alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="studio-founders-page" data-nav-theme="gold">
        <div className="founders-page-heading">
          <div className="section-index"><span>02</span><p>The founders</p></div>
          <h2>Different disciplines.<br /><em>One standard.</em></h2>
          <p>Complementary perspectives let us examine the business, the market and the systems behind the work as one connected problem.</p>
        </div>

        <div className="founder-profile-grid">
          <article className="founder-profile">
            <div className="founder-profile-visual" aria-hidden="true"><span>YW</span><i>01</i><b>STRATEGY / CREATIVE</b></div>
            <div className="founder-profile-copy">
              <div><p>Co-Founder</p><h3>Yohan Wickramasinghe</h3><strong>Strategy & Creative</strong></div>
              <p>Shapes the position, story and creative system behind how Arkive and its partners show up. His focus is turning business substance into a market presence people can understand, recognise and trust.</p>
            </div>
          </article>
          <article className="founder-profile">
            <div className="founder-profile-visual founder-profile-dark" aria-hidden="true"><span>AC</span><i>02</i><b>AI / ENGINEERING / COMPLIANCE</b></div>
            <div className="founder-profile-copy">
              <div><p>Co-Founder</p><h3>Akesh Chandrasiri</h3><strong>AI Engineering & Compliance</strong></div>
              <p>Connects applied AI, responsible technology and operational thinking to what the work can become. His focus is building systems that are useful, considered and ready for the realities behind the idea.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="founder-led" data-nav-theme="dark">
        <div className="founder-led-heading">
          <div className="section-index"><span>03</span><p>What founder-led means</p></div>
          <h2>Close enough to care.<br />Senior enough to <em>challenge.</em></h2>
          <p>Founder-led is not a title on a proposal. It changes who thinks, who decides and who remains accountable when the work gets difficult.</p>
        </div>
        <div className="founder-led-list">
          {operatingPrinciples.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-beliefs" data-nav-theme="light">
        <div className="section-index"><span>04</span><p>The standard</p></div>
        <div className="beliefs-intro">
          <h2>Four things we refuse<br />to compromise.</h2>
          <p>The standard is not a visual style. It is the quality of judgement behind every decision.</p>
        </div>
        <div className="beliefs-grid">
          <article><span>01</span><h3>Clarity over theatre.</h3><p>If it cannot be explained clearly, it is not ready to be dressed up.</p></article>
          <article><span>02</span><h3>Substance before signal.</h3><p>Attention only compounds when there is something real behind it.</p></article>
          <article><span>03</span><h3>Technology with judgement.</h3><p>New capability matters when it solves the right problem responsibly.</p></article>
          <article><span>04</span><h3>Outcomes over outputs.</h3><p>Finishing the deliverable is not the same as moving the business.</p></article>
        </div>
      </section>

      <section className="studio-cta" data-nav-theme="light">
        <div className="contact-topline"><span>Have a challenge worth solving?</span><span>Start with the honest version.</span></div>
        <h2>Bring us the substance.<br />We will make it <em>visible.</em></h2>
        <div className="studio-cta-bottom">
          <p>Tell us what you are building, what is getting in the way and what needs to move next.</p>
          <div><a className="button button-outline-dark" href="/pricing">View pricing <Arrow /></a><a className="contact-button" href="/start-a-project">Start a project <Arrow /></a></div>
        </div>
      </section>

      <footer data-nav-theme="dark">
        <a className="brand footer-brand" href="/"><img className="brand-logo footer-logo" src="/brand/arkive-logo-white.png" alt="Arkive Labs" /></a>
        <p>Strategy · Creative · Technology · Performance</p>
        <div><a href="#top">Back to top ↑</a><span>© 2026 Arkive Labs</span></div>
      </footer>
    </main>
  );
}
