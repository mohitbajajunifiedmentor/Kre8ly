import DigitalMarketingFellowshipClient from "./DigitalMarketingFellowshipClient";

export const metadata = {
  title: "Digital Marketing Internship Courses Online | Kre8ly",
  description: "Learn SEO, Google Ads and social media marketing online with mentors. Real projects, certificate, work-from-home friendly. For freshers in India.",
  keywords: ["Digital marketing course", "Digital marketing fellowship", "Digital marketing program", "Digital marketing training", "Digital marketing mentorship", "Online digital marketing course", "Digital marketing certification", "Digital marketing skills development"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Internship Courses Online | Kre8ly",
    description: "Learn SEO, Google Ads and social media marketing online with mentors. Real projects, certificate, work-from-home friendly. For freshers in India.",
    url: "https://www.kre8ly.com/fellowship/digital-marketing",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Internship Courses Online | Kre8ly",
    description: "Learn SEO, Google Ads and social media marketing online with mentors. Real projects, certificate, work-from-home friendly. For freshers in India.",
  },
};

export default function Page() {
  return <DigitalMarketingFellowshipClient />;
}
