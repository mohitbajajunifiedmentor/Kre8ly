// app/support/login/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supportAuthApi, SupportApiError } from "@/lib/supportApi";
import { Banner, Spinner, INPUT, BTN_PRIMARY } from "@/component/support/ui";

export default function SupportLoginPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [checking, setChecking] = useState(true);

  // Already signed in? Skip straight past the form.
  useEffect(() => {
    let cancelled = false;
    supportAuthApi
      .check()
      .then((res) => {
        if (!cancelled && res.ok) router.replace("/support/tickets");
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChecking(false);
      });
    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!key.trim() || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      await supportAuthApi.login(key.trim());
      router.replace("/support/tickets");
    } catch (err) {
      setError(
        err instanceof SupportApiError ? err.message : "Something went wrong. Please try again."
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 text-content">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-control bg-brand-subtle ring-1 ring-brand/25">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
          </div>
          <h1 className="text-lg font-semibold">Support console</h1>
          <p className="mt-1 text-[13px] text-content-secondary">
            Sign in with your team&apos;s support key.
          </p>
        </div>

        {checking ? (
          <div className="flex justify-center py-6 text-content-muted">
            <Spinner />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="key" className="mb-1.5 block text-[13px] font-medium">
                Support key
              </label>
              <input
                id="key"
                type="password"
                autoFocus
                autoComplete="off"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="••••••••••••"
                className={INPUT}
              />
            </div>

            {error ? <Banner tone="error">{error}</Banner> : null}

            <button
              type="submit"
              disabled={submitting || !key.trim()}
              className={`${BTN_PRIMARY} w-full py-2.5`}
            >
              {submitting ? <Spinner /> : null}
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}