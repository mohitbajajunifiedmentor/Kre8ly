import FullStackWebDevelopmentClient from "./FullStackWebDevelopmentClient";

export const metadata = {
  title: "Full Stack Web Development Fellowship Program | Kre8ly",
  description: "Join our Full Stack Web Development Fellowship Program to master front-end and back-end skills. A practical, job-ready software development fellowship.",
  keywords: ["full stack web development course", "full stack fellowship program", "full stack developer course ${location}", "full stack mentorship program"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/full-stack-web-development" },
  openGraph: {
    title: "Full Stack Web Development Fellowship Program | Kre8ly",
    description: "Join our Full Stack Web Development Fellowship Program to master front-end and back-end skills. A practical, job-ready software development fellowship.",
    url: "https://www.unifiedmentor.com/fellowship/full-stack-web-development",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Web Development Fellowship Program | Kre8ly",
    description: "Join our Full Stack Web Development Fellowship Program to master front-end and back-end skills. A practical, job-ready software development fellowship.",
  },
};

export default function Page() {
  return <FullStackWebDevelopmentClient />;
}
