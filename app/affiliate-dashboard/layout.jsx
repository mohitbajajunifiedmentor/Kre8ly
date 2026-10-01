import AffiliateLayoutClient from "./AffiliateLayoutClient";

export const metadata = {
  title: "Affiliate Dashboard | Kre8ly",
  robots: { index: false, follow: false },
};

export default function Layout({ children }) {
  return <AffiliateLayoutClient>{children}</AffiliateLayoutClient>;
}
