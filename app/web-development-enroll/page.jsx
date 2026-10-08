import WebDevelopmentEnrollClient from "./WebDevelopmentEnrollClient";

export const metadata = {
  title: "Full Stack Web Development Course Fees | Kre8ly",
  description: "Start your Full Stack Web Development journey at just ₹4449! Learn HTML, CSS, JS, React & more with hands-on projects. Enroll now at Kre8ly!",
  keywords: ["full stack web development course fees", "full stack developer course cost", "web development course fees", "full stack course pricing", "full stack course fees in ${location}", "affordable full stack web development course"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/web-development-enroll" },
  openGraph: {
    title: "Kre8ly | Web Development Course Pricing",
    description: "Discover the pricing for Kre8ly's Web Development Course. Find flexible and affordable options to start your journey to becoming a skilled web developer with our online course and certification.",
    url: "https://www.kre8ly.com/web-development-enroll",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly | Web Development Course Pricing",
    description: "Check out the pricing for Kre8ly's Web Development Course. Choose from flexible and affordable options to enhance your coding skills and advance your career with our online certification.",
  },
};

export default function Page() {
  return <WebDevelopmentEnrollClient />;
}
