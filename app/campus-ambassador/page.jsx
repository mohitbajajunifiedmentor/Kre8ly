import ContestHomeClient from "./ContestHomeClient";

export const metadata = {
  title: "Become a Campus Ambassador | Kre8ly Internship Program",
  description: "Join Kre8ly's Campus Ambassador Program! Gain leadership skills, earn rewards, and boost your career with our exclusive internship opportunities.",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unifiedmentor.com/campus-ambassador" },
  openGraph: {
    title: "Become a Campus Ambassador | Kre8ly Internship Program",
    description: "Join Kre8ly's Campus Ambassador Program! Gain leadership skills, earn rewards, and boost your career with our exclusive internship opportunities.",
    url: "https://unifiedmentor.com/campus-ambassador",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Campus Ambassador | Kre8ly Internship Program",
    description: "Join Kre8ly's Campus Ambassador Program! Gain leadership skills, earn rewards, and boost your career with our exclusive internship opportunities.",
  },
};

export default function Page() {
  return <ContestHomeClient />;
}
