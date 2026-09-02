import FinancialAnalystFellowshipClient from "./FinancialAnalystFellowshipClient";

export const metadata = {
  title: "Financial Analyst Fellowship Program | Kre8ly",
  description: "Accelerate your career with Kre8ly's Financial Analyst Fellowship. Learn financial analysis from experts & get hands-on training. Apply now!",
  keywords: ["financial analyst fellowship", "financial analyst course", "financial analysis training", "online financial analyst course", "finance mentorship program", "financial analysis certification", "career in financial analysis", "financial analyst program"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/financial-analyst" },
  openGraph: {
    title: "Financial Analyst Fellowship Program | Kre8ly",
    description: "Accelerate your career with Kre8ly's Financial Analyst Fellowship. Learn financial analysis from experts & get hands-on training. Apply now!",
    url: "https://www.unifiedmentor.com/fellowship/financial-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Analyst Fellowship Program | Kre8ly",
    description: "Accelerate your career with Kre8ly's Financial Analyst Fellowship. Learn financial analysis from experts & get hands-on training. Apply now!",
  },
};

export default function Page() {
  return <FinancialAnalystFellowshipClient />;
}
