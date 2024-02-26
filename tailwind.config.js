module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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