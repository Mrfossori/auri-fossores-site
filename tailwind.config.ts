import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        auri: {
          gold: "#C9A227",
          obsidian: "#111111",
          void: "#1A1A1A",
          charcoal: "#2A2A2A",
          parchment: "#F5F0E8",
          red: "#C8352B",
          tech: "#00E5CC",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Impact", "Bebas Neue", "Arial Narrow", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        gold: "0 0 5rem rgba(201, 162, 39, 0.18)",
        red: "0 0 3.375rem rgba(200, 53, 43, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
