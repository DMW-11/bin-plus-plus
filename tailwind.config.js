/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a651",
        lightGray: "#f9f9f9",
        cardBorder: "#dddddd"
      }
    }
  },
  plugins: []
};
