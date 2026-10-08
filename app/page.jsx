import HomeClient from "./HomeClient";

export const metadata = {
  title: "Online Certification Courses in India for Jobs | Kre8ly",
  description: "Job-oriented online courses and tech fellowship programs with live mentors, real projects and placement support. Built for freshers and professionals across India.",
  keywords: ["Kre8ly", "Job-Oriented Online Courses", "Best Online Courses Platform", "Data Science Online Course", "Digital Marketing Certification", "Web Development Online Course", "Online Training Platform", "Career-Focused Certification Courses", "Best Online Courses for Jobs Skill Development Courses"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/" },
  openGraph: {
    title: "Online Certification Courses in India for Jobs | Kre8ly ",
    description: "Job-oriented online courses and tech fellowship programs with live mentors, real projects and placement support. Built for freshers and professionals across India.",
    url: "https://www.kre8ly.com/",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Online Certification Courses in India for Jobs | Kre8ly ",
    description: "Job-oriented online courses and tech fellowship programs with live mentors, real projects and placement support. Built for freshers and professionals across India.",
  },
};

export default function Page() {
  return <HomeClient />;
}
