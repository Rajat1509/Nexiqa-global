import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070D",
        elevated: "#0A0F1C",
        surface: "#0D1424",
        "surface-hover": "#111A2E",
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
        blue: {
          DEFAULT: "#2B5CFF",
          deep: "#0B2E9E",
        },
        ink: "#F4F7FB",
        muted: "#7E90AC",
        line: "rgba(110,170,255,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(115deg, #22D3EE 0%, #2B5CFF 55%, #0B2E9E 100%)",
        "brand-gradient-soft": "linear-gradient(115deg, rgba(34,211,238,0.15) 0%, rgba(43,92,255,0.10) 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(34,211,238,0.16), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.15)",
        "glow-strong": "0 0 60px rgba(34,211,238,0.25)",
      },
      animation: {
        "pulse-slow": "pulseSlow 3.5s ease-in-out infinite",
        "dash": "dash 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        dash: {
          to: { strokeDashoffset: "-200" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
