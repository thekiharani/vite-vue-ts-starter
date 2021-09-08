module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat',
        'sacramento': 'Sacramento'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
