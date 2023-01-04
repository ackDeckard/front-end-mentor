/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "hsl(212, 45%, 89%)",
        grayish: "hsl(220, 15%, 55%)",
        darkblue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
