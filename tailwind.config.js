/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-main": "hsl(var(--color-bg) / <alpha-value>)",
        "clr-muted": "hsl(var(--color-muted) / <alpha-value>)",
        "clr-font": "hsl(var(--color-font) / <alpha-value>)",
        "clr-accent": "hsl(var(--color-accent) / <alpha-value>)",
        "clr-border": "hsl(var(--color-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
