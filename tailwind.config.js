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
      borderWidth:{
        '100': '25px',
        '50':'30px'
      }, spacing: {
        '82': '350px',
        '100': '730px',
        '30': '510px'
      }
    },
  },
  plugins: [],
}
