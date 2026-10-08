import DigitalMarketingEnrollClient from "./DigitalMarketingEnrollClient";

export const metadata = {
  title: "Online Digital Marketing Course Fees & Pricing | Kre8ly",
  description: "Explore online digital marketing course fees & pricing. Learn SEO, PPC, social media, email marketing & more. Compare costs & choose the right course.",
  keywords: ["online digital marketing course fees", "digital marketing course pricing", "digital marketing course cost", "digital marketing course fees in ${location}"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/digital-marketing-enroll" },
  openGraph: {
    title: "Best Digital Marketing Certification in ${location} with Placement",
    description: "Join our top-rated Digital Marketing Certification in ${location}, featuring practical assignments and placement assistance to boost your career in digital marketing.",
    url: "https://www.kre8ly.com/digital-marketing-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Certification in ${location} with Placement",
    description: "Get certified in Digital Marketing with our top program in ${location}. Benefit from hands-on assignments and placement support to advance your career in marketing.",
  },
};

export default function Page() {
  return <DigitalMarketingEnrollClient />;
}
