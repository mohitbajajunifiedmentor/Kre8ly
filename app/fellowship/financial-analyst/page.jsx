import FinancialAnalystFellowshipClient from "./FinancialAnalystFellowshipClient";

export const metadata = {
  title: "Online Financial Analyst Internship Program | Kre8ly",
  description: "Learn financial analysis online with mentors: Excel, financial statements, Python and real projects, plus placement support. Starts at ₹399.",
  keywords: ["financial analyst fellowship", "financial analyst course", "financial analysis training", "online financial analyst course", "finance mentorship program", "financial analysis certification", "career in financial analysis", "financial analyst program"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/financial-analyst" },
  openGraph: {
    title: "Online Financial Analyst Internship Program | Kre8ly",
    description: "Learn financial analysis online with mentors: Excel, financial statements, Python and real projects, plus placement support. Starts at ₹399.",
    url: "https://www.kre8ly.com/fellowship/financial-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Financial Analyst Internship Program | Kre8ly",
    description: "Learn financial analysis online with mentors: Excel, financial statements, Python and real projects, plus placement support. Starts at ₹399.",
  },
};

export default function Page() {
  return <FinancialAnalystFellowshipClient />;
}
