/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: {
          darkcyan: "hsl(158deg 36% 37%)",
          darkcyanhover: "hsl(158deg 36% 27%)",
          cream: "hsl(30deg 38% 92%)",
          darkblue: "hsl(212deg 21% 14%)",
          grayishblue: "hsl(228deg 12% 48%)",
        },
      },
      letterSpacing: {
        ultra: "0.3em",
      },
    },
  },

  variants: {},

  plugins: [],
};
