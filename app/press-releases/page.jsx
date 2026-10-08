import PressPageClient from "./PressPageClient";

export const metadata = {
  title: "Press Releases & Media Updates - Kre8ly",
  description: "Stay updated with the latest press releases, media coverage, and announcements from Kre8ly – your source for learning, growth, and career success.",
  keywords: ["Kre8ly press", "media coverage", "education news", "Kre8ly updates", "edtech news"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/press-releases" },
  openGraph: {
    title: "Press Releases & Media Updates - Kre8ly",
    description: "Stay updated with the latest press releases, media coverage, and announcements from Kre8ly – your source for learning, growth, and career success.",
    url: "https://www.kre8ly.com/press-releases",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Releases & Media Updates - Kre8ly",
    description: "Stay updated with the latest press releases, media coverage, and announcements from Kre8ly – your source for learning, growth, and career success.",
  },
};

export default function Page() {
  return <PressPageClient />;
}
