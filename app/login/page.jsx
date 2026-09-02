import LoginClient from "./LoginClient";

export const metadata = {
  title: "Kre8ly Login – Access Your Account",
  description: "Securely log in to Kre8ly to access your personalized dashboard, continue your learning journey, and manage your enrolled courses.",
  keywords: ["Kre8ly | Admin Login"],
  authors: [{ name: "Kre8ly | Admin Login" }],
  robots: { index: false, follow: false },
  alternates: { canonical: "https://unifiedmentor.com/login" },
  openGraph: {
    title: "Kre8ly Login – Access Your Account",
    description: "Securely log in to Kre8ly to access your personalized dashboard, continue your learning journey, and manage your enrolled courses.",
    url: "https://unifiedmentor.com/login",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kre8ly Login – Access Your Account",
    description: "Securely log in to Kre8ly to access your personalized dashboard, continue your learning journey, and manage your enrolled courses.",
  },
};

export default function Page() {
  return <LoginClient />;
}
