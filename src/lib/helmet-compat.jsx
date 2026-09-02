"use client";

/**
 * react-helmet-async  ->  Next.js compatibility shim.
 *
 * SEO is now driven by the Next.js Metadata API (see each `app/**\/page.jsx`),
 * which emits real server-rendered <head> tags — that is what crawlers read.
 *
 * The 53 page components that already contained a <Helmet> block are left
 * untouched. This shim keeps those blocks working for *client-side* navigation
 * (and for dynamic pages such as /blog/[slug] whose tags depend on fetched
 * data) by applying them to document.head after mount. It never renders
 * anything into the React tree, so it cannot cause a hydration mismatch.
 */

import { useEffect } from "react";
import { Children, isValidElement } from "react";

const MANAGED = "data-helmet-compat";

function applyTag(type, props) {
  if (type === "title") {
    const text = Children.toArray(props.children).join("");
    if (text) document.title = text;
    return;
  }

  if (type === "meta") {
    const key = props.name
      ? `meta[name="${props.name}"]`
      : props.property
      ? `meta[property="${props.property}"]`
      : props.httpEquiv
      ? `meta[http-equiv="${props.httpEquiv}"]`
      : null;
    if (!key) return;
    let el = document.head.querySelector(key);
    if (!el) {
      el = document.createElement("meta");
      if (props.name) el.setAttribute("name", props.name);
      if (props.property) el.setAttribute("property", props.property);
      if (props.httpEquiv) el.setAttribute("http-equiv", props.httpEquiv);
      el.setAttribute(MANAGED, "");
      document.head.appendChild(el);
    }
    if (props.content != null) el.setAttribute("content", String(props.content));
    return;
  }

  if (type === "link") {
    const rel = props.rel;
    if (!rel) return;
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      el.setAttribute(MANAGED, "");
      document.head.appendChild(el);
    }
    for (const [k, v] of Object.entries(props)) {
      if (k === "children" || v == null) continue;
      el.setAttribute(k === "hrefLang" ? "hreflang" : k.toLowerCase(), String(v));
    }
    return;
  }

  if (type === "script") {
    // Structured data (application/ld+json) blocks.
    const text = Children.toArray(props.children).join("");
    if (!text) return;
    const existing = [...document.head.querySelectorAll(`script[${MANAGED}]`)];
    if (existing.some((s) => s.textContent === text)) return;
    const el = document.createElement("script");
    el.type = props.type || "application/ld+json";
    el.setAttribute(MANAGED, "");
    el.textContent = text;
    document.head.appendChild(el);
  }
}

function walk(children) {
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === Helmet) {
      walk(child.props.children);
      return;
    }
    if (typeof child.type === "string") {
      applyTag(child.type, child.props || {});
      return;
    }
    // Fragments and arrays
    if (child.props && child.props.children) walk(child.props.children);
  });
}

export function Helmet({ children }) {
  useEffect(() => {
    walk(children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return null;
}

export function HelmetProvider({ children }) {
  return children ?? null;
}

export default Helmet;
