import LeaderBoardClient from "./LeaderBoardClient";

export const metadata = {
  title: "Top Performers | Kre8ly Leaderboard",
  description: "Explore the Kre8ly Leaderboard to see top-performing learners ranked by skills, scores, and achievements. Join now and climb the ranks!",
  keywords: ["Kre8ly leaderboard", "top learners", "best performers", "online learning rankings", "student achievements", "skills leaderboard", "e-learning progress"],
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kre8ly.com/leaderboard" },
  openGraph: {
    title: "Top Performers | Kre8ly Leaderboard",
    description: "Explore the Kre8ly Leaderboard to see top-performing learners ranked by skills, scores, and achievements. Join now and climb the ranks!",
    url: "https://www.kre8ly.com/leaderboard",
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Performers | Kre8ly Leaderboard",
    description: "Explore the Kre8ly Leaderboard to see top-performing learners ranked by skills, scores, and achievements. Join now and climb the ranks!",
  },
};

export default function Page() {
  return <LeaderBoardClient />;
}
