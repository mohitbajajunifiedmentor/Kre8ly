import BusinessAnalystFellowshipClient from "./BusinessAnalystFellowshipClient";

export const metadata = {
  title: "Business Analyst Internship Program Online | Kre8ly",
  description: "Learn business analysis online with mentors: SQL, Excel, Power BI, real projects and a certificate. For freshers across India. From ₹399.",
  keywords: ["Business Analyst fellowship program", "Business Analyst training", "Business Analyst mentorship", "Business Analyst certification", "online Business Analyst course", "Business Analyst program", "Business Analyst skills", "Business Analyst career development"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/business-analyst" },
  openGraph: {
    title: "Business Analyst Internship Program Online | Kre8ly",
    description: "Learn business analysis online with mentors: SQL, Excel, Power BI, real projects and a certificate. For freshers across India. From ₹399.",
    url: "https://www.kre8ly.com/fellowship/business-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Analyst Internship Program Online | Kre8ly",
    description: "Learn business analysis online with mentors: SQL, Excel, Power BI, real projects and a certificate. For freshers across India. From ₹399.",
  },
};

export default function Page() {
  return <BusinessAnalystFellowshipClient />;
}
