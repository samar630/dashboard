/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}