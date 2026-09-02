import CancellationClient from "./CancellationClient";

export const metadata = {
  title: "Cancellation and Refund Policy | Kre8ly",
  description: "Read Kre8ly's clear and fair cancellation and refund policy. Understand your options for cancellations and refund requests with ease.",
  keywords: ["cancellation policy", "refund policy", "Kre8ly", "course refund", "cancellation request"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/cancellation-and-refund" },
  openGraph: {
    title: "Cancellation and Refund Policy | Kre8ly",
    description: "Read Kre8ly's clear and fair cancellation and refund policy. Understand your options for cancellations and refund requests with ease.",
    url: "https://unifiedmentor.com/cancellation-and-refund",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Cancellation and Refund",
    description: "Kre8ly's guide on cancellation and refund policies for online courses. Find out more about our process and policies.",
  },
};

export default function Page() {
  return <CancellationClient />;
}
