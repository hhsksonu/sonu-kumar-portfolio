/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: '#00FF55',
        greenSecondary: '#00CC44',
        darkBg: '#000000',
        mutedGray: '#1a1a1a',
      },
      dropShadow: {
        neon: '0 0 8px #00FF55, 0 0 16px #00FF55',
      },
    },
  },
  plugins: [],
}
