import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Kre8ly | Our Mission & Team",
  description: "Discover the story behind Kre8ly. Meet the team, explore our journey, and see how we're redefining global tech hiring with innovation and integrity.",
  keywords: ["Kre8ly", "about", "Kre8ly", "about us", "Kre8ly about", "Kre8ly about us"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/about" },
  openGraph: {
    title: "About Kre8ly | Our Mission & Team",
    description: "Discover the story behind Kre8ly. Meet the team, explore our journey, and see how we're redefining global tech hiring with innovation and integrity.",
    url: "https://unifiedmentor.com/about",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kre8ly | Our Mission & Team",
    description: "Discover the story behind Kre8ly. Meet the team, explore our journey, and see how we're redefining global tech hiring with innovation and integrity.",
  },
};

export default function Page() {
  return <AboutPageClient />;
}
