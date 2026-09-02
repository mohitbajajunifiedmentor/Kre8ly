import GraphicDesignEnrollClient from "./GraphicDesignEnrollClient";

export const metadata = {
  title: "Graphic Design Course Fees | Kre8ly",
  description: "Kre8ly | UI/UX Designer Enroll",
  keywords: ["Kre8ly | UI/UX Designer Enroll"],
  authors: [{ name: "Kre8ly | UI/UX Designer Enroll" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/graphic-design-enroll" },
  openGraph: {
    title: "Graphic Design Course Fees | Kre8ly",
    description: "Kre8ly | UI/UX Designer Enroll",
    url: "https://unifiedmentor.com/graphic-design-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Course Fees | Kre8ly",
    description: "Kre8ly | UI/UX Designer Enroll",
  },
};

export default function Page() {
  return <GraphicDesignEnrollClient />;
}
