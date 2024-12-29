/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['Jersey25', 'sans-serif'], // Define the font here
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

