/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"var(--primary)",
        "secondary":"var(--secondary)",
        "background":"var(--background)",
        "background-200":"var(--background-200)",
        "font":"var(--font)",
        "font-100":"var(--font-100)"
      },
    },
  },
  plugins: [],
}