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
        logobg: "var(--logo-bg)",
        border: "var(--border)",
        red: {
          650: "#DC4A2D",
        },
        gray: {
          350: "#D1D1D1",
        },
        neutral: {
          350: "#B0B0B0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
