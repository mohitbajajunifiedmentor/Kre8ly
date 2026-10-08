import WebDevClient from "./WebDevClient";

export const metadata = {
  title: "Best Online Web Development Course | Kre8ly",
  description: "Join the Best Online Web Development Course and master coding, web design, and full-stack development with expert guidance and practical projects. Enroll Now!",
  keywords: ["Web Developer Courses in ${location}", "Web Development Course Certificate", "Web Development Course with Placement", "Web Development Course in ${location}", "Best Web Development Course in ${location}", "Best Full Stack Web Development Course in ${location}", "best online web development course", "best web development course", "web application development course", "web development courses with certificates", "full stack web development course", "full stack web development course online", "full stack web development online course", "web development certification courses", "best full stack development course", "best full stack web development course", "web development courses with placement", "web developer course for beginners", "web development training course", "learn web development for beginners", "complete web development course", "full stack development course with placement", "full stack developer course with placement"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/web-development" },
  openGraph: {
    title: "Best Full Stack Web Development Course in ${location} with Placement",
    description: "This Best Full Stack Web Development Course in ${location} with Placement goes beyond just coding. It teaches how to make attractive and useful interfaces.",
    url: "https://www.kre8ly.com/web-development",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  other: { "og:type": "business.business" },
  twitter: {
    card: "summary_large_image",
    title: "Best Full Stack Web Development Course in ${location} with Placement",
    description: "This Best Full Stack Web Development Course in ${location} with Placement goes beyond just coding. It teaches how to make attractive and useful interfaces.",
  },
};

export default function Page() {
  return <WebDevClient />;
}
