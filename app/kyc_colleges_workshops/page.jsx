import CollegeProjectsClient from "./CollegeProjectsClient";

export const metadata = {
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/kyc_colleges_workshops" },
  openGraph: {
    url: "https://unifiedmentor.com/kyc_colleges_workshops",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <CollegeProjectsClient />;
}
