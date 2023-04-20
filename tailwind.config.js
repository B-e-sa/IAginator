/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'rgb(82, 82, 91)',
        'secondary': ''
      },
      height: {
        '120': '30rem'
      },
      animation: {
        keyframes: {
          spin: {
            '0%, 100%': { transform: 'rotate(180deg)' }
          }
        }
      }
    },
  },
  plugins: [],
}

