import FellowshipOverviewPageClient from "./FellowshipOverviewPageClient";

export const metadata = {
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/fellowships" },
  openGraph: {
    url: "https://unifiedmentor.com/fellowships",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <FellowshipOverviewPageClient />;
}
