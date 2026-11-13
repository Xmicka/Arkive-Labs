import type { Metadata } from "next";
import { Fragment } from "react";
import { getPosts, formatDate, AUTHORS } from "../../lib/blog";
import { PRODUCTS } from "../../lib/products";
import AdSlot from "../AdSlot";

// Hourly revalidation lets scheduled (future-dated) posts appear on their day.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Arkive Labs",
  description:
    "Practical guides on AI workflows, websites, security, compliance, content and growth for small businesses and founders, written by the Arkive Labs founders.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Arkive Labs blog",
    description:
      "Practical guides on AI workflows, websites, security, compliance, content and growth for small businesses and founders.",
    url: "/blog",
    type: "website",
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function BlogIndex() {
  const posts = getPosts();
  const [latest, ...rest] = posts;
  const categories = Array.from(new Set(rest.map((p) => p.category)));

  return (
    <main className="blog-page">
      <section className="faq-hero blog-hero" data-nav-theme="dark" data-hero>
        <div className="faq-hero-grid" aria-hidden="true" />
        <div className="faq-hero-copy">
          <p className="eyebrow">Blog <span>&bull;</span> Field notes</p>
          <h1>Notes from<br />the work.<br /><em>Written plainly.</em></h1>
          <p>
            Practical guides on AI workflows, websites, security, compliance and
            growth, from the two founders who do this work every day.
          </p>
        </div>
        <div className="faq-hero-principles">
          <span>{posts.length} articles</span>
          <span>Written by the founders</span>
          <span>Facts checked, examples labelled</span>
        </div>
      </section>

      {latest && (
        <section className="blog-latest" data-nav-theme="light">
          <div className="section-index"><span>01</span><p>Latest</p></div>
          <a className="blog-latest-link" href={`/blog/${latest.slug}`}>
            <span className="blog-latest-meta">
              {latest.category} &middot; {formatDate(latest.date)} &middot; {latest.readingMinutes} min read
            </span>
            <span className="blog-latest-title">{latest.title}</span>
            <span className="blog-latest-desc">{latest.description}</span>
            <span className="blog-latest-more">Read the article <Arrow /></span>
          </a>
        </section>
      )}

      <AdSlot kind="display" className="ad-band" />

      <section className="faq-body blog-index" data-nav-theme="light">
        {categories.map((cat, i) => {
          const list = rest.filter((p) => p.category === cat);
          return (
            <Fragment key={cat}>
              <div className="faq-group" id={slug(cat)}>
                <div className="faq-group-head">
                  <span>{String(i + 2).padStart(2, "0")}</span>
                  <p>{cat}</p>
                  <small>{list.length} {list.length === 1 ? "article" : "articles"}</small>
                </div>
                <div className="blog-rows">
                  {list.map((p) => (
                    <a className="blog-row" href={`/blog/${p.slug}`} key={p.slug}>
                      <span className="blog-row-meta">
                        {formatDate(p.date)} &middot; {p.readingMinutes} min &middot; {AUTHORS[p.author].name.split(" ")[0]}
                      </span>
                      <span className="blog-row-title">{p.title}</span>
                      <span className="blog-row-desc">{p.description}</span>
                      <span className="blog-row-arrow"><Arrow /></span>
                    </a>
                  ))}
                </div>
              </div>
              {i % 3 === 2 && <AdSlot kind="display" />}
            </Fragment>
          );
        })}
        <AdSlot kind="multiplex" />
      </section>

      <section className="blog-toolkits" data-nav-theme="dark">
        <div className="section-index"><span>{String(categories.length + 2).padStart(2, "0")}</span><p>Toolkits we make</p></div>
        <h2>Security paperwork,<br /><em>done properly.</em></h2>
        <p className="blog-toolkits-lede">
          Editable ISO 27001 and security templates for small teams, written by
          Akesh. One-time purchase, sold on Gumroad.
        </p>
        <div className="capability-list">
          {Object.values(PRODUCTS).map((p, i) => (
            <a className="capability-row" href={p.url} key={p.url} target="_blank" rel="noopener">
              <span className="capability-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <div className="capability-tags"><span>{p.price}</span><span>{p.format}</span></div>
              <span className="capability-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
