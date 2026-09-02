import { SITE_URL } from "@/lib/config";

/**
 * Replaces the static `public/robots.txt`.
 *
 * The old file allowed everything. That was fine for a client-rendered SPA
 * (crawlers only ever saw index.html) but under Next.js the admin, dashboard and
 * affiliate routes are real server-rendered URLs, so they are disallowed here to
 * keep them out of the index. Public content is still fully crawlable.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/members",
          "/addmembers",
          "/dashboard",
          "/superadmin/",
          "/admin/",
          "/hire-dashboard",
          "/blog-admin",
          "/affiliate-dashboard",
          "/verify-certificate/",
          "/course/",
          "/thank-you",
          "/SalesPricing",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
