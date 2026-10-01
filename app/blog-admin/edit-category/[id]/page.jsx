import EditCategoryClient from "./EditCategoryClient";

export const metadata = {
  authors: [{ name: "Kre8ly" }],
  robots: { index: false, follow: false },
  openGraph: {
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <EditCategoryClient />;
}
