/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Sequelize aur uske Postgres drivers native/dynamic requires use karte hain,
  // isliye Next.js inhe bundle na kare — seedha Node.js se require honge.
  serverExternalPackages: ["sequelize", "pg", "pg-hstore"],

  images: {
    // Remote images served by the existing backend / CDNs the app already uses.
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "official-website-mern-backend-1023229424452.asia-south2.run.app" },
      { protocol: "https", hostname: "certificate-backend-peach.vercel.app" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Preserve the URLs the old sitemap/robots pointed at.
  async redirects() {
    return [
      // The Vite build shipped a hand-generated /sitemap.xml in /public.
      // app/sitemap.js now serves that path natively, so nothing to redirect,
      // but keep legacy trailing-slash variants working.
      { source: "/sitemap.xml/", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
