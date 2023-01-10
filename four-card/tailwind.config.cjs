/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redcustom: "hsl(0, 78%, 62%)",
        cyancustom: "hsl(180, 62%, 55%)",
        orangecustom: "hsl(34, 97%, 64%)",
        bluecustom: "hsl(212, 86%, 64%)",
        verydarkblue: "hsl(234, 12%, 34%)",
        grayishblue: "hsl(229, 6%, 66%)",
        verylightgray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
