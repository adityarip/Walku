/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#21AEA8",
      secondary: "#A4CEC5",
      red: "#EA4646",
      white: "#FFFFFF",
      black: "#000000",

      foodBG: "#F9B50F",
      cafeBG: "#741B1B",
      landmarkBG: "#7973ED",
      MuseumBG: "#37F3A4",
      ShopBG: "#FCBCB3",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
