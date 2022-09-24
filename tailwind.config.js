const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // 'class', 'media' or 'boolean'
  theme: {
    extend: {
      colors: {
        primary: '#022225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}