import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["SFMono-Regular", "ui-monospace", "monospace"],
      },
      colors: {
        graphite: {
          950: "#050505",
          900: "#0a0a0b",
          800: "#151518",
          700: "#24242a",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(59, 130, 246, 0.22)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.18), rgba(255,255,255,0.03) 30%, transparent 58%)",
        "grid-fade": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
