/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkDesaturatedBlue: "hsl(238, 29%, 16%)",
        softRed: "hsl(14, 88%, 65%)",
        gradSoftViolet: "hsl(273, 75%, 66%)",
        gradSoftBlue: "hsl(240, 73%, 65%)",
        secondaryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        secondaryGrayishBlue: "hsl(240, 6%, 50%)",
        dividerGrayishBlue: "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/bg-pattern-desktop.svg')",
        mobile: "url('/pattern-background-mobile.svg')",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200%": "200%",
      16: "4rem",
    },
  },
  plugins: [],
};

// - Font size: 12px
