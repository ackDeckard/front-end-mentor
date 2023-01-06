/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangecustom: "hsl(25, 97%, 53%)",
        lightgrey: "hsl(217, 12%, 63%)",
        mediumgrey: "hsl(216, 12%, 24%)",
        darkblue: "hsl(213, 19%, 18%)",
        verydarkblue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass"],
      },
    },
  },
  plugins: [],
};
