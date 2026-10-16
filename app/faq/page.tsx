import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Arkive Labs",
  description:
    "Straight answers on working with Arkive Labs: who you work with, how fast we start, how we scope and price, and what to expect on the first call.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const faqGroups = [
  {
    index: "01",
    label: "Working together",
    items: [
      {
        q: "Who will I actually be working with?",
        a: "The founders, directly. Every engagement is led by Akesh and Yohan. The people who shape the recommendation stay in the room through delivery. No account manager relaying briefs to a team you never meet.",
      },
      {
        q: "How quickly can we get started?",
        a: "Fast. We reply within two hours of your first message and get a 30-minute call on the calendar to understand what you’re building and where it’s getting stuck. From there we scope the work and move.",
      },
      {
        q: "What happens on the first call?",
        a: "Thirty focused minutes. You tell us what you’re building, what’s in the way and what success looks like. We tell you honestly whether and how we can help, and what the next step would be. No pitch theatre.",
      },
      {
        q: "Where are you based, and does working remotely actually work?",
        a: "We’re in Colombo, Sri Lanka, working with clients worldwide. Engagements run remotely with clear rhythms and direct access to the founders, so it never feels distant. Timezones are a logistics detail, not a barrier.",
      },
    ],
  },
  {
    index: "02",
    label: "Scope & investment",
    items: [
      {
        q: "Why aren’t your prices on the site?",
        a: "Because the right scope depends on your goals, not a tier someone picked for you. We shape the investment around what will actually move your business and share it on our first call. No rigid packages, no pressure.",
      },
      {
        q: "Do you take on one-off projects, or only ongoing retainers?",
        a: "Both. Some brands come to us for a defined project: a site, a positioning sprint, a launch. Others want a founder-led partner in the work month to month. We’ll recommend the shape that fits where you are.",
      },
      {
        q: "What kind of businesses do you work with?",
        a: "Ambitious brands that have something real to build on and want it expressed with authority, from finding their first signal to leading a category.",
      },
    ],
  },
  {
    index: "03",
    label: "The work & trust",
    items: [
      {
        q: "What makes Arkive different from a typical agency?",
        a: "Strategy, creative, technology and performance live under one roof here. Nothing gets lost in the handoff between a strategy deck, a design team and a dev shop, because it’s the same people the whole way through.",
      },
      {
        q: "Who owns the work you create?",
        a: "You do. Once the engagement is settled, the strategy, creative and code are yours to keep and build on.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">

      <section className="faq-hero" id="top" data-nav-theme="dark" data-hero>
        <div className="faq-hero-grid" aria-hidden="true" />
        <div className="faq-hero-copy">
          <p className="eyebrow">FAQ <span>&bull;</span> Straight answers</p>
          <h1>No jargon.<br />No runaround.<br /><em>Just the answers.</em></h1>
          <p>The questions people ask before working with us, answered plainly. If yours isn&apos;t here, ask us directly.</p>
        </div>
        <div className="faq-hero-principles"><span>Founder-led</span><span>Reply in 2 hours</span><span>Worldwide</span></div>
      </section>

      <section className="faq-body" data-nav-theme="light">
        {faqGroups.map((group) => (
          <div className="faq-group" key={group.index}>
            <div className="faq-group-head">
              <span>{group.index}</span>
              <p>{group.label}</p>
            </div>
            <div className="faq-list">
              {group.items.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    <span className="faq-q">{item.q}</span>
                    <span className="faq-mark" aria-hidden="true" />
                  </summary>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="faq-cta" data-nav-theme="light">
        <div className="contact-topline"><span>Still have a question?</span><span>Ask the people doing the work.</span></div>
        <h2>Tell us what you&apos;re building.<br />We&apos;ll reply <em>within two hours.</em></h2>
        <div className="faq-cta-bottom">
          <p>Send the honest version of what you&apos;re trying to move. We&apos;ll come back fast with whether and how we can help.</p>
          <div><a className="button button-outline-dark" href="/packages">View packages <Arrow /></a><a className="contact-button" href="/start-a-project">Start a project <Arrow /></a></div>
        </div>
      </section>
    </main>
  );
}
