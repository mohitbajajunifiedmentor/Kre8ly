import FellowShipHomeClient from "./FellowShipHomeClient";

export const metadata = {
  title: "Home",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/fellowship" },
  openGraph: {
    title: "Home",
    url: "https://unifiedmentor.com/fellowship",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
  },
};

export default function Page() {
  return <FellowShipHomeClient />;
}
