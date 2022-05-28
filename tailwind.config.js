module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      container: {
        // default breakpoints but with 40px removed
        screens: {
          xl: '1200px',
          '2xl': '1200px',
        },
      },
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      fontFamily: {
        'macondo': ['Macondo'],
      },
      padding: {
        '18': '4.5rem',
      }
    },
    plugins: [],
  }

}