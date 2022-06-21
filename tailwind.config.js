/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Avenir Next Cyrl', 'sans-serif'],
      cursive: ['Delius Swash Caps', 'cursive'],
    },
    extend: {
      colors: {
        'primary-blue': '#023796',
        'secondary-blue': '#84A4FC',
        white: '#FEFFFE',
        black: '#02040F',
        green: '#23CE6B',
        orange: '#D84727',
      },
    },
  },
  plugins: [],
};
