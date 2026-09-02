import MachineLearningFellowshipClient from "./MachineLearningFellowshipClient";

export const metadata = {
  title: "Machine Learning Fellowship Program | Kre8ly",
  description: "Advance your skills with our Machine Learning Fellowship Program. Get hands-on training, expert mentorship & real-world projects to boost your AI career.",
  keywords: ["Machine learning fellowship", "machine learning course", "Machine Learning certification ${location}", "online Machine Learning training", "machine learning mentorship", "Machine Learning program with placement", "machine learning certification", "best Machine Learning course in ${location}."],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/machine-learning" },
  openGraph: {
    title: "Machine Learning Fellowship Program | Kre8ly",
    description: "Advance your skills with our Machine Learning Fellowship Program. Get hands-on training, expert mentorship & real-world projects to boost your AI career.",
    url: "https://www.unifiedmentor.com/fellowship/machine-learning",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Fellowship Program | Kre8ly",
    description: "Advance your skills with our Machine Learning Fellowship Program. Get hands-on training, expert mentorship & real-world projects to boost your AI career.",
  },
};

export default function Page() {
  return <MachineLearningFellowshipClient />;
}
