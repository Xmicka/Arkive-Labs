import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getPosts, getPost, getRelated, formatDate, AUTHORS } from "../../../lib/blog";
import { PRODUCTS } from "../../../lib/products";
import AdSlot from "../../AdSlot";

const SITE = "https://www.arkivelabs.com";

// Published posts are prebuilt; scheduled posts render on request once their
// date passes, then cache for an hour.
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Arkive Labs`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: AUTHORS[post.author].name }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date.toISOString(),
      modifiedTime: (post.updated ?? post.date).toISOString(),
      authors: [AUTHORS[post.author].name],
    },
  };
}

const Arrow = () => <span aria-hidden="true">↗</span>;

/* Split the article at its section headings. Following AdSense's in-article
   guidance: the first ad goes after the opening paragraphs (about two
   paragraphs in), and a second only on long articles, two thirds through,
   so there is plenty of content between ads. Ads never split a section. */
function sections(html: string) {
  const parts = html.split(/(?=<h2[\s>])/);
  const slots = new Set<number>();
  const introParagraphs = (parts[0].match(/<p>/g) || []).length;
  if (parts.length >= 3) slots.add(introParagraphs >= 2 ? 1 : 2);
  const later = Math.round(parts.length * 0.66);
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  if (words >= 1000 && parts.length >= 7 && later - Math.max(...slots) >= 3) slots.add(later);
  return { parts, slots };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = AUTHORS[post.author];
  const related = getRelated(post, 4);
  const product = post.product ? PRODUCTS[post.product] : undefined;
  const { parts, slots } = sections(post.html);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    dateModified: (post.updated ?? post.date).toISOString(),
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    articleSection: post.category,
    author: { "@type": "Person", name: author.name, jobTitle: author.role, worksFor: { "@id": `${SITE}/#organization` } },
    publisher: { "@id": `${SITE}/#organization` },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <main className="blog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <article>
        <header className="faq-hero post-hero" data-nav-theme="dark" data-hero>
          <div className="faq-hero-grid" aria-hidden="true" />
          <div className="faq-hero-copy">
            <p className="eyebrow"><a href="/blog">Blog</a> <span>&bull;</span> {post.category}</p>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <div className="faq-hero-principles">
            <span>By {author.name}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        <div className="post-layout" data-nav-theme="light">
          <aside className="post-rail">
            <div className="post-rail-inner">
            <dl className="post-facts">
              <div><dt>Written by</dt><dd>{author.name}</dd></div>
              <div><dt>Published</dt><dd>{formatDate(post.date)}</dd></div>
              {post.updated && <div><dt>Updated</dt><dd>{formatDate(post.updated)}</dd></div>}
              <div><dt>Topic</dt><dd>{post.category}</dd></div>
            </dl>
            <a className="post-back" href="/blog">All articles <Arrow /></a>
            </div>
          </aside>

          <div className="post-main">
            <div className="legal-prose post-prose">
              {parts.map((html, i) => (
                <Fragment key={i}>
                  {slots.has(i) && <AdSlot kind="inArticle" />}
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </Fragment>
              ))}
            </div>

            <AdSlot kind="display" />

            {product && (
              <aside className="post-product" aria-label="Toolkit">
                <p className="post-product-kicker">From our toolkits <span>&bull;</span> {product.price}</p>
                <p className="post-product-name">{product.name}</p>
                <p className="post-product-summary">{product.summary}</p>
                <a className="post-product-link" href={product.url} target="_blank" rel="noopener">
                  See what is inside <Arrow />
                </a>
                <p className="post-product-note">
                  Disclosure: we make and sell this toolkit. Everything in the article above works without it.
                </p>
              </aside>
            )}

            <aside className="post-author" aria-label="About the author">
              <span className="post-author-index">Author</span>
              <div>
                <p className="post-author-name">{author.name}</p>
                <p className="post-author-role">{author.role}, Arkive Labs</p>
                <p>{author.bio}</p>
                <p>
                  Spotted an error? Email <a href="mailto:info@arkivelabs.com">info@arkivelabs.com</a>.
                  We correct it and note the change on the page.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="faq-body blog-index blog-related" data-nav-theme="light">
          <div className="faq-group">
            <div className="faq-group-head">
              <span>Next</span>
              <p>Keep reading</p>
              <small><a href="/blog">All articles</a></small>
            </div>
            <div className="blog-rows">
              {related.map((p) => (
                <a className="blog-row" href={`/blog/${p.slug}`} key={p.slug}>
                  <span className="blog-row-meta">{p.category} &middot; {p.readingMinutes} min</span>
                  <span className="blog-row-title">{p.title}</span>
                  <span className="blog-row-desc">{p.description}</span>
                  <span className="blog-row-arrow"><Arrow /></span>
                </a>
              ))}
            </div>
          </div>
          <AdSlot kind="multiplex" />
        </section>
      )}
    </main>
  );
}
