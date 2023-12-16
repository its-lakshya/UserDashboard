/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'base': "840px",
      'xs': "440px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

