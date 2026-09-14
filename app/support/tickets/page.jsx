// app/support/tickets/page.jsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ticketsApi } from "@/lib/supportApi";
import {
  StatusBadge,
  PriorityBadge,
  TicketNumber,
  Timestamp,
  Spinner,
  EmptyState,
  Banner,
  STATUS_ORDER,
  PRIORITY_ORDER,
  STATUS_META,
  PRIORITY_META,
  INPUT,
  SELECT,
} from "@/component/support/ui";

const SORTS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "updated", label: "Recently updated" },
  { value: "priority", label: "Priority queue" },
];

function StatCard({ label, value, tone }) {
  return (
    <div className="rounded-card border border-line bg-surface px-4 py-3.5">
      <p className="text-[12px] text-content-muted">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${tone || "text-content"}`}>
        {value ?? "—"}
      </p>
    </div>
  );
}

export default function TicketsListPage() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("newest");
  const [qInput, setQInput] = useState("");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Debounce the search box so every keystroke does not fire a request.
  useEffect(() => {
    const t = setTimeout(() => {
      setPage(1);
      setQ(qInput.trim());
    }, 350);
    return () => clearTimeout(t);
  }, [qInput]);

  const loadStats = useCallback(() => {
    ticketsApi.stats().then(setStats).catch(() => {});
  }, []);

  const loadTickets = useCallback(() => {
    setLoading(true);
    setError("");
    ticketsApi
      .list({ status, priority, sort, q, page, limit: 20 })
      .then((res) => {
        setRows(res.tickets || []);
        setTotal(res.total || 0);
        setPages(res.pages || 1);
      })
      .catch((err) => setError(err.message || "Could not load tickets."))
      .finally(() => setLoading(false));
  }, [status, priority, sort, q, page]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const breachedTone = useMemo(
    () => (stats?.breached > 0 ? "text-error" : "text-content"),
    [stats]
  );

  function resetFilters() {
    setStatus("");
    setPriority("");
    setSort("newest");
    setQInput("");
    setQ("");
    setPage(1);
  }

  const filtered = status || priority || sort !== "newest" || q;

  return (
    <div className="space-y-6">
      {/* Stats strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Unanswered" value={stats?.unanswered} />
        <StatCard label="Unseen" value={stats?.unseen} />
        <StatCard label="SLA breached (24h+)" value={stats?.breached} tone={breachedTone} />
        <StatCard label="Opened today" value={stats?.today} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="ticket-search" className="sr-only">
          Search by name, email, phone or ticket number
        </label>
        <input
          id="ticket-search"
          type="search"
          value={qInput}
          onChange={(e) => setQInput(e.target.value)}
          placeholder="Search name, email, phone, ticket #…"
          className={`${INPUT} w-64 max-w-full`}
        />

        <select
          aria-label="Filter by status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className={SELECT}
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
          className={SELECT}
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
          onChange={(e) => setSort(e.target.value)}
          className={SELECT}
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {filtered && (
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-control px-2.5 py-2 text-[13px] text-content-muted transition-colors hover:text-content"
          >
            Clear
          </button>
        )}

        <span className="ml-auto text-[12px] text-content-muted">
          {total} ticket{total === 1 ? "" : "s"}
        </span>
      </div>

      {error ? <Banner tone="error">{error}</Banner> : null}

      {/* Table */}
      <div className="overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[56rem] border-collapse text-left text-[13px]">
          <caption className="sr-only">Support tickets</caption>
          <thead>
            <tr className="border-b border-line bg-surface-sunken text-[12px] text-content-muted">
              <th scope="col" className="px-4 py-2.5 font-medium">Ticket</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Requester</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Subject</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Status</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Priority</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Assigned</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody className="bg-surface">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-content-muted">
                  <Spinner />
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-2">
                  <EmptyState
                    title="No tickets match these filters"
                    body="Try clearing a filter or searching for something else."
                  />
                </td>
              </tr>
            ) : (
              rows.map((t) => (
                <tr
                  key={t.ticketNumber}
                  // Keyboard-operable: the row was click-only before, so an
                  // agent tabbing through the table could not open anything.
                  tabIndex={0}
                  onClick={() => router.push(`/support/tickets/${t.ticketNumber}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      router.push(`/support/tickets/${t.ticketNumber}`);
                    }
                  }}
                  className="cursor-pointer border-b border-line transition-colors last:border-0 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/support/tickets/${t.ticketNumber}`}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-brand"
                    >
                      <TicketNumber>{t.ticketNumber}</TicketNumber>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-content-secondary">{t.userName || "—"}</td>
                  <td className="max-w-[280px] truncate px-4 py-3 text-content-secondary">
                    {t.subject || t.message}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={t.status} />
                  </td>
                  <td className="px-4 py-3">
                    <PriorityBadge priority={t.priority} />
                  </td>
                  <td className="px-4 py-3 text-content-muted">{t.assignedTo || "Unassigned"}</td>
                  <td className="px-4 py-3">
                    <Timestamp value={t.updatedAt} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pages > 1 && (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-control border border-line-strong bg-surface px-3 py-1.5 text-[13px] text-content transition-colors hover:bg-surface-sunken disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-[13px] text-content-muted">
            Page {page} of {pages}
          </span>
          <button
            type="button"
            disabled={page >= pages}
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            className="rounded-control border border-line-strong bg-surface px-3 py-1.5 text-[13px] text-content transition-colors hover:bg-surface-sunken disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}