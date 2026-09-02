"use client";

/**
 * react-router-dom  ->  Next.js App Router compatibility layer.
 *
 * The Vite app used react-router-dom in ~80 files. Instead of rewriting every
 * call site (and risking behavioural drift), this module re-implements the exact
 * surface those files consumed, on top of `next/link` + `next/navigation`.
 *
 * Codemod applied during migration:
 *   from "react-router-dom"        -> from "@/lib/router-compat"
 *   from "react-router-hash-link"  -> from "@/lib/router-compat"
 */

import React, { forwardRef, useCallback, useMemo } from "react";
import NextLink from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
  useParams as useNextParams,
} from "next/navigation";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

/** react-router accepts `to` as a string or a { pathname, search, hash } object. */
function toHref(to) {
  if (to == null) return "/";
  if (typeof to === "string") return to;
  const { pathname = "", search = "", hash = "" } = to;
  const s = search && !search.startsWith("?") ? `?${search}` : search;
  const h = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${pathname}${s}${h}`;
}

/** Strip trailing slash for comparison, but keep "/" itself. */
function normalize(p) {
  if (!p) return "/";
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

/* ------------------------------------------------------------------ */
/* <Link>                                                              */
/* ------------------------------------------------------------------ */

export const Link = forwardRef(function Link(
  { to, href, replace, state, reloadDocument, preventScrollReset, relative, children, ...rest },
  ref
) {
  const target = toHref(to ?? href);

  // Absolute / protocol links must not go through the client router.
  const isExternal =
    /^(https?:)?\/\//i.test(target) ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:");

  if (isExternal || reloadDocument) {
    return (
      <a ref={ref} href={target} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink ref={ref} href={target} replace={replace} scroll={!preventScrollReset} {...rest}>
      {children}
    </NextLink>
  );
});

/* ------------------------------------------------------------------ */
/* <NavLink> — supports the className/style/children render-prop API   */
/* ------------------------------------------------------------------ */

export const NavLink = forwardRef(function NavLink(
  { to, href, end = false, className, style, children, ...rest },
  ref
) {
  const pathname = usePathname();
  const target = toHref(to ?? href);
  const targetPath = normalize(target.split("?")[0].split("#")[0]);
  const current = normalize(pathname || "/");

  const isActive = end
    ? current === targetPath
    : current === targetPath || current.startsWith(`${targetPath}/`);

  const state = { isActive, isPending: false, isTransitioning: false };

  const resolvedClassName =
    typeof className === "function" ? className(state) : className;
  const resolvedStyle = typeof style === "function" ? style(state) : style;
  const resolvedChildren =
    typeof children === "function" ? children(state) : children;

  return (
    <Link
      ref={ref}
      to={target}
      className={resolvedClassName}
      style={resolvedStyle}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {resolvedChildren}
    </Link>
  );
});

/* ------------------------------------------------------------------ */
/* <HashLink> (react-router-hash-link)                                 */
/* ------------------------------------------------------------------ */

export const HashLink = forwardRef(function HashLink(
  { to, href, smooth, scroll, elementId, children, onClick, ...rest },
  ref
) {
  const router = useRouter();
  const pathname = usePathname();
  const target = toHref(to ?? href);

  const handleClick = useCallback(
    (e) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;

      const [pathPart, hashPart] = target.split("#");
      const targetPath = normalize(pathPart || pathname);
      const hash = elementId || hashPart;

      // Same-page hash jump: handle it ourselves so `smooth` keeps working.
      if (hash && normalize(pathname) === targetPath) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          if (scroll) scroll(el);
          else el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
          window.history.replaceState(null, "", `#${hash}`);
        }
        return;
      }

      // Cross-page: navigate, then scroll once the target route has painted.
      if (hash) {
        e.preventDefault();
        router.push(pathPart || "/");
        const started = Date.now();
        const tick = () => {
          const el = document.getElementById(hash);
          if (el) {
            if (scroll) scroll(el);
            else el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
          } else if (Date.now() - started < 3000) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      }
    },
    [target, pathname, elementId, smooth, scroll, router, onClick]
  );

  return (
    <Link ref={ref} to={target} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
});

/* ------------------------------------------------------------------ */
/* useNavigate                                                         */
/* ------------------------------------------------------------------ */

export function useNavigate() {
  const router = useRouter();

  return useCallback(
    (to, options = {}) => {
      // navigate(-1) / navigate(1)
      if (typeof to === "number") {
        if (to < 0) router.back();
        else router.forward();
        return;
      }
      const href = toHref(to);
      if (options.replace) router.replace(href, { scroll: options.preventScrollReset !== true });
      else router.push(href, { scroll: options.preventScrollReset !== true });
    },
    [router]
  );
}

/* ------------------------------------------------------------------ */
/* useLocation                                                         */
/* ------------------------------------------------------------------ */

/**
 * Deliberately does NOT call `useSearchParams()`.
 *
 * In the App Router, `useSearchParams()` opts the whole subtree out of static
 * rendering unless it sits under a <Suspense> boundary. `useLocation` is called
 * from the Navbar, so routing it through `useSearchParams` would de-opt every
 * page in the site. Instead the pathname comes from `usePathname()` (static-safe)
 * and the query string is read from the browser after mount, which is the only
 * place the old SPA could read it anyway.
 */
export function useLocation() {
  const pathname = usePathname();
  const [browserBits, setBrowserBits] = React.useState({ search: "", hash: "" });

  React.useEffect(() => {
    setBrowserBits({
      search: window.location.search,
      hash: window.location.hash,
    });
  }, [pathname]);

  return useMemo(
    () => ({
      pathname: pathname || "/",
      search: browserBits.search,
      hash: browserBits.hash,
      state: null,
      key: "default",
    }),
    [pathname, browserBits.search, browserBits.hash]
  );
}

/* ------------------------------------------------------------------ */
/* useParams / useSearchParams                                         */
/* ------------------------------------------------------------------ */

export function useParams() {
  const params = useNextParams() || {};
  // Next gives arrays for catch-all segments; react-router callers expect strings.
  const out = {};
  for (const [k, v] of Object.entries(params)) {
    out[k] = Array.isArray(v) ? v.join("/") : v;
  }
  return out;
}

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = useCallback(
    (next, options = {}) => {
      const current = new URLSearchParams(searchParams?.toString() ?? "");
      const resolved = typeof next === "function" ? next(current) : next;
      const params =
        resolved instanceof URLSearchParams ? resolved : new URLSearchParams(resolved);
      const qs = params.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;
      if (options.replace) router.replace(url);
      else router.push(url);
    },
    [searchParams, router, pathname]
  );

  return [searchParams ?? new URLSearchParams(), setSearchParams];
}

/* ------------------------------------------------------------------ */
/* <Navigate> — declarative redirect                                   */
/* ------------------------------------------------------------------ */

export function Navigate({ to, replace = true }) {
  const router = useRouter();
  const href = toHref(to);

  React.useEffect(() => {
    if (replace) router.replace(href);
    else router.push(href);
  }, [href, replace, router]);

  return null;
}

/* ------------------------------------------------------------------ */
/* Routing primitives that no longer have a job under the App Router.  */
/* Kept as pass-throughs so leftover JSX does not crash the build.     */
/* ------------------------------------------------------------------ */

/**
 * `<Outlet />` used to render the matched child route. Under the App Router the
 * child content arrives as the `children` prop of a `layout.jsx`. `OutletProvider`
 * bridges the two, so layout components that call `<Outlet />` (e.g.
 * `src/layouts/AffiliateDashboardLayout.jsx`) keep working untouched.
 */
const OutletContext = React.createContext(null);

export function OutletProvider({ value, children }) {
  return <OutletContext.Provider value={value}>{children}</OutletContext.Provider>;
}

export function Outlet({ children }) {
  const fromContext = React.useContext(OutletContext);
  return fromContext ?? children ?? null;
}

export function useOutletContext() {
  return React.useContext(OutletContext);
}

export function BrowserRouter({ children }) {
  return children ?? null;
}
export const Router = BrowserRouter;

export function Routes({ children }) {
  return children ?? null;
}

export function Route() {
  return null;
}

export function useRouteError() {
  return null;
}

export default {
  Link,
  NavLink,
  HashLink,
  Navigate,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
};
