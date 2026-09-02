"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiSend, FiRefreshCw } from "react-icons/fi";
import { findToken } from "@/lib/ticketStore";
import {
  StatusBadge,
  PriorityBadge,
  formatDate,
  AUTHOR_META,
  Skeleton,
  ErrorState,
} from "@/component/support/TicketBits";

/** Replies are only accepted while the ticket is still live. */
const REPLYABLE = new Set(["open", "in_progress", "waiting_for_user", "resolved"]);

export default function TicketDetailClient({ ticketNumber }) {
  const [token, setToken] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const bottomRef = useRef(null);

  const load = useCallback(
    async (tok) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `/api/tickets?ticketNumber=${encodeURIComponent(ticketNumber)}&token=${encodeURIComponent(tok)}`
        );
        if (!res.ok) {
          setError(
            "This ticket could not be found, or the access token stored on this device is no longer valid."
          );
          return;
        }
        const data = await res.json();
        setTicket(data.ticket);
        setMessages(data.messages || []);
      } catch {
        setError("Could not reach the server. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    },
    [ticketNumber]
  );

  useEffect(() => {
    const tok = findToken(ticketNumber);
    if (!tok) {
      setLoading(false);
      setError(
        "No access token for this ticket was found on this device. Open it from the tickets list, or look it up with your ticket number and token."
      );
      return;
    }
    setToken(tok);
    load(tok);
  }, [ticketNumber, load]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  async function handleReply(e) {
    e.preventDefault();
    const body = reply.trim();
    if (!body || sending || !token) return;

    setSending(true);
    setSendError("");
    try {
      const res = await fetch(`/api/tickets/${encodeURIComponent(ticketNumber)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body, token }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSendError(data?.error || "Your reply could not be sent. Please try again.");
        return;
      }
      setReply("");
      await load(token); // refetch so status changes (e.g. reopened) are shown
    } catch {
      setSendError("Could not reach the server. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const canReply = ticket && REPLYABLE.has(ticket.status);

  return (
    <div className="min-h-screen bg-canvas text-content">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/support/tickets"
          className="inline-flex items-center gap-2 rounded-control text-sm font-medium text-content-secondary transition-colors hover:text-brand focus-visible:outline-none focus-visible:shadow-focus"
        >
          <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
          All tickets
        </Link>

        {loading ? (
          <div className="mt-6 space-y-4">
            <Skeleton className="h-8 w-56" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : error ? (
          <div className="mt-6">
            <ErrorState message={error} onRetry={token ? () => load(token) : undefined} />
          </div>
        ) : (
          <>
            {/* ---------- header ---------- */}
            <header className="mt-6 rounded-card border border-line bg-surface p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm font-semibold text-brand">
                  {ticket.ticketNumber}
                </span>
                <StatusBadge status={ticket.status} />
                <PriorityBadge priority={ticket.priority} />
              </div>

              <h1 className="mt-3 text-xl font-semibold tracking-tight">
                {ticket.subject || "Support request"}
              </h1>

              <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-content-muted">Created</dt>
                  <dd className="mt-0.5 font-medium">{formatDate(ticket.createdAt)}</dd>
                </div>
                <div>
                  <dt className="text-content-muted">Last updated</dt>
                  <dd className="mt-0.5 font-medium">{formatDate(ticket.updatedAt)}</dd>
                </div>
                <div>
                  <dt className="text-content-muted">Assigned to</dt>
                  <dd className="mt-0.5 font-medium">{ticket.assignedTo || "Unassigned"}</dd>
                </div>
              </dl>
            </header>

            {/* ---------- conversation ---------- */}
            <section className="mt-6" aria-label="Conversation">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-content-muted">
                Conversation
              </h2>

              {messages.length === 0 ? (
                <p className="rounded-card border border-dashed border-line bg-surface-raised px-5 py-8 text-center text-sm text-content-secondary">
                  No messages on this ticket yet.
                </p>
              ) : (
                <ol className="space-y-3">
                  {messages.map((m, i) => {
                    const meta = AUTHOR_META[m.author] || AUTHOR_META.system;
                    if (meta.align === "center") {
                      return (
                        <li key={i} className="text-center">
                          <span className={`inline-block rounded-full px-3 py-1 ${meta.tone}`}>
                            {m.body}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={i}
                        className={meta.align === "right" ? "flex justify-end" : "flex justify-start"}
                      >
                        <div className="max-w-[85%]">
                          <p className="mb-1 text-xs text-content-muted">
                            {m.authorName || meta.label}
                            <span aria-hidden="true"> · </span>
                            {formatDate(m.createdAt)}
                          </p>
                          <div
                            className={`whitespace-pre-line rounded-card px-4 py-3 text-sm ${meta.tone}`}
                          >
                            {m.body}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
              <div ref={bottomRef} />
            </section>

            {/* ---------- reply ---------- */}
            <section className="mt-6" aria-label="Reply">
              {canReply ? (
                <form onSubmit={handleReply} className="rounded-card border border-line bg-surface p-4">
                  <label htmlFor="ticket-reply" className="mb-2 block text-sm font-medium">
                    Add a reply
                  </label>
                  {ticket.status === "resolved" && (
                    <p className="mb-2 text-xs text-content-secondary">
                      This ticket is marked resolved — replying will reopen it.
                    </p>
                  )}
                  <textarea
                    id="ticket-reply"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows={4}
                    maxLength={4000}
                    disabled={sending}
                    placeholder="Describe what still needs attention..."
                    className="w-full resize-y rounded-control border border-line bg-surface px-3 py-2 text-sm text-content placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus disabled:opacity-60"
                  />
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-xs text-content-muted">{reply.length}/4000</span>
                    <button
                      type="submit"
                      disabled={sending || !reply.trim()}
                      className="inline-flex h-10 items-center gap-2 rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover disabled:opacity-40 focus-visible:outline-none focus-visible:shadow-focus"
                    >
                      {sending ? (
                        <FiRefreshCw aria-hidden="true" className="h-4 w-4 animate-spin" />
                      ) : (
                        <FiSend aria-hidden="true" className="h-4 w-4" />
                      )}
                      Send reply
                    </button>
                  </div>
                  {sendError && (
                    <p role="alert" className="mt-2 text-sm text-error">
                      {sendError}
                    </p>
                  )}
                </form>
              ) : (
                <div className="rounded-card border border-line bg-surface-raised p-5 text-center">
                  <p className="text-sm text-content-secondary">
                    This ticket is closed and can no longer receive replies.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-4 inline-flex h-10 items-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover"
                  >
                    Raise a new request
                  </Link>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}