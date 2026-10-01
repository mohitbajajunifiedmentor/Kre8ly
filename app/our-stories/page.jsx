import OurStoriesClient from "./OurStoriesClient";

export const metadata = {
  title: "Our Stories | Inspiring Success Stories at Kre8ly",
  description: "Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth and success after joining our programs.",
  keywords: ["Success Stories", "Student Achievements", "Kre8ly Stories", "Career Growth", "Inspirational Stories"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/our-stories" },
  openGraph: {
    title: "Our Stories | Inspiring Success Stories at Kre8ly",
    description: "Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth and success after joining our programs.",
    url: "https://www.unifiedmentor.com/our-stories",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Our Stories | Inspiring Success Stories at Kre8ly",
    description: "Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth and success after joining our programs.",
  },
};

export default function Page() {
  return <OurStoriesClient />;
}
