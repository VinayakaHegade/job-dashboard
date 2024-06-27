import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xl: ["20px", "27px"],
      },
      fontFamily: {
        sans: ["var(--font-general-sans)"],
        satoshi: ["var(--font-satoshi)"],
      },
      colors: {
        logobg: "var(--logo-bg)",
        border: "var(--border)",
        emerald: {
          75: "#ECFDF3",
          250: "#ABEFC6",
          750: "#067647",
        },
        gray: {
          350: "#D1D1D1",
        },
        neutral: {
          350: "#B0B0B0",
          750: "#3D3D3D",
        },
        red: {
          650: "#DC4A2D",
        },
        zinc: {
          450: "#888888",
          550: "#5D5D5D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
