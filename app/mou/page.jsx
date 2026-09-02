import MouPageClient from "./MouPageClient";

export const metadata = {
  title: "Memorandum of Understanding (MOU) | Kre8ly",
  description: "Explore the MOU between Kre8ly and industry partners. Learn how we collaborate to enhance learning opportunities and career growth.",
  keywords: ["MOU", "Kre8ly", "industry collaboration", "career growth", "learning opportunities"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/mou" },
  openGraph: {
    title: "Memorandum of Understanding (MOU) | Kre8ly",
    description: "Explore the MOU between Kre8ly and industry partners. Learn how we collaborate to enhance learning opportunities and career growth.",
    url: "https://www.unifiedmentor.com/mou",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorandum of Understanding (MOU) | Kre8ly",
    description: "Explore the MOU between Kre8ly and industry partners. Learn how we collaborate to enhance learning opportunities and career growth.",
  },
};

export default function Page() {
  return <MouPageClient />;
}
