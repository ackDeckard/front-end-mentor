/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softblue: "hsl(215, 51%, 70%)",
        cyancustom: "hsl(178, 100%, 50%)",
        mainBG: "hsl(217, 54%, 11%)",
        cardBG: "hsl(216, 50%, 16%)",
        linedetail: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      width: {
        justaTadSmaller: "width: 99.55%",
      },
    },
  },
  plugins: [],
};
