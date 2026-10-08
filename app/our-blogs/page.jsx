import BlogHomeClient from "./BlogHomeClient";

export const metadata = {
  title: "Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career",
  description: "Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips.",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/our-blogs" },
  openGraph: {
    title: "Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career",
    description: "Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips.",
    url: "https://www.kre8ly.com/our-blogs",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
    images: ["https://blog.unifiedmentor.com/wp-content/uploads/2023/09/Blue-with-Colorful-Confetti-Sports-Invitation-17.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career",
    description: "Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips.",
    images: ["https://blog.unifiedmentor.com/wp-content/uploads/2023/09/Blue-with-Colorful-Confetti-Sports-Invitation-17.jpg"],
  },
};

export default function Page() {
  return <BlogHomeClient />;
}
