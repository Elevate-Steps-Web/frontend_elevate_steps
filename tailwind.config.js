/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Avenir Next', 'sans-serif'],
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
  plugins: [
    /* eslint-disable-next-line import/no-extraneous-dependencies */
    require('@tailwindcss/forms'),
  ],
};
