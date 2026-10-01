import { SITE_URL, API_BASE_URL } from "@/lib/config";

/**
 * Public sitemap.
 *
 * Replaces the old `src/generate-sitemap.js` node script that had to be run by
 * hand (`npm run generate-sitemap`) and wrote a static file into /public.
 * This regenerates on every revalidation window instead, and — like the old
 * script — pulls live blog slugs from the existing backend.
 *
 * Authenticated / private routes are deliberately excluded:
 *   /login, /dashboard*, /superadmin/*, /admin/*, /members, /addmembers,
 *   /hire-dashboard, /blog-admin*, /affiliate-dashboard*, /course/[courseId],
 *   /verify-certificate/[umid], /thank-you, /SalesPricing
 */

export const revalidate = 3600;

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/about", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fellowships", priority: 0.9, changeFrequency: "weekly" },
  { path: "/jobs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/campus-ambassador", priority: 0.7, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.7, changeFrequency: "weekly" },
  { path: "/services", priority: 0.7, changeFrequency: "weekly" },
  { path: "/placement", priority: 0.7, changeFrequency: "weekly" },
  { path: "/our-stories", priority: 0.6, changeFrequency: "weekly" },
  { path: "/mou", priority: 0.5, changeFrequency: "weekly" },
  { path: "/leaderboard", priority: 0.6, changeFrequency: "weekly" },
  { path: "/hire-from-us", priority: 0.7, changeFrequency: "weekly" },
  { path: "/refer-and-earn", priority: 0.7, changeFrequency: "weekly" },
  { path: "/press-releases", priority: 0.6, changeFrequency: "weekly" },
  { path: "/kyc_colleges_workshops", priority: 0.6, changeFrequency: "weekly" },
  { path: "/is-unified-mentor-internship-legit", priority: 0.6, changeFrequency: "weekly" },
  { path: "/machine-learning", priority: 0.9, changeFrequency: "weekly" },
  { path: "/data-science", priority: 0.9, changeFrequency: "weekly" },
  { path: "/data-analyst", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ui-ux-designer", priority: 0.9, changeFrequency: "weekly" },
  { path: "/web-development", priority: 0.9, changeFrequency: "weekly" },
  { path: "/graphic-design", priority: 0.9, changeFrequency: "weekly" },
  { path: "/web-development-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/data-analyst-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/data-science-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/ui-ux-designer-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/digital-marketing-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/machine-learning-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/graphic-design-enroll", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fellowship/full-stack-web-development", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/frontend-development", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/backend-development", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/ui-ux-designer", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/data-analyst", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/data-science", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/digital-marketing", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/financial-analyst", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/business-analyst", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fellowship/machine-learning", priority: 0.8, changeFrequency: "weekly" },
  { path: "/shipping-and-delivery", priority: 0.3, changeFrequency: "weekly" },
  { path: "/cancellation-and-refund", priority: 0.3, changeFrequency: "weekly" },
  { path: "/grievance-officer", priority: 0.3, changeFrequency: "weekly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "weekly" },
  { path: "/our-blogs", priority: 0.8, changeFrequency: "daily" },
];

async function getBlogSlugs() {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/getAllBloges`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data) ? data : data?.blogs ?? data?.data ?? [];
    return list
      .map((b) => ({ slug: b?.slug, updatedAt: b?.updatedAt || b?.updated_at }))
      .filter((b) => Boolean(b.slug));
  } catch {
    // Backend unreachable at build time: ship the static portion rather than
    // failing the build.
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogs = await getBlogSlugs();
  const blogEntries = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: b.updatedAt ? new Date(b.updatedAt) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
