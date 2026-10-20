import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arkive Labs",
  description:
    "Get in touch with Arkive Labs. Email info@arkivelabs.com. Founder-led marketing and technology studio in Colombo, Sri Lanka, working worldwide. Expect a reply within two hours.",
  alternates: { canonical: "/contact" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ContactPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero" id="top" data-nav-theme="dark" data-hero>
        <p className="eyebrow">Contact <span>&bull;</span> Start a conversation</p>
        <h1>Let&apos;s talk about<br /><em>what needs to move.</em></h1>
        <p className="legal-lede">
          Tell us the honest version of the challenge. We reply within two hours
          of your first message and get a 30-minute call on the calendar.
        </p>
      </section>

      <section className="contact-detail" data-nav-theme="light">
        <div className="contact-detail-grid">
          <div className="contact-block">
            <span>Email</span>
            <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a>
            <a href="mailto:akesh@arkivelabs.com">akesh@arkivelabs.com</a>
            <a href="mailto:yohan@arkivelabs.com">yohan@arkivelabs.com</a>
          </div>
          <div className="contact-block">
            <span>Studio</span>
            <p>Colombo, Sri Lanka</p>
            <p>Working with clients worldwide</p>
          </div>
          <div className="contact-block">
            <span>Follow</span>
            <a href="https://www.instagram.com/arkive_labs/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/117614171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-block">
            <span>Response time</span>
            <p>Within two hours of your first message.</p>
          </div>
        </div>
        <div className="contact-cta">
          <a className="button button-gold" href="/start-a-project" data-magnetic>
            Start a project <Arrow />
          </a>
        </div>
      </section>
    </main>
  );
}
