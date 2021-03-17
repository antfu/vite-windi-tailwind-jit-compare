const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    '../*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
