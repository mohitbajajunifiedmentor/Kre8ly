"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch, FiRefreshCw, FiArrowRight } from "react-icons/fi";
import { loadTickets, saveTicket } from "@/lib/ticketStore";
import {
  StatusBadge,
  PriorityBadge,
  formatDate,
  STATUS_ORDER,
  STATUS_META,
  Skeleton,
  EmptyState,
} from "@/component/support/TicketBits";

/**
 * The tickets API is token-authorised per ticket, not session-authorised, so
 * there is no "list my tickets" endpoint to call. The browser holds the
 * (ticketNumber, accessToken) pairs it was issued, and this page fetches each
 * one. That also means a user on a different device can still get in by
 * entering the number and token by hand — see the lookup form below.
 */
export default function TicketsClient() {
  const [entries, setEntries] = useState([]);
  const [tickets, setTickets] = useState({}); // ticketNumber -> {ticket|error}
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const [lookupNumber, setLookupNumber] = useState("");
  const [lookupToken, setLookupToken] = useState("");
  const [lookupError, setLookupError] = useState("");
  const [lookupBusy, setLookupBusy] = useState(false);

  const fetchAll = useCallback(async (list) => {
    setLoading(true);
    const results = {};
    await Promise.all(
      list.map(async (e) => {
        try {
          const res = await fetch(
            `/api/tickets?ticketNumber=${encodeURIComponent(e.ticketNumber)}&token=${encodeURIComponent(e.accessToken)}`
          );
          if (!res.ok) {
            results[e.ticketNumber] = { error: "Could not load this ticket." };
            return;
          }
          const data = await res.json();
          results[e.ticketNumber] = { ticket: data.ticket };
        } catch {
          results[e.ticketNumber] = { error: "Network error." };
        }
      })
    );
    setTickets(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    const list = loadTickets();
    setEntries(list);
    if (list.length === 0) {
      setLoading(false);
      return;
    }
    fetchAll(list);
  }, [fetchAll]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries
      .map((e) => ({ entry: e, ...(tickets[e.ticketNumber] || {}) }))
      .filter(({ entry, ticket }) => {
        if (filter !== "all" && ticket?.status !== filter) return false;
        if (!q) return true;
        return (
          entry.ticketNumber.toLowerCase().includes(q) ||
          (ticket?.subject || entry.subject || "").toLowerCase().includes(q)
        );
      });
  }, [entries, tickets, filter, query]);

  const counts = useMemo(() => {
    const c = { all: entries.length };
    for (const s of STATUS_ORDER) c[s] = 0;
    for (const e of entries) {
      const st = tickets[e.ticketNumber]?.ticket?.status;
      if (st && st in c) c[st] += 1;
    }
    return c;
  }, [entries, tickets]);

  async function handleLookup(e) {
    e.preventDefault();
    const number = lookupNumber.trim().toUpperCase();
    const token = lookupToken.trim();
    setLookupError("");

    if (!number || !token) {
      setLookupError("Enter both the ticket number and the access token.");
      return;
    }

    setLookupBusy(true);
    try {
      const res = await fetch(
        `/api/tickets?ticketNumber=${encodeURIComponent(number)}&token=${encodeURIComponent(token)}`
      );
      if (!res.ok) {
        // The API deliberately returns the same 404 for a wrong token and a
        // missing ticket, so this message must not distinguish them either.
        setLookupError("No ticket found with that number and token.");
        return;
      }
      const data = await res.json();
      saveTicket({ ticketNumber: number, accessToken: token, subject: data.ticket?.subject });
      const list = loadTickets();
      setEntries(list);
      await fetchAll(list);
      setLookupNumber("");
      setLookupToken("");
    } catch {
      setLookupError("Could not reach the server. Please try again.");
    } finally {
      setLookupBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-canvas text-content">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My support tickets</h1>
          <p className="mt-2 text-content-secondary">
            Track the status of requests you have raised with our support team.
          </p>
        </header>

        {/* ---------- filters ---------- */}
        {entries.length > 0 && (
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label="Filter tickets by status" className="flex flex-wrap gap-2">
              {["all", ...STATUS_ORDER].map((key) => {
                const active = filter === key;
                const label = key === "all" ? "All" : STATUS_META[key].label;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    aria-pressed={active}
                    className={[
                      "rounded-control px-3 py-1.5 text-sm font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:shadow-focus",
                      active
                        ? "bg-brand text-brand-fg"
                        : "bg-surface-sunken text-content-secondary hover:bg-brand-subtle hover:text-brand",
                    ].join(" ")}
                  >
                    {label}
                    <span className="ml-1.5 opacity-70">{counts[key] ?? 0}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative sm:w-64">
              <label htmlFor="ticket-search" className="sr-only">
                Search tickets by number or subject
              </label>
              <FiSearch
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-content-muted"
              />
              <input
                id="ticket-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tickets..."
                className="w-full rounded-control border border-line bg-surface py-2 pl-9 pr-3 text-sm text-content placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
              />
            </div>
          </div>
        )}

        {/* ---------- list ---------- */}
        <p aria-live="polite" className="sr-only">
          {loading ? "Loading tickets" : `${rows.length} tickets shown`}
        </p>

        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-card border border-line bg-surface p-5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="mt-3 h-5 w-2/3" />
                <Skeleton className="mt-3 h-3 w-40" />
              </div>
            ))}
          </div>
        ) : rows.length === 0 ? (
          <EmptyState
            title={entries.length === 0 ? "No tickets yet" : "No tickets match this filter"}
            description={
              entries.length === 0
                ? "When our assistant creates a support ticket for you, it will appear here."
                : "Try a different status filter or clear the search."
            }
            action={
              entries.length === 0 ? (
                <Link
                  href="/contact-us"
                  className="inline-flex h-10 items-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover"
                >
                  Contact support
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setFilter("all");
                    setQuery("");
                  }}
                  className="inline-flex h-10 items-center rounded-control border border-line-strong bg-surface px-5 text-sm font-medium text-content transition-colors hover:bg-surface-sunken"
                >
                  Clear filters
                </button>
              )
            }
          />
        ) : (
          <ul className="space-y-3">
            {rows.map(({ entry, ticket, error }) => (
              <li key={entry.ticketNumber}>
                <Link
                  href={`/support/tickets/${encodeURIComponent(entry.ticketNumber)}`}
                  className="group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-xs transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-brand">
                        {entry.ticketNumber}
                      </span>
                      {ticket && <StatusBadge status={ticket.status} />}
                      {ticket && <PriorityBadge priority={ticket.priority} />}
                    </div>

                    <p className="mt-2 truncate text-base font-medium text-content">
                      {ticket?.subject || entry.subject || "Support request"}
                    </p>

                    {error ? (
                      <p className="mt-1.5 text-sm text-error">{error}</p>
                    ) : (
                      <dl className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-content-muted">
                        <div className="flex gap-1.5">
                          <dt>Created</dt>
                          <dd className="font-medium">{formatDate(ticket?.createdAt)}</dd>
                        </div>
                        <div className="flex gap-1.5">
                          <dt>Updated</dt>
                          <dd className="font-medium">{formatDate(ticket?.updatedAt)}</dd>
                        </div>
                        {ticket?.assignedTo && (
                          <div className="flex gap-1.5">
                            <dt>Assigned to</dt>
                            <dd className="font-medium">{ticket.assignedTo}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                  </div>

                  <FiArrowRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-content-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* ---------- manual lookup ---------- */}
        <section className="mt-12 rounded-card border border-line bg-surface-raised p-5">
          <h2 className="text-base font-semibold text-content">
            Looking for a ticket from another device?
          </h2>
          <p className="mt-1.5 text-sm text-content-secondary">
            Enter the ticket number and the access token from your confirmation message.
          </p>

          <form onSubmit={handleLookup} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="lookup-number" className="sr-only">
                Ticket number
              </label>
              <input
                id="lookup-number"
                value={lookupNumber}
                onChange={(e) => setLookupNumber(e.target.value)}
                placeholder="TKT-2026-000123"
                className="w-full rounded-control border border-line bg-surface px-3 py-2 font-mono text-sm text-content placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lookup-token" className="sr-only">
                Access token
              </label>
              <input
                id="lookup-token"
                value={lookupToken}
                onChange={(e) => setLookupToken(e.target.value)}
                placeholder="Access token"
                className="w-full rounded-control border border-line bg-surface px-3 py-2 font-mono text-sm text-content placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
              />
            </div>
            <button
              type="submit"
              disabled={lookupBusy}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover disabled:opacity-50 focus-visible:outline-none focus-visible:shadow-focus"
            >
              {lookupBusy && <FiRefreshCw aria-hidden="true" className="h-4 w-4 animate-spin" />}
              Find ticket
            </button>
          </form>

          {lookupError && (
            <p role="alert" className="mt-2 text-sm text-error">
              {lookupError}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}