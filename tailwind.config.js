/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,jsx,tsx}'],
  theme: {
    colors: {
      'green': '#009483',
      'yellow': {
        100: '#FFD558',
        900: '#FFC82C',
      },
      'green': {
        100: '#16BCA9',
        900: '#009483',
      },
    },
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

