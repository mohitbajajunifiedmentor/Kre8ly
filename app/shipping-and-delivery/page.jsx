import ShippingDeliveryClient from "./ShippingDeliveryClient";

export const metadata = {
  title: "Shipping & Delivery Information | Kre8ly",
  description: "At Kre8ly, all courses are digitally delivered through our LMS, ensuring quick and easy access to your learning materials with no physical shipping required.",
  keywords: ["Kre8ly", "EdTech", "online learning", "digital courses"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/shipping-and-delivery" },
  openGraph: {
    title: "Shipping & Delivery Information | Kre8ly",
    description: "At Kre8ly, all courses are digitally delivered through our LMS, ensuring quick and easy access to your learning materials with no physical shipping required.",
    url: "https://unifiedmentor.com/shipping-and-delivery",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Information | Kre8ly",
    description: "At Kre8ly, all courses are digitally delivered through our LMS, ensuring quick and easy access to your learning materials with no physical shipping required.",
  },
};

export default function Page() {
  return <ShippingDeliveryClient />;
}
