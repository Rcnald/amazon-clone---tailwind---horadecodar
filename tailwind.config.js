/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'arial':'Arial',
      },
      colors:{
        'darkblue':{
          500: '#485769',
          600: '#37475A',
          700: '#232F3E',
          900: '#191E26',
          950: '#131A22',
        },
        'gold':{
          100: '#FEBD69',
          200: '#FAA63A',
        },
        'orange':{
          650: '#E47911',
        },
        'yellow':{
          350: '#F0C148',
        },
      },
      spacing:{
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px',
      },
    },
  },
  plugins: [],
}