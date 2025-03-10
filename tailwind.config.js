/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        secondary: "#FFA500", // Orange
        accent: "#008000", // Green
      },
    },
  },
  plugins: [],
}