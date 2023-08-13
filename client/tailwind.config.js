/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
 

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        primary : '#FF385C',
    },
    extend: {
      fontFamily: {
        logo: "Poppins",
      },

    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};

