import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Arkive Labs",
  description:
    "How Arkive Labs collects, uses and protects the information you share, including enquiry details submitted through the website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero" id="top" data-nav-theme="dark" data-hero>
        <p className="eyebrow">Legal <span>&bull;</span> Privacy</p>
        <h1>Privacy <em>policy.</em></h1>
        <p className="legal-lede">
          Last updated 19 October 2026. This policy explains what we collect,
          why, and the choices you have.
        </p>
      </section>

      <section className="legal-body" data-nav-theme="light">
        <div className="legal-prose">
          <h2>Who we are</h2>
          <p>
            Arkive Labs is a founder-led marketing and technology studio based in
            Colombo, Sri Lanka, working with clients worldwide. For any privacy
            question, email <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Enquiry details</strong> you choose to share, such as your name, email, company and the project information you send through the contact or start-a-project flow.</li>
            <li><strong>Usage and device data</strong>, for example pages viewed, approximate region, browser and device type, gathered through website analytics and cookies.</li>
            <li><strong>Advertising data</strong> collected by our third-party advertising partners through cookies and similar technologies when ads are shown on the site (see Advertising below).</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and scope potential work.</li>
            <li>To understand how the site is used so we can improve it.</li>
            <li>To display and measure advertising on the site, including in articles and the blog.</li>
            <li>To meet legal and accounting obligations where required.</li>
          </ul>

          <h2>Cookies and similar technologies</h2>
          <p>
            We and our partners use cookies, local storage and similar technologies
            to run the site, remember preferences, measure traffic and (where ads
            are shown) deliver and measure advertising. You can control or delete
            cookies through your browser settings. Blocking some cookies may affect
            how the site works.
          </p>

          <h2>Advertising</h2>
          <p>
            We may display third-party advertising on the site, including in the
            blog and articles, served by advertising networks such as Google and
            its partners. These partners may use cookies and similar technologies
            to serve ads based on your prior visits to this and other websites, and
            to measure ad performance. Google&apos;s use of advertising cookies
            enables it and its partners to serve ads based on your visits to this
            and other sites. We do not control the cookies set by these partners.
          </p>
          <p>You can manage or opt out of personalised advertising here:</p>
          <ul>
            <li>Google Ads settings: <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">myadcenter.google.com</a></li>
            <li>How Google uses data from partner sites: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a></li>
            <li>Opt out of many third-party vendors: <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a> and <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a></li>
          </ul>

          <h2>What we do not do</h2>
          <ul>
            <li>We do not sell your personal information for money.</li>
            <li>We do not send marketing you did not ask for.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We share information with service providers that help us run the studio
            and the site, such as email, hosting, analytics and advertising
            partners, and only as needed to deliver those services. Those partners
            are responsible for their own handling of data under their respective
            policies.
          </p>

          <h2>Retention</h2>
          <p>
            We keep enquiry information for as long as needed to respond and, where
            an engagement proceeds, for the duration of our work together plus any
            period required by law. Analytics and advertising data are retained
            according to each provider&apos;s policy.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct or delete the personal information we
            hold about you at any time by emailing{" "}
            <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a>. You can
            also control cookies in your browser and opt out of personalised ads
            using the links above. We will respond promptly to any request.
          </p>

          <h2>Children</h2>
          <p>
            The site is intended for a business audience and is not directed at
            children under 16. We do not knowingly collect their information.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes, we will update the date at the top of this page.
          </p>
        </div>
      </section>
    </main>
  );
}
