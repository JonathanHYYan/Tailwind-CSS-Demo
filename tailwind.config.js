/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "heroGreen": "#BDD542",
        "greyBG": "#EEEEEE",
        "darkBlueTheme": "#00385E",
        "greenTheme":"#BDD542"
      },
      "fontFamily":{
        body:["Mulish"]
      },
      gridTemplateColumns: {
        "60-40": "2fr 1fr",
      },
      keyframes: {
        "mild-bounce": {
          "0%, 100%": {transform:"translateY(-5%)"},
          "50%": {transform:"translateY(0%)"},
        }
      }
    },
  },
  plugins: [],
}
