/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "heroGreen": "#BDD542",
      },
      "fontFamily":{
        body:["Mulish"]
      },
      gridTemplateColumns: {
        "60-40": "2fr 1fr",
        "1-5": "1fr 5fr"
      },

    },
  },
  plugins: [],
}
