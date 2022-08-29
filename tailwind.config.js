/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#161723",
        secondary: "#1B1D2B",
        nude:"#575861"
      },
      height:{
        h30: "34rem"
      }
    },
  },
  plugins: [],
}
