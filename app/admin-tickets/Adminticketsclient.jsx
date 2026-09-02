"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiSearch, FiRefreshCw, FiSend, FiX, FiLogOut } from "react-icons/fi";
import {
  StatusBadge,
  PriorityBadge,
  formatDate,
  STATUS_ORDER,
  PRIORITY_ORDER,
  STATUS_META,
  PRIORITY_META,
  AUTHOR_META,
  Skeleton,
  EmptyState,
  ErrorState,
} from "@/component/support/TicketBits";
import { useOpsSocket, useNewTicketChime } from "@/component/support/useOpsSocket";

/**
 * Agent console.
 *
 * Authorisation is server-side: /api/tickets/* verifies an httpOnly session
 * cookie issued by /api/support/login. This page never decides who is allowed
 * in — hiding the UI is not the control. The change from the previous version
 * is that the raw SUPPORT_ADMIN_KEY no longer lives in sessionStorage where any
 * script could read it; it is posted once and exchanged for a cookie.
 *
 * What ops actually needed and did not have:
 *   - a live feed. Tickets appeared only on manual refresh.
 *   - triage counters. "How many are waiting on us?" required counting rows.
 *   - a read/unread signal, so two agents do not open the same ticket while
 *     older ones sit untouched.
 *   - an agent name on replies and status changes, so the thread says who did
 *     what instead of a generic "Support".
 */

const PAGE_SIZE = 20;
const AGENT_NAME_KEY = "kre8ly_agent_name";
const POLL_MS = 30000;

const SORT_OPTIONS = [
  { value: "priority", label: "Work queue (urgent first)" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "updated", label: "Recently updated" },
];

function ageLabel(iso) {
  if (!iso) return "";
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 60) return `${mins}m`;
  if (mins < 60 * 24) return `${Math.round(mins / 60)}h`;
  return `${Math.round(mins / 1440)}d`;
}

export default function AdminTicketsClient() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [keyInput, setKeyInput] = useState("");
  const [authError, setAuthError] = useState("");

  const [agentName, setAgentName] = useState("");

  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [live, setLive] = useState(false);

  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("priority");
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  const [selected, setSelected] = useState(null);
  const [thread, setThread] = useState([]);
  const [transcript, setTranscript] = useState([]);
  const [showTranscript, setShowTranscript] = useState(false);
  const [threadLoading, setThreadLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const [panelError, setPanelError] = useState("");

  const selectedRef = useRef(null);
  selectedRef.current = selected;
  const chime = useNewTicketChime();

  /* ---------- session ---------- */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/support/login");
        setAuthed(res.ok);
      } catch {
        setAuthed(false);
      } finally {
        setChecking(false);
      }
    })();
    try {
      setAgentName(localStorage.getItem(AGENT_NAME_KEY) || "");
    } catch {
      /* storage blocked */
    }
  }, []);

  async function signIn(e) {
    e.preventDefault();
    const key = keyInput.trim();
    if (!key) return;
    setAuthError("");
    try {
      const res = await fetch("/api/support/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setAuthError(data?.error || "That support key was not accepted.");
        return;
      }
      setKeyInput("");
      setAuthed(true);
    } catch {
      setAuthError("Could not reach the server.");
    }
  }

  async function signOut() {
    await fetch("/api/support/login", { method: "DELETE" }).catch(() => {});
    setAuthed(false);
    setTickets([]);
    setSelected(null);
  }

  /* ---------- data ---------- */
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedQ(q.trim());
      setPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [q]);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/tickets?view=stats");
      if (res.ok) setStats(await res.json());
    } catch {
      /* counters are decoration; the list still works */
    }
  }, []);

  const fetchTickets = useCallback(
    async ({ quiet = false } = {}) => {
      if (!authed) return;
      if (!quiet) setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(PAGE_SIZE),
          sort,
        });
        if (status) params.set("status", status);
        if (priority) params.set("priority", priority);
        if (debouncedQ) params.set("q", debouncedQ);

        const res = await fetch(`/api/tickets?${params}`);
        if (res.status === 401) {
          setAuthed(false);
          setError("Your support session has expired. Please sign in again.");
          return;
        }
        if (!res.ok) {
          setError("Tickets could not be loaded.");
          return;
        }
        const data = await res.json();
        setTickets(data.tickets || []);
        setTotal(data.total || 0);
        setPages(data.pages || 1);
      } catch {
        setError("Could not reach the server.");
      } finally {
        setLoading(false);
      }
    },
    [authed, page, sort, status, priority, debouncedQ]
  );

  useEffect(() => {
    fetchTickets();
    fetchStats();
  }, [fetchTickets, fetchStats]);

  /* ---------- live feed ---------- */
  const upsertRow = useCallback((incoming) => {
    setTickets((prev) => {
      const i = prev.findIndex((t) => t.ticketNumber === incoming.ticketNumber);
      if (i === -1) return [{ ...incoming, isNew: true }, ...prev];
      const next = [...prev];
      next[i] = { ...next[i], ...incoming };
      return next;
    });
  }, []);

  const { connected } = useOpsSocket({
    onNewTicket: (t) => {
      upsertRow(t);
      setStats((s) => (s ? { ...s, unseen: (s.unseen || 0) + 1, today: (s.today || 0) + 1 } : s));
      setLive(true);
      chime();
      if (typeof document !== "undefined") document.title = `● New ticket — Support`;
    },
    onTicketUpdated: (t) => upsertRow(t),
    onTicketMessage: (m) => {
      if (m.author === "user") {
        setTickets((prev) =>
          prev.map((t) => (t.ticketNumber === m.ticketNumber ? { ...t, noteAdded: true } : t))
        );
        chime();
      }
      if (selectedRef.current?.ticketNumber === m.ticketNumber) openTicket(selectedRef.current, { silent: true });
    },
  });

  // Polling only matters when the socket is down; with it up this would just
  // duplicate work.
  useEffect(() => {
    if (!authed || connected) return;
    const id = setInterval(() => {
      fetchTickets({ quiet: true });
      fetchStats();
    }, POLL_MS);
    return () => clearInterval(id);
  }, [authed, connected, fetchTickets, fetchStats]);

  /* ---------- ticket panel ---------- */
  const openTicket = useCallback(
    async (t, { silent = false } = {}) => {
      if (!silent) {
        setSelected(t);
        setThread([]);
        setTranscript([]);
        setShowTranscript(false);
        setReply("");
        setPanelError("");
        setThreadLoading(true);
      }
      try {
        const res = await fetch(`/api/tickets/${encodeURIComponent(t.ticketNumber)}`);
        if (res.ok) {
          const data = await res.json();
          setThread(data.messages || []);
          setTranscript(data.transcript || []);
          setSelected((s) => ({ ...(s || t), ...data.ticket }));
          setTickets((prev) =>
            prev.map((row) =>
              row.ticketNumber === t.ticketNumber
                ? { ...row, agentSeenAt: data.ticket.agentSeenAt, isNew: false, noteAdded: false }
                : row
            )
          );
        } else {
          setPanelError("Conversation could not be loaded.");
        }
      } catch {
        setPanelError("Could not reach the server.");
      } finally {
        setThreadLoading(false);
      }
    },
    []
  );

  async function patchTicket(patch) {
    if (!selected) return;
    setBusy(true);
    setPanelError("");
    try {
      const res = await fetch(`/api/tickets/${encodeURIComponent(selected.ticketNumber)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...patch, agentName: agentName || undefined }),
      });
      if (!res.ok) {
        setPanelError("The update could not be saved.");
        return;
      }
      const data = await res.json();
      setSelected((s) => ({ ...s, ...data.ticket }));
      upsertRow({ ticketNumber: selected.ticketNumber, ...data.ticket });
      fetchStats();
      openTicket({ ticketNumber: selected.ticketNumber }, { silent: true });
    } catch {
      setPanelError("Could not reach the server.");
    } finally {
      setBusy(false);
    }
  }

  async function sendReply(e) {
    e.preventDefault();
    const body = reply.trim();
    if (!body || busy || !selected) return;
    setBusy(true);
    setPanelError("");
    try {
      const res = await fetch(`/api/tickets/${encodeURIComponent(selected.ticketNumber)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body, agentName: agentName || undefined }),
      });
      if (!res.ok) {
        setPanelError("The reply could not be sent.");
        return;
      }
      setReply("");
      await openTicket(selected, { silent: true });
      fetchStats();
    } catch {
      setPanelError("Could not reach the server.");
    } finally {
      setBusy(false);
    }
  }

  const activeFilters = useMemo(
    () => Boolean(status || priority || debouncedQ),
    [status, priority, debouncedQ]
  );

  /* ---------- key gate ---------- */
  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <Skeleton className="h-24 w-80" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-4 text-content">
        <form onSubmit={signIn} className="w-full max-w-sm rounded-card border border-line bg-surface p-6 shadow-sm">
          <h1 className="text-lg font-semibold">Support console</h1>
          <p className="mt-1.5 text-sm text-content-secondary">
            Sign in with your support key. It is exchanged for a session that lasts 12 hours
            and is never stored in the browser.
          </p>

          <label htmlFor="support-key" className="mt-5 block text-sm font-medium">
            Support key
          </label>
          <input
            id="support-key"
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            autoComplete="off"
            className="mt-1.5 w-full rounded-control border border-line bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none focus:shadow-focus"
          />

          <label htmlFor="agent-name" className="mt-4 block text-sm font-medium">
            Your name
          </label>
          <input
            id="agent-name"
            value={agentName}
            onChange={(e) => {
              setAgentName(e.target.value);
              try {
                localStorage.setItem(AGENT_NAME_KEY, e.target.value);
              } catch {
                /* ignore */
              }
            }}
            placeholder="Shown on your replies"
            className="mt-1.5 w-full rounded-control border border-line bg-surface px-3 py-2 text-sm focus:border-brand focus:outline-none focus:shadow-focus"
          />

          {authError && (
            <p role="alert" className="mt-3 text-sm text-error">
              {authError}
            </p>
          )}
          <button
            type="submit"
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-control bg-brand text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  const counters = [
    { key: "unseen", label: "Not opened yet", value: stats?.unseen, tone: "text-brand" },
    { key: "unanswered", label: "No follow-up yet", value: stats?.unanswered, tone: "text-content" },
    { key: "breached", label: "Untouched over 24h", value: stats?.breached, tone: "text-error" },
    { key: "open", label: "Open", value: stats?.status?.open, tone: "text-content" },
    { key: "today", label: "Raised today", value: stats?.today, tone: "text-content" },
  ];

  return (
    <div className="min-h-screen bg-canvas text-content">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Support tickets</h1>
            <p className="mt-1 flex items-center gap-2 text-sm text-content-secondary">
              <span
                aria-hidden="true"
                className={`inline-block h-2 w-2 rounded-full ${connected ? "bg-success" : "bg-content-muted"}`}
              />
              {connected ? "Live" : "Reconnecting — refreshing every 30s"}
              <span aria-hidden="true">·</span>
              {total} ticket{total === 1 ? "" : "s"}
              {activeFilters ? " matching filters" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setLive(false);
                if (typeof document !== "undefined") document.title = "Support";
                fetchTickets();
                fetchStats();
              }}
              className="inline-flex h-10 items-center gap-2 rounded-control border border-line-strong bg-surface px-4 text-sm font-medium transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
            >
              <FiRefreshCw aria-hidden="true" className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh{live ? " (new)" : ""}
            </button>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex h-10 items-center gap-2 rounded-control px-3 text-sm text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content"
            >
              <FiLogOut aria-hidden="true" className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </header>

        {/* ---------- triage counters ---------- */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {counters.map((c) => (
            <div key={c.key} className="rounded-card border border-line bg-surface px-4 py-3">
              <p className={`text-2xl font-semibold ${c.tone}`}>{c.value ?? "—"}</p>
              <p className="mt-0.5 text-xs text-content-muted">{c.label}</p>
            </div>
          ))}
        </div>

        {/* ---------- filters ---------- */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="relative min-w-[16rem] flex-1">
            <label htmlFor="admin-search" className="sr-only">
              Search by ticket number, name, email or subject
            </label>
            <FiSearch
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-content-muted"
            />
            <input
              id="admin-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ticket number, name, email or subject..."
              className="w-full rounded-control border border-line bg-surface py-2 pl-9 pr-3 text-sm placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
            />
          </div>

          <select
            aria-label="Filter by status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="h-10 rounded-control border border-line bg-surface px-3 text-sm focus:border-brand focus:outline-none"
          >
            <option value="">All statuses</option>
            {STATUS_ORDER.map((s) => (
              <option key={s} value={s}>
                {STATUS_META[s].label}
              </option>
            ))}
          </select>

          <select
            aria-label="Filter by priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              setPage(1);
            }}
            className="h-10 rounded-control border border-line bg-surface px-3 text-sm focus:border-brand focus:outline-none"
          >
            <option value="">All priorities</option>
            {PRIORITY_ORDER.map((p) => (
              <option key={p} value={p}>
                {PRIORITY_META[p].label}
              </option>
            ))}
          </select>

          <select
            aria-label="Sort tickets"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="h-10 rounded-control border border-line bg-surface px-3 text-sm focus:border-brand focus:outline-none"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          {activeFilters && (
            <button
              type="button"
              onClick={() => {
                setStatus("");
                setPriority("");
                setQ("");
                setPage(1);
              }}
              className="inline-flex h-10 items-center gap-1.5 rounded-control px-3 text-sm text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content"
            >
              <FiX aria-hidden="true" />
              Clear
            </button>
          )}
        </div>

        {/* ---------- table ---------- */}
        {error && !loading ? (
          <ErrorState message={error} onRetry={fetchTickets} />
        ) : loading ? (
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full" />
            ))}
          </div>
        ) : tickets.length === 0 ? (
          <EmptyState
            title="No tickets found"
            description={
              activeFilters
                ? "No tickets match the current filters."
                : "No support tickets have been raised yet."
            }
          />
        ) : (
          <>
            {/* Horizontal scroll rather than a broken layout on small screens. */}
            <div className="overflow-x-auto rounded-card border border-line bg-surface">
              <table className="w-full min-w-[56rem] text-left text-sm">
                <caption className="sr-only">Support tickets</caption>
                <thead className="border-b border-line bg-surface-sunken text-xs uppercase tracking-wider text-content-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3">Ticket</th>
                    <th scope="col" className="px-4 py-3">Subject</th>
                    <th scope="col" className="px-4 py-3">Contact</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                    <th scope="col" className="px-4 py-3">Priority</th>
                    <th scope="col" className="px-4 py-3">Owner</th>
                    <th scope="col" className="px-4 py-3">Waiting</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => {
                    const unseen = !t.agentSeenAt;
                    return (
                      <tr
                        key={t.ticketNumber}
                        onClick={() => openTicket(t)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openTicket(t);
                          }
                        }}
                        className={`cursor-pointer border-b border-line last:border-0 transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus ${
                          unseen ? "bg-brand-subtle/40" : ""
                        }`}
                      >
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-brand">
                          <span className="flex items-center gap-2">
                            {unseen && (
                              <span
                                aria-label="Not opened yet"
                                className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand"
                              />
                            )}
                            {t.ticketNumber}
                          </span>
                        </td>
                        <td className="max-w-[18rem] truncate px-4 py-3">
                          {t.subject || "Support request"}
                        </td>
                        <td className="max-w-[14rem] truncate px-4 py-3 text-content-secondary">
                          {t.userName ? `${t.userName} · ` : ""}
                          {t.userEmail || t.userPhone || "—"}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={t.status} />
                        </td>
                        <td className="px-4 py-3">
                          <PriorityBadge priority={t.priority} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-xs text-content-secondary">
                          {t.assignedTo || "Unassigned"}
                        </td>
                        <td
                          className={`whitespace-nowrap px-4 py-3 text-xs ${
                            !t.firstResponseAt && ageLabel(t.createdAt).endsWith("d")
                              ? "font-semibold text-error"
                              : "text-content-muted"
                          }`}
                        >
                          {t.firstResponseAt ? formatDate(t.updatedAt) : `${ageLabel(t.createdAt)} unanswered`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {pages > 1 && (
              <nav aria-label="Pagination" className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="inline-flex h-9 items-center rounded-control border border-line-strong bg-surface px-4 text-sm transition-colors hover:bg-surface-sunken disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-sm text-content-secondary">
                  Page {page} of {pages}
                </span>
                <button
                  type="button"
                  disabled={page >= pages}
                  onClick={() => setPage((p) => Math.min(pages, p + 1))}
                  className="inline-flex h-9 items-center rounded-control border border-line-strong bg-surface px-4 text-sm transition-colors hover:bg-surface-sunken disabled:opacity-40"
                >
                  Next
                </button>
              </nav>
            )}
          </>
        )}
      </div>

      {/* ---------- detail drawer ---------- */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            aria-hidden="true"
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-black/50"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={`Ticket ${selected.ticketNumber}`}
            className="relative flex h-full w-full max-w-xl flex-col border-l border-line bg-surface shadow-lg"
          >
            <div className="flex items-start justify-between gap-3 border-b border-line p-5">
              <div className="min-w-0">
                <p className="font-mono text-sm font-semibold text-brand">{selected.ticketNumber}</p>
                <h2 className="mt-1 text-base font-semibold">
                  {selected.subject || "Support request"}
                </h2>
                <p className="mt-1 truncate text-xs text-content-muted">
                  {selected.userName || "Name not given"} ·{" "}
                  {selected.userEmail || selected.userPhone || "no contact"}
                  {selected.escalationReason ? ` · ${selected.escalationReason.replace(/_/g, " ")}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close ticket details"
                className="rounded-control p-1.5 text-content-muted transition-colors hover:bg-surface-sunken hover:text-content"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* quick actions — the three things an agent does most */}
            <div className="flex flex-wrap gap-2 border-b border-line px-5 py-3">
              <button
                type="button"
                disabled={busy || !agentName}
                onClick={() => patchTicket({ assignedTo: agentName, status: "in_progress" })}
                title={agentName ? "" : "Add your name on the sign-in screen first"}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
              >
                Take this ticket
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => patchTicket({ status: "waiting_for_user" })}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
              >
                Waiting on customer
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => patchTicket({ status: "resolved" })}
                className="rounded-full border border-success/50 bg-surface px-3 py-1.5 text-xs text-success transition-colors hover:bg-success/10 disabled:opacity-40"
              >
                Mark resolved
              </button>
            </div>

            {/* controls */}
            <div className="flex flex-wrap gap-3 border-b border-line px-5 py-4">
              <div>
                <label htmlFor="set-status" className="mb-1 block text-xs text-content-muted">
                  Status
                </label>
                <select
                  id="set-status"
                  value={selected.status}
                  disabled={busy}
                  onChange={(e) => patchTicket({ status: e.target.value })}
                  className="h-9 rounded-control border border-line bg-surface px-2 text-sm focus:border-brand focus:outline-none"
                >
                  {STATUS_ORDER.map((s) => (
                    <option key={s} value={s}>
                      {STATUS_META[s].label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="set-priority" className="mb-1 block text-xs text-content-muted">
                  Priority
                </label>
                <select
                  id="set-priority"
                  value={selected.priority}
                  disabled={busy}
                  onChange={(e) => patchTicket({ priority: e.target.value })}
                  className="h-9 rounded-control border border-line bg-surface px-2 text-sm focus:border-brand focus:outline-none"
                >
                  {PRIORITY_ORDER.map((p) => (
                    <option key={p} value={p}>
                      {PRIORITY_META[p].label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-[10rem] flex-1">
                <label htmlFor="set-assignee" className="mb-1 block text-xs text-content-muted">
                  Assigned to
                </label>
                <input
                  id="set-assignee"
                  key={selected.ticketNumber + (selected.assignedTo || "")}
                  defaultValue={selected.assignedTo || ""}
                  disabled={busy}
                  onBlur={(e) => {
                    const v = e.target.value.trim();
                    if (v !== (selected.assignedTo || "")) patchTicket({ assignedTo: v });
                  }}
                  placeholder="Agent name"
                  className="h-9 w-full rounded-control border border-line bg-surface px-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>
            </div>

            {/* what the bot already tried — saves repeating a rejected answer */}
            {selected.aiAnswer && (
              <div className="border-b border-line bg-surface-sunken px-5 py-3">
                <p className="text-xs font-medium text-content-muted">Answer the bot already gave</p>
                <p className="mt-1 line-clamp-4 whitespace-pre-line text-xs text-content-secondary">
                  {selected.aiAnswer}
                </p>
              </div>
            )}

            {/* The chat that led to the ticket. Collapsed by default — it is
                context, not the working thread — but it is the difference
                between "connect team" and knowing what they were stuck on. */}
            {transcript.length > 0 && (
              <div className="border-b border-line bg-surface px-5 py-3">
                <button
                  type="button"
                  onClick={() => setShowTranscript((v) => !v)}
                  aria-expanded={showTranscript}
                  className="flex w-full items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-content-muted transition-colors hover:text-content"
                >
                  <span>Chat before the ticket ({transcript.length})</span>
                  <span aria-hidden="true">{showTranscript ? "−" : "+"}</span>
                </button>

                {showTranscript && (
                  <ol className="mt-3 max-h-64 space-y-2 overflow-y-auto pr-1">
                    {transcript.map((m, i) => (
                      <li key={i} className="text-xs">
                        <span
                          className={
                            m.sender === "user"
                              ? "font-semibold text-content"
                              : "font-semibold text-content-muted"
                          }
                        >
                          {m.sender === "user" ? "Customer" : "Bot"}
                        </span>
                        <span className="ml-2 text-content-muted">{formatDate(m.createdAt)}</span>
                        <p className="mt-0.5 whitespace-pre-line text-content-secondary">
                          {m.message}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}

            {/* thread */}
            <div className="flex-1 overflow-y-auto bg-surface-sunken p-5">
              {threadLoading ? (
                <div className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : thread.length === 0 ? (
                <p className="text-center text-sm text-content-secondary">No messages yet.</p>
              ) : (
                <ol className="space-y-3">
                  {thread.map((m, i) => {
                    const meta = AUTHOR_META[m.author] || AUTHOR_META.system;
                    return (
                      <li key={i}>
                        <p className="mb-1 text-xs text-content-muted">
                          {m.authorName || meta.label}
                          <span aria-hidden="true"> · </span>
                          {formatDate(m.createdAt)}
                          {m.author === "support" && (
                            <span className="ml-2 rounded-full bg-warning-subtle px-2 py-0.5 text-warning">
                              Team note
                            </span>
                          )}
                        </p>
                        <div
                          className={`whitespace-pre-line rounded-card px-4 py-3 text-sm ${
                            m.internal
                              ? "border border-warning/25 bg-warning-subtle text-content"
                              : meta.tone
                          }`}
                        >
                          {m.body}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>

            {/* Team notes. Nothing written here reaches the customer — the
                follow-up happens on the phone or by email, and this is the
                record of it for whoever picks the ticket up next. */}
            <form onSubmit={sendReply} className="border-t border-line p-5">
              <label htmlFor="agent-note" className="mb-2 block text-sm font-medium">
                Add a team note
                <span className="ml-2 font-normal text-content-muted">
                  — internal only, the customer never sees this
                </span>
              </label>
              <textarea
                id="agent-note"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                rows={3}
                maxLength={4000}
                disabled={busy}
                placeholder="Called on 9720161885, asked for order ID — waiting for reply..."
                className="w-full resize-y rounded-control border border-line bg-surface px-3 py-2 text-sm placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus disabled:opacity-60"
              />
              <div className="mt-3 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={busy || !reply.trim()}
                  className="inline-flex h-10 items-center gap-2 rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover disabled:opacity-40"
                >
                  <FiSend aria-hidden="true" className="h-4 w-4" />
                  Save note
                </button>
              </div>
              {panelError && (
                <p role="alert" className="mt-2 text-sm text-error">
                  {panelError}
                </p>
              )}
            </form>
          </aside>
        </div>
      )}
    </div>
  );
}