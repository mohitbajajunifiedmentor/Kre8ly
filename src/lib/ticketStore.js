/**
 * Browser-side registry of tickets this visitor has raised.
 *
 * The ticket APIs are token-authorised rather than session-authorised: each
 * ticket carries an `accessToken` issued at creation, and that token is the
 * only proof of ownership. The chat widget received both values and then threw
 * them away, so a user could never reach /support/tickets again once the
 * confirmation message scrolled past.
 *
 * localStorage (not sessionStorage) so the list survives closing the tab.
 * Nothing sensitive is stored beyond the token that the user already owns.
 */

const KEY = "kre8ly_support_tickets";
const MAX = 50;

export function loadTickets() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTicket({ ticketNumber, accessToken, subject }) {
  if (typeof window === "undefined" || !ticketNumber || !accessToken) return;
  try {
    const list = loadTickets().filter((t) => t.ticketNumber !== ticketNumber);
    list.unshift({
      ticketNumber,
      accessToken,
      subject: subject || "Support request",
      savedAt: new Date().toISOString(),
    });
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
  } catch {
    /* quota or private mode — the ticket still exists server-side */
  }
}

export function removeTicket(ticketNumber) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify(loadTickets().filter((t) => t.ticketNumber !== ticketNumber))
    );
  } catch {
    /* ignore */
  }
}

export function findToken(ticketNumber) {
  return loadTickets().find((t) => t.ticketNumber === ticketNumber)?.accessToken || null;
}