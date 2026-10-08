import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata = {
  title: "Best Online Digital Marketing Course Kre8ly",
  description: "Join Kre8ly’s Best Online Digital Marketing Course and learn SEO, ads, and content marketing with hands-on projects. Check & enroll now!",
  keywords: ["Digital Marketing Course in ${location}", "Best Digital Marketing Course in ${location}", "Digital Marketing Certification Course in ${location}", "Best Online Digital Marketing Course in ${location}", "Digital Marketing Course with Certification", "Digital Marketing Course in ${location} with Placements", "digital marketing training with placement", "digital marketing training and placement", "online digital marketing course with placement", "digital marketing course online with placement", "digital marketing placement", "best course in digital marketing in ${location}", "best courses for digital marketing in ${location} online", "top digital marketing courses in ${location}", "digital marketing course after 12th", "best online digital marketing programs", "digital marketing training program", "digital marketing training courses", "digital marketing certificate programs", "advanced digital marketing course online", "best online digital marketing courses", "digital marketing course after 10th"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/digital-marketing" },
  openGraph: {
    title: "Best Digital Marketing Certification in ${location} with Placement",
    description: "Join our 2-month Digital Marketing Course in ${location} with practical training, online classes, job placement guidance, and government-approved certification.",
    url: "https://www.kre8ly.com/digital-marketing",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Certification in ${location} with Placement",
    description: "Join our 2-month Digital Marketing Course in ${location} with practical training, online classes, job placement guidance, and government-approved certification.",
  },
};

export default function Page() {
  return <DigitalMarketingClient />;
}
