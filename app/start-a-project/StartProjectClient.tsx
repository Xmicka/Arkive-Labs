"use client";

import { FormEvent, useState } from "react";

const enquiryEmail = "admin.arkivelabs@gmail.com";

const supportOptions = [
  "Strategy & positioning",
  "Brand & creative",
  "Website & digital experience",
  "Content systems",
  "Performance & growth",
  "AI & automation",
  "Not sure yet",
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function StartProjectClient() {
  const [support, setSupport] = useState<string[]>([]);

  const toggleSupport = (item: string) => {
    setSupport((current) => current.includes(item)
      ? current.filter((value) => value !== item)
      : [...current, item]);
  };

  const submitBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const subject = `Project enquiry from ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${String(data.get("email") || "")}`,
      `Company: ${company || "Not provided"}`,
      `Website: ${String(data.get("website") || "Not provided")}`,
      "",
      "The challenge:",
      String(data.get("challenge") || ""),
      "",
      `Support needed: ${support.length ? support.join(", ") : "Not sure yet"}`,
      `Approximate investment: ${String(data.get("investment") || "Not selected")}`,
      `Ideal start: ${String(data.get("timeline") || "Not selected")}`,
      `How they found Arkive: ${String(data.get("referral") || "Not provided")}`,
    ].join("\n");

    window.location.href = `mailto:${enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="start-page">

      <section className="start-hero" id="top" data-nav-theme="dark" data-hero>
        <div className="start-grid" aria-hidden="true" />
        <div className="start-hero-copy">
          <p className="eyebrow">Start a project <span>•</span> Begin with the real challenge</p>
          <h1>Bring us what needs<br />to <em>move.</em></h1>
          <p>Tell us where the business is, what is getting in the way and what a meaningful outcome would look like.</p>
        </div>
        <div className="brief-orbit" aria-hidden="true">
          <div className="brief-orbit-ring" />
          <div className="brief-orbit-core"><img src="/brand/arkive-mark-black.png" alt="" /></div>
          <span>CLARITY FIRST</span>
        </div>
        <div className="start-principles"><span>No generic pitch</span><span>Founder review</span><span>Clear next step</span></div>
      </section>

      <section className="project-brief" data-nav-theme="light">
        <div className="brief-intro">
          <div className="section-index"><span>01</span><p>Your brief</p></div>
          <h2>A few useful details.<br /><em>Nothing performative.</em></h2>
          <p>We use this to understand whether we are the right fit and to make the first conversation worth your time.</p>
        </div>

        <form className="project-form" onSubmit={submitBrief}>
          <fieldset className="form-section">
            <legend><span>01</span><strong>About you</strong></legend>
            <div className="form-grid two-column">
              <label><span>Your name *</span><input name="name" type="text" autoComplete="name" required placeholder="Jane Smith" /></label>
              <label><span>Work email *</span><input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" /></label>
              <label><span>Company *</span><input name="company" type="text" autoComplete="organization" required placeholder="Company name" /></label>
              <label><span>Website</span><input name="website" type="url" inputMode="url" placeholder="https://" /></label>
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend><span>02</span><strong>The challenge</strong></legend>
            <label className="textarea-label">
              <span>What are you building, and what is getting in the way? *</span>
              <textarea name="challenge" required rows={7} placeholder="Give us the honest version. Context, constraints and what needs to change are more useful than a polished brief." />
            </label>
          </fieldset>

          <fieldset className="form-section">
            <legend><span>03</span><strong>Where you may need us</strong></legend>
            <p className="field-help">Choose as many as feel relevant. “Not sure yet” is a perfectly useful answer.</p>
            <div className="support-options">
              {supportOptions.map((item) => {
                const active = support.includes(item);
                return <button type="button" className={active ? "active" : ""} aria-pressed={active} onClick={() => toggleSupport(item)} key={item}><span>{active ? "✓" : "+"}</span>{item}</button>;
              })}
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend><span>04</span><strong>Shape of the engagement</strong></legend>
            <div className="form-grid two-column">
              <label><span>Approximate investment *</span><select name="investment" required defaultValue=""><option value="" disabled>Select a range</option><option>Under Rs. 100,000</option><option>Rs. 100,000 to 250,000</option><option>Rs. 250,000 to 500,000</option><option>Rs. 500,000+</option><option>International engagement</option><option>Prefer to discuss</option></select></label>
              <label><span>Ideal starting point *</span><select name="timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within one month</option><option>Within three months</option><option>Later this year</option><option>Still exploring</option></select></label>
              <label className="full-field"><span>How did you hear about Arkive?</span><input name="referral" type="text" placeholder="Referral, LinkedIn, search or somewhere else" /></label>
            </div>
          </fieldset>

          <div className="form-submit">
            <div><p>Ready when you are.</p><span>Submitting prepares your brief in your email app for one final review.</span></div>
            <button type="submit">Prepare project brief <Arrow /></button>
          </div>
        </form>
      </section>

      <section className="what-next" data-nav-theme="dark">
        <div className="section-index"><span>02</span><p>What happens next</p></div>
        <div className="next-grid">
          <article><span>01</span><h3>We read it properly.</h3><p>Your brief is reviewed by the founders, not filtered through a sales layer.</p></article>
          <article><span>02</span><h3>We find the real question.</h3><p>If there is a fit, we arrange a focused conversation around the challenge and opportunity.</p></article>
          <article><span>03</span><h3>We shape the engagement.</h3><p>You receive a clear recommendation, scope, investment and next step with no vague agency theatre.</p></article>
        </div>
      </section>
    </main>
  );
}
