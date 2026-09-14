// lib/supportApi.js
//
// Thin fetch wrappers around the existing routes:
//   POST   /api/support/login   { key }
//   GET    /api/support/login
//   DELETE /api/support/login
//   GET    /api/tickets?view=stats
//   GET    /api/tickets?status=&priority=&assignedTo=&sort=&q=&page=&limit=
//   GET    /api/tickets/[ticketNumber]
//   POST   /api/tickets/[ticketNumber]   { message, agentName }
//   PATCH  /api/tickets/[ticketNumber]   { status, assignedTo, priority, agentName }
//
// Auth is the httpOnly session cookie set by /api/support/login — every call
// here just needs `credentials: "same-origin"` (the default for same-origin
// requests, set explicitly so this still works if the portal is ever served
// from a different subdomain than the API).

class SupportApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "SupportApiError";
    this.status = status;
  }
}

async function request(path, options = {}) {
  const res = await fetch(path, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  let body = null;
  try {
    body = await res.json();
  } catch {
    // A 204 or a non-JSON error page — fall through with body === null.
  }

  if (!res.ok) {
    throw new SupportApiError(body?.error || `Request failed (${res.status})`, res.status);
  }
  return body;
}

export const supportAuthApi = {
  login: (key) => request("/api/support/login", { method: "POST", body: JSON.stringify({ key }) }),
  check: () => request("/api/support/login", { method: "GET" }),
  logout: () => request("/api/support/login", { method: "DELETE" }),
};

export const ticketsApi = {
  stats: () => request("/api/tickets?view=stats"),

  list: ({ status, priority, assignedTo, sort, q, page = 1, limit = 20 } = {}) => {
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (priority) params.set("priority", priority);
    if (assignedTo) params.set("assignedTo", assignedTo);
    if (sort) params.set("sort", sort);
    if (q) params.set("q", q);
    params.set("page", String(page));
    params.set("limit", String(limit));
    return request(`/api/tickets?${params.toString()}`);
  },

  get: (ticketNumber) => request(`/api/tickets/${encodeURIComponent(ticketNumber)}`),

  addNote: (ticketNumber, { message, agentName }) =>
    request(`/api/tickets/${encodeURIComponent(ticketNumber)}`, {
      method: "POST",
      body: JSON.stringify({ message, agentName }),
    }),

  update: (ticketNumber, { status, assignedTo, priority, agentName }) =>
    request(`/api/tickets/${encodeURIComponent(ticketNumber)}`, {
      method: "PATCH",
      body: JSON.stringify({ status, assignedTo, priority, agentName }),
    }),
};

export { SupportApiError };