import DataScienceFellowshipClient from "./DataScienceFellowshipClient";

export const metadata = {
  title: "Data Science Fellowship Program | Kre8ly",
  description: "Enroll in Kre8ly's Data Science Fellowship to gain hands-on experience, mentorship, and a strong foundation in data science with expert guidance.",
  keywords: ["data science fellowship", "data science mentorship", "data science training program", "data science certification", "online data science course", "data science career", "advanced data science program", "data science skills"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/data-science" },
  openGraph: {
    title: "Data Science Fellowship Program | Kre8ly",
    description: "Enroll in Kre8ly's Data Science Fellowship to gain hands-on experience, mentorship, and a strong foundation in data science with expert guidance.",
    url: "https://www.unifiedmentor.com/fellowship/data-science",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Fellowship Program | Kre8ly",
    description: "Enroll in Kre8ly's Data Science Fellowship to gain hands-on experience, mentorship, and a strong foundation in data science with expert guidance.",
  },
};

export default function Page() {
  return <DataScienceFellowshipClient />;
}
