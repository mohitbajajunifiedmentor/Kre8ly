import UIUXFellowshipClient from "./UIUXFellowshipClient";

export const metadata = {
  title: "UI/UX Designer Fellowship Program | Kre8ly",
  description: "Join our UI/UX Designer Fellowship to master design tools, real projects & expert mentorship. Build a career in design with job support in just 3 months",
  keywords: ["UI UX design course", "UI UX fellowship", "UI UX designer program", "UI UX training with placement", "UI UX design mentorship", "UI UX certification ${location}", "online UI UX course"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.unifiedmentor.com/fellowship/ui-ux-designer" },
  openGraph: {
    title: "UI/UX Designer Fellowship Program | Kre8ly",
    description: "Join our UI/UX Designer Fellowship to master design tools, real projects & expert mentorship. Build a career in design with job support in just 3 months",
    url: "https://www.unifiedmentor.com/fellowship/ui-ux-designer",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Designer Fellowship Program | Kre8ly",
    description: "Join our UI/UX Designer Fellowship to master design tools, real projects & expert mentorship. Build a career in design with job support in just 3 months",
  },
};

export default function Page() {
  return <UIUXFellowshipClient />;
}
