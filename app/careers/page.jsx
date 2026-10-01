import CareerClient from "./CareerClient";

export const metadata = {
  title: "Careers at Kre8ly | Internships & Campus Roles in EdTech",
  description: "Join Kre8ly as a Campus Ambassador, Developer, Designer, or Intern. Grow your skills with exciting roles in our fast-growing EdTech startup.",
  keywords: ["Kre8ly", "careers", "job opportunities", "online education", "join our team"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/careers" },
  openGraph: {
    title: "Kre8ly | Careers",
    description: "Join Kre8ly's team and contribute to transforming online education. Discover job opportunities and become a part of our mission to innovate and excel in online learning.",
    url: "https://www.unifiedmentor.com/careers",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Careers",
    description: "Discover career opportunities at Kre8ly. Join our innovative team and help shape the future of online education. Learn more about available positions and how to apply.",
  },
};

export default function Page() {
  return <CareerClient />;
}
