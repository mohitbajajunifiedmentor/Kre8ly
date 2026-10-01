import JobsPageClient from "./JobsPageClient";

export const metadata = {
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/jobs" },
  openGraph: {
    url: "https://unifiedmentor.com/jobs",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <JobsPageClient />;
}
