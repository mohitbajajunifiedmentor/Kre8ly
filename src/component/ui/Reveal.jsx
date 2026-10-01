"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./reveal.css";

/**
 * Reveals its children as they scroll into view.
 *
 * Why not AOS, which is already in the project: AOS writes `aos-animate`
 * directly onto the DOM node, so any React re-render that changes that
 * element's className silently deletes it and the element is stuck at
 * `opacity: 0`. This component keeps the whole state in React, so that class
 * of bug cannot happen.
 *
 * Safety property: if the JavaScript never runs, nothing is hidden. The hidden
 * class is only ever applied by this component, never by the stylesheet.
 *
 * @param {string}  as         element to render, default "div"
 * @param {string}  direction  up | down | left | right | scale | fade
 * @param {number}  delay      ms, for staggering a list
 * @param {number}  threshold  0-1, how much must be visible to trigger
 * @param {boolean} once       stop observing after the first reveal (default true)
 */

// useLayoutEffect warns during SSR; on the server there is nothing to measure.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle | hidden | shown | done

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect the OS setting without animating anything at all.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setState("done");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setState("done"); // old browser: show everything, animate nothing
      return;
    }

    // Anything already on screen is shown immediately and never hidden, so
    // above-the-fold content cannot flash between paint and the first
    // observer callback (which does not fire until the next frame).
    const box = el.getBoundingClientRect();
    const alreadyVisible = box.top < window.innerHeight && box.bottom > 0;
    if (alreadyVisible) {
      setState("shown");
      return;
    }

    setState("hidden");
  }, []);

  useEffect(() => {
    if (state !== "hidden") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setState("hidden");
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [state, once, threshold, rootMargin]);

  // Release the compositor hint once the transition has finished.
  useEffect(() => {
    if (state !== "shown") return;
    const t = setTimeout(() => setState("done"), 600 + delay);
    return () => clearTimeout(t);
  }, [state, delay]);

  const classes = [
    "k-reveal",
    `k-reveal--${direction}`,
    state === "hidden" && "k-reveal--hidden",
    (state === "shown" || state === "done") && "k-reveal--shown",
    state === "done" && "k-reveal--done",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Staggers a list without hand-writing a delay on every child.
 * `step` is kept small: beyond ~80ms a grid feels like it is loading slowly
 * rather than animating.
 */
export function RevealGroup({ children, step = 70, max = 6, ...rest }) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <>
      {items.map((child, i) => (
        <Reveal key={i} delay={Math.min(i, max) * step} {...rest}>
          {child}
        </Reveal>
      ))}
    </>
  );
}