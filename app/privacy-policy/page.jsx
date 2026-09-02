import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy - Kre8ly",
  description: "Read Kre8ly's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy matters to us.",
  keywords: ["Privacy Policy", "Kre8ly", "Personal Information", "Data Protection", "User Privacy"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/privacy-policy" },
  openGraph: {
    title: "Kre8ly | Privacy Policy",
    description: "Learn about how Kre8ly handles your personal information with our comprehensive Privacy Policy. Your privacy and data protection are our priorities.",
    url: "https://unifiedmentor.com/privacy-policy",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Privacy Policy",
    description: "Read Kre8ly's Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy is important to us.",
  },
};

export default function Page() {
  return <PrivacyClient />;
}
