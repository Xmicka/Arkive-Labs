import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Arkive Labs",
  description:
    "Terms of use and disclaimer for arkivelabs.com, including the blog, advertising disclosure and intellectual property.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero" id="top" data-nav-theme="dark" data-hero>
        <p className="eyebrow">Legal <span>&bull;</span> Terms</p>
        <h1>Terms of <em>use.</em></h1>
        <p className="legal-lede">
          Last updated 13 November 2026. These terms cover your use of
          arkivelabs.com, including the blog.
        </p>
      </section>

      <section className="legal-body" data-nav-theme="light">
        <div className="legal-prose">
          <h2>Information, not advice</h2>
          <p>
            Articles on this site are written for general information and
            education. They reflect our own experience and research at the time
            of writing. They are not legal, financial, tax or other professional
            advice, and should not replace advice from a qualified professional
            who knows your situation. This applies in particular to articles
            about data protection and compliance.
          </p>

          <h2>Accuracy and corrections</h2>
          <p>
            We check the facts we publish and date every article. Tools, prices,
            platform rules and laws change, so information can go out of date.
            If you spot an error, email{" "}
            <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a> and we
            will correct it and note the update on the page.
          </p>

          <h2>Client work</h2>
          <p>
            Project scope, pricing, timelines and deliverables for client work
            are agreed in writing before work begins. Prices shown on the site
            are guides, not binding quotes.
          </p>

          <h2>External links</h2>
          <p>
            We link to third-party websites and tools for convenience. We do not
            control them and are not responsible for their content, policies or
            availability. A link is not an endorsement.
          </p>

          <h2>Advertising and affiliate disclosure</h2>
          <p>
            The blog displays advertising served by Google and its partners (see
            our <a href="/privacy">Privacy Policy</a>). Advertisers do not
            influence what we write. If we ever use affiliate links, we will
            label them, and they will not change our assessment of a product.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless stated otherwise, the writing, design and images on this site
            belong to Arkive Labs. You are welcome to quote short passages with a
            link back. Please do not republish whole articles without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Arkive Labs is not liable for
            any loss arising from your use of, or reliance on, the content of
            this site.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
