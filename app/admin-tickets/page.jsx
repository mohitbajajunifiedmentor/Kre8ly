import AdminTicketsClient from "./Adminticketsclient";

export const metadata = {
  title: "Support Tickets | Kre8ly Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminTicketsClient />;
}