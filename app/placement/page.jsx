import PlacementPageClient from "./PlacementPageClient";

export const metadata = {
  title: "Explore Placement Opportunities | Kre8ly",
  description: "Get placed at top companies like Amazon, TCS, Accenture, Natixis & more with Kre8ly’s support. Join our successful learners and launch your career!",
  keywords: ["job placement support", "career assistance", "student placements skill-based placements"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/placement" },
  openGraph: {
    title: "Checkout our Star Alumni",
    description: "Elevate your career journey with our expert mentorship program, providing tailored guidance, real-world skills, and seamless job placement support.",
    url: "https://www.unifiedmentor.com/placement",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Checkout our Star Alumni",
    description: "Elevate your career journey with our expert mentorship program, providing tailored guidance, real-world skills, and seamless job placement support.",
  },
};

export default function Page() {
  return <PlacementPageClient />;
}
