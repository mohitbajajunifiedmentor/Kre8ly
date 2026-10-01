import HomeClient from "./HomeClient";

export const metadata = {
  title: "Kre8ly: Top Online Courses Platform & Training",
  description: "We offer the best job-oriented online certification courses in data science, digital marketing, web development and more. Join the best online courses platform.",
  keywords: ["Kre8ly", "Job-Oriented Online Courses", "Best Online Courses Platform", "Data Science Online Course", "Digital Marketing Certification", "Web Development Online Course", "Online Training Platform", "Career-Focused Certification Courses", "Best Online Courses for Jobs Skill Development Courses"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/" },
  openGraph: {
    title: "Kre8ly: Online Certification Courses & Live Training",
    description: "We offer the best job-oriented online certification courses in data science, digital marketing, web development and more. Join the best online courses platform.",
    url: "https://www.unifiedmentor.com/",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly: Online Certification Courses & Live Training",
    description: "We offer the best job-oriented online certification courses in data science, digital marketing, web development and more. Join the best online courses platform.",
  },
};

export default function Page() {
  return <HomeClient />;
}
