/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'white-pasit': 'rgba(255, 255, 255, 0.49)'
      },

      backgroundColor: {
        "blue-dark": "#04011C",
        "white-card": "rgba(255, 255, 255, 0.05)",
        "white-pasit": "rgba(255, 255, 255, 0.08)",
        "purple": "rgba(57, 26, 69, 0.5)",
        "blue-light": "#0D0D2D",
        "cyn-white": "rgba(30, 224, 225, 0.9)"

      },

      backgroundImage: {
        "banner": "url(https://a.imagem.app/oVO7a9.png)",
        "cyn-white": "rgba(30, 224, 225, 0.9)"
      },

      fontFamily: {
        "hobibi": "'Habibi', serif;",
        "block-han": "'Black Han Sans', sans-serif;",
        'questrial': "'Questrial', sans-serif;",
        "poppins": "'Poppins', sans-serif;"
      },

      borderColor: {
        'pink-light': "rgba(229, 10, 167, 1)",
        "purple-light": "rgba(255, 23, 189, 1)",
        "white-transparent": "rgba(255, 255, 255, 0.05)"

      },

      boxShadow: {
        "4xl": "0px 1px 120px #D011CC",
        "5xl": "0px 1px 150px #fff"
      },
      width: {
        '301': '890px',
        "200": "620px"
      },
      width: {
        'xmax': '1440px'
      },

      screens: {
        //480px // Extra small screen
        //768px // Small screen
        //992px // Medium screen
        //1200px // Large screen
        //1600px // Extra Large screen
        //1900px // Extra Large screen

        "xsmall": { 'max': '480px' },
        "small": { 'min': '481px', 'max': '768px' },
        "md": { 'min': '769px', 'max': '992px' },
        "lg": { 'min': '993px', 'max': '1200px' },
        "xl": { 'min': '1201px', 'max': '1900px' },
        "2xl": { 'min': '1901px' }
      }
    },
  },
  plugins: [],
}


