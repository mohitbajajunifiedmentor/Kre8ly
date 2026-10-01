"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { IoClose, IoSend } from "react-icons/io5";
import { QUICK_TOPICS } from "@/lib/faq";
import { FLOATING_SLOT_1, FLOATING_Z_CHAT } from "@/component/ui/floating-stack";
import { saveTicket } from "@/lib/ticketStore";

const API_URL = "/api/chat";
const STORAGE_KEY = "kre8ly_chat_session";
const HISTORY_KEY = "kre8ly_chat_history";

let idCounter = 0;
const nextId = () => ++idCounter;

const GREETING = {
  id: 0,
  sender: "bot",
  text: "Hi! I am the Kre8ly assistant. I can help with courses, fees, enrolment, certificates, portal access and more. What would you like to know?",
};

/**
 * Turns bare routes and URLs in an answer into real links, so the FAQ can say
 * "/courses" and the user gets something clickable. Everything else is rendered
 * as plain text — no dangerouslySetInnerHTML, so an answer can never inject markup.
 */
function RichText({ text }) {
  const parts = String(text).split(/(https?:\/\/[^\s]+|(?<![\w/])\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)/gi);

  return parts.map((part, i) => {
    if (!part) return null;
    const isUrl = /^https?:\/\//i.test(part);
    const isRoute = /^\/[a-z0-9-]/i.test(part);
    if (!isUrl && !isRoute) return <span key={i}>{part}</span>;

    return (
      <a
        key={i}
        href={part}
        target={isUrl ? "_blank" : undefined}
        rel={isUrl ? "noopener noreferrer" : undefined}
        className="underline underline-offset-2 font-medium text-brand hover:text-brand-hover"
      >
        {isUrl ? part.replace(/^https?:\/\//, "") : part}
      </a>
    );
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [unread, setUnread] = useState(false);
  // When the server asks for a phone/email it returns awaiting:"contact".
  // The composer adapts so the user is not left guessing what to type.
  const [awaiting, setAwaiting] = useState(null);

  const sessionIdRef = useRef(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  /* ── session + transcript restore ───────────────────────────────────────
     The old widget kept only the session id, so a page navigation wiped the
     visible conversation while the server still had it — the user appeared to
     lose their chat. The transcript is now restored too. */
  useEffect(() => {
    try {
      let sid = sessionStorage.getItem(STORAGE_KEY);
      if (!sid) {
        sid =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `s-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        sessionStorage.setItem(STORAGE_KEY, sid);
      }
      sessionIdRef.current = sid;

      const saved = sessionStorage.getItem(HISTORY_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) {
          idCounter = parsed.reduce((m, x) => Math.max(m, x.id || 0), 0);
          setMessages(parsed);
          setShowOptions(false);
        }
      }
    } catch {
      /* storage blocked (private mode) — chat still works, just not persisted */
    }
  }, []);

  useEffect(() => {
    if (messages.length <= 1) return;
    try {
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify(messages.slice(-50)));
    } catch {
      /* quota or blocked — non-fatal */
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, showOptions, loading]);

  /* ── dialog behaviour: Escape closes, focus moves in and back out ─────── */
  useEffect(() => {
    if (!isOpen) return;
    setUnread(false);
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const pushBot = useCallback((text, extra = {}) => {
    setMessages((prev) => [...prev, { id: nextId(), sender: "bot", text, ...extra }]);
  }, []);

  const sendMessage = useCallback(
    async (overrideText) => {
      const text = (overrideText ?? input).trim();
      if (!text || loading) return;

      setShowOptions(false);
      setMessages((prev) => [...prev, { id: nextId(), sender: "user", text }]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, sessionId: sessionIdRef.current }),
        });

        const data = await res.json().catch(() => null);

        if (res.status === 429) {
          pushBot(data?.error || "Please try again in a moment.");
          return;
        }
        if (!res.ok || !data) {
          pushBot("I did not get a response from the server. Please try again in a moment.", {
            retryText: text,
          });
          return;
        }

        if (data.sessionId) {
          sessionIdRef.current = data.sessionId;
          try {
            sessionStorage.setItem(STORAGE_KEY, data.sessionId);
          } catch {
            /* ignore */
          }
        }

        setAwaiting(data.awaiting || null);

        // The API returns the ticket number AND its access token; that token is
        // the only proof of ownership the user will ever get. It was being
        // dropped, so /support/tickets had nothing to show.
        if (data.ticketNumber && data.accessToken) {
          saveTicket({
            ticketNumber: data.ticketNumber,
            accessToken: data.accessToken,
            subject: data.subject,
          });
        }

        // Buttons are now decided by the server, which owns the flow state.
        // The widget used to append its own "Did this help?" prompt, which
        // could disagree with the stage the server was actually in.
        pushBot(data.reply, {
          isTicket: data.type === "ticket",
          isAsk: data.type === "ask_contact",
          isError: data.type === "error" || data.type === "ai_error",
          actions: data.actions || [],
        });

        if (!isOpen) setUnread(true);
      } catch {
        pushBot("Connection problem. Please check your internet and try again.", {
          retryText: text,
        });
      } finally {
        setLoading(false);
      }
    },
    [input, loading, pushBot, isOpen]
  );

  const resetChat = () => {
    setMessages([GREETING]);
    setShowOptions(true);
    setAwaiting(null);
    try {
      sessionStorage.removeItem(HISTORY_KEY);
    } catch {
      /* ignore */
    }
    setTimeout(() => inputRef.current?.focus(), 60);
  };

  return (
    <div className={`${FLOATING_SLOT_1} ${FLOATING_Z_CHAT} flex flex-col items-end`}>
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Chat support"
          className="mb-3 flex h-[28rem] max-h-[calc(100vh-11rem)] w-[calc(100vw-2rem)] max-w-[20rem] flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-lg md:max-h-[calc(100vh-8rem)] md:w-[22rem] md:max-w-none"
        >
          {/* header */}
          <div className="flex items-center justify-between gap-2 bg-brand px-4 py-3 text-brand-fg">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-sm font-semibold">Kre8ly Support</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Start a new chat"
                className="rounded-control px-2 py-1 text-xs text-brand-fg/80 transition-colors hover:bg-white/15 hover:text-brand-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Reset
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Close chat"
                className="rounded-control p-1 text-brand-fg/80 transition-colors hover:bg-white/15 hover:text-brand-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          </div>

          {/* transcript */}
          <div
            className="flex-1 space-y-2.5 overflow-y-auto bg-surface-sunken p-3"
            role="log"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={
                    msg.sender === "user"
                      ? "ml-auto max-w-[85%] rounded-card rounded-br-sm bg-brand px-3 py-2 text-sm text-brand-fg"
                      : `max-w-[90%] whitespace-pre-line rounded-card rounded-bl-sm border bg-surface px-3 py-2 text-sm text-content ${
                          msg.isTicket
                            ? "border-success/50"
                            : msg.isError
                            ? "border-error/40"
                            : msg.isAsk
                            ? "border-brand/50"
                            : "border-line"
                        }`
                  }
                >
                  {msg.sender === "bot" ? <RichText text={msg.text} /> : msg.text}
                </div>

                {/* failed send -> offer a retry instead of making them retype */}
                {msg.retryText && (
                  <button
                    onClick={() => sendMessage(msg.retryText)}
                    className="ml-0.5 mt-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-content-secondary transition-colors hover:border-brand hover:text-brand"
                  >
                    ↻ Send again
                  </button>
                )}

                {msg.actions?.length > 0 && (
                  <div className="ml-0.5 mt-2 flex flex-wrap gap-1.5">
                    {msg.actions.map((a) =>
                      a.href ? (
                        <a
                          key={a.id}
                          href={a.href}
                          className="rounded-full border border-brand bg-brand px-3 py-1.5 text-xs font-medium text-brand-fg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:shadow-focus"
                        >
                          {a.label}
                        </a>
                      ) : (
                        <button
                          key={a.id}
                          type="button"
                          disabled={loading}
                          onClick={() => sendMessage(a.text)}
                          className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-content-secondary transition-colors hover:border-brand hover:text-brand disabled:opacity-50 focus-visible:outline-none focus-visible:shadow-focus"
                        >
                          {a.label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {showOptions && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK_TOPICS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => sendMessage(option.text)}
                    className="rounded-full border border-brand/40 bg-surface px-3 py-1.5 text-xs text-brand transition-colors hover:bg-brand hover:text-brand-fg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-1 px-1" aria-label="Typing">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-content-muted"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* composer */}
          <div className="flex gap-2 border-t border-line bg-surface p-2">
            <label htmlFor="kre8ly-chat-input" className="sr-only">
              Type your question
            </label>
            <input
              id="kre8ly-chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={loading}
              maxLength={2000}
              inputMode={awaiting === "contact" ? "email" : "text"}
              autoComplete={awaiting === "contact" ? "email" : "off"}
              placeholder={
                awaiting === "contact"
                  ? "Phone number or email..."
                  : "Type your question..."
              }
              className="flex-1 rounded-control border border-line bg-surface px-3 py-2 text-sm text-content outline-none transition-colors placeholder:text-content-muted focus:border-brand disabled:opacity-60"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-10 items-center justify-center rounded-control bg-brand text-brand-fg transition-colors hover:bg-brand-hover disabled:opacity-40"
            >
              <IoSend className="text-base" />
            </button>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat support"}
        aria-expanded={isOpen}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-fg shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:h-14 md:w-14"
      >
        {isOpen ? (
          <IoClose className="text-[1.5rem] md:text-[1.8rem]" />
        ) : (
          <BsChatDotsFill className="text-[1.3rem] md:text-[1.6rem]" />
        )}
        {!isOpen && unread && (
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 h-3 w-3 rounded-full bg-success ring-2 ring-canvas"
          />
        )}
      </button>
    </div>
  );
}