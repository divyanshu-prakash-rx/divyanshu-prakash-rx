/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'below-850': {'max': '1150px'},
          'smartphone': {'max': '461px'},
        },
    },
  },
  plugins: [],
}
