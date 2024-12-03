export default {
  content: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,vue}",
    "./renderer/**/*.{js,ts,vue}",
  ],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
};
