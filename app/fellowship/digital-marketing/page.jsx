import DigitalMarketingFellowshipClient from "./DigitalMarketingFellowshipClient";

export const metadata = {
  title: "Digital Marketing Fellowship Program | Kre8ly",
  description: "Unlock your digital marketing career with our fellowship program at Kre8ly. Gain practical skills and mentorship with industry experts. Apply now!",
  keywords: ["Digital marketing course", "Digital marketing fellowship", "Digital marketing program", "Digital marketing training", "Digital marketing mentorship", "Online digital marketing course", "Digital marketing certification", "Digital marketing skills development"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Fellowship Program | Kre8ly",
    description: "Unlock your digital marketing career with our fellowship program at Kre8ly. Gain practical skills and mentorship with industry experts. Apply now!",
    url: "https://www.unifiedmentor.com/fellowship/digital-marketing",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Fellowship Program | Kre8ly",
    description: "Unlock your digital marketing career with our fellowship program at Kre8ly. Gain practical skills and mentorship with industry experts. Apply now!",
  },
};

export default function Page() {
  return <DigitalMarketingFellowshipClient />;
}
