import TicketsClient from "./Ticketsclient";

export const metadata = {
  title: "My Support Tickets | Kre8ly",
  description: "Track the status of your Kre8ly support requests.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <TicketsClient />;
}