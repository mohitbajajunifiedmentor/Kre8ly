import GrievanceOfficerClient from "./GrievanceOfficerClient";

export const metadata = {
  title: "Grievance Officer | Kre8ly",
  description: "Contact our grievance officer for complaints or concerns related to services.",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/grievance-officer" },
  openGraph: {
    title: "Grievance Officer | Kre8ly",
    description: "Contact our grievance officer for complaints or concerns related to services.",
    url: "https://unifiedmentor.com/grievance-officer",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grievance Officer | Kre8ly",
    description: "Contact our grievance officer for complaints or concerns related to services.",
  },
};

export default function Page() {
  return <GrievanceOfficerClient />;
}
