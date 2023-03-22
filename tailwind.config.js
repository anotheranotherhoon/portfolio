/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode : "class",
  theme: {
    extend: {
      fontFamily:{
        pt : ["PT Serif", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
