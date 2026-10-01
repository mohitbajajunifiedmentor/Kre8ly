/**
 * SSR safety net.
 *
 * The Vite app was 100% client-rendered, so ~72 call sites read `localStorage`
 * freely — including a few during module evaluation and during render
 * (`src/Redux-setup/slice.js`, `src/component/Footer.jsx`,
 * `src/component/Admin/NavBar.jsx`).
 *
 * Under Next.js those same lines also run on the server during prerender.
 * Rather than rewriting every call site (which would risk changing behaviour),
 * this installs a no-op, always-empty Storage implementation on the server.
 *
 * Consequences, by design:
 *   - On the server every read returns `null` -> components render their
 *     logged-out / default branch, which is exactly what the browser rendered
 *     on first paint before hydration anyway.
 *   - Writes on the server are discarded, so nothing leaks between requests.
 *   - In the browser this module does nothing at all; the real Storage is used.
 */

if (typeof window === "undefined") {
  const noopStorage = {
    getItem: () => null,
    setItem: () => undefined,
    removeItem: () => undefined,
    clear: () => undefined,
    key: () => null,
    get length() {
      return 0;
    },
  };

  if (typeof globalThis.localStorage === "undefined") {
    Object.defineProperty(globalThis, "localStorage", {
      value: noopStorage,
      configurable: true,
      writable: true,
    });
  }

  if (typeof globalThis.sessionStorage === "undefined") {
    Object.defineProperty(globalThis, "sessionStorage", {
      value: noopStorage,
      configurable: true,
      writable: true,
    });
  }
}

export default null;
