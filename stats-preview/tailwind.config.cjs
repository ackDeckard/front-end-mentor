/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainbackground: "hsl(233, 47%, 7%)",
        cardbackground: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        overlay: "hsla(277, 52%, 36%)",
        cardBG: "hsl(216, 50%, 16%)",
        mainparagraph: "hsla(0, 0%, 100%, 0.75)",
        statheadings: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexa: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
