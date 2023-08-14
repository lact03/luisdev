/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#180A0A",
        secondary: {
          1: "#711A75",
          2: "#F10086",
          3: "#F582A7",
        },
      },
    },
  },
  plugins: [],
};
