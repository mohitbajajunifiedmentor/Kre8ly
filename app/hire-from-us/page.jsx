import HireFromUsClient from "./HireFromUsClient";

export const metadata = {
  title: "Hire Job-Ready Tech Talent | Kre8ly",
  description: "Connect with industry-trained, job-ready tech professionals from Kre8ly. Hire skilled candidates for data science, AI, and software roles today.",
  keywords: ["hire interns", "hire freshers", "job-ready talent", "tech interns", "data science interns", "digital marketing interns"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/hire-from-us" },
  openGraph: {
    title: "Hire Job-Ready Tech Talent | Kre8ly",
    description: "Connect with industry-trained, job-ready tech professionals from Kre8ly. Hire skilled candidates for data science, AI, and software roles today.",
    url: "https://www.unifiedmentor.com/hire-from-us",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Job-Ready Tech Talent | Kre8ly",
    description: "Connect with industry-trained, job-ready tech professionals from Kre8ly. Hire skilled candidates for data science, AI, and software roles today.",
  },
};

export default function Page() {
  return <HireFromUsClient />;
}
