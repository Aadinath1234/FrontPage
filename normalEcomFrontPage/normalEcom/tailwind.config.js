/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {
        colors: {
            primary: "#f42c37",
            secondary: "#f42c37",
            brandYellow: "#fdc62e",
            brandGreen: "#2dcc6f",
            brandBlue: "#1376f4",
            brandWhite: "#eeeeee",
            orange:"#d9c0ad",
            yellow:'#c0a673',
        },

        container: {
              center : true,
              padding: {
                DEFAULT: "1rem",
                sm: "3rem",
              },


        },
    },
  },
  plugins: [
    daisyui,
  ],
}

