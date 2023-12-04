/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/templates/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};