/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        eubold: 'eubold',
        euextd: 'euextd',
        euobli: 'euobli',
        eunorm: 'eunorm',
      }
    },
  },
  plugins: [],
}