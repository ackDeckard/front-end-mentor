/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        paleblue: "hsl(225, 100%, 94%)",
        brightblue: "hsl(245, 75%, 52%)",
        verypaleblue: "hsl(225, 100%, 98%)",
        hoverblue: "hsl(245, 83%, 68%, 1)",
        desaturatedblue: "hsl(224, 23%, 55%)",
        darkblue: "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/pattern-background-desktop.svg')",
        mobile: "url('/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
};
