/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleorange: "hsl(25, 100%, 94%)",
        verydarkblue: "hsl(220, 13%, 13%)",
        darkgrayishblue: "hsl(219, 9%, 45%)",
        grayishblue: "hsl(220, 14%, 75%)",
        lightgrayishblue: "hsl(223, 64%, 98%)",
        white: "#ffffff",
      },
      dropShadow: {
        "3xl": [
          "0 2.8px 2.2px rgba(0, 0, 0, 0.034)",
          "0 6.7px 5.3px rgba(0, 0, 0, 0.048)",
          "0 12.5px 10px rgba(0, 0, 0, 0.06)",
          "0 22.3px 17.9px rgba(0, 0, 0, 0.072)",
          "0 41.8px 33.4px rgba(0, 0, 0, 0.086)",
          "0 100px 80px rgba(0, 0, 0, 0.12)",
        ],
        "4xl": [
          "0 0px 0.2px rgba(225,135,57, 0.22)",
          "0 0px 0px rgba(255,135,57, 0.22)",
          "0 1px 1px rgba(255,135,57, 0.22)",
          "0 2px 1px rgba(255,135,57,  0.22)",
          "0 4px 1px rgba(255,135,57, 0.22)",
          "0 10px 10px rgba( 255,135,57,0.72)",
        ],
      },
    },
  },
  plugins: [],
};
