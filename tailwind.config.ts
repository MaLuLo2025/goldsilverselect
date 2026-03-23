import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C5A44E",
          dark: "#b39340",
          light: "#d4b96a",
        },
        forest: {
          DEFAULT: "#1B3D2F",
          dark: "#142e23",
          light: "#245239",
        },
        charcoal: {
          DEFAULT: "#1E1E1E",
          dark: "#111110",
          light: "#2a2a2a",
        },
        cream: {
          DEFAULT: "#FAFAF5",
          dark: "#F5F2EB",
          warm: "#F0ECE2",
        },
        border: "#e8e5dd",
      },
      fontFamily: {
        serif: ["Georgia", "EB Garamond", "serif"],
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
