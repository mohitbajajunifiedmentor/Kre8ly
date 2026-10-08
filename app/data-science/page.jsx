import DataScienceClient from "./DataScienceClient";

export const metadata = {
  description: "Join the Best Online Data Science Course with Kre8ly. Learn data analytics, AI, and ML with real projects and expert mentors to build your career.",
  keywords: ["Data Science Course in ${location}", "Best Data Science Courses in ${location}", "Data Science Certification Course in ${location}", "Best Online Data Science Course in ${location}", "Data Science Course with Certification", "Data Science Course in ${location} with Placements", "data science course online with placement", "online data science course with placement", "data science course with placements", "data science course with placements", "data science course in ${location} with placements", "best online data science courses", "online data science course in ${location}", "full stack data science course", "data science engineering course", "best data science course with placement", "top data science courses in ${location}", "best data science course in ${location}", "best course for data science in ${location}", "best data science course with placement guarantee"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/data-science" },
  openGraph: {
    title: "Data Science Internship in ${location} with Stipend & Certification",
    description: "Join our 3-month Best Data Science course in ${location}. Learn Excel, SQL, Python,Power BI, and more. Get job-ready skills and interviews with expert guidance.",
    url: "https://www.kre8ly.com/data-science",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
    images: ["https://www.kre8ly.com/assets/logo-BQ_x2lfY.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Internship in ${location} with Stipend & Certification",
    description: "Join our 3-month Best Data Science course in ${location}. Learn Excel, SQL, Python,Power BI, and more. Get job-ready skills and interviews with expert guidance.",
    images: ["https://www.kre8ly.com/assets/logo-BQ_x2lfY.png"],
  },
};

export default function Page() {
  return <DataScienceClient />;
}
