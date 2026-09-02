/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #10062A 0%, #291559 68.1%, #3D207E 100%)",
        "custom-card-gradient":
          "linear-gradient(94.89deg, rgba(19, 7, 46, 0.85) 1.2%, rgba(63, 33, 130, 0.85) 97.79%)",
        "custom-light-gradient":
          "linear-gradient(180deg, #CAD5EE 0%, #FCFCFC 2.09%)",
        "custom-dark-gradient":
          "linear-gradient(180deg, #121D37 0%, #0A0F1A 2%)",
        fellowShipCardGradient:
          "linear-gradient(180deg, #620aa0 0%,  #3d207e 100%)",
        TechStackCardGradient:
          "linear-gradient(90deg, #3D207E 0%, #6E3AE4 100%)",
        reviewCardGradient: "linear-gradient(90deg, #6439C5 0%, #301B5F 100%)",
      },

      boxShadow: {
        /* Kre8ly elevation scale */
        xs: "var(--k-shadow-xs)",
        sm: "var(--k-shadow-sm)",
        md: "var(--k-shadow-md)",
        lg: "var(--k-shadow-lg)",
        focus: "var(--k-shadow-focus)",

        /* legacy */
        custom: "0 0 40px rgba(0,0,0,0.5)",
        customSoft: "4px 4px 10px 0px rgba(0, 0, 0, 0.15)",
      },

      borderRadius: {
        /* One radius scale for the whole product: controls -> cards -> sheets.
           Driven from src/styles/tokens.css so rounding is re-themable too. */
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
      },

      utilities: {
        ".will-change-transform": {
          "will-change": "transform",
        },
      },

      // 13072E

      colors: {
        /* ---- Kre8ly semantic tokens (src/styles/tokens.css) ----------------
           These are the names to use in new/redesigned code. The legacy names
           below are kept so the 1,397 existing hard-coded usages keep working
           while pages are migrated one at a time. */
        brand: {
          DEFAULT: "hsl(var(--k-brand) / <alpha-value>)",
          hover: "hsl(var(--k-brand-hover) / <alpha-value>)",
          active: "hsl(var(--k-brand-active) / <alpha-value>)",
          subtle: "hsl(var(--k-brand-subtle) / <alpha-value>)",
          fg: "hsl(var(--k-brand-fg) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--k-accent) / <alpha-value>)",
          fg: "hsl(var(--k-accent-fg) / <alpha-value>)",
        },
        canvas: "hsl(var(--k-canvas) / <alpha-value>)",
        surface: {
          DEFAULT: "hsl(var(--k-surface) / <alpha-value>)",
          raised: "hsl(var(--k-surface-raised) / <alpha-value>)",
          sunken: "hsl(var(--k-surface-sunken) / <alpha-value>)",
        },
        overlay: "hsl(var(--k-overlay) / <alpha-value>)",
        content: {
          DEFAULT: "hsl(var(--k-text) / <alpha-value>)",
          secondary: "hsl(var(--k-text-secondary) / <alpha-value>)",
          muted: "hsl(var(--k-text-muted) / <alpha-value>)",
          inverse: "hsl(var(--k-text-inverse) / <alpha-value>)",
        },
        line: {
          DEFAULT: "hsl(var(--k-border) / <alpha-value>)",
          strong: "hsl(var(--k-border-strong) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--k-success) / <alpha-value>)",
          subtle: "hsl(var(--k-success-subtle) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--k-warning) / <alpha-value>)",
          subtle: "hsl(var(--k-warning-subtle) / <alpha-value>)",
        },
        error: {
          DEFAULT: "hsl(var(--k-error) / <alpha-value>)",
          subtle: "hsl(var(--k-error-subtle) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--k-info) / <alpha-value>)",
          subtle: "hsl(var(--k-info-subtle) / <alpha-value>)",
        },

        /* ---- legacy (do not use in new code) ---- */
        primary: "#fff",
        secondary: "#C0C0C0",
        tertiary: "#969696",
        // blue: "#0B1120",
        // purple: "#5B35AF",
        // "blue-200": "#291457",
        grayBackground: "#FCFCFC",
        lightBackground: "#EBEBEB",
        darkBackground: "#0E0A32",
        lightText: "#1a202c",
        darkText: "#FFFFFF",
        lightInput: "#FFFFFF",
        darkInput: "#3e3b5b",
        darkSideBar: "#1D1941",
        lightSideBar: "#F7F7F7",
        LighttableOddRows: "#F6F4FE",
        LighttableEvenRows: "#FFFFFF",
        darktableOddRows: "#4A4765",
        darktableEvenRows: "#2C284A",
        cardColor: "#242044",
        progressBarColor: "#852FFF",
        graphBackground: "#3D207E",
        textcolor: "#52527A",
        navyColor: "#1D2B45",
      },

      fontFamily: {
        Poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
