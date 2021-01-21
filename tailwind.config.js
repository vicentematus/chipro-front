const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "chipro-red": "#CB2A27",
        "chipro-red-2": "#D38B76",
        "chipro-celeste": "#04A2D4",
        "chipro-verde": "#6EA598",
        "chipro-negro": "#3D3F3E",
      },
      fontFamily: {
        sans: ["Roboto", defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
