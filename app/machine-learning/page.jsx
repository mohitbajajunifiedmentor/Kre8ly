import MachineLearningClient from "./MachineLearningClient";

export const metadata = {
  title: "Best Online Machine Learning Course | Kre8ly",
  description: "Master AI & ML with Kre8ly’s Best Online Machine Learning Course. Learn from experts, build real projects & boost your career. Enroll now!",
  keywords: ["Machine Learning Course in ${location}", "Best Machine Learning Course in ${location}", "Machine Learning Certification Course in ${location}", "Best Online Machine Learning Course in ${location}", "Machine Learning Course with Certification", "Machine Learning Course in ${location} with Placements", "best online course to learn machine learning", "best courses machine learning", "best deep learning course online", "best online machine learning courses", "machine learning expert course in ${location}", "top machine learning courses in ${location}", "machine learning certification in ${location}", "ai machine learning courses in ${location}", "machine learning course online ${location}", "machine learning certification programs", "best online course for ml", "best online certification courses for machine learning", "machine learning online training", "machine learning classes online", "best machine learning course with placement", "machine learning course with placement"],
  authors: [{ name: "Kre8ly | Machine Learning" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/machine-learning" },
  openGraph: {
    title: "Best Online Machine Learning Course | Kre8ly",
    description: "Master AI & ML with Kre8ly’s Best Online Machine Learning Course. Learn from experts, build real projects & boost your career. Enroll now!",
    url: "https://www.unifiedmentor.com/machine-learning",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Machine Learning Course | Kre8ly",
    description: "Master AI & ML with Kre8ly’s Best Online Machine Learning Course. Learn from experts, build real projects & boost your career. Enroll now!",
  },
};

export default function Page() {
  return <MachineLearningClient />;
}
