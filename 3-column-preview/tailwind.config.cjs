/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        paraWhite: "hsla(0, 0%, 100%, 0.75)",
        bg_h_btn: "hsl(0, 0%, 95%))",
      },
      fontFamily: {
        lexa: ["Lexend Deca", "sans-serif"],
        bigshoulders: ["Big Shoulders Display", "cursive"],
      },
    },
  },
  plugins: [],
};
