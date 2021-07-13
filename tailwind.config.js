module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "extra-tight" : "1.125"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
