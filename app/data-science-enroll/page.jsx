import DataScienceEnrollClient from "./DataScienceEnrollClient";

export const metadata = {
  title: "Online Data Science Course Fees & Price | Kre8ly",
  description: "Discover Online Data Science Course Fees & Price at Kre8ly. Learn Python, ML, SQL & more with hands-on projects. Enroll now!",
  keywords: ["Online Data Science Course Fees", "Data Science Course Price", "Data Science Course Fees", "Online Data Science Course", "Affordable Data Science Course", "Data Science Course Cost Online"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/data-science-enroll" },
  openGraph: {
    title: "Kre8ly | Enroll in Data Science Course",
    description: "Enroll now in Kre8ly's Data Science Course to acquire vital data science skills. Our online course offers in-depth training and practical experience to prepare you for a successful career in data science.",
    url: "https://www.unifiedmentor.com/data-science-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Enroll in Data Science Course",
    description: "Discover Kre8ly's Data Science Course. Enroll now to gain key skills in data science and advance your career with our comprehensive online training.",
  },
};

export default function Page() {
  return <DataScienceEnrollClient />;
}
