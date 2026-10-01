import DataAnalystFellowshipClient from "./DataAnalystFellowshipClient";

export const metadata = {
  title: "Data Analyst Fellowship Program | Learn & Get Certified",
  description: "Join the best Data Analyst Fellowship Program at Kre8ly. Get hands-on training, expert mentorship & certification to boost your analytics career.",
  keywords: ["data analyst course", "data analyst fellowship", "data analysis training", "data analyst certification", "online data analyst course", "data analysis mentorship", "data analyst career", "advanced data analyst training"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/data-analyst" },
  openGraph: {
    title: "Data Analyst Fellowship Program | Learn & Get Certified",
    description: "Join the best Data Analyst Fellowship Program at Kre8ly. Get hands-on training, expert mentorship & certification to boost your analytics career.",
    url: "https://www.unifiedmentor.com/fellowship/data-analyst",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analyst Fellowship Program | Learn & Get Certified",
    description: "Join the best Data Analyst Fellowship Program at Kre8ly. Get hands-on training, expert mentorship & certification to boost your analytics career.",
  },
};

export default function Page() {
  return <DataAnalystFellowshipClient />;
}
