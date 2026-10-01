"use client";

/**
 * Kre8ly theme system.
 *
 * Replaces the previous `useState(false)` dark-mode flag, which had three real
 * bugs: the stored value was written to localStorage but never read back on
 * load (so the theme reset to light on every refresh), there was no system
 * preference support, and because the class was applied in an effect the page
 * always painted light first and then flashed to dark.
 *
 * Now:
 *   - three modes: "light" | "dark" | "system"
 *   - persisted under the `kre8ly-theme` key
 *   - `system` follows the OS and keeps following it live
 *   - no flash: an inline script in <head> applies the class before first paint
 *
 * `darkMode` / `setDarkMode` are still exported with their original boolean
 * shape so the 76 route wrappers and every page component keep working
 * untouched.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

export const THEME_STORAGE_KEY = "kre8ly-theme";

const AppContext = createContext({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
  darkMode: false,
  setDarkMode: () => {},
  geoLocation: "India",
});

function systemPrefersDark() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
}

function applyThemeClass(resolved) {
  const root = document.documentElement;
  // Suppress the colour transition during an explicit switch, otherwise every
  // element on the page animates at once and the repaint smears.
  root.classList.add("k-theme-switching");
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
  window.setTimeout(() => root.classList.remove("k-theme-switching"), 0);
}

export function AppProvider({ children }) {
  // Seeded to match what the inline <head> script already decided, so the first
  // client render agrees with the server-painted DOM and nothing flashes.
  const [theme, setThemeState] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("light");
  const [geoLocation, setGeoLocation] = useState("India");

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      /* storage blocked (private mode, embedded webview) - fall back to system */
    }
    const initial =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    setThemeState(initial);
    setResolvedTheme(
      initial === "system" ? (systemPrefersDark() ? "dark" : "light") : initial
    );
  }, []);

  // Keep following the OS while the user is on "system".
  useEffect(() => {
    if (theme !== "system" || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const next = e.matches ? "dark" : "light";
      setResolvedTheme(next);
      applyThemeClass(next);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable - theme still applies for this session */
    }
    const resolved =
      next === "system" ? (systemPrefersDark() ? "dark" : "light") : next;
    setResolvedTheme(resolved);
    applyThemeClass(resolved);
  }, []);

  // Backwards-compatible boolean API used by every existing page component.
  const darkMode = resolvedTheme === "dark";
  const setDarkMode = useCallback(
    (value) => {
      const next =
        typeof value === "function" ? value(resolvedTheme === "dark") : value;
      setTheme(next ? "dark" : "light");
    },
    [resolvedTheme, setTheme]
  );

  // Unchanged from the original App.jsx: resolve the visitor's city for pricing.
  useEffect(() => {
    let cancelled = false;
    axios
      .get("https://ipapi.co/json/")
      .then((res) => {
        if (!cancelled && res?.data?.city) setGeoLocation(res.data.city);
      })
      .catch((err) => {
        console.error("Error fetching location:", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      darkMode,
      setDarkMode,
      geoLocation,
    }),
    [theme, setTheme, resolvedTheme, darkMode, setDarkMode, geoLocation]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useContext(AppContext);
  return { theme, setTheme, resolvedTheme };
}
