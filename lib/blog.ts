import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/*
  Blog content lives as markdown in /content/blog. Each file has a small
  frontmatter block (title, description, date, category, optional author,
  updated, draft).

  Scheduling: a post whose `date` is in the future stays hidden until that
  day. Blog pages revalidate hourly, so scheduled posts go live on their own
  without a redeploy. This keeps publishing steady instead of dumping many
  posts at once, which matters for AdSense's "ongoing curation" check.
*/

const DIR = path.join(process.cwd(), "content", "blog");

export const AUTHORS = {
  akesh: {
    name: "Akesh Chandrasiri",
    role: "Co-founder, AI, Engineering & Development",
    bio: "Akesh is a cybersecurity graduate who leads AI engineering, web development and compliance work at Arkive Labs. He writes about practical AI workflows, website security and data protection for small businesses.",
  },
  yohan: {
    name: "Yohan Wickramasinghe",
    role: "Co-founder, Strategy & Creative",
    bio: "Yohan leads strategy, brand identity and creative direction at Arkive Labs. He writes about positioning, briefs, design decisions and content that earns attention.",
  },
} as const;

export type AuthorKey = keyof typeof AUTHORS;

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  category: string;
  author: AuthorKey;
  product?: string;
  readingMinutes: number;
  html: string;
};

/* Minimal frontmatter parser: our frontmatter is flat `key: value` pairs. */
function parse(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error("Post is missing frontmatter");
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (/^".*"$/.test(value) || /^'.*'$/.test(value)) value = value.slice(1, -1);
    data[key] = value.replace(/\\"/g, '"');
  }
  return { data, body: match[2] };
}

function load(file: string): Post & { draft: boolean } {
  const slug = file.replace(/\.md$/, "");
  const { data, body } = parse(fs.readFileSync(path.join(DIR, file), "utf8"));

  // The page renders the title itself, so drop a leading "# Title" line.
  const content = body.replace(/^\s*#\s+.+\r?\n/, "");
  const words = content.replace(/[#>*_`\[\]()!-]/g, " ").split(/\s+/).filter(Boolean).length;

  const author = (data.author as AuthorKey) in AUTHORS ? (data.author as AuthorKey) : "akesh";

  return {
    slug,
    title: data.title,
    description: data.description,
    date: new Date(`${data.date}T00:00:00+05:30`),
    updated: data.updated ? new Date(`${data.updated}T00:00:00+05:30`) : undefined,
    category: data.category || "Insights",
    author,
    product: data.product || undefined,
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(content, { async: false }) as string,
  };
}

function all() {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(load);
}

/* Published posts, newest first. Drafts and future-dated posts are excluded. */
export function getPosts(): Post[] {
  // In local development, show scheduled posts too so they can be reviewed.
  const now = process.env.NODE_ENV === "development" ? Infinity : Date.now();
  return all()
    .filter((p) => !p.draft && p.date.getTime() <= now)
    .sort((a, b) => b.date.getTime() - a.date.getTime() || a.title.localeCompare(b.title));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getRelated(post: Post, count = 3): Post[] {
  const others = getPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}

export function formatDate(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Colombo" });
}
