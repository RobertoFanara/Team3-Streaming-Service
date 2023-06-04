/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        textPrimary: "#FFFFFF"
      },
      backgroundImage:{
        "loginBackground": 'url("https://c.wallhere.com/photos/3e/dc/2055x1080_px_drawing_fantasy_Art_sea_ship_Sinking_Ships-1030256.jpg!d")'
      }
    },
  },
  plugins: [],
}

