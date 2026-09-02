import GraphicDesignPageClient from "./GraphicDesignPageClient";

export const metadata = {
  title: "Top Online Graphic Design Course | Kre8ly",
  description: "Level up your design skills with Kre8ly’s top online graphic design course. Learn practical tools & projects—Check now!",
  keywords: ["Graphic Design Course in ${location}", "Best Graphic Design Course in ${location}", "Graphic Design Certification Course in ${location}", "Best Online Graphic Design Course in ${location}", "Graphic Design Course with Certification", "Graphic Design Course in ${location} with Placements", "best course for graphic designing", "best graphic design courses", "which course is best for graphic design", "best graphic design courses in ${location}", "graphic design course with placement", "graphic design courses in ${location}", "best online graphic design certificate programs", "top online graphic design programs", "best graphic design certificate", "best graphic design certificate programs", "best graphic design certificate programs", "best online classes for graphic design", "graphic design and web design courses", "complete graphic design course", "best graphic designer course online", "top online graphic design courses", "online graphic design courses with certificates", "advanced graphic design course online", "best graphic designer online course"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/graphic-design" },
  openGraph: {
    title: "Best Graphic Design Course in ${location} with Placement",
    description: "Level up your design skills with Kre8ly’s top online graphic design course. Learn practical tools & projects—Check now!",
    url: "https://www.unifiedmentor.com/graphic-design",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Best Graphic Design Course in ${location} with Placement",
    description: "Level up your design skills with Kre8ly’s top online graphic design course. Learn practical tools & projects—Check now!",
  },
};

export default function Page() {
  return <GraphicDesignPageClient />;
}
