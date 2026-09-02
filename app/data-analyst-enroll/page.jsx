import DataAnalystEnrollClient from "./DataAnalystEnrollClient";

export const metadata = {
  title: "Online Data Analyst Course Fees & Pricing | Kre8ly",
  description: "Start your journey with Kre8ly's Data Analyst Course by enrolling today. Our online course offers comprehensive training in data analysis, providing you with the skills needed to excel in the data science field.",
  keywords: ["Kre8ly", "enroll data analyst course", "data analysis enrollment", "online course registration", "data science training"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/data-analyst-enroll" },
  openGraph: {
    title: "Kre8ly | Enroll in Data Analyst Course",
    description: "Enroll now in Kre8ly's Data Analyst Course and gain essential data analysis skills. Our online program prepares you for a successful career in data science with expert instruction and hands-on experience.",
    url: "https://unifiedmentor.com/data-analyst-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Enroll in Data Analyst Course",
    description: "Enroll in Kre8ly's Data Analyst Course to develop crucial skills in data analysis. Join now and start your path to becoming a data science expert with our online course.",
  },
};

export default function Page() {
  return <DataAnalystEnrollClient />;
}
