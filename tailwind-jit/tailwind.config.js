const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    '../*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  mode: 'jit',
}
