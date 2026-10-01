import InternShipTermsConditionsClient from "./InternShipTermsConditionsClient";

export const metadata = {
  title: "Kre8ly | Internship Terms & Conditions",
  description: "Review the terms and conditions for internships at Kre8ly. Understand our policies, eligibility criteria, and guidelines for a successful internship experience.",
  keywords: ["internship terms", "internship conditions", "Kre8ly internship", "internship agreement", "internship policies"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/internship-terms-and-conditions" },
  openGraph: {
    title: "Kre8ly | Internship Terms & Conditions",
    description: "Explore the terms and conditions for internships at Kre8ly. Learn about our policies, eligibility, and guidelines to ensure a successful internship experience.",
    url: "https://www.unifiedmentor.com/internship-terms-and-conditions",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Internship Terms & Conditions",
    description: "Understand the terms and conditions for Kre8ly internships. Get details on our policies, eligibility, and guidelines to make the most of your internship opportunity.",
  },
};

export default function Page() {
  return <InternShipTermsConditionsClient />;
}
