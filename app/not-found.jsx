import NotFoundClient from "./NotFoundClient";

export const metadata = {
  title: "Page Not Found | Kre8ly",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundClient />;
}
