import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: "Contact Kre8ly | We&apos;re Here to Help",
  description: "Reach out to Kre8ly at +91 08645322947 or email hello@kre8ly.com for queries about courses, support, or partnerships.",
  keywords: ["Kre8ly", "contact us", "customer support", "online education", "get in touch"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/contact-us" },
  openGraph: {
    title: "Kre8ly | Contact Us",
    description: "Reach out to Kre8ly through our contact page. Find all the necessary details to get in touch with our team for support, inquiries, or feedback about our online education platform.",
    url: "https://www.unifiedmentor.com/contact-us",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Contact Us",
    description: "Contact Kre8ly for support or inquiries. Our contact page includes all the details you need to get in touch with us about our online courses and services.",
  },
};

export default function Page() {
  return <ContactUsClient />;
}
