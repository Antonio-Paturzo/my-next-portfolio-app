/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light colors
        "primary-light": "#42B8B8",
        "secondary-light": "#83C1C1",
        "ternary-light": "#3A4C73",
        "quaternary-light": "#802C1E",

        // Dark colors
        "primary-dark": "#ECDBBA",
        "secondary-dark": "#102D44",
        "ternary-dark": "#DADADA",

        // Extended v3 color
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms", "@tailwindcss/typography", "@tailwindcss/aspect-ratio"),
  ],
};
