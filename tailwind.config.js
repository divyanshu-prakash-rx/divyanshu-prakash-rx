/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'below-850': {'max': '850px'},
        },
    },
  },
  plugins: [],
}
