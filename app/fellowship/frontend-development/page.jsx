import FrontendDeveloperFellowshipClient from "./FrontendDeveloperFellowshipClient";

export const metadata = {
  title: "Frontend Development Program with Certification | Kre8ly",
  description: "Join our Frontend Development Fellowship to master HTML, CSS, JavaScript & React. Hands-on projects & mentorship. Start your journey today!",
  keywords: ["frontend development course", "frontend developer fellowship", "learn frontend development", "frontend developer certification", "job ready frontend course", "frontend mentorship program"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/fellowship/frontend-development" },
  openGraph: {
    title: "Frontend Development Program with Certification | Kre8ly",
    description: "Join our Frontend Development Fellowship to master HTML, CSS, JavaScript & React. Hands-on projects & mentorship. Start your journey today!",
    url: "https://www.kre8ly.com/fellowship/frontend-development",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Program with Certification | Kre8ly",
    description: "Join our Frontend Development Fellowship to master HTML, CSS, JavaScript & React. Hands-on projects & mentorship. Start your journey today!",
  },
};

export default function Page() {
  return <FrontendDeveloperFellowshipClient />;
}
