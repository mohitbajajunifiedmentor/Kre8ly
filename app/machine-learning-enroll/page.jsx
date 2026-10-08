import MachineLearningEnrollClient from "./MachineLearningEnrollClient";

export const metadata = {
  title: "Machine Learning Course Fees & Packages | Kre8ly",
  description: "Get complete details on Machine Learning Course Fees at Kre8ly. Affordable pricing, expert guidance, and flexible learning options available.",
  keywords: ["machine learning course fees", "machine learning course price", "ML course fees", "machine learning online course cost", "AI course fees"],
  authors: [{ name: "Kre8ly | Machine Learning Enroll" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/machine-learning-enroll" },
  openGraph: {
    title: "Machine Learning Course Fees & Packages | Kre8ly",
    description: "Get complete details on Machine Learning Course Fees at Kre8ly. Affordable pricing, expert guidance, and flexible learning options available.",
    url: "https://www.kre8ly.com/machine-learning-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Course Fees & Packages | Kre8ly",
    description: "Get complete details on Machine Learning Course Fees at Kre8ly. Affordable pricing, expert guidance, and flexible learning options available.",
  },
};

export default function Page() {
  return <MachineLearningEnrollClient />;
}
