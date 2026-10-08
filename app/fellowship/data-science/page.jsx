import DataScienceFellowshipClient from "./DataScienceFellowshipClient";

export const metadata = {
  title: "Online Data Science Internship Program in India | Kre8ly",
  description: "Learn data science with Python in an online internship program with mentors, real projects and a certificate. For students and freshers across India.",
  keywords: ["data science fellowship", "data science mentorship", "data science training program", "data science certification", "online data science course", "data science career", "advanced data science program", "data science skills"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/data-science" },
  openGraph: {
    title: "Online Data Science Internship Program in India | Kre8ly",
    description: "Learn data science with Python in an online internship program with mentors, real projects and a certificate. For students and freshers across India.",
    url: "https://www.kre8ly.com/fellowship/data-science",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Data Science Internship Program in India | Kre8ly",
    description: "Learn data science with Python in an online internship program with mentors, real projects and a certificate. For students and freshers across India.",
  },
};

export default function Page() {
  return <DataScienceFellowshipClient />;
}
