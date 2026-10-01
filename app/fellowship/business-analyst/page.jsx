import BusinessAnalystFellowshipClient from "./BusinessAnalystFellowshipClient";

export const metadata = {
  title: "Business Analyst Fellowship Program | Kre8ly",
  description: "Advance your career with the Business Analyst Fellowship Program at Kre8ly. Gain essential skills, mentorship, and certification in business analysis.",
  keywords: ["Business Analyst fellowship program", "Business Analyst training", "Business Analyst mentorship", "Business Analyst certification", "online Business Analyst course", "Business Analyst program", "Business Analyst skills", "Business Analyst career development"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/business-analyst" },
  openGraph: {
    title: "Business Analyst Fellowship Program | Kre8ly",
    description: "Advance your career with the Business Analyst Fellowship Program at Kre8ly. Gain essential skills, mentorship, and certification in business analysis.",
    url: "https://www.unifiedmentor.com/fellowship/business-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Analyst Fellowship Program | Kre8ly",
    description: "Advance your career with the Business Analyst Fellowship Program at Kre8ly. Gain essential skills, mentorship, and certification in business analysis.",
  },
};

export default function Page() {
  return <BusinessAnalystFellowshipClient />;
}
