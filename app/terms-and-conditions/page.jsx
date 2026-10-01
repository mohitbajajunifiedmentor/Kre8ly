import TermsConditionsClient from "./TermsConditionsClient";

export const metadata = {
  title: "Terms and Conditions | Kre8ly",
  description: "Explore the terms and conditions for using Kre8ly's platform. Understand your rights, obligations, and rules for using our educational services.",
  keywords: ["terms and conditions", "Kre8ly", "internship terms and conditions"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | Kre8ly",
    description: "Explore the terms and conditions for using Kre8ly's platform. Understand your rights, obligations, and rules for using our educational services.",
    url: "https://unifiedmentor.com/terms-and-conditions",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Kre8ly",
    description: "Explore the terms and conditions for using Kre8ly's platform. Understand your rights, obligations, and rules for using our educational services.",
  },
};

export default function Page() {
  return <TermsConditionsClient />;
}
