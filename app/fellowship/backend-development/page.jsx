import BackendDeveloperFellowshipClient from "./BackendDeveloperFellowshipClient";

export const metadata = {
  title: "Back-End Development Fellowship | Kre8ly",
  description: "Join our Back-End Development Fellowship to gain hands-on experience, mentorship & real-world projects. Build your backend career with Kre8ly.",
  keywords: ["backend development fellowship", "backend development course", "backend developer training", "backend programming fellowship"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/backend-development" },
  openGraph: {
    title: "Back-End Development Fellowship | Kre8ly",
    description: "Join our Back-End Development Fellowship to gain hands-on experience, mentorship & real-world projects. Build your backend career with Kre8ly.",
    url: "https://www.unifiedmentor.com/fellowship/backend-development",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Back-End Development Fellowship | Kre8ly",
    description: "Join our Back-End Development Fellowship to gain hands-on experience, mentorship & real-world projects. Build your backend career with Kre8ly.",
  },
};

export default function Page() {
  return <BackendDeveloperFellowshipClient />;
}
