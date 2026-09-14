// app/support/tickets/[ticketNumber]/page.jsx
"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ticketsApi } from "@/lib/supportApi";
import {
  StatusBadge,
  PriorityBadge,
  TicketNumber,
  Timestamp,
  Spinner,
  Banner,
  STATUS_ORDER,
  PRIORITY_ORDER,
  STATUS_META,
  PRIORITY_META,
  INPUT,
  SELECT,
  BTN_PRIMARY,
} from "@/component/support/ui";

const AGENT_NAME_KEY = "support_console_agent_name";

const AUTHOR_META = {
  user: { label: "Customer", tone: "text-content" },
  ai: { label: "AI", tone: "text-info" },
  support: { label: "Support", tone: "text-brand" },
  system: { label: "System", tone: "text-content-muted" },
};

function AuthorLabel({ author, authorName }) {
  const m = AUTHOR_META[author] || AUTHOR_META.user;
  return (
    <span className={`text-[13px] font-medium ${m.tone}`}>
      {author === "support" ? authorName || m.label : m.label}
    </span>
  );
}

function ThreadMessage({ msg }) {
  if (msg.author === "system") {
    return (
      <div className="flex items-center gap-2 py-1.5 pl-1 text-[12px] text-content-muted">
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
        {msg.body}
        <Timestamp value={msg.createdAt} />
      </div>
    );
  }

  return (
    <div
      className={`rounded-card border px-3.5 py-2.5 ${
        msg.internal ? "border-brand/25 bg-brand-subtle" : "border-line bg-surface"
      }`}
    >
      <div className="mb-1 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AuthorLabel author={msg.author} authorName={msg.authorName} />
          {msg.internal ? (
            <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[10px] font-medium text-brand">
              Internal note
            </span>
          ) : null}
        </div>
        <Timestamp value={msg.createdAt} />
      </div>
      <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-content-secondary">
        {msg.body}
      </p>
    </div>
  );
}

export default function TicketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const ticketNumber = params?.ticketNumber;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);

  const [statusDraft, setStatusDraft] = useState("");
  const [priorityDraft, setPriorityDraft] = useState("");
  const [assignedDraft, setAssignedDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveOk, setSaveOk] = useState(false);

  const [agentName, setAgentName] = useState("");
  const [note, setNote] = useState("");
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(AGENT_NAME_KEY);
      if (saved) setAgentName(saved);
    } catch {
      /* storage blocked */
    }
  }, []);

  const load = useCallback(() => {
    if (!ticketNumber) return;
    setLoading(true);
    setLoadError("");
    ticketsApi
      .get(ticketNumber)
      .then((res) => {
        setData(res);
        setStatusDraft(res.ticket.status);
        setPriorityDraft(res.ticket.priority);
        setAssignedDraft(res.ticket.assignedTo || "");
      })
      .catch((err) => setLoadError(err.message || "Could not load this ticket."))
      .finally(() => setLoading(false));
  }, [ticketNumber]);

  useEffect(() => {
    load();
  }, [load]);

  function rememberAgent() {
    const trimmed = agentName.trim();
    if (!trimmed) return undefined;
    try {
      window.localStorage.setItem(AGENT_NAME_KEY, trimmed);
    } catch {
      /* ignore */
    }
    return trimmed;
  }

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    setSaveError("");
    setSaveOk(false);
    try {
      const res = await ticketsApi.update(ticketNumber, {
        status: statusDraft,
        priority: priorityDraft,
        assignedTo: assignedDraft.trim(),
        agentName: rememberAgent(),
      });
      setData((d) => ({ ...d, ticket: { ...d.ticket, ...res.ticket } }));
      setSaveOk(true);
      load(); // pick up the new system-log line in the thread
    } catch (err) {
      setSaveError(err.message || "Could not update the ticket.");
    } finally {
      setSaving(false);
    }
  }

  async function handleAddNote(e) {
    e.preventDefault();
    if (!note.trim() || posting) return;
    setPosting(true);
    setPostError("");
    try {
      await ticketsApi.addNote(ticketNumber, {
        message: note.trim(),
        agentName: rememberAgent(),
      });
      setNote("");
      load();
    } catch (err) {
      setPostError(err.message || "Could not send the note.");
    } finally {
      setPosting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-content-muted">
        <Spinner />
      </div>
    );
  }

  if (loadError || !data) {
    return (
      <div className="space-y-4">
        <Banner tone="error">{loadError || "Ticket not found."}</Banner>
        <Link href="/support/tickets" className="text-[13px] text-brand hover:underline">
          ← Back to all tickets
        </Link>
      </div>
    );
  }

  const { ticket, messages, transcript } = data;
  const dirty =
    statusDraft !== ticket.status ||
    priorityDraft !== ticket.priority ||
    (assignedDraft.trim() || null) !== (ticket.assignedTo || null);

  return (
    <div className="space-y-5">
      <button
        type="button"
        onClick={() => router.push("/support/tickets")}
        className="text-[13px] text-content-muted transition-colors hover:text-content"
      >
        ← All tickets
      </button>

      {/* Header */}
      <div className="rounded-card border border-line bg-surface p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <TicketNumber className="text-[15px]">{ticket.ticketNumber}</TicketNumber>
              <StatusBadge status={ticket.status} />
              <PriorityBadge priority={ticket.priority} />
            </div>
            <h1 className="mt-1.5 text-[16px] font-medium text-content">
              {ticket.subject || "No subject"}
            </h1>
            {ticket.escalationReason ? (
              <p className="mt-1 text-[12px] text-content-muted">
                Escalated: {ticket.escalationReason.replaceAll("_", " ")}
              </p>
            ) : null}
          </div>
          <div className="text-right text-[12px] text-content-muted">
            <p>
              Opened <Timestamp value={ticket.createdAt} />
            </p>
            {ticket.firstResponseAt ? (
              <p>
                First response <Timestamp value={ticket.firstResponseAt} />
              </p>
            ) : (
              <p className="text-warning">Awaiting first response</p>
            )}
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-line pt-4 text-[13px] sm:grid-cols-3">
          <div>
            <dt className="text-[12px] text-content-muted">Requester</dt>
            <dd className="text-content-secondary">{ticket.userName || "Not provided"}</dd>
          </div>
          <div>
            <dt className="text-[12px] text-content-muted">Email</dt>
            <dd className="font-mono text-[12.5px] text-content-secondary">
              {ticket.userEmail || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] text-content-muted">Phone</dt>
            <dd className="font-mono text-[12.5px] text-content-secondary">
              {ticket.userPhone || "—"}
            </dd>
          </div>
        </dl>

        {ticket.message ? (
          <div className="mt-4 border-t border-line pt-4">
            <p className="mb-1 text-[12px] text-content-muted">Original question</p>
            <p className="whitespace-pre-wrap text-[13.5px] leading-relaxed text-content-secondary">
              {ticket.message}
            </p>
          </div>
        ) : null}

        {ticket.aiAnswer ? (
          <div className="mt-3">
            <p className="mb-1 text-[12px] text-content-muted">
              What the bot already told them
            </p>
            <p className="whitespace-pre-wrap rounded-control bg-info-subtle p-3 text-[13px] leading-relaxed text-content-secondary">
              {ticket.aiAnswer}
            </p>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr,300px]">
        {/* Thread + notes */}
        <div className="space-y-4">
          <ol className="space-y-2.5">
            {messages.map((m, i) => (
              <li key={i}>
                <ThreadMessage msg={m} />
              </li>
            ))}
          </ol>

          <form
            onSubmit={handleAddNote}
            className="space-y-2 rounded-card border border-line bg-surface p-3.5"
          >
            <label htmlFor="agent-note" className="block text-[12px] font-medium text-content-muted">
              Add an internal note — visible to the team only
            </label>
            <textarea
              id="agent-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="What did you find, or what should the next agent know?"
              className={`${INPUT} resize-none`}
            />
            {postError ? <Banner tone="error">{postError}</Banner> : null}
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="agent-name" className="sr-only">
                Your name
              </label>
              <input
                id="agent-name"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="Your name"
                className={`${INPUT} w-40`}
              />
              <button type="submit" disabled={!note.trim() || posting} className={BTN_PRIMARY}>
                {posting ? <Spinner /> : null}
                Add note
              </button>
            </div>
          </form>

          {transcript?.length ? (
            <div className="rounded-card border border-line bg-surface">
              <button
                type="button"
                onClick={() => setShowTranscript((v) => !v)}
                aria-expanded={showTranscript}
                className="flex w-full items-center justify-between px-3.5 py-2.5 text-[13px] text-content-muted transition-colors hover:text-content"
              >
                <span>Chat transcript that led here ({transcript.length} turns)</span>
                <span aria-hidden="true">{showTranscript ? "Hide" : "Show"}</span>
              </button>
              {showTranscript ? (
                <div className="max-h-80 space-y-1.5 overflow-y-auto border-t border-line px-3.5 py-3">
                  {transcript.map((t, i) => (
                    <p key={i} className="text-[12.5px] leading-relaxed">
                      <span className={t.sender === "user" ? "text-content-muted" : "text-brand"}>
                        {t.sender === "user" ? "Customer: " : "Bot: "}
                      </span>
                      <span className="text-content-secondary">{t.message}</span>
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="space-y-3 rounded-card border border-line bg-surface p-4">
            <p className="text-[12px] font-medium text-content-muted">Ticket status</p>

            <div>
              <label htmlFor="set-status" className="mb-1 block text-[12px] text-content-muted">
                Status
              </label>
              <select
                id="set-status"
                value={statusDraft}
                onChange={(e) => setStatusDraft(e.target.value)}
                className={`${SELECT} w-full`}
              >
                {STATUS_ORDER.map((s) => (
                  <option key={s} value={s}>
                    {STATUS_META[s].label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="set-priority" className="mb-1 block text-[12px] text-content-muted">
                Priority
              </label>
              <select
                id="set-priority"
                value={priorityDraft}
                onChange={(e) => setPriorityDraft(e.target.value)}
                className={`${SELECT} w-full`}
              >
                {PRIORITY_ORDER.map((p) => (
                  <option key={p} value={p}>
                    {PRIORITY_META[p].label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="set-assignee" className="mb-1 block text-[12px] text-content-muted">
                Assigned to
              </label>
              <input
                id="set-assignee"
                value={assignedDraft}
                onChange={(e) => setAssignedDraft(e.target.value)}
                placeholder="Unassigned"
                className={INPUT}
              />
            </div>

            {saveError ? <Banner tone="error">{saveError}</Banner> : null}
            {saveOk && !dirty ? <Banner tone="success">Saved.</Banner> : null}

            <button
              type="button"
              onClick={handleSave}
              disabled={!dirty || saving}
              className={`${BTN_PRIMARY} w-full`}
            >
              {saving ? <Spinner /> : null}
              Save changes
            </button>

            <div className="flex flex-wrap gap-1.5 border-t border-line pt-3">
              <button
                type="button"
                onClick={() => setStatusDraft("resolved")}
                className="rounded-control border border-success/25 bg-success-subtle px-2.5 py-1 text-[12px] text-success transition-colors hover:bg-success/15"
              >
                Mark resolved
              </button>
              <button
                type="button"
                onClick={() => setStatusDraft("waiting_for_user")}
                className="rounded-control border border-brand/25 bg-brand-subtle px-2.5 py-1 text-[12px] text-brand transition-colors hover:bg-brand/15"
              >
                Waiting on user
              </button>
              <button
                type="button"
                onClick={() => setStatusDraft("open")}
                className="rounded-control border border-warning/25 bg-warning-subtle px-2.5 py-1 text-[12px] text-warning transition-colors hover:bg-warning/15"
              >
                Reopen
              </button>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface p-4 text-[12.5px] text-content-muted">
            <p className="mb-2 font-medium text-content-secondary">Timeline</p>
            <p className="flex justify-between py-0.5">
              <span>Agent last opened</span>
              <Timestamp value={ticket.agentSeenAt} />
            </p>
            <p className="flex justify-between py-0.5">
              <span>Resolved</span>
              <Timestamp value={ticket.resolvedAt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}