import SalesPricingClient from "./SalesPricingClient";

export const metadata = {
  title: "Secure Checkout | Kre8ly",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/SalesPricing" },
  openGraph: {
    title: "Secure Checkout | Kre8ly",
    url: "https://unifiedmentor.com/SalesPricing",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Checkout | Kre8ly",
  },
};

export default function Page() {
  return <SalesPricingClient />;
}
