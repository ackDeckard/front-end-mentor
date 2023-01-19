/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
        grad1: "hsla(0, 0%, 100%, 0.1)",
        grad2: "hsla(0, 100%, 98%, 0.1)",
        grad3: "hsl(0, 80%, 86%)",
        grad4: "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};

// - Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
// - Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)
