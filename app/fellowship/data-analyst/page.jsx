import DataAnalystFellowshipClient from "./DataAnalystFellowshipClient";

export const metadata = {
  title: "Data Analyst Internship Programs Online in India | Kre8ly",
  description: "Join Kre8ly's online data analyst internship program: learn Excel, SQL, Python and Power BI, build real projects and get mentor guidance. Starts at ₹399.",
  keywords: ["data analyst course", "data analyst fellowship", "data analysis training", "data analyst certification", "online data analyst course", "data analysis mentorship", "data analyst career", "advanced data analyst training"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/data-analyst" },
  openGraph: {
    title: "Data Analyst Internship Programs Online in India | Kre8ly",
    description: "Join Kre8ly's online data analyst internship program: learn Excel, SQL, Python and Power BI, build real projects and get mentor guidance. Starts at ₹399.",
    url: "https://www.kre8ly.com/fellowship/data-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analyst Internship Programs Online in India | Kre8ly",
    description: "Join Kre8ly's online data analyst internship program: learn Excel, SQL, Python and Power BI, build real projects and get mentor guidance. Starts at ₹399.",
  },
};

export default function Page() {
  return <DataAnalystFellowshipClient />;
}
