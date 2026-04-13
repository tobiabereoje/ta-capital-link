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
        navy: {
          50: "#f0f3f8",
          100: "#dce3ef",
          200: "#b9c7df",
          300: "#8fa5c9",
          400: "#6583b3",
          500: "#3f5f96",
          600: "#2d4a7a",
          700: "#1e3560",
          800: "#142545",
          900: "#0b1a30",
          950: "#060e1a",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d5",
          200: "#f4deaa",
          300: "#edc974",
          400: "#e5af42",
          500: "#d4952a",
          600: "#b87620",
          700: "#99591d",
          800: "#7d471e",
          900: "#673b1c",
          950: "#3a1d0c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
