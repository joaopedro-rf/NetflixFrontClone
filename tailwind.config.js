/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      tablet: "600px",
      desktop: "960px",
    },
    extend: {},
  },
  plugins: [],
}