import ServicePageClient from "./ServicePageClient";

export const metadata = {
  title: "Kre8ly | Full-Service Digital Solutions",
  description: "Get top-notch Web, Software, Mobile App Development & Digital Marketing services from Kre8ly. Scalable, smart, and tailored to your business needs.",
  keywords: ["web development services", "software development", "mobile app development", "digital marketing services"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/services" },
  openGraph: {
    title: "Kre8ly: Welcome to Kre8ly",
    description: "At Kre8ly, we are dedicated to helping businesses thrive in the digital age. Our mission is to empower you with innovative solutions, designed to transform your online presence and drive success.",
    url: "https://www.kre8ly.com/services",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
    images: ["https://www.kre8ly.com/img/logo-blue.png"],
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly: Welcome to Kre8ly",
    description: "At Kre8ly, we are dedicated to helping businesses thrive in the digital age. Our mission is to empower you with innovative solutions, designed to transform your online presence and drive success.",
    images: ["https://www.kre8ly.com/img/logo-blue.png"],
  },
};

export default function Page() {
  return <ServicePageClient />;
}
