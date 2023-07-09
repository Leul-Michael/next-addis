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
        "clr-purple": "hsl(var(--color-purple) / <alpha-value>)",
        "clr-yellow": "hsl(var(--color-yellow) / <alpha-value>)",
        "clr-green": "hsl(var(--color-green) / <alpha-value>)",
        "clr-sky": "hsl(var(--color-sky) / <alpha-value>)",
        "clr-dark-green": "hsl(var(--color-dark-green) / <alpha-value>)",
      },
      gridTemplateColumns: {
        blog: "repeat(auto-fill, minmax(300px, 1fr))",
        tech: "repeat(auto-fill, minmax(120px, 1fr))",
        works: "repeat(auto-fill, minmax(450px, 1fr))",
      },
      boxShadow: {
        full: "0 0 0px 9999px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
