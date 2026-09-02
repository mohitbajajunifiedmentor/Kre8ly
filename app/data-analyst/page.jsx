import DataAnalystClient from "./DataAnalystClient";

export const metadata = {
  title: "Kre8ly | Data Analyst Course",
  description: "Enroll in Kre8ly's Data Analyst Course to master data analysis skills. Our comprehensive online course covers key techniques and tools to help you become a proficient data analyst and advance your career in data science.",
  keywords: ["Kre8ly", "data analyst course", "data analysis", "online course", "data science", "analytics training"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/data-analyst" },
  openGraph: {
    title: "Kre8ly | Data Analyst Course",
    description: "Join Kre8ly's Data Analyst Course to gain essential skills in data analysis. Learn from industry experts and prepare for a successful career in data science with our online training.",
    url: "https://unifiedmentor.com/data-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Data Analyst Course",
    description: "Explore Kre8ly's Data Analyst Course. Enhance your data analysis skills and advance your career with our expert-led online training program.",
  },
};

export default function Page() {
  return <DataAnalystClient />;
}
