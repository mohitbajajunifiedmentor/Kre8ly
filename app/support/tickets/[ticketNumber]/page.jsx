import TicketDetailClient from "./Ticketdetailclient";

export const metadata = {
  title: "Ticket Details | Kre8ly Support",
  robots: { index: false, follow: false },
};

export default async function Page({ params }) {
  const { ticketNumber } = await params;
  return <TicketDetailClient ticketNumber={ticketNumber} />;
}