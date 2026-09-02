/**
 * Server-side metadata for /blog/[slug].
 *
 * The old page only had a client-side <Helmet>, which meant crawlers that do not
 * execute JS saw the generic index.html <title>. This resolves the same fields
 * on the server from the same existing backend endpoint, so the tags are now in
 * the initial HTML. The <Helmet> block inside BlogDetailPage is untouched and
 * still updates the head on client-side navigation.
 */

import { API_BASE_URL, SITE_URL } from "@/lib/config";

const FALLBACK = {
  title: "Kre8ly Blog",
  description:
    "Insights on Data Science, Technology, Marketing, Web Development and Career Advice from Kre8ly.",
};

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    // Backend unreachable at build time — fall back to generic metadata rather
    // than failing the build.
    return null;
  }
}

export async function buildBlogMetadata(slug) {
  const blog = await getBlogBySlug(slug);

  const title = blog?.title || FALLBACK.title;
  const description = blog?.meta_description || FALLBACK.description;
  const canonical = blog?.canonical_url || `${SITE_URL}/blog/${slug}`;
  const image = blog?.image || undefined;
  const keywords = blog?.meta_keywords
    ? String(blog.meta_keywords)
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : undefined;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Kre8ly" }],
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Kre8ly",
      type: "article",
      locale: "en_IN",
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
